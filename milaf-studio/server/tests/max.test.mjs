import test from "node:test";
import assert from "node:assert/strict";
import {
  mkdtemp,
  mkdir,
  writeFile,
  readFile,
  readdir,
  rm,
} from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { createStudioServer } from "../server.mjs";
import { GoogleProvider, boundedJSON } from "../google.mjs";

const TOKEN = "TEST_MAX_APP_ACCESS_TOKEN_1234567890123456789";
const png = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+j1E0AAAAASUVORK5CYII=",
  "base64",
);
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
function gate() {
  let release;
  const promise = new Promise((resolve) => (release = resolve));
  return { promise, release };
}
async function fixture(t, options = {}) {
  const dir = await mkdtemp(path.join(os.tmpdir(), "milaf-max-test-"));
  const root = path.join(dir, "site");
  const dataDir = path.join(dir, "private");
  await mkdir(root);
  await mkdir(dataDir);
  await writeFile(
    path.join(root, "index.html"),
    "<h1>QA fixture</h1><script>window.qa=true;</script>",
  );
  if (options.seed) await options.seed(dataDir);
  const provider = options.provider || {
    configured: true,
    models: {
      assistant: "TEST_TEXT",
      image: "TEST_IMAGE",
      video: "TEST_VIDEO",
    },
    generate: async () => ({ text: "TEST FIXTURE ONLY", media: [] }),
  };
  const app = await createStudioServer({
    root,
    dataDir,
    provider,
    accessToken: TOKEN,
    ...options,
  });
  await new Promise((resolve) => app.server.listen(0, "127.0.0.1", resolve));
  const base = "http://127.0.0.1:" + app.server.address().port;
  const call = (route, settings = {}) =>
    fetch(base + route, {
      ...settings,
      headers: {
        "X-Milaf-Token": TOKEN,
        "Content-Type": "application/json",
        ...settings.headers,
      },
    });
  const post = (
    body = { kind: "assistant", prompt: "Test request", consent: true },
    key,
  ) =>
    call("/api/jobs", {
      method: "POST",
      headers: key ? { "Idempotency-Key": key } : {},
      body: JSON.stringify(body),
    });
  t.after(async () => {
    await app.close();
    await rm(dir, { recursive: true, force: true });
  });
  return { ...app, dir, root, dataDir, base, call, post, provider };
}
async function completed(app, id) {
  for (let i = 0; i < 150; i++) {
    const job = await (await app.call("/api/jobs/" + id)).json();
    if (["completed", "failed", "canceled"].includes(job.status)) return job;
    await delay(10);
  }
  throw Error("Fixture job did not finish");
}

test("MAX rejects unsafe limit configuration before opening a server", async () => {
  await assert.rejects(
    () => createStudioServer({ accessToken: TOKEN, maxConcurrent: 0 }),
    /positive integer/,
  );
  await assert.rejects(
    () => createStudioServer({ accessToken: TOKEN, maxQueued: -1 }),
    /nonnegative/,
  );
  await assert.rejects(
    () => createStudioServer({ accessToken: "short" }),
    /32 characters/,
  );
});
test("idempotent replay returns one job and consumes one daily admission", async (t) => {
  let calls = 0;
  const app = await fixture(t, {
    provider: {
      configured: true,
      models: { assistant: "TEST" },
      generate: async () => {
        calls++;
        return { text: "TEST FIXTURE", media: [] };
      },
    },
  });
  const key = randomUUID();
  const first = await (await app.post(undefined, key)).json();
  await completed(app, first.id);
  const second = await (await app.post(undefined, key)).json();
  assert.equal(second.id, first.id);
  assert.equal(calls, 1);
  const stats = await (await app.call("/api/stats")).json();
  assert.equal(stats.dailyUsed, 1);
});
test("four simultaneous submissions with one key cannot create duplicate paid jobs", async (t) => {
  let calls = 0;
  const app = await fixture(t, {
    maxDailyJobs: 1,
    provider: {
      configured: true,
      models: { assistant: "TEST" },
      generate: async () => {
        calls++;
        await delay(10);
        return { text: "TEST FIXTURE", media: [] };
      },
    },
  });
  const key = randomUUID();
  const results = await Promise.all(
    [1, 2, 3, 4].map(() => app.post(undefined, key).then((r) => r.json())),
  );
  assert.equal(new Set(results.map((x) => x.id)).size, 1);
  await completed(app, results[0].id);
  assert.equal(calls, 1);
});
test("reusing a submission key with different content is a conflict", async (t) => {
  const app = await fixture(t);
  const key = randomUUID();
  const first = await (await app.post(undefined, key)).json();
  await completed(app, first.id);
  const conflict = await app.post(
    { kind: "assistant", prompt: "Different content", consent: true },
    key,
  );
  assert.equal(conflict.status, 409);
});
test("invalid idempotency keys are rejected without admitting a job", async (t) => {
  const app = await fixture(t);
  assert.equal((await app.post(undefined, "bad key")).status, 400);
  assert.equal(app.jobs.size, 0);
});
test("submission-key protection survives server restart for retained jobs", async (t) => {
  const app = await fixture(t);
  const key = randomUUID();
  const original = await (await app.post(undefined, key)).json();
  await completed(app, original.id);
  await app.close();
  let calls = 0;
  const next = await createStudioServer({
    root: app.root,
    dataDir: app.dataDir,
    accessToken: TOKEN,
    provider: {
      configured: true,
      models: { assistant: "TEST" },
      generate: async () => {
        calls++;
        return { text: "SHOULD NOT RUN", media: [] };
      },
    },
  });
  await new Promise((resolve) => next.server.listen(0, "127.0.0.1", resolve));
  try {
    const response = await fetch(
      "http://127.0.0.1:" + next.server.address().port + "/api/jobs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Milaf-Token": TOKEN,
          "Idempotency-Key": key,
        },
        body: JSON.stringify({
          kind: "assistant",
          prompt: "Test request",
          consent: true,
        }),
      },
    );
    assert.equal((await response.json()).id, original.id);
    assert.equal(calls, 0);
  } finally {
    await next.close();
  }
});
test("queued cancellation never invokes the provider for the canceled job", async (t) => {
  const wait = gate();
  let calls = 0;
  const app = await fixture(t, {
    maxConcurrent: 1,
    provider: {
      configured: true,
      models: { assistant: "TEST" },
      generate: async () => {
        calls++;
        await wait.promise;
        return { text: "TEST FIXTURE", media: [] };
      },
    },
  });
  try {
    const first = await (await app.post()).json();
    const second = await (
      await app.post({
        kind: "assistant",
        prompt: "Waiting job",
        consent: true,
      })
    ).json();
    assert.equal(second.status, "queued");
    const response = await app.call("/api/jobs/" + second.id + "/cancel", {
      method: "POST",
    });
    const canceled = await response.json();
    assert.equal(canceled.status, "canceled");
    assert.equal(canceled.canceledBeforeProvider, true);
    wait.release();
    await completed(app, first.id);
    assert.equal(calls, 1);
    assert.equal(
      (await app.call("/api/jobs/" + second.id, { method: "DELETE" })).status,
      200,
    );
  } finally {
    wait.release();
  }
});
test("a running upstream request cannot be falsely labeled canceled", async (t) => {
  const wait = gate();
  const app = await fixture(t, {
    provider: {
      configured: true,
      models: { assistant: "TEST" },
      generate: async () => {
        await wait.promise;
        return { text: "TEST FIXTURE", media: [] };
      },
    },
  });
  try {
    const first = await (await app.post()).json();
    assert.equal(
      (await app.call("/api/jobs/" + first.id + "/cancel", { method: "POST" }))
        .status,
      409,
    );
    wait.release();
    await completed(app, first.id);
  } finally {
    wait.release();
  }
});
test("unknown cancellation IDs return a private not-found response", async (t) => {
  const app = await fixture(t);
  assert.equal(
    (
      await app.call("/api/jobs/" + randomUUID() + "/cancel", {
        method: "POST",
      })
    ).status,
    404,
  );
});
test("actual queue statistics are protected and contain no pricing fiction", async (t) => {
  const wait = gate();
  const app = await fixture(t, {
    maxConcurrent: 1,
    provider: {
      configured: true,
      models: { assistant: "TEST" },
      generate: async () => {
        await wait.promise;
        return { text: "TEST FIXTURE", media: [] };
      },
    },
  });
  try {
    const one = await (await app.post()).json();
    const two = await (
      await app.post({ kind: "assistant", prompt: "Second", consent: true })
    ).json();
    assert.equal((await fetch(app.base + "/api/stats")).status, 401);
    const stats = await (await app.call("/api/stats")).json();
    assert.equal(stats.active, 1);
    assert.equal(stats.queued, 1);
    assert.equal(stats.dailyUsed, 2);
    assert.equal(stats.dailyLimit, 30);
    assert.ok(stats.storageBytes > 0);
    assert.equal(stats.cost, undefined);
    await app.call("/api/jobs/" + two.id + "/cancel", { method: "POST" });
    const after = await (await app.call("/api/stats")).json();
    assert.equal(after.dailyUsed, 2);
    wait.release();
    await completed(app, one.id);
  } finally {
    wait.release();
  }
});
test("static script policy uses a fresh nonce instead of unsafe inline execution", async (t) => {
  const app = await fixture(t);
  const a = await fetch(app.base);
  const policy = a.headers.get("content-security-policy");
  const body = await a.text();
  const nonce = policy.match(/script-src 'nonce-([^']+)'/)[1];
  assert.ok(body.includes('nonce="' + nonce + '"'));
  assert.ok(!policy.includes("script-src 'self' 'unsafe-inline'"));
  const b = await fetch(app.base);
  assert.notEqual(b.headers.get("content-security-policy"), policy);
});
test("error responses carry a correlation ID without server secrets", async (t) => {
  const app = await fixture(t);
  const response = await fetch(app.base + "/api/config");
  const body = await response.json();
  assert.equal(body.requestId, response.headers.get("x-request-id"));
  assert.ok(body.requestId);
  assert.ok(!JSON.stringify(body).includes(TOKEN));
});
test("private data and arbitrary source paths are never static routes", async (t) => {
  const app = await fixture(t);
  for (const route of [
    "/data/usage.json",
    "/server/server.mjs",
    "/src/app.js",
    "/.env",
    "/.env.example",
  ])
    assert.equal((await fetch(app.base + route)).status, 404);
});
test("partial media files are removed after a generation-save failure", async (t) => {
  const app = await fixture(t, {
    provider: {
      configured: true,
      models: { image: "TEST" },
      generate: async () => ({
        text: "",
        media: [
          { mimeType: "image/png", bytes: png },
          { mimeType: "text/html", bytes: Buffer.from("unsupported") },
        ],
      }),
    },
  });
  const job = await (
    await app.post({ kind: "image", prompt: "Fixture media", consent: true })
  ).json();
  const done = await completed(app, job.id);
  assert.equal(done.status, "failed");
  assert.equal(done.files.length, 0);
  assert.ok(
    !(await readdir(app.dataDir)).some((name) => name.startsWith(job.id + "-")),
  );
});
test("concurrent media writes cannot race past the storage guardrail", async (t) => {
  const wait = gate();
  const media = Buffer.concat([png, Buffer.alloc(900000 - png.length)]);
  const app = await fixture(t, {
    maxStorageBytes: 1500000,
    provider: {
      configured: true,
      models: { image: "TEST" },
      generate: async () => {
        await wait.promise;
        return { text: "", media: [{ mimeType: "image/png", bytes: media }] };
      },
    },
  });
  try {
    const a = await (
      await app.post({ kind: "image", prompt: "A", consent: true })
    ).json();
    const b = await (
      await app.post({ kind: "image", prompt: "B", consent: true })
    ).json();
    wait.release();
    const done = await Promise.all([
      completed(app, a.id),
      completed(app, b.id),
    ]);
    assert.deepEqual(done.map((j) => j.status).sort(), ["completed", "failed"]);
    const stats = await (await app.call("/api/stats")).json();
    assert.ok(stats.storageBytes < 1500000);
  } finally {
    wait.release();
  }
});
test("interrupted persisted jobs fail visibly after restart and are not resubmitted", async (t) => {
  const id = randomUUID();
  let calls = 0;
  const app = await fixture(t, {
    seed: (dir) =>
      writeFile(
        path.join(dir, id + ".json"),
        JSON.stringify({
          id,
          kind: "assistant",
          prompt: "Interrupted",
          model: "TEST",
          status: "running",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          files: [],
        }),
      ),
    provider: {
      configured: true,
      models: { assistant: "TEST" },
      generate: async () => {
        calls++;
        return { text: "SHOULD NOT RUN", media: [] };
      },
    },
  });
  const job = await (await app.call("/api/jobs/" + id)).json();
  assert.equal(job.status, "failed");
  assert.match(job.error, /Server restarted/);
  assert.equal(calls, 0);
});
test("graceful shutdown cancels waiting work but lets an active job finish", async (t) => {
  const wait = gate();
  let calls = 0;
  const app = await fixture(t, {
    maxConcurrent: 1,
    provider: {
      configured: true,
      models: { assistant: "TEST" },
      generate: async () => {
        calls++;
        await wait.promise;
        return { text: "TEST FIXTURE", media: [] };
      },
    },
  });
  try {
    const one = await (await app.post()).json();
    const two = await (
      await app.post({ kind: "assistant", prompt: "Waiting", consent: true })
    ).json();
    setTimeout(wait.release, 40);
    const result = await app.shutdown({ graceMs: 1000 });
    assert.equal(result.unfinished, 0);
    assert.equal(app.jobs.get(one.id).status, "completed");
    assert.equal(app.jobs.get(two.id).status, "canceled");
    assert.equal(calls, 1);
  } finally {
    wait.release();
  }
});
test("bounded provider JSON rejects oversized streamed bodies without trusting Content-Length", async () => {
  const response = new Response(
    new ReadableStream({
      start(controller) {
        controller.enqueue(
          new TextEncoder().encode('{"large":"' + "x".repeat(200) + '"}'),
        );
        controller.close();
      },
    }),
  );
  await assert.rejects(() => boundedJSON(response, 40), /size limit/);
});
test("malformed provider JSON has an actionable error rather than a fake result", async () => {
  await assert.rejects(
    () => boundedJSON(new Response("not json")),
    /unreadable JSON/,
  );
});
test("an empty completed provider response cannot masquerade as an image", async () => {
  const provider = new GoogleProvider({
    apiKey: "TEST_ONLY_KEY",
    fetchImpl: async () =>
      new Response(JSON.stringify({ status: "completed", steps: [] })),
  });
  await assert.rejects(
    () => provider.generate({ kind: "image", prompt: "Test", ratio: "16:9" }),
    /no media/,
  );
});
test("non-completed provider responses are surfaced before media handling", async () => {
  const provider = new GoogleProvider({
    apiKey: "TEST_ONLY_KEY",
    fetchImpl: async () =>
      new Response(JSON.stringify({ status: "failed", steps: [] })),
  });
  await assert.rejects(
    () =>
      provider.generate({
        kind: "video",
        prompt: "Test",
        ratio: "16:9",
        duration: 6,
      }),
    /completed interaction/,
  );
});
test("large static pages negotiate gzip without corrupting Unicode or HEAD responses", async (t) => {
  const app = await fixture(t);
  const html = "<h1>" + "創".repeat(700) + "</h1>";
  await writeFile(path.join(app.root, "index.html"), html);
  const encoded = await fetch(app.base, {
    headers: { "Accept-Encoding": "gzip" },
  });
  assert.equal(encoded.headers.get("content-encoding"), "gzip");
  assert.equal(await encoded.text(), html);
  const identity = await fetch(app.base, {
    headers: { "Accept-Encoding": "gzip;q=0, identity" },
  });
  assert.equal(identity.headers.get("content-encoding"), null);
  assert.equal(await identity.text(), html);
  const head = await fetch(app.base, {
    method: "HEAD",
    headers: { "Accept-Encoding": "gzip" },
  });
  assert.equal(head.headers.get("content-encoding"), "gzip");
  assert.equal(await head.text(), "");
});
