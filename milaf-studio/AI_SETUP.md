# Google AI setup and integration notes

## Secrets: two different values

| Value | Where it belongs | What it does |
| --- | --- | --- |
| Google API key | `GOOGLE_API_KEY` in your server environment or private `.env` | Authorizes billable provider requests |
| App access token | The website's backend-connection dialog | Authorizes this browser to use your local server |

Never enter a Google API key in the app-token dialog, send one in a chat, commit it to Git, or embed it in HTML. The dialog rejects the common Google key prefix as an extra precaution; server-side separation is the actual protection.

If `MILAF_ACCESS_TOKEN` is empty, the server prints a random app token at startup. To keep the same app token across restarts, set a strong random value of at least 32 characters on the server. Anyone who has this token and network access to the server can use its AI account. Treat it as a secret.

## Local setup

From the extracted website directory:

```sh
# macOS/Linux
cp .env.example .env

# Edit .env privately, add GOOGLE_API_KEY, then:
npm start
```

PowerShell copy equivalent:

```powershell
Copy-Item .env.example .env
npm start
```

Open the printed local URL, open AI Studio, and enter the printed APP ACCESS TOKEN. The browser only talks to its own server origin, so opening the HTML as a file or on an unrelated static host cannot connect to this backend.

## Models and endpoint protocol

The adapter uses `POST /v1beta/interactions`, model-output steps, URI media delivery, Files readiness polling, and server-side media download. Requests include `store: false` and API revision `2026-05-20`. The server, not the browser, selects model IDs.

| Environment variable | Default |
| --- | --- |
| `GOOGLE_TEXT_MODEL` | `gemini-3.8-flash` |
| `GOOGLE_IMAGE_MODEL` | `gemini-nano-banana-2.1` |
| `GOOGLE_VIDEO_MODEL` | `gemini-omni-1.2-flash` |

The Google image documentation marks Imagen retired. The video documentation says the old Veo 3.1 previews were shut down on October 22, 2026 and directs Gemini API video users to Omni. Therefore this package supplies a current Interactions-based adapter rather than an obsolete Veo request. A Vertex AI Veo integration is a different authentication/endpoint path and is not implemented here.

Your account, region, billing, and model access still determine whether requests succeed. A configuration check is not a model-access check. Update the adapter, tests, and environment variables together if Google changes its protocol.

Official references checked for this implementation:

```text
https://aistudio.google.com/api-reference/interactions-api/create-interaction
https://aistudio.google.com/docs/image-generation
https://aistudio.google.com/docs/omni
https://aistudio.google.com/docs/video
https://aistudio.google.com/docs/deprecations
```

## How a request moves

1. You select an action, review content, and authorize provider charges/data transmission.
2. The browser sends a validated request to the same-origin server, authenticated with its separate app token.
3. The server checks configuration, request shape, rate, queue, daily count, and storage guardrails.
4. The server admits a private job and returns its ID. Admitted requests consume the local daily allowance even if the provider later rejects them.
5. A worker calls Google with the server-side provider key. Generation POSTs are never retried automatically.
6. Returned text and media are stored privately, and the browser polls the job.
7. The browser retrieves completed media with authenticated requests and displays it through local Blob URLs.

The UI has no simulated success path. If Google refuses a request or returns no media, the job fails visibly. Jobs may incur charges even when a connection breaks or local saving fails; consult the provider dashboard before retrying.

## Environment settings

- `HOST`: defaults to `127.0.0.1`.
- `PORT`: defaults to `8787`.
- `MAX_DAILY_JOBS`: defaults to 30, shared across this single-owner server.
- `DATA_DIR`: optional private absolute directory for results and job metadata.
- `PUBLIC_ORIGIN`: exact origin, without trailing slash, required with HTTPS for non-loopback hosting.

Set provider-side spending/quota controls as well. The local count is not a currency budget and is not a guarantee against unexpected charges.

## Errors and recovery

| Symptom | Check |
| --- | --- |
| Cannot connect | Start Node server and open its address, not a file preview or unrelated static domain |
| Unauthorized | Use the app token from the current server process, not the Google key |
| Server needs Google key | Configure the private environment and restart |
| Provider 403/404 | Check current model ID, account/region access, restrictions, and billing |
| Provider 429 | Check provider quota and local rate/daily limits; do not blindly retry |
| No media returned | Inspect the displayed provider response; safety filters or unsupported requests can prevent media |
| Interrupted request | Refresh history and inspect Google usage before resubmitting |
| Storage full | Download and delete completed jobs; review private storage |
| Reference rejected | Use a supported image file through the built-in picker and explicitly opt in |
| Job failed after restart | The server does not automatically resubmit ambiguous pending work, avoiding duplicate charges |

## Deployment boundary

The included shared-token server is meant for one owner. Non-loopback binding requires a stable app token and HTTPS public origin, but that does not make it multi-user SaaS. Before public production deployment, add real user authentication, per-user isolation/quotas, CSRF/session design appropriate to your auth system, durable job workers, observability with redaction, a billing-abuse review, backups, privacy notices, and professional security testing. Use a private data directory and prevent your web server from serving secrets or generated files directly.

## Verification boundary

Automated tests use mocked Google transport and synthetic media fixtures only. They are not live Google outputs and do not establish your account's model access. No Google API key was supplied for this build, so no paid provider calls were made or verified.

## MAX queue and recovery safeguards

The Node backend adds an authenticated `GET /api/stats` endpoint for actual local queue, admission, and disk counters. These are not provider charges or a currency budget.

`POST /api/jobs` accepts an `Idempotency-Key` header (16–128 allowed letters/digits/underscores/hyphens). The browser supplies a fresh key per intended submission and retains it in memory for an ambiguous retry of the same request. For a retained job, the same key and same normalized content return that job without another provider invocation; changed content returns 409. Job deletion/expiry ends this protection. A page reload loses the browser's in-memory pending-request cache, so inspect history/usage before resubmitting an uncertain request.

`POST /api/jobs/{id}/cancel` works only while that job remains in the local queue. It does not pretend to cancel work already sent upstream. Canceled admitted jobs remain in the local daily counter. A canceled result can be deleted like a failed/completed one.

Media file writes are serialized against the storage guardrail; a partial file is removed if a later save step fails. Provider JSON reads have explicit limits even when Content-Length is absent. Backend-served pages use fresh script nonces and negotiated gzip; private files remain outside the static route allowlist.

The application now has 52 mocked Node tests and a reproducible optional static-browser workflow. Additional browser QA exercised the full nonce-protected page, authenticated counters, submission keys, cancellation, filtered history, and actual fixture-byte retrieval. All fixtures were explicitly labeled tests, not live Google outputs. No live Google generation was performed.

## Atelier conversation contract

Assistant requests now accept allowlisted `preferences` (`tone`, `detail`, `level`, `style`, `language`) and an optional `userContext` string of at most 6,000 characters. Arbitrary system-instruction strings are not accepted through those settings. Existing action values remain supported; `explain` and `brainstorm` are added. The UI explicitly shows what context/history/reference will be sent.

The model receives conversation context only when this page sends it. Up to 12 previous text messages are included, each capped at 4,000 characters. Pinned notes are page-session context, not cross-device or autonomous memory. Requests remain stateless (`store: false`), subject to provider policies. Responses may reflect attached context and are stored in server job history.

When `requiresReference: true` is declared on an image/video request, the server rejects the request before provider submission unless actual supported image bytes are attached. A typed filename is not enough. Direct visual-generation prompts in the library are separate from assistant-facing role instructions.

Speech Recognition / Speech Synthesis use browser facilities, not this server's Google key. Dictation never automatically sends a message, read-aloud never starts on its own, and unsupported browsers keep ordinary text chat usable. Speech callbacks were tested with mocks only; actual microphone/audio/service behavior is unverified. Browser vendors or operating systems may process speech data outside this app, so the UI asks before starting.

Primary speech API references:

```text
https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
```

The latest fixture-based browser QA also verifies that typing a new unsent message while a reply is pending does not erase that draft. Follow-up buttons only populate the composer; each submitted request still needs explicit authorization.

Unconfirmed client-side submission attempts are visible in the conversation but excluded from subsequent model history. This keeps an otherwise identical retry's normalized body and idempotency key stable when the server accepted a job but its HTTP response was lost. A fixture-based browser test verified that this scenario produced one admitted job, not two. Protection remains scoped to retained jobs and the in-memory pending-request cache; inspect history/usage after page reloads or uncertain upstream failures.
