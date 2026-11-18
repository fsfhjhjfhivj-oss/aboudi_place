# Characters — Atelier prompt edition

Copy a paragraph, replace its quoted placeholders, and review the success criteria. Examples are illustrative, not independently verified outcomes.

## characters_01 — Explorer continuity / Locked-off study

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring a fictional adult explorer with short dark hair and an orange technical suit for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Preserve face shape, hairstyle, suit details, and adult age; no likeness to a real public figure. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a fictional adult explorer with short dark hair and an orange technical suit. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Preserve face shape, hairstyle, suit details, and adult age; no likeness to a real public figure. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a fictional adult explorer with short dark hair and an orange technical suit. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Preserve face shape, hairstyle, suit details, and adult age; no likeness to a real public figure. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 16:9 / single frame. No rendered result is claimed.

### Success criteria

- Preserve face shape, hairstyle, suit details, and adult age; no likeness to a real public figure.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## characters_02 — Explorer continuity / Slow push-in

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a fictional adult explorer with short dark hair and an orange technical suit for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Preserve face shape, hairstyle, suit details, and adult age; no likeness to a real public figure. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a fictional adult explorer with short dark hair and an orange technical suit. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Preserve face shape, hairstyle, suit details, and adult age; no likeness to a real public figure. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a fictional adult explorer with short dark hair and an orange technical suit. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Preserve face shape, hairstyle, suit details, and adult age; no likeness to a real public figure. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Preserve face shape, hairstyle, suit details, and adult age; no likeness to a real public figure.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## characters_03 — Explorer continuity / Lateral track

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a fictional adult explorer with short dark hair and an orange technical suit for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Preserve face shape, hairstyle, suit details, and adult age; no likeness to a real public figure. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a fictional adult explorer with short dark hair and an orange technical suit. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Preserve face shape, hairstyle, suit details, and adult age; no likeness to a real public figure. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a fictional adult explorer with short dark hair and an orange technical suit. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Preserve face shape, hairstyle, suit details, and adult age; no likeness to a real public figure. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Preserve face shape, hairstyle, suit details, and adult age; no likeness to a real public figure.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## characters_04 — Explorer continuity / Detail to reveal

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a fictional adult explorer with short dark hair and an orange technical suit for "[creative_goal]". Specify the subject, composition, lighting, material, and 9:16 framing. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Preserve face shape, hairstyle, suit details, and adult age; no likeness to a real public figure. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a fictional adult explorer with short dark hair and an orange technical suit. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Preserve face shape, hairstyle, suit details, and adult age; no likeness to a real public figure. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a fictional adult explorer with short dark hair and an orange technical suit. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting 6 seconds, subject to model support. Preserve face shape, hairstyle, suit details, and adult age; no likeness to a real public figure. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 9:16 / 6-second target. No rendered result is claimed.

### Success criteria

- Preserve face shape, hairstyle, suit details, and adult age; no likeness to a real public figure.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## characters_05 — Explorer continuity / Editorial hero

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring a fictional adult explorer with short dark hair and an orange technical suit for "[creative_goal]". Specify the subject, composition, lighting, material, and 4:5 framing. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Preserve face shape, hairstyle, suit details, and adult age; no likeness to a real public figure. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a fictional adult explorer with short dark hair and an orange technical suit. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Preserve face shape, hairstyle, suit details, and adult age; no likeness to a real public figure. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a fictional adult explorer with short dark hair and an orange technical suit. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Preserve face shape, hairstyle, suit details, and adult age; no likeness to a real public figure. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 4:5 / single frame. No rendered result is claimed.

### Success criteria

- Preserve face shape, hairstyle, suit details, and adult age; no likeness to a real public figure.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## characters_06 — Artisan portrait / Locked-off study

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring a fictional adult potter wearing an indigo apron for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Keep facial identity and five-finger hand anatomy consistent. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a fictional adult potter wearing an indigo apron. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep facial identity and five-finger hand anatomy consistent. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a fictional adult potter wearing an indigo apron. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep facial identity and five-finger hand anatomy consistent. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 16:9 / single frame. No rendered result is claimed.

### Success criteria

- Keep facial identity and five-finger hand anatomy consistent.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## characters_07 — Artisan portrait / Slow push-in

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a fictional adult potter wearing an indigo apron for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Keep facial identity and five-finger hand anatomy consistent. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a fictional adult potter wearing an indigo apron. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Keep facial identity and five-finger hand anatomy consistent. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a fictional adult potter wearing an indigo apron. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Keep facial identity and five-finger hand anatomy consistent. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Keep facial identity and five-finger hand anatomy consistent.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## characters_08 — Artisan portrait / Lateral track

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a fictional adult potter wearing an indigo apron for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Keep facial identity and five-finger hand anatomy consistent. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a fictional adult potter wearing an indigo apron. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Keep facial identity and five-finger hand anatomy consistent. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a fictional adult potter wearing an indigo apron. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Keep facial identity and five-finger hand anatomy consistent. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Keep facial identity and five-finger hand anatomy consistent.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## characters_09 — Artisan portrait / Detail to reveal

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a fictional adult potter wearing an indigo apron for "[creative_goal]". Specify the subject, composition, lighting, material, and 9:16 framing. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Keep facial identity and five-finger hand anatomy consistent. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a fictional adult potter wearing an indigo apron. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Keep facial identity and five-finger hand anatomy consistent. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a fictional adult potter wearing an indigo apron. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting 6 seconds, subject to model support. Keep facial identity and five-finger hand anatomy consistent. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 9:16 / 6-second target. No rendered result is claimed.

### Success criteria

- Keep facial identity and five-finger hand anatomy consistent.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## characters_10 — Artisan portrait / Editorial hero

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring a fictional adult potter wearing an indigo apron for "[creative_goal]". Specify the subject, composition, lighting, material, and 4:5 framing. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Keep facial identity and five-finger hand anatomy consistent. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a fictional adult potter wearing an indigo apron. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep facial identity and five-finger hand anatomy consistent. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a fictional adult potter wearing an indigo apron. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep facial identity and five-finger hand anatomy consistent. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 4:5 / single frame. No rendered result is claimed.

### Success criteria

- Keep facial identity and five-finger hand anatomy consistent.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## characters_11 — Urban protagonist / Locked-off study

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring a fictional adult courier in a charcoal raincoat for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Maintain coat length, hairstyle, bag placement, and body proportions. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a fictional adult courier in a charcoal raincoat. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Maintain coat length, hairstyle, bag placement, and body proportions. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a fictional adult courier in a charcoal raincoat. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Maintain coat length, hairstyle, bag placement, and body proportions. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 16:9 / single frame. No rendered result is claimed.

### Success criteria

- Maintain coat length, hairstyle, bag placement, and body proportions.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## characters_12 — Urban protagonist / Slow push-in

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a fictional adult courier in a charcoal raincoat for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Maintain coat length, hairstyle, bag placement, and body proportions. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a fictional adult courier in a charcoal raincoat. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Maintain coat length, hairstyle, bag placement, and body proportions. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a fictional adult courier in a charcoal raincoat. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Maintain coat length, hairstyle, bag placement, and body proportions. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Maintain coat length, hairstyle, bag placement, and body proportions.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## characters_13 — Urban protagonist / Lateral track

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a fictional adult courier in a charcoal raincoat for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Maintain coat length, hairstyle, bag placement, and body proportions. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a fictional adult courier in a charcoal raincoat. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Maintain coat length, hairstyle, bag placement, and body proportions. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a fictional adult courier in a charcoal raincoat. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Maintain coat length, hairstyle, bag placement, and body proportions. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Maintain coat length, hairstyle, bag placement, and body proportions.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## characters_14 — Urban protagonist / Detail to reveal

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a fictional adult courier in a charcoal raincoat for "[creative_goal]". Specify the subject, composition, lighting, material, and 9:16 framing. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Maintain coat length, hairstyle, bag placement, and body proportions. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a fictional adult courier in a charcoal raincoat. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Maintain coat length, hairstyle, bag placement, and body proportions. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a fictional adult courier in a charcoal raincoat. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting 6 seconds, subject to model support. Maintain coat length, hairstyle, bag placement, and body proportions. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 9:16 / 6-second target. No rendered result is claimed.

### Success criteria

- Maintain coat length, hairstyle, bag placement, and body proportions.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## characters_15 — Urban protagonist / Editorial hero

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring a fictional adult courier in a charcoal raincoat for "[creative_goal]". Specify the subject, composition, lighting, material, and 4:5 framing. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Maintain coat length, hairstyle, bag placement, and body proportions. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a fictional adult courier in a charcoal raincoat. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Maintain coat length, hairstyle, bag placement, and body proportions. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a fictional adult courier in a charcoal raincoat. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Maintain coat length, hairstyle, bag placement, and body proportions. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 4:5 / single frame. No rendered result is claimed.

### Success criteria

- Maintain coat length, hairstyle, bag placement, and body proportions.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## characters_16 — Fantasy librarian / Locked-off study

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring a fictional adult librarian in a moss-green wool coat inside a candlelit archive for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Keep wardrobe coherent and avoid transforming the face between frames. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a fictional adult librarian in a moss-green wool coat inside a candlelit archive. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep wardrobe coherent and avoid transforming the face between frames. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a fictional adult librarian in a moss-green wool coat inside a candlelit archive. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep wardrobe coherent and avoid transforming the face between frames. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 16:9 / single frame. No rendered result is claimed.

### Success criteria

- Keep wardrobe coherent and avoid transforming the face between frames.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## characters_17 — Fantasy librarian / Slow push-in

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a fictional adult librarian in a moss-green wool coat inside a candlelit archive for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Keep wardrobe coherent and avoid transforming the face between frames. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a fictional adult librarian in a moss-green wool coat inside a candlelit archive. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Keep wardrobe coherent and avoid transforming the face between frames. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a fictional adult librarian in a moss-green wool coat inside a candlelit archive. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Keep wardrobe coherent and avoid transforming the face between frames. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Keep wardrobe coherent and avoid transforming the face between frames.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## characters_18 — Fantasy librarian / Lateral track

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a fictional adult librarian in a moss-green wool coat inside a candlelit archive for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Keep wardrobe coherent and avoid transforming the face between frames. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a fictional adult librarian in a moss-green wool coat inside a candlelit archive. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Keep wardrobe coherent and avoid transforming the face between frames. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a fictional adult librarian in a moss-green wool coat inside a candlelit archive. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Keep wardrobe coherent and avoid transforming the face between frames. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Keep wardrobe coherent and avoid transforming the face between frames.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## characters_19 — Fantasy librarian / Detail to reveal

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a fictional adult librarian in a moss-green wool coat inside a candlelit archive for "[creative_goal]". Specify the subject, composition, lighting, material, and 9:16 framing. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Keep wardrobe coherent and avoid transforming the face between frames. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a fictional adult librarian in a moss-green wool coat inside a candlelit archive. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Keep wardrobe coherent and avoid transforming the face between frames. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a fictional adult librarian in a moss-green wool coat inside a candlelit archive. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting 6 seconds, subject to model support. Keep wardrobe coherent and avoid transforming the face between frames. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 9:16 / 6-second target. No rendered result is claimed.

### Success criteria

- Keep wardrobe coherent and avoid transforming the face between frames.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## characters_20 — Fantasy librarian / Editorial hero

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring a fictional adult librarian in a moss-green wool coat inside a candlelit archive for "[creative_goal]". Specify the subject, composition, lighting, material, and 4:5 framing. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Keep wardrobe coherent and avoid transforming the face between frames. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a fictional adult librarian in a moss-green wool coat inside a candlelit archive. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep wardrobe coherent and avoid transforming the face between frames. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a fictional adult librarian in a moss-green wool coat inside a candlelit archive. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep wardrobe coherent and avoid transforming the face between frames. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 4:5 / single frame. No rendered result is claimed.

### Success criteria

- Keep wardrobe coherent and avoid transforming the face between frames.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## characters_21 — Animated guide / Locked-off study

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring an original small clay robot with two square eyes and copper feet for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Preserve the simple character model and stop-motion material texture. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an original small clay robot with two square eyes and copper feet. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Preserve the simple character model and stop-motion material texture. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an original small clay robot with two square eyes and copper feet. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Preserve the simple character model and stop-motion material texture. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 16:9 / single frame. No rendered result is claimed.

### Success criteria

- Preserve the simple character model and stop-motion material texture.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## characters_22 — Animated guide / Slow push-in

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring an original small clay robot with two square eyes and copper feet for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Preserve the simple character model and stop-motion material texture. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an original small clay robot with two square eyes and copper feet. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Preserve the simple character model and stop-motion material texture. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an original small clay robot with two square eyes and copper feet. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Preserve the simple character model and stop-motion material texture. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Preserve the simple character model and stop-motion material texture.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## characters_23 — Animated guide / Lateral track

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring an original small clay robot with two square eyes and copper feet for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Preserve the simple character model and stop-motion material texture. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an original small clay robot with two square eyes and copper feet. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Preserve the simple character model and stop-motion material texture. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an original small clay robot with two square eyes and copper feet. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Preserve the simple character model and stop-motion material texture. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Preserve the simple character model and stop-motion material texture.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## characters_24 — Animated guide / Detail to reveal

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring an original small clay robot with two square eyes and copper feet for "[creative_goal]". Specify the subject, composition, lighting, material, and 9:16 framing. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Preserve the simple character model and stop-motion material texture. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an original small clay robot with two square eyes and copper feet. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Preserve the simple character model and stop-motion material texture. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an original small clay robot with two square eyes and copper feet. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting 6 seconds, subject to model support. Preserve the simple character model and stop-motion material texture. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 9:16 / 6-second target. No rendered result is claimed.

### Success criteria

- Preserve the simple character model and stop-motion material texture.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## characters_25 — Animated guide / Editorial hero

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring an original small clay robot with two square eyes and copper feet for "[creative_goal]". Specify the subject, composition, lighting, material, and 4:5 framing. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Preserve the simple character model and stop-motion material texture. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an original small clay robot with two square eyes and copper feet. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Preserve the simple character model and stop-motion material texture. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an original small clay robot with two square eyes and copper feet. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Preserve the simple character model and stop-motion material texture. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 4:5 / single frame. No rendered result is claimed.

### Success criteria

- Preserve the simple character model and stop-motion material texture.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.
