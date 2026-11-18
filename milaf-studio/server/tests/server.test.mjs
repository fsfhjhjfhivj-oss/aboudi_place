import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, writeFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { createStudioServer, validateRequest } from "../server.mjs";
const TOKEN = "TEST_APP_TOKEN_ONLY_12345678901234567890";
const png = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+j1E0AAAAASUVORK5CYII=",
  "base64",
);
async function fixture(t, opts = {}) {
  const dir = await mkdtemp(path.join(os.tmpdir(), "milaf-test-"));
  const root = path.join(dir, "site");
  await (await import("node:fs/promises")).mkdir(root);
  await writeFile(
    path.join(root, "index.html"),
    "<h1>Test fixture website</h1>",
  );
  await writeFile(path.join(root, ".env"), "PRIVATE_KEY=must-not-be-served");
  const provider = opts.provider || {
    configured: true,
    models: {
      assistant: "test-text",
      image: "test-image",
      video: "test-video",
    },
    generate: async (request) => ({
      text:
        request.kind === "assistant"
          ? "Deterministic test fixture; not a live Google response."
          : "",
      media:
        request.kind === "assistant"
          ? []
          : [{ mimeType: "image/png", bytes: png }],
    }),
  };
  const app = await createStudioServer({
    root,
    dataDir: path.join(dir, "data"),
    provider,
    accessToken: TOKEN,
    ...opts,
  });
  await new Promise((resolve) => app.server.listen(0, "127.0.0.1", resolve));
  const base = "http://127.0.0.1:" + app.server.address().port;
  t.after(async () => {
    await app.close();
    await rm(dir, { recursive: true, force: true });
  });
  return {
    ...app,
    base,
    call: (route, options = {}) =>
      fetch(base + route, {
        ...options,
        headers: {
          "X-Milaf-Token": TOKEN,
          "Content-Type": "application/json",
          ...options.headers,
        },
      }),
  };
}
async function waitJob(call, id) {
  for (let i = 0; i < 100; i++) {
    const job = await (await call("/api/jobs/" + id)).json();
    if (["completed", "failed"].includes(job.status)) return job;
    await new Promise((r) => setTimeout(r, 10));
  }
  throw Error("Test job did not finish");
}
test("validates explicit consent, duration, references, and history", () => {
  assert.throws(
    () => validateRequest({ kind: "image", prompt: "Test" }),
    /authorization/,
  );
  assert.throws(
    () =>
      validateRequest({
        kind: "video",
        prompt: "Test",
        consent: true,
        duration: 16,
      }),
    /3 to 15/,
  );
  assert.throws(
    () =>
      validateRequest({
        kind: "image",
        prompt: "Test",
        consent: true,
        reference: { mimeType: "image/png", data: "bm90IGFuIGltYWdl" },
      }),
    /content/,
  );
  assert.equal(
    validateRequest({ kind: "assistant", prompt: "Hello", consent: true })
      .prompt,
    "Hello",
  );
});
test("protects API routes, rejects hostile origins, and never serves .env", async (t) => {
  const { call, base } = await fixture(t);
  assert.equal((await fetch(base + "/api/config")).status, 401);
  assert.equal(
    (await call("/api/config", { headers: { Origin: "https://evil.example" } }))
      .status,
    403,
  );
  assert.equal((await fetch(base + "/.env")).status, 404);
  const config = await (await call("/api/config")).json();
  assert.equal(config.configured, true);
  const page = await fetch(base);
  assert.equal(page.status, 200);
  assert.match(
    page.headers.get("content-security-policy"),
    /connect-src 'self'/,
  );
  assert.equal((await fetch(base + "/api/health")).status, 200);
});
test("runs assistant jobs and returns only actual adapter output", async (t) => {
  const { call } = await fixture(t);
  const post = await call("/api/jobs", {
    method: "POST",
    body: JSON.stringify({ kind: "assistant", prompt: "Hello", consent: true }),
  });
  assert.equal(post.status, 202);
  const created = await post.json();
  const done = await waitJob(call, created.id);
  assert.equal(done.status, "completed");
  assert.match(done.text, /test fixture/);
  assert.equal(done.model, "test-text");
});
test("serves generated media only with authorization and deletes it", async (t) => {
  const { call, base } = await fixture(t);
  const job = await (
    await call("/api/jobs", {
      method: "POST",
      body: JSON.stringify({
        kind: "image",
        prompt: "Test image",
        consent: true,
      }),
    })
  ).json();
  const done = await waitJob(call, job.id);
  assert.equal(done.files.length, 1);
  assert.equal((await fetch(base + done.files[0].url)).status, 401);
  const media = await call(done.files[0].url);
  assert.equal(media.headers.get("content-type"), "image/png");
  assert.deepEqual(Buffer.from(await media.arrayBuffer()), png);
  assert.equal(
    (await call("/api/jobs/" + job.id, { method: "DELETE" })).status,
    200,
  );
  assert.equal((await call(done.files[0].url)).status, 404);
});
test("serializes admission so simultaneous requests cannot bypass the daily cap", async (t) => {
  const { call } = await fixture(t, { maxDailyJobs: 1 });
  const responses = await Promise.all(
    [1, 2].map((i) =>
      call("/api/jobs", {
        method: "POST",
        body: JSON.stringify({
          kind: "assistant",
          prompt: "Request " + i,
          consent: true,
        }),
      }),
    ),
  );
  assert.deepEqual(responses.map((r) => r.status).sort(), [202, 429]);
});
test("missing provider configuration fails honestly without paid calls", async (t) => {
  let calls = 0;
  const { call } = await fixture(t, {
    provider: {
      configured: false,
      models: {},
      generate: async () => {
        calls++;
      },
    },
  });
  const response = await call("/api/jobs", {
    method: "POST",
    body: JSON.stringify({ kind: "image", prompt: "Test", consent: true }),
  });
  assert.equal(response.status, 503);
  assert.equal(calls, 0);
});
