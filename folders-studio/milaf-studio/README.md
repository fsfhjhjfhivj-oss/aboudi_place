# Milaf Studio

An original local-first creative prompt workspace, packaged with a 1,000-entry Prompt Milaf library. Inspired by the general idea of a cinematic creative studio; independently designed and not affiliated with Higgsfield.

## Start

Open `index.html` in a modern browser. No installation, account, API key, CDN, or internet connection is required for the bundled interface and data.

For local static hosting, run this command in this folder:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser. Stop the server with Ctrl+C. For a public deployment, upload `index.html` to a static host; it contains its own artwork and library data.

## Included

- 1,000 prompts: 800 text, 80 image, 120 video.
- 24 category collections with searchable titles, tags, tasks, and full prompt text.
- All/image/video/text filters and title/category sorting.
- An editable prompt dialog with placeholder inputs, difficulty selection, examples, and guidance.
- Copy and TXT export for customized paragraphs.
- Favorites stored locally in this browser.
- A visual prompt builder with subject, camera, light, framing, look, target duration, and continuity/avoid directions.
- Custom drafts saved locally and added to favorites.
- JSON export of all entries, filtered results, or custom drafts.
- Responsive layouts and keyboard access. Press `/` to focus search; Escape closes the prompt dialog.
- Original AI-created illustrative editorial artwork.

## What it does not do

This is a prompt-library website, not a connected AI-generation product. It does not generate or edit images/videos, upload references, train models, process payments, authenticate users, synchronize accounts, or call Higgsfield or another model provider. Image-to-video prompts require an authorized reference to be supplied in your actual generation tool. Prompt controls are creative directions; support varies by tool.

The interface does not claim to reproduce Higgsfield features. Adding live generation would require a separate provider integration, a secure server for secrets, request validation, job handling, usage limits, provider terms review, and error handling. Do not embed API keys into this static HTML.

## Data and privacy

The bundled site makes no external network requests. Favorites and drafts use localStorage. Clearing browser data or using another browser can remove access to them; JSON exports are the backup mechanism. Browser privacy settings may block storage or clipboard access. If copying is blocked, select and copy the visible prompt manually. Local export files remain under your control.

The interface is entirely contained in `index.html`; `library.json` is a separate reusable copy for integrations. Updating that JSON alone does not change the data embedded in the page. To update the page, replace the JSON inside its `libraryData` script element, escaping `<` as `\u003c`, and preserve valid JSON.

## Library organization

The original eight categories and eight business/personal categories have 50 prompts each. The eight cinematic categories have 25 each. Some entries are explicitly labeled workflow or shot-treatment variants, not wholly unrelated topics. Every entry retains roleContext, objective, scope, outputFormat, exampleOutput, difficultyGuide, templates, and promptText.

## Verification performed

Local Chromium checks covered loading the 1,000-entry dataset, search, video filtering, editable placeholders, favorites, custom draft saving, JSON download, collection navigation, desktop/mobile layout, and JavaScript page errors. These checks are not a full accessibility audit or exhaustive browser certification.

## License

No license is specified. The repository owner should choose licensing terms before granting reuse or redistribution permissions.
