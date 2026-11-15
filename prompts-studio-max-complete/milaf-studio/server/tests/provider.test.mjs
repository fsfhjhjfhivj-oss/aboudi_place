import test from "node:test";
import assert from "node:assert/strict";
import {
  GoogleProvider,
  buildInteraction,
  modelDefaults,
  modelOutputs,
} from "../google.mjs";
test("constructs stateless Google requests with server-side model selection", () => {
  const models = modelDefaults({});
  const image = buildInteraction(
    { kind: "image", prompt: "A stone sculpture", ratio: "4:5" },
    models,
  );
  assert.equal(image.model, "gemini-nano-banana-2.1");
  assert.equal(image.store, false);
  assert.deepEqual(image.response_format, {
    type: "image",
    delivery: "uri",
    aspect_ratio: "4:5",
    image_size: "1K",
  });
  const video = buildInteraction(
    { kind: "video", prompt: "Clouds move", ratio: "9:16", duration: 6 },
    models,
  );
  assert.equal(video.response_format.duration, "6s");
  assert.equal(video.model, "gemini-omni-1.2-flash");
  assert.equal(video.response_format.delivery, "uri");
});
test("assistant history is bounded by the server and sent as quoted context", () => {
  const body = buildInteraction(
    {
      kind: "assistant",
      action: "storyboard",
      prompt: "Three shots",
      history: [{ role: "user", text: "An explorer" }],
    },
    modelDefaults({}),
  );
  assert.match(body.system_instruction, /valid JSON only/);
  assert.match(body.input[0].text, /Conversation context/);
  assert.equal(body.store, false);
});
test("extracts model output without exposing thought summaries", () => {
  const parts = modelOutputs({
    steps: [
      { type: "thought", content: [{ type: "text", text: "private thought" }] },
      {
        type: "model_output",
        content: [
          { type: "text", text: "Useful answer" },
          { type: "image", data: "abc", mime_type: "image/png" },
        ],
      },
    ],
  });
  assert.equal(parts.length, 2);
  assert.equal(parts[0].text, "Useful answer");
  assert.ok(!JSON.stringify(parts).includes("private thought"));
});
test("adapter uses the Google key only in a server-side request header", async () => {
  let request;
  const provider = new GoogleProvider({
    apiKey: "TEST_ONLY_PROVIDER_SECRET",
    fetchImpl: async (url, options) => {
      request = { url, options };
      return new Response(
        JSON.stringify({
          status: "completed",
          steps: [
            {
              type: "model_output",
              content: [{ type: "text", text: "Test fixture response" }],
            },
          ],
        }),
        { headers: { "Content-Type": "application/json" } },
      );
    },
  });
  const result = await provider.generate({
    kind: "assistant",
    prompt: "Test",
    action: "chat",
  });
  assert.equal(result.text, "Test fixture response");
  assert.equal(
    request.options.headers["x-goog-api-key"],
    "TEST_ONLY_PROVIDER_SECRET",
  );
  assert.equal(request.options.headers["Api-Revision"], "2026-05-20");
  assert.ok(!request.url.includes("TEST_ONLY_PROVIDER_SECRET"));
  assert.equal(JSON.parse(request.options.body).store, false);
});
test("redacts credentials in provider errors and never automatically retries a generation", async () => {
  let calls = 0;
  const key = "TEST_ONLY_PROVIDER_SECRET";
  const provider = new GoogleProvider({
    apiKey: key,
    fetchImpl: async () => {
      calls++;
      return new Response(
        JSON.stringify({ error: { message: "Bad key " + key } }),
        { status: 403 },
      );
    },
  });
  await assert.rejects(
    () => provider.generate({ kind: "image", prompt: "Test", ratio: "16:9" }),
    (err) => !err.message.includes(key) && err.message.includes("[redacted]"),
  );
  assert.equal(calls, 1);
});
test("blocks provider-returned download destinations outside the Google Files endpoint", async () => {
  const provider = new GoogleProvider({
    apiKey: "test",
    fetchImpl: () => {
      throw Error("Must not fetch");
    },
  });
  await assert.rejects(
    () => provider.fileBytes("https://evil.example/v1beta/files/test"),
    /unexpected media host/,
  );
  await assert.rejects(
    () => provider.fileBytes("http://127.0.0.1/private"),
    /unsupported media location/,
  );
});
test("polls media readiness and strips the provider key on an allowed CDN redirect", async () => {
  const seen = [];
  const provider = new GoogleProvider({
    apiKey: "PRIVATE_TEST_KEY",
    pollDelay: 0,
    fetchImpl: async (url, options) => {
      seen.push({ url, headers: options.headers });
      if (url.endsWith("/files/abc"))
        return new Response(JSON.stringify({ state: "ACTIVE" }));
      if (url.includes(":download"))
        return new Response(null, {
          status: 302,
          headers: { location: "https://media.googleusercontent.com/test" },
        });
      return new Response(Buffer.from("fixture bytes"));
    },
  });
  const data = await provider.fileBytes(
    "https://generativelanguage.googleapis.com/v1beta/files/abc",
  );
  assert.equal(data.toString(), "fixture bytes");
  assert.equal(seen[2].headers["x-goog-api-key"], undefined);
});
