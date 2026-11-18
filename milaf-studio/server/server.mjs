import http from "node:http";
import {
  readFile,
  writeFile,
  mkdir,
  readdir,
  rm,
  rename,
  stat,
} from "node:fs/promises";
import { createReadStream } from "node:fs";
import { gzip } from "node:zlib";
import { promisify } from "node:util";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import {
  createHash,
  randomBytes,
  randomUUID,
  timingSafeEqual,
} from "node:crypto";
import { GoogleProvider, modelDefaults } from "./google.mjs";
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const compressHTML = promisify(gzip);
const ext = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/webp": "webp",
  "video/mp4": "mp4",
};
const uuid =
  /^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/;
export class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}
export function validateRequest(body) {
  if (!body || !["assistant", "image", "video"].includes(body.kind))
    throw new HttpError(400, "Choose assistant, image, or video.");
  if (body.consent !== true)
    throw new HttpError(
      400,
      "Explicit authorization is required before sending data to Google.",
    );
  if (
    typeof body.prompt !== "string" ||
    !body.prompt.trim() ||
    body.prompt.length > 24000
  )
    throw new HttpError(400, "Provide a prompt from 1 to 24,000 characters.");
  const result = {
    kind: body.kind,
    prompt: body.prompt.trim(),
    action: ["chat", "refine", "storyboard", "explain", "brainstorm"].includes(
      body.action,
    )
      ? body.action
      : "chat",
    ratio: body.ratio || "16:9",
    duration: body.duration ?? 6,
  };
  const preferenceOptions = {
    tone: ["warm", "professional", "direct", "playful"],
    detail: ["short", "balanced", "detailed"],
    level: ["beginner", "intermediate", "expert"],
    style: ["partner", "coach", "answer-first"],
    language: ["auto", "en", "es", "fr", "ar", "de", "pt", "ja"],
  };
  const defaults = {
    tone: "warm",
    detail: "balanced",
    level: "intermediate",
    style: "partner",
    language: "auto",
  };
  if (
    body.preferences !== undefined &&
    (!body.preferences ||
      typeof body.preferences !== "object" ||
      Array.isArray(body.preferences))
  )
    throw new HttpError(400, "Conversation preferences must be an object.");
  if (body.kind === "assistant") {
    result.preferences = {};
    for (const [key, options] of Object.entries(preferenceOptions)) {
      const value = body.preferences?.[key] ?? defaults[key];
      if (!options.includes(value))
        throw new HttpError(400, `Invalid conversation preference: ${key}.`);
      result.preferences[key] = value;
    }
    if (
      body.userContext !== undefined &&
      (typeof body.userContext !== "string" || body.userContext.length > 6000)
    )
      throw new HttpError(
        400,
        "Attached conversation context must be at most 6,000 characters.",
      );
    result.userContext = body.userContext || "";
  }
  if (
    body.requiresReference !== undefined &&
    typeof body.requiresReference !== "boolean"
  )
    throw new HttpError(400, "Reference requirement must be a boolean.");
  const ratios =
    body.kind === "video"
      ? ["16:9", "9:16"]
      : ["16:9", "9:16", "1:1", "4:5", "3:2", "2:3"];
  if (!ratios.includes(result.ratio))
    throw new HttpError(400, "Unsupported aspect ratio for this mode.");
  if (
    body.kind === "video" &&
    (!Number.isInteger(result.duration) ||
      result.duration < 3 ||
      result.duration > 15)
  )
    throw new HttpError(
      400,
      "Video duration must be a whole number from 3 to 15 seconds.",
    );
  if (body.history !== undefined) {
    if (!Array.isArray(body.history) || body.history.length > 12)
      throw new HttpError(400, "Conversation history is too long.");
    result.history = body.history.map((p) => {
      if (
        !p ||
        !["user", "assistant"].includes(p.role) ||
        typeof p.text !== "string" ||
        p.text.length > 4000
      )
        throw new HttpError(400, "Invalid conversation entry.");
      return { role: p.role, text: p.text };
    });
  }
  if (body.reference) {
    const r = body.reference;
    if (
      !["image/png", "image/jpeg", "image/webp"].includes(r.mimeType) ||
      typeof r.data !== "string" ||
      r.data.length > 1400000 ||
      !/^[a-zA-Z0-9+/]+={0,2}$/.test(r.data)
    )
      throw new HttpError(
        400,
        "Invalid reference image. Use the local image picker to resize it first.",
      );
    const bytes = Buffer.from(r.data, "base64");
    const valid =
      r.mimeType === "image/png"
        ? bytes
            .subarray(0, 8)
            .equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
        : r.mimeType === "image/jpeg"
          ? bytes[0] === 255 && bytes[1] === 216
          : bytes.toString("ascii", 0, 4) === "RIFF" &&
            bytes.toString("ascii", 8, 12) === "WEBP";
    if (!valid)
      throw new HttpError(
        400,
        "Reference file content does not match its image type.",
      );
    result.reference = { mimeType: r.mimeType, data: r.data };
  }
  if (body.kind !== "assistant" && body.requiresReference === true) {
    if (!result.reference)
      throw new HttpError(
        400,
        "This generation brief requires an actual reference image. Select one and explicitly opt in before submitting.",
      );
    result.requiresReference = true;
  }
  return result;
}
export async function createStudioServer({
  root = ROOT,
  dataDir = path.join(ROOT, "data"),
  provider,
  accessToken,
  publicOrigin = "",
  maxDailyJobs = 30,
  maxConcurrent = 2,
  maxQueued = 10,
  maxStorageBytes = 512 * 1024 * 1024,
  rateLimit = 20,
  retentionMs = 24 * 60 * 60 * 1000,
} = {}) {
  if (!accessToken || accessToken.length < 32)
    throw Error("A server access token of at least 32 characters is required.");
  for (const [name, value] of Object.entries({
    maxDailyJobs,
    maxConcurrent,
    maxStorageBytes,
    rateLimit,
    retentionMs,
  })) {
    if (!Number.isSafeInteger(value) || value < 1)
      throw Error(`${name} must be a positive integer.`);
  }
  if (!Number.isSafeInteger(maxQueued) || maxQueued < 0)
    throw Error("maxQueued must be a nonnegative integer.");
  if (publicOrigin) {
    const u = new URL(publicOrigin);
    if (u.origin !== publicOrigin || !["https:", "http:"].includes(u.protocol))
      throw Error("PUBLIC_ORIGIN must be an exact origin, without a path.");
  }
  const jobs = new Map();
  const queue = [];
  let active = 0;
  let processingCleanup = false;
  let usage = { date: new Date().toISOString().slice(0, 10), count: 0 };
  let writeLock = Promise.resolve();
  let mediaWriteLock = Promise.resolve();
  let accepting = true;
  const idempotency = new Map();
  const ipRates = new Map();
  await mkdir(dataDir, { recursive: true, mode: 0o700 });
  try {
    const old = JSON.parse(
      await readFile(path.join(dataDir, "usage.json"), "utf8"),
    );
    if (old.date === usage.date && Number.isInteger(old.count)) usage = old;
  } catch {}
  async function persist(job) {
    const copy = { ...job };
    const target = path.join(dataDir, job.id + ".json");
    await writeFile(target + ".tmp", JSON.stringify(copy), { mode: 0o600 });
    await rename(target + ".tmp", target);
  }
  for (const name of await readdir(dataDir)) {
    if (!uuid.test(name.replace(/\.json$/, "")) || !name.endsWith(".json"))
      continue;
    try {
      const job = JSON.parse(await readFile(path.join(dataDir, name), "utf8"));
      if (!uuid.test(job.id)) continue;
      if (["queued", "running"].includes(job.status)) {
        job.status = "failed";
        job.error =
          "Server restarted while the request was pending. Check Google usage before retrying; a request may already have incurred a charge.";
        await persist(job);
      }
      jobs.set(job.id, job);
      if (job.idempotencyKey) idempotency.set(job.idempotencyKey, job.id);
    } catch {}
  }
  function safeJob(job) {
    const {
      id,
      kind,
      action,
      prompt,
      status,
      createdAt,
      updatedAt,
      error,
      text,
      files,
      model,
      canceledBeforeProvider,
    } = job;
    return {
      id,
      kind,
      action,
      prompt,
      status,
      createdAt,
      updatedAt,
      error,
      text,
      model,
      canceledBeforeProvider,
      files: (files || []).map((f, i) => ({
        mimeType: f.mimeType,
        url: `/api/jobs/${id}/media/${i}`,
      })),
    };
  }
  async function diskUsage() {
    let total = 0;
    for (const item of await readdir(dataDir)) {
      try {
        total += (await stat(path.join(dataDir, item))).size;
      } catch {}
    }
    return total;
  }
  async function removeJob(job) {
    for (const file of job.files || [])
      await rm(path.join(dataDir, path.basename(file.name)), { force: true });
    await rm(path.join(dataDir, job.id + ".json"), { force: true });
    jobs.delete(job.id);
    if (job.idempotencyKey) idempotency.delete(job.idempotencyKey);
  }
  async function cleanup() {
    if (processingCleanup) return;
    processingCleanup = true;
    try {
      for (const job of jobs.values())
        if (
          !["queued", "running"].includes(job.status) &&
          Date.now() - Date.parse(job.updatedAt) > retentionMs
        )
          await removeJob(job);
    } finally {
      processingCleanup = false;
    }
  }
  await cleanup();
  const timer = setInterval(() => cleanup().catch(() => {}), 5 * 60 * 1000);
  timer.unref();
  async function run(job, request) {
    job.status = "running";
    job.updatedAt = new Date().toISOString();
    await persist(job);
    try {
      const result = await provider.generate(request);
      job.files = [];
      for (const [i, media] of (result.media || []).entries()) {
        if (!ext[media.mimeType] || media.bytes.length > 100 * 1024 * 1024)
          throw new HttpError(
            502,
            "Generated media type or size is unsupported.",
          );
        const name = job.id + "-" + i + "." + ext[media.mimeType];
        const storage = mediaWriteLock.then(async () => {
          if ((await diskUsage()) + media.bytes.length > maxStorageBytes)
            throw new HttpError(
              507,
              "Server media storage is full. This provider request may already have incurred charges; download/delete older results before submitting again.",
            );
          await writeFile(path.join(dataDir, name), media.bytes, {
            mode: 0o600,
          });
        });
        mediaWriteLock = storage.catch(() => {});
        await storage;
        job.files.push({ name, mimeType: media.mimeType });
      }
      job.text = result.text || "";
      job.status = "completed";
    } catch (err) {
      job.status = "failed";
      job.error = String(err.message || "Generation failed.").slice(0, 700);
      for (const file of job.files || [])
        await rm(path.join(dataDir, path.basename(file.name)), { force: true });
      job.files = [];
    }
    job.updatedAt = new Date().toISOString();
    await persist(job);
  }
  function pump() {
    while (active < maxConcurrent && queue.length) {
      const { job, request } = queue.shift();
      active++;
      run(job, request)
        .catch(async () => {
          job.status = "failed";
          job.error =
            "The server could not save this job. Check Google usage before retrying.";
          await persist(job).catch(() => {});
        })
        .finally(() => {
          active--;
          pump();
        });
    }
  }
  const headers = {
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "no-referrer",
    "X-Frame-Options": "DENY",
    "Cross-Origin-Resource-Policy": "same-origin",
    "Cache-Control": "no-store",
    "Content-Security-Policy":
      "default-src 'none'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; media-src 'self' blob:; connect-src 'self'; font-src 'self'; base-uri 'none'; frame-ancestors 'none'; form-action 'self'",
  };
  function json(res, status, data) {
    res.writeHead(status, {
      ...headers,
      "Content-Type": "application/json; charset=utf-8",
    });
    res.end(JSON.stringify(data));
  }
  function authenticate(req) {
    const supplied = Buffer.from(String(req.headers["x-milaf-token"] || ""));
    const expected = Buffer.from(accessToken);
    if (
      supplied.length !== expected.length ||
      !timingSafeEqual(supplied, expected)
    )
      throw new HttpError(
        401,
        "Connect using the app access token printed by your server. Never enter a Google API key here.",
      );
  }
  async function readBody(req) {
    if (
      !String(req.headers["content-type"] || "").startsWith("application/json")
    )
      throw new HttpError(415, "Send application/json.");
    const chunks = [];
    let size = 0;
    for await (const chunk of req) {
      size += chunk.length;
      if (size > 2 * 1024 * 1024)
        throw new HttpError(413, "Request exceeds 2 MB.");
      chunks.push(chunk);
    }
    try {
      return JSON.parse(Buffer.concat(chunks).toString("utf8"));
    } catch {
      throw new HttpError(400, "Invalid JSON request.");
    }
  }
  const server = http.createServer(async (req, res) => {
    res.setHeader("X-Request-ID", randomUUID());
    try {
      const port = server.address()?.port;
      const expectedHost = publicOrigin ? new URL(publicOrigin).host : null;
      const host = String(req.headers.host || "");
      if (
        expectedHost
          ? host !== expectedHost
          : ![
              "localhost:" + port,
              "127.0.0.1:" + port,
              "[::1]:" + port,
            ].includes(host)
      )
        throw new HttpError(403, "Unrecognized Host header.");
      const expectedOrigin = publicOrigin || "http://" + host;
      if (req.headers.origin && req.headers.origin !== expectedOrigin)
        throw new HttpError(403, "Cross-origin requests are not allowed.");
      const url = new URL(req.url, expectedOrigin);
      const route = url.pathname;
      if (route === "/api/health" && req.method === "GET")
        return json(res, 200, {
          service: "milaf-ai",
          configured: Boolean(provider.configured),
          version: 5,
          liveAccountVerified: false,
        });
      if (route.startsWith("/api/")) {
        authenticate(req);
        if (route === "/api/config" && req.method === "GET")
          return json(res, 200, {
            configured: Boolean(provider.configured),
            models: provider.models,
            limits: {
              maxDailyJobs,
              maxConcurrent,
              maxQueued,
              videoMinSeconds: 3,
              videoMaxSeconds: 15,
              idempotentSubmissions: true,
              queuedCancellation: true,
            },
            notice:
              "Configuration does not verify billing or account access. No provider request has been made.",
          });
        if (route === "/api/stats" && req.method === "GET") {
          const today = new Date().toISOString().slice(0, 10);
          return json(res, 200, {
            active,
            queued: queue.length,
            jobs: jobs.size,
            dailyUsed: today === usage.date ? usage.count : 0,
            dailyLimit: maxDailyJobs,
            storageBytes: await diskUsage(),
            storageLimitBytes: maxStorageBytes,
            retentionHours: retentionMs / 3600000,
            accepting,
          });
        }
        if (route === "/api/jobs" && req.method === "GET")
          return json(res, 200, {
            jobs: [...jobs.values()]
              .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
              .map(safeJob),
          });
        if (route === "/api/jobs" && req.method === "POST") {
          if (!accepting)
            throw new HttpError(
              503,
              "The server is shutting down. No new requests are being accepted.",
            );
          const ip = req.socket.remoteAddress || "local";
          const now = Date.now();
          let rate = ipRates.get(ip);
          if (!rate || now - rate.start > 60000) {
            rate = { start: now, count: 0 };
            ipRates.set(ip, rate);
          }
          if (++rate.count > rateLimit)
            throw new HttpError(
              429,
              "Too many requests. Wait one minute before trying again.",
            );
          const request = validateRequest(await readBody(req));
          const idempotencyKey = req.headers["idempotency-key"];
          if (
            idempotencyKey !== undefined &&
            (typeof idempotencyKey !== "string" ||
              !/^[a-zA-Z0-9_-]{16,128}$/.test(idempotencyKey))
          )
            throw new HttpError(
              400,
              "Invalid Idempotency-Key. Use a unique 16–128 character token per intended submission.",
            );
          const fingerprint = createHash("sha256")
            .update(JSON.stringify(request))
            .digest("hex");
          if (!provider.configured)
            throw new HttpError(
              503,
              "The server has no GOOGLE_API_KEY configured.",
            );
          // Serialize admission so concurrent requests cannot bypass daily or storage limits.
          const admission = writeLock.then(async () => {
            await cleanup();
            if (idempotencyKey && idempotency.has(idempotencyKey)) {
              const previous = jobs.get(idempotency.get(idempotencyKey));
              if (previous) {
                if (previous.fingerprint !== fingerprint)
                  throw new HttpError(
                    409,
                    "That submission key was already used for different content.",
                  );
                return previous;
              }
            }
            if (active >= maxConcurrent && queue.length >= maxQueued)
              throw new HttpError(429, "The local generation queue is full.");
            if (jobs.size >= 100)
              throw new HttpError(
                429,
                "This server has reached its 100-job history limit. Delete older jobs.",
              );
            if ((await diskUsage()) > maxStorageBytes - 1024 * 1024)
              throw new HttpError(
                507,
                "Media storage is full. Delete older jobs.",
              );
            const date = new Date().toISOString().slice(0, 10);
            if (date !== usage.date) usage = { date, count: 0 };
            if (usage.count >= maxDailyJobs)
              throw new HttpError(
                429,
                "Daily local request limit reached. This is not a billing guarantee; check Google usage.",
              );
            const job = {
              id: randomUUID(),
              kind: request.kind,
              action: request.action,
              prompt: request.prompt,
              model: provider.models[request.kind],
              status: "queued",
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
              text: "",
              files: [],
              ...(idempotencyKey ? { idempotencyKey, fingerprint } : {}),
            };
            await persist(job);
            usage.count++;
            await writeFile(
              path.join(dataDir, "usage.json"),
              JSON.stringify(usage),
              { mode: 0o600 },
            );
            jobs.set(job.id, job);
            if (idempotencyKey) idempotency.set(idempotencyKey, job.id);
            queue.push({ job, request });
            return job;
          });
          writeLock = admission.catch(() => {});
          const job = await admission;
          json(res, 202, safeJob(job));
          pump();
          return;
        }
        const cancelMatch = route.match(/^\/api\/jobs\/([a-f0-9-]+)\/cancel$/);
        if (cancelMatch && uuid.test(cancelMatch[1]) && req.method === "POST") {
          const job = jobs.get(cancelMatch[1]);
          if (!job) throw new HttpError(404, "Job not found or expired.");
          const index = queue.findIndex((item) => item.job.id === job.id);
          if (job.status !== "queued" || index < 0)
            throw new HttpError(
              409,
              "Only a job still waiting in this server's queue can be canceled. An upstream request may already be running.",
            );
          queue.splice(index, 1);
          job.status = "canceled";
          job.canceledBeforeProvider = true;
          job.updatedAt = new Date().toISOString();
          job.error =
            "Canceled locally before this job was sent to Google. The local daily admission counter still includes it.";
          await persist(job);
          return json(res, 200, safeJob(job));
        }
        const match = route.match(
          /^\/api\/jobs\/([a-f0-9-]+)(?:\/media\/(\d+))?$/,
        );
        if (match && uuid.test(match[1])) {
          const job = jobs.get(match[1]);
          if (!job) throw new HttpError(404, "Job not found or expired.");
          if (match[2] === undefined && req.method === "GET")
            return json(res, 200, safeJob(job));
          if (match[2] === undefined && req.method === "DELETE") {
            if (["running", "queued"].includes(job.status))
              throw new HttpError(
                409,
                "A submitted job cannot safely be canceled here. Wait for completion; upstream costs may already apply.",
              );
            await removeJob(job);
            return json(res, 200, { deleted: true });
          }
          if (match[2] !== undefined && req.method === "GET") {
            const file = job.files?.[Number(match[2])];
            if (!file || job.status !== "completed")
              throw new HttpError(404, "Generated media is not available.");
            const filename = path.join(dataDir, path.basename(file.name));
            const info = await stat(filename);
            res.writeHead(200, {
              ...headers,
              "Content-Type": file.mimeType,
              "Content-Length": info.size,
              "Content-Disposition": `inline; filename="milaf-${job.kind}.${ext[file.mimeType]}"`,
            });
            createReadStream(filename)
              .on("error", () => res.destroy())
              .pipe(res);
            return;
          }
        }
        throw new HttpError(404, "Unknown API route.");
      }
      // Explicit static allowlist: .env, sources, and private generated data are never served.
      if (
        ["GET", "HEAD"].includes(req.method) &&
        ["/", "/index.html"].includes(route)
      ) {
        const nonce = randomBytes(18).toString("base64");
        const source = await readFile(path.join(root, "index.html"), "utf8");
        let body = Buffer.from(
          source.replace(/<script\b/g, `<script nonce="${nonce}"`),
        );
        const acceptsGzip = String(req.headers["accept-encoding"] || "")
          .split(",")
          .some((part) => {
            const [name, ...params] = part.trim().split(";");
            return (
              name === "gzip" &&
              !params.some((p) => /^q=0(?:\.0*)?$/.test(p.trim()))
            );
          });
        const compressed = acceptsGzip && body.length > 1024;
        if (compressed) body = await compressHTML(body);
        res.writeHead(200, {
          ...headers,
          "Content-Security-Policy": headers["Content-Security-Policy"].replace(
            "script-src 'self' 'unsafe-inline'",
            `script-src 'nonce-${nonce}'`,
          ),
          "Content-Type": "text/html; charset=utf-8",
          "Content-Length": body.length,
          ...(compressed ? { "Content-Encoding": "gzip" } : {}),
          Vary: "Accept-Encoding",
        });
        res.end(req.method === "HEAD" ? undefined : body);
        return;
      }
      throw new HttpError(404, "Not found.");
    } catch (err) {
      if (!res.headersSent)
        json(res, err.status || 500, {
          error: err.status
            ? err.message
            : "Unexpected server error. Check the local server, without exposing credentials.",
          requestId: res.getHeader("X-Request-ID"),
        });
      else res.destroy();
    }
  });
  server.requestTimeout = 30000;
  server.headersTimeout = 10000;
  server.on("close", () => clearInterval(timer));
  return {
    server,
    jobs,
    close: () => new Promise((resolve) => server.close(resolve)),
    shutdown: async ({ graceMs = 30000 } = {}) => {
      accepting = false;
      for (const { job } of queue.splice(0)) {
        job.status = "canceled";
        job.canceledBeforeProvider = true;
        job.error =
          "Server shutdown canceled this job before a provider request was sent.";
        job.updatedAt = new Date().toISOString();
        await persist(job);
      }
      const closed = new Promise((resolve) => server.close(resolve));
      const deadline = Date.now() + graceMs;
      while (active && Date.now() < deadline)
        await new Promise((resolve) => setTimeout(resolve, 50));
      server.closeAllConnections?.();
      await closed;
      return { unfinished: active };
    },
  };
}
async function loadEnv() {
  try {
    for (const line of (await readFile(path.join(ROOT, ".env"), "utf8")).split(
      /\r?\n/,
    )) {
      const m = line.match(/^([A-Z_][A-Z0-9_]*)\s*=\s*(.*)$/);
      if (!m || process.env[m[1]] !== undefined) continue;
      let value = m[2].trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      )
        value = value.slice(1, -1);
      process.env[m[1]] = value;
    }
  } catch (err) {
    if (err.code !== "ENOENT") throw err;
  }
}
async function main() {
  await loadEnv();
  const env = process.env;
  const host = env.HOST || "127.0.0.1";
  const token = env.MILAF_ACCESS_TOKEN || randomBytes(24).toString("hex");
  if (
    !["127.0.0.1", "localhost", "::1"].includes(host) &&
    (!env.MILAF_ACCESS_TOKEN || !env.PUBLIC_ORIGIN?.startsWith("https://"))
  )
    throw Error(
      "Non-loopback hosting requires MILAF_ACCESS_TOKEN and an HTTPS PUBLIC_ORIGIN. Add proper user authentication before multi-user use.",
    );
  const provider = new GoogleProvider({
    apiKey: env.GOOGLE_API_KEY,
    models: modelDefaults(env),
  });
  const app = await createStudioServer({
    provider,
    accessToken: token,
    publicOrigin: env.PUBLIC_ORIGIN || "",
    maxDailyJobs: Number(env.MAX_DAILY_JOBS) || 30,
    dataDir: env.DATA_DIR
      ? path.resolve(env.DATA_DIR)
      : path.join(ROOT, "data"),
  });
  const port = Number(env.PORT) || 8787;
  app.server.listen(port, host, () => {
    console.log(`Milaf AI: http://${host}:${port}`);
    console.log("APP ACCESS TOKEN (not your Google API key): " + token);
    console.log(
      provider.configured
        ? "Google key configured; account access and billing are not yet verified."
        : "Set GOOGLE_API_KEY in .env, then restart, to enable real AI calls.",
    );
    console.log(
      "Single-owner local server. Paid calls occur only after explicit submission.",
    );
  });
  let stopping = false;
  for (const signal of ["SIGTERM", "SIGINT"])
    process.on(signal, async () => {
      if (stopping) return;
      stopping = true;
      const result = await app.shutdown();
      if (result.unfinished)
        console.warn(
          "A provider request may still be running upstream. Check Google usage before resubmitting.",
        );
      process.exit(0);
    });
}
if (
  process.argv[1] &&
  pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url
)
  main().catch((err) => {
    console.error(err.message);
    process.exitCode = 1;
  });
