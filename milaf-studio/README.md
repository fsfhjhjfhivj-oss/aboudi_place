# Milaf Studio MAX — Atelier / 05

An original creative workspace with **1,000 prompts across 24 categories**, plus an optional server-side Google integration for an assistant, image generation, and video generation.

**Integration code is included, but your account is not connected.** Supply your own Google API key privately on the server, verify model access and billing, and explicitly authorize each submission. The static preview never pretends to generate results.



## Atelier edition: design, prompts, and conversation

### A calmer interface

The interface now uses a desktop sidebar, a periwinkle/midnight palette, new editorial hero art, larger controls, and consistent cards/forms/dialogs across all six workspaces. On smaller screens it returns to compact top navigation. Paid-request consent moves next to the active Send/Generate button rather than hiding elsewhere on the page.

### A revised prompt library—not more padding

All 1,000 IDs and 24 categories are preserved. The editorial migration revises every scope, difficulty guide, and ready-to-copy paragraph; 800 titles and 840 illustrative examples also change. Every entry includes `inputGuide`, `successCriteria`, `conversationStarters`, and `promptVersion`. There are 200 separate `generationPrompt` paragraphs that describe an actual visual scene instead of asking an assistant to write about one. Twenty-five reference-dependent entries explicitly require a real authorized image.

The library dialog offers Assistant brief and Direct visual prompt modes, shows useful input guidance, and checks which placeholders remain. It never turns a typed filename into an uploaded reference. The source migration is documented in `tools/upgrade_prompts.py`, and measured changes are recorded in `prompt-editorial-report.json`. This is an editorial improvement and structural validation, not independent verification of every fact or a guarantee of generated results.

### A more natural AI conversation

- Warm/professional/direct/playful tone controls.
- Short/balanced/detailed answers; beginner/intermediate/expert explanation level.
- Creative partner, patient coach, or answer-first interaction style.
- Reply-language preference, including match-the-user-language mode. The interface itself is not fully localized.
- Talk it through, Upgrade a prompt, Build a shot list, Explain clearly, and Explore directions actions.
- Readable Markdown, safe code blocks with copy buttons, and small tables. Raw HTML is escaped; model-generated links stay plain text.
- Follow-up chips, message reuse, pinned notes, request preview, and transcript export. None of these submits a paid request automatically.
- Enter-to-send with Shift+Enter for a newline; optionally use Ctrl/Command+Enter. Unsent text typed while a reply is pending is preserved.
- Keyed reply rendering avoids replacing every older message or forcing the scroll position while you read.

### Optional browser speech

Voice typing and read-aloud are browser features, not a Google AI speech integration. Support and microphone permissions vary. Browser/operating-system services may process audio or text remotely. Each speech feature requires explicit opt-in; no microphone capture, speech output, or AI submission starts automatically. Dictation fills a draft for review. Read-aloud skips fenced code and caps the spoken excerpt at 8,000 characters. Real devices, microphone hardware, and cloud speech services were not tested; only feature detection and mocked callbacks were checked.

## Retained MAX workspace features

- **Local autosave and recovery:** text and shot planning recover through IndexedDB, with an explicit restore-or-start-fresh banner. Reference images are excluded by default.
- **Version history:** save up to 20 directions, restore them, or delete recovery data explicitly.
- **Personal collections:** organize prompt IDs without modifying the original entries.
- **Compare and bulk export:** select prompts across categories, compare two or three locally, export a selection, or add it to a chosen collection.
- **Command palette:** Ctrl/Command+K searches actions, prompt IDs, titles, tags, and projects. Ctrl/Command+S saves a local version.
- **Private workspace backups:** merge projects, imports, favorites, collections, preferences, and versions; AI credentials/current chat/server media are excluded.
- **Storyboard handoff:** a clearly labeled local three-shot starter, cumulative timecodes, Markdown export, and print-ready sheets.
- **Project search/sort, readable labels, compact density, reduced motion, and responsive layouts.**
- **AI operations:** real local queue/usage/storage counters, history filters, and cancellation only while a job is still waiting locally.
- **Safer submission handling:** idempotency keys, serialized media writes, partial-file cleanup, bounded provider JSON, correlation IDs, nonce-protected scripts, and graceful shutdown.
- **Faster backend page delivery:** gzip negotiation, with a self-contained frontend and no runtime CDN dependency.
- **Library validation:** a JSON Schema plus a dependency-free validator for all 1,000 entries. The generated report is structural, not an invented semantic-quality score.

This remains a single-owner local workspace—not a claim of production-ready multi-user SaaS. Google model access and billing still require your own configuration.

## Start with AI

Use a maintained Node.js release satisfying the code minimum of version 20. The server uses built-in Node modules and `fetch`; there are no runtime npm dependencies to install.

1. Extract this website folder.
2. Copy `.env.example` to `.env`.
3. Set `GOOGLE_API_KEY` inside `.env` using your own authorized key. Do not paste it into the website or a chat.
4. Run the server from this folder:

   ```sh
   npm start
   ```

5. Open the local address printed in the terminal, normally `http://127.0.0.1:8787`.
6. Open **AI Studio → Connect AI backend**.
7. Enter the **APP ACCESS TOKEN** printed by this server. This is a separate token, not the Google API key.
8. Choose Assistant, Generate image, or Generate video. Review the prompt, select explicit consent, and submit.

The connection check does not call Google or verify billing. The first explicitly submitted AI job checks actual provider access. Usage may incur Google charges. The consent checkbox resets after an accepted submission.

See `AI_SETUP.md` for model choices, limitations, security controls, and troubleshooting.

## Use without AI

Open `index.html` directly for the bundled prompt library, creative brief builder, browser-local projects, and storyboards. AI controls explain that the Node backend is required. A static HTML host alone cannot securely perform the connected AI operations.

## Included workspaces

| Workspace | Features |
| --- | --- |
| Explore | Cinematic discovery, visual filters, search, favorites, and original editorial artwork |
| Create | Image/video briefs, camera and lens character, lighting, ratios, continuity, and local references |
| AI Studio | Google-backed chat, prompt refinement, JSON shot lists, image/video job submission, status, media previews, downloads, and local-server deletion |
| Storyboard | Editable shots, ordering, duplication, durations, runtime totals, and JSON export |
| Library | All 1,000 prompts, category/format/favorite filters, ID and full-text search, placeholders, examples, and exports |
| Projects | Browser-local save/open/rename/duplicate/delete, backups, and import/export |
| Toolkit | Validated prompt-pack imports, full-library exports, favorites, and privacy notes |

The **Add continuity checks** action is deterministic local text editing and is labeled accordingly. **Improve with Google AI** is a separate, explicitly submitted provider request.

## Provider defaults

The server uses Google's Interactions API with configurable defaults:

- Assistant: `gemini-3.8-flash`
- Image: `gemini-nano-banana-2.1`
- Video: `gemini-omni-1.2-flash`
- API revision: `2026-05-20`

The requested older Imagen/Veo API family was not hardcoded: Google's current documentation retires the older endpoints and directs video work to Omni. The model environment variables let you change defaults as account access and provider availability evolve. Do not point an Interactions model variable at a Vertex-only or retired model and expect the same protocol to work.

Actual live Google calls were **not** performed during this build because no user API key was supplied. Model and request shapes were checked against official documentation; backend and browser flows were tested with clearly labeled local fixtures. This is not a claim that your account has access or that every live generation will succeed.

## Privacy and storage

### In the browser

- Favorites: `milaf-favorites`
- Saved creative projects: `milaf-v2-projects`
- Imported prompts: `milaf-v2-imports`
- App access token, current assistant conversation, pinned notes, and pending-submission cache: memory only, not browser storage
- Conversation preferences: `milaf-atelier-conversation`; this stores allowlisted controls, not chat text or keys
- MAX preferences and collections: `milaf-max-preferences`, `milaf-max-collections`
- Recovery and versions: IndexedDB database `milaf-max-workspace`, with `state` and `versions` stores

Autosave starts enabled for text and shot plans. Reference-image recovery is off by default and requires a separate opt-in. Explicitly saved projects may still contain their references. Deleting a project does not automatically delete separate saved versions or the latest recovery record; use Workspace settings to manage recovery. The clear-recovery action disables autosave and removes recovery/versions, leaving explicitly saved projects untouched.

Local reference images are resized before browser project saving. They are sent to Google only when the reference checkbox and submission consent are selected. Export projects before clearing browser data.

### On your Node server

The private `data/` folder contains job metadata, generated files, and the daily admission counter. Job metadata includes the submitted prompt and returned text; treat it as sensitive. Raw conversation history, pinned/project context, and reference input are not written into that job record by this adapter. Returned text may quote or reflect them and is retained; do not treat context as a secret channel. Completed/failed job history defaults to 24-hour retention; up to 100 jobs are retained at once. Pending jobs interrupted by restart are marked failed and not automatically resubmitted.

Deleting a server result removes the local job and media. It does not promise deletion from Google's systems. `store: false` is sent for Interactions; provider retention and abuse-monitoring policies remain applicable.

## Local safeguards

- Google key stays server-side in a request header.
- A separate app token protects AI endpoints.
- Same-origin and Host checks; no open proxy or broad CORS.
- No automatic retries of generation POST requests.
- Idempotency keys reuse the retained job for identical submissions, including after server restart; conflicting content with the same key is rejected. Expired/deleted jobs no longer preserve that key.
- Queued jobs can be canceled before the provider call. Running jobs are never falsely labeled canceled.
- Script execution uses a fresh nonce when served by the Node backend; styles still allow the inline styles used by the interface.
- Default 30 submissions per UTC day, counting assistant/media and failed admitted jobs.
- Two concurrent jobs, ten waiting jobs, 20 submission attempts per IP per minute.
- Request/reference size validation, 100 MB media-file limit, and approximately 512 MB local storage guardrail.
- Server media downloads accept only trusted Google file locations; credentials are stripped on allowed CDN redirects.
- Static serving is allowlisted: `.env`, backend source, and `data/` are not public routes.
- Explicit consent before each accepted submission.

These are application safeguards, **not** a guaranteed provider spending cap or a security certification. Set provider-side limits and monitor usage. This is a single-owner local server, not multi-user SaaS authentication. See the deployment notes before exposing it publicly.

## Source layout

```text
milaf-studio/
├── index.html             # Built self-contained frontend
├── library.json           # Source prompt dataset
├── package.json           # start / test / build commands
├── .env.example           # Blank configuration template; no credentials
├── build.py               # Validates and builds the frontend
├── validate_library.py    # Dependency-free structural validation
├── library.schema.json    # JSON Schema for the enriched library
├── library-quality-report.json # Measured structural report
├── tests/browser_smoke.py # Optional local browser regression workflow
├── AI_SETUP.md
├── assets/                # Original editorial WebP artwork
├── src/
│   ├── template.html
│   ├── styles.css
│   ├── app.js
│   ├── ai.html
│   ├── ai.css
│   ├── ai.js
│   ├── max.html
│   ├── max.css
│   └── max.js
└── server/
    ├── server.mjs         # HTTP, access control, queue, storage, limits
    ├── google.mjs         # Google Interactions provider adapter
    └── tests/             # Local, mocked automated tests; no live calls
```

## Build and test

```sh
# Rebuild after editing frontend source or library data.
python3 build.py

# Test the backend and provider contract with mocks; no Google key needed.
npm test

# Run the real adapter using server environment configuration.
npm start
```

The shipped page is prebuilt, so Python is not needed merely to run the AI server. Editing `library.json` requires a rebuild to update the embedded frontend dataset.

Local Chromium checks covered the existing library/project workflows, honest disconnected state, app-token connection, consent gates, prompt refinement, importing AI shot lists, queued image/video results, protected downloads, and provider errors using explicit test fixtures. Fifty-two Node tests cover request construction, credential handling, trusted downloads, access control, job execution, media deletion, consent, quotas, and missing configuration, idempotent replay/restart, queue cancellation, storage races, partial-file cleanup, bounded responses, script nonces, gzip negotiation, correlation IDs, and shutdown. The local browser regression also checks autosave/reload recovery, reference exclusion, version restore, collections, side-by-side comparison, backup merge, timecodes, project search, and display preferences. Live Google generation and exhaustive cross-browser/accessibility testing remain unverified.

## Limits and practical notes

- Up to 25 browser-local projects and 50 shots per storyboard.
- Up to 500 imported prompts; JSON input files under 20 MB.
- Reference picker accepts PNG/JPG/WebP up to 10 MB and resizes locally.
- Connected video generation is constrained to 3–15 seconds, 720p, and 16:9 or 9:16 by this implementation. Provider account limits can differ.
- Briefs are editable; changing scene inputs rebuilds their generated text.
- No cloud accounts, billing UI, online collaboration, voice generation, or separate Vertex AI adapter are included.
- Disconnect does not cancel an upstream generation. Check history and usage before resubmitting after an interruption.
- Original editorial art is illustrative, not a preview of each prompt's output.
- The project is independent and not affiliated with Higgsfield or Google.

## License

No license is specified. The repository owner should choose terms before granting reuse or redistribution permissions.

## Optional browser tests

```sh
python3 -m pip install -r requirements-test.txt
python3 -m playwright install chromium
npm run test:browser
```

The test starts a fresh local Chromium profile, makes no Google requests, and writes screenshots to `test-artifacts/`. Set `CHROME_BIN` to use another installed Chromium executable. These tests supplement, not replace, an accessibility audit or real-account provider checks.

## Recovery, backup, and display details

- Recovery stores known editorial artwork by stable asset names rather than copying its image bytes into every snapshot.
- Up to 30 personal collections and 20 saved versions are supported.
- Workspace backup imports are capped at 40 MB; individual prompt/project import limits remain as documented above.
- Merge respects project/import/version limits. Browser storage can fail or fill up; heed the warning and export immediately rather than assuming persistence.
- Backups can contain private explicitly saved project images. Keep them private.
- Print/PDF uses the browser's print dialog; the app does not silently create or upload a PDF.
- Queued-job cancellation does not refund the local daily admission count. Daily counters are not Google billing estimates.
- Shutdown cancels waiting jobs, gives running work a grace window, and warns that upstream work may remain. Refresh history and inspect usage before resubmitting ambiguous requests.
- The library report checks IDs, fields, difficulty guides, media labels, and placeholder consistency. It does not verify source claims or guarantee the quality of model outputs.

## Conversation context and privacy

The server accepts at most the last 12 supplied text messages, each capped at 4,000 characters, plus the current request. Optional pinned/project context is capped at 6,000 characters. It is ordinary user-provided context, not hidden instructions or permanent AI memory. Only explicitly selected image bytes are attached; neither the full prompt library nor your server credentials is silently sent to the model.

Use Preview what will be sent to inspect the next request. Clearing the conversation also clears the page-session pinned notes and brief-context opt-in; server job records remain separate. Browser workspace backups can include communication preferences, but exclude the current conversation, pinned notes, app token, and Google key. Export a transcript explicitly if you want to keep it; that file can contain private information.

The assistant has no browser, code-execution, or website-editing tools. It provides explanations/drafts and can return shot-list JSON that you explicitly import. Improved system instructions guide behavior, but live response quality and your account's model access remain unverified without your key.

## Optional Atelier browser check

```sh
npm run test:atelier
```

After installing the same optional Playwright test requirements, this checks the redesigned workspaces at five viewport widths, prompt-mode switching, guided fields, communication controls, request preview, and conversation help. It makes no Google or speech-service calls.

## Atelier source modules

The build also includes `src/atelier.html`, `src/atelier.css`, `src/atelier.js`, and the dependency-free `src/conversation-format.js` renderer. Conversation controls are validated again by the backend. Pinned notes and raw current chat remain page-session data; only allowlisted communication preferences are stored or included in workspace preference backups. `prompt-editorial-report.json` records actual field-change counts, while the quality report remains explicitly structural.

The scene builder preserves filled creative-purpose/constraint inputs when changing camera or lighting settings. Choosing an actual reference resolves the reference placeholder in its local subject description; server submission still requires explicit reference inclusion. A filename alone never satisfies the media API's reference requirement.

## Production Studio and client handoff

Open **Production** to create a still-photo or motion brief. Choose a preset, import the scene from Create, or select **Build client brief** from a cinematic library prompt. Set composition, lighting, aspect ratio, and continuity; video adds duration, camera movement, and timing beats. Download the client Markdown brief or structured JSON. Ready-made examples and a blank client template are in `client-kits/`.

Upload the Markdown file to a compatible agent or paste it into chat. In a generator with only a prompt box, paste the direct generation section and enter settings in its controls. Attach authorized references separately. For Milaf's optional Google integration, **Open in AI Studio** transfers the draft and settings without sending a request. Live rendering still requires a configured provider, permissions, and explicit consent. The handoff is not a render, and no file guarantees compatibility or output quality.

Production Studio was checked locally for photo/video prompt construction, Markdown and JSON downloads, reference requirements, safe AI transfer, and mobile layout. The full Node suite has 57 tests; no live generation call was made in this upgrade.
