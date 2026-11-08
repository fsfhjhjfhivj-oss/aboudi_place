# Milaf Studio 02

An original cinematic prompt website and local-first creative workspace. Includes **1,000 prompts across 24 categories**, reference-image handling, project management, and a storyboard planner.

The visual direction draws on the general creative-studio category; this is an independent design, **not affiliated with Higgsfield**. It does not reproduce a connected generation service.

## Open the website

Open `index.html` in a modern browser. The built page is self-contained: data, CSS, JavaScript, and artwork are embedded. No installation, account, API key, CDN, or external network request is needed for its bundled features.

Optional local server, run from this folder:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000` and stop the server with Ctrl+C. To publish a static version, upload the built `index.html` to a static host. No build service is necessary.

## The workspaces

### Explore

- Cinematic discovery page with seven original editorial artwork assets.
- 200 visual prompt entries: 80 image and 120 video prompts.
- Camera, product, fashion, world, and saved filters.
- Search and progressively loaded cards.
- Image/video workspace shortcuts and usable scene presets.

### Create

- Separate image and video brief modes.
- Subject, camera, lens character, lighting, look, ratio, duration, continuity, and context fields.
- Reference images chosen locally or dropped into the reference area.
- PNG/JPG/WebP references up to 10 MB, resized locally to a maximum dimension of 960 pixels for storage.
- Editable final prompt, with copying and JSON project export.
- Deterministic continuity checks, labeled **local rules, not AI**.
- Brief-completeness indicator counts five supplied inputs. It is not a quality prediction; reference images are optional.
- Save a project or add the brief to a storyboard.

### Storyboard

- Add shots from the studio, visual library entries, or a blank template.
- Edit titles, shot briefs, and target durations.
- Reorder, duplicate, and remove shots.
- Planned runtime calculation.
- Save to projects or export a structured JSON shot list.
- Maximum 50 shots; each target duration is between 1 and 60 seconds.

### Library

- All 1,000 bundled text, image, and video prompts.
- Search by ID, title, task, tags, scope, and prompt text.
- Category, format, favorites, and sorting controls.
- Placeholder customization, difficulty selection, example responses, and editable paragraphs.
- Export filtered results as Prompt Milaf JSON.

### Projects

- Save, open, rename, duplicate, delete, import, and export projects.
- Stores settings, edited prompt text, optional reference, and the current storyboard.
- Up to 25 local projects. Actual storage capacity depends on browser settings and reference sizes.
- Export backups before deleting projects or clearing browser data.

### Toolkit

- Full-library and favorite-pack export.
- Prompt-pack import using the Prompt Milaf categories structure.
- Duplicate IDs are skipped; existing entries are not silently replaced.
- Up to 500 imported entries; input JSON files must be under 20 MB.
- Project backup export and data-privacy notes.

## Important limits

**This website prepares prompts; it does not generate images or videos.**

There is no model connection, media editing service, automatic AI enhancement, authentication, billing, cloud storage, cross-device synchronization, or live generation queue. Image-to-video reference files must also be supplied to your actual generation provider. Target durations, ratios, camera directions, and negative constraints are creative instructions whose support depends on that provider.

Live generation would require a separate secure backend, authorized provider integration, request validation, async job handling, usage limits, and appropriate privacy/terms review. Never embed secret API keys in this static site.

Editorial images are illustrative mood artwork, not outputs from the individual library prompts. Some library entries are explicitly labeled workflow or shot-treatment variants, rather than unrelated task families.

## Local data and privacy

The bundled site makes no external network requests. Browser-local storage is used for:

| Key | Contents |
| --- | --- |
| `milaf-favorites` | Favorite prompt IDs; compatible with the earlier studio |
| `milaf-v2-projects` | Saved projects and references |
| `milaf-v2-imports` | Imported prompt entries |

References are decoded and resized in the browser. No upload to a server occurs. Local storage may be unavailable in private modes, restricted environments, or when quota is exhausted. The interface reports storage failures; work may then exist only in memory. Export immediately in that case.

Work is not automatically saved. Use **Save project** or **Save to projects** before leaving. Editing scene inputs rebuilds the generated brief text, replacing manual edits; save or export important edits first. A project export includes its reference image when present, so review exports before sharing.

Clipboard permissions vary. If copying is blocked, select the editable prompt text and copy manually. Do not import untrusted files or provide sensitive reference material without permission.

## Source and rebuilding

```text
milaf-studio/
├── index.html             # Built standalone website
├── library.json           # Bundled source data
├── build.py               # Standard-library-only build
├── README.md
├── assets/                # Seven editorial WebP assets
└── src/
    ├── template.html      # Page structure
    ├── styles.css         # Responsive design
    └── app.js             # Browser logic
```

Edit the source files or library data, then run:

```sh
python3 build.py
```

The builder regenerates the self-contained page. Updating `library.json` without rebuilding does not change the dataset embedded in the page. The build escapes `<` in embedded library JSON to prevent script-tag injection from prompt content.

## Keyboard and accessibility

- `/`: focus search.
- Ctrl+K / Command+K: open library search.
- Escape: close a dialog.
- Keyboard-operable reference picker and ordinary form controls.
- Focus indicators, skip link, labeled inputs, native dialogs, live status announcements, and reduced-motion styling.

These provisions are not a formal accessibility certification; run an audit before a public rollout.

## Verification performed

Local Chromium checks covered discovery, all bundled entries, reference selection, local refinement, prompt customization, favorites, project save/open/rename/duplicate, storyboard editing/reordering/runtime, exports, imported-text escaping, persistence after reload, desktop/mobile layouts, absence of external requests, and absence of JavaScript page errors in tested flows. Additional round-trip checks covered project import, project deletion, malformed JSON rejection, and ID search.

This is not exhaustive testing across all browsers or a security certification. Generated answers and imported data still need review.

## License

No license is specified. The repository owner should choose licensing terms before granting reuse or redistribution permissions.
