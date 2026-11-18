# Atelier / 05 editorial and interaction pass

## Design
- New desktop sidebar and midnight/periwinkle design language across all workspaces.
- New AI-created editorial hero image, explicitly not a generation preview.
- Larger labels and controls, consistent cards/dialogs, responsive top navigation.
- Paid-request consent follows the active assistant/media composer.

## Prompt content
- 1,000 scopes, difficulty guides, and copy-ready paragraphs revised.
- 800 human-readable titles improved; 840 illustrative examples revised.
- Stable IDs, 24 categories, and explicit task/shot variants preserved.
- Input guidance and success criteria on every entry.
- 200 direct visual-generation paragraphs; 25 explicit reference requirements.
- Review examples no longer assert a defect in a draft the assistant has never seen.
- Changes measured in the editorial report, not scored as independently verified semantics.

## Conversation
- Friendly, typo-tolerant instructions and fewer unnecessary clarification questions.
- Allowlisted tone, detail, level, working-style, and reply-language controls.
- Five request modes, safe Markdown/code/table display, copy and follow-up actions.
- Transparent bounded context, pinned notes, request preview, transcript export.
- Enter/Shift+Enter controls, draft preservation, stable older message nodes/scroll.
- Browser dictation/read-aloud are opt-in, feature-detected, and never auto-submit.

## Verification boundary
- 52 backend/contract/formatter/library tests.
- Existing local workspace browser regression retained.
- New five-width Atelier interface regression.
- Full mocked AI/voice interaction QA: no paid Google or actual speech-service calls.
- Live Google responses, hardware microphones/speakers, and production multi-user deployment remain unverified.
