# MAX / 04 change log

## Workspace
- Local text/shot autosave with explicit recovery choice.
- Reference-image recovery excluded by default.
- Twenty manual versions, restore/delete, and clear-recovery privacy control.
- Thirty personal collections with prompt membership.
- Two/three-prompt comparison and bulk JSON export.
- Private backup export/merge without AI credentials or current chat.
- Keyboard command palette and save-version shortcut.
- Project search/sort; compact and reduced-motion preferences.
- Known artwork deduplication in snapshots/backups.

## Planning
- Local three-shot starter clearly distinguished from AI output.
- Cumulative timecodes and Markdown handoff.
- Print-ready storyboard sheet.
- Live word/character/unresolved-input indicators.

## AI operations and backend
- Retained-job idempotency keys; conflicting reuse rejected.
- Queued-only cancellation; no false upstream cancellation.
- Authenticated queue/admission/storage counters and history filters.
- Conversation clearing without pretending to delete server/provider records.
- Serialized media writes and partial-result cleanup.
- Bounded provider JSON; correlation IDs; limit validation.
- Nonce-protected scripts and gzip page delivery.
- Graceful queue shutdown and explicit ambiguous-upstream warnings.

## Maintainability and verification
- Formatted editable source and editor settings.
- JSON Schema and dependency-free validation for all 1,000 prompts.
- Structural report explicitly disclaims semantic review.
- Thirty-five local mocked Node tests plus a reproducible browser regression.
- Google credentials and account-specific live generation remain unverified.

This edition does not add public multi-user authentication, billing, cloud synchronization, or a claim of production certification.
