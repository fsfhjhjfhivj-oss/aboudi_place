# Lighting — Atelier prompt edition

Copy a paragraph, replace its quoted placeholders, and review the success criteria. Examples are illustrative, not independently verified outcomes.

## lighting_01 — Window portrait / Locked-off study

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring a fictional adult ceramic artist beside a studio window for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Keep the face and hands natural, with stable skin texture and no beauty-filter distortion. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a fictional adult ceramic artist beside a studio window. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep the face and hands natural, with stable skin texture and no beauty-filter distortion. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a fictional adult ceramic artist beside a studio window. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep the face and hands natural, with stable skin texture and no beauty-filter distortion. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 16:9 / single frame. No rendered result is claimed.

### Success criteria

- Keep the face and hands natural, with stable skin texture and no beauty-filter distortion.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## lighting_02 — Window portrait / Slow push-in

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a fictional adult ceramic artist beside a studio window for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Keep the face and hands natural, with stable skin texture and no beauty-filter distortion. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a fictional adult ceramic artist beside a studio window. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Keep the face and hands natural, with stable skin texture and no beauty-filter distortion. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a fictional adult ceramic artist beside a studio window. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Keep the face and hands natural, with stable skin texture and no beauty-filter distortion. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Keep the face and hands natural, with stable skin texture and no beauty-filter distortion.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## lighting_03 — Window portrait / Lateral track

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a fictional adult ceramic artist beside a studio window for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Keep the face and hands natural, with stable skin texture and no beauty-filter distortion. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a fictional adult ceramic artist beside a studio window. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Keep the face and hands natural, with stable skin texture and no beauty-filter distortion. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a fictional adult ceramic artist beside a studio window. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Keep the face and hands natural, with stable skin texture and no beauty-filter distortion. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Keep the face and hands natural, with stable skin texture and no beauty-filter distortion.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## lighting_04 — Window portrait / Detail to reveal

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a fictional adult ceramic artist beside a studio window for "[creative_goal]". Specify the subject, composition, lighting, material, and 9:16 framing. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Keep the face and hands natural, with stable skin texture and no beauty-filter distortion. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a fictional adult ceramic artist beside a studio window. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Keep the face and hands natural, with stable skin texture and no beauty-filter distortion. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a fictional adult ceramic artist beside a studio window. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting 6 seconds, subject to model support. Keep the face and hands natural, with stable skin texture and no beauty-filter distortion. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 9:16 / 6-second target. No rendered result is claimed.

### Success criteria

- Keep the face and hands natural, with stable skin texture and no beauty-filter distortion.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## lighting_05 — Window portrait / Editorial hero

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring a fictional adult ceramic artist beside a studio window for "[creative_goal]". Specify the subject, composition, lighting, material, and 4:5 framing. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Keep the face and hands natural, with stable skin texture and no beauty-filter distortion. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a fictional adult ceramic artist beside a studio window. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep the face and hands natural, with stable skin texture and no beauty-filter distortion. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a fictional adult ceramic artist beside a studio window. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep the face and hands natural, with stable skin texture and no beauty-filter distortion. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 4:5 / single frame. No rendered result is claimed.

### Success criteria

- Keep the face and hands natural, with stable skin texture and no beauty-filter distortion.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## lighting_06 — Rainy neon / Locked-off study

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring an unbranded umbrella on a wet city pavement at night for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use readable reflections and restrained neon; avoid random signage or pseudo-text. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an unbranded umbrella on a wet city pavement at night. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Use readable reflections and restrained neon; avoid random signage or pseudo-text. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an unbranded umbrella on a wet city pavement at night. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Use readable reflections and restrained neon; avoid random signage or pseudo-text. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 16:9 / single frame. No rendered result is claimed.

### Success criteria

- Use readable reflections and restrained neon; avoid random signage or pseudo-text.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## lighting_07 — Rainy neon / Slow push-in

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring an unbranded umbrella on a wet city pavement at night for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use readable reflections and restrained neon; avoid random signage or pseudo-text. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an unbranded umbrella on a wet city pavement at night. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Use readable reflections and restrained neon; avoid random signage or pseudo-text. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an unbranded umbrella on a wet city pavement at night. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Use readable reflections and restrained neon; avoid random signage or pseudo-text. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Use readable reflections and restrained neon; avoid random signage or pseudo-text.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## lighting_08 — Rainy neon / Lateral track

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring an unbranded umbrella on a wet city pavement at night for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use readable reflections and restrained neon; avoid random signage or pseudo-text. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an unbranded umbrella on a wet city pavement at night. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Use readable reflections and restrained neon; avoid random signage or pseudo-text. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an unbranded umbrella on a wet city pavement at night. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Use readable reflections and restrained neon; avoid random signage or pseudo-text. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Use readable reflections and restrained neon; avoid random signage or pseudo-text.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## lighting_09 — Rainy neon / Detail to reveal

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring an unbranded umbrella on a wet city pavement at night for "[creative_goal]". Specify the subject, composition, lighting, material, and 9:16 framing. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use readable reflections and restrained neon; avoid random signage or pseudo-text. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an unbranded umbrella on a wet city pavement at night. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Use readable reflections and restrained neon; avoid random signage or pseudo-text. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an unbranded umbrella on a wet city pavement at night. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting 6 seconds, subject to model support. Use readable reflections and restrained neon; avoid random signage or pseudo-text. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 9:16 / 6-second target. No rendered result is claimed.

### Success criteria

- Use readable reflections and restrained neon; avoid random signage or pseudo-text.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## lighting_10 — Rainy neon / Editorial hero

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring an unbranded umbrella on a wet city pavement at night for "[creative_goal]". Specify the subject, composition, lighting, material, and 4:5 framing. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use readable reflections and restrained neon; avoid random signage or pseudo-text. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an unbranded umbrella on a wet city pavement at night. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Use readable reflections and restrained neon; avoid random signage or pseudo-text. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an unbranded umbrella on a wet city pavement at night. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Use readable reflections and restrained neon; avoid random signage or pseudo-text. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 4:5 / single frame. No rendered result is claimed.

### Success criteria

- Use readable reflections and restrained neon; avoid random signage or pseudo-text.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## lighting_11 — Desert daylight / Locked-off study

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring a lone traveler crossing pale sand dunes for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Keep the sun direction consistent and preserve realistic footprints. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a lone traveler crossing pale sand dunes. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep the sun direction consistent and preserve realistic footprints. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a lone traveler crossing pale sand dunes. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep the sun direction consistent and preserve realistic footprints. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 16:9 / single frame. No rendered result is claimed.

### Success criteria

- Keep the sun direction consistent and preserve realistic footprints.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## lighting_12 — Desert daylight / Slow push-in

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a lone traveler crossing pale sand dunes for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Keep the sun direction consistent and preserve realistic footprints. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a lone traveler crossing pale sand dunes. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Keep the sun direction consistent and preserve realistic footprints. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a lone traveler crossing pale sand dunes. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Keep the sun direction consistent and preserve realistic footprints. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Keep the sun direction consistent and preserve realistic footprints.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## lighting_13 — Desert daylight / Lateral track

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a lone traveler crossing pale sand dunes for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Keep the sun direction consistent and preserve realistic footprints. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a lone traveler crossing pale sand dunes. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Keep the sun direction consistent and preserve realistic footprints. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a lone traveler crossing pale sand dunes. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Keep the sun direction consistent and preserve realistic footprints. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Keep the sun direction consistent and preserve realistic footprints.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## lighting_14 — Desert daylight / Detail to reveal

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a lone traveler crossing pale sand dunes for "[creative_goal]". Specify the subject, composition, lighting, material, and 9:16 framing. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Keep the sun direction consistent and preserve realistic footprints. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a lone traveler crossing pale sand dunes. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Keep the sun direction consistent and preserve realistic footprints. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a lone traveler crossing pale sand dunes. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting 6 seconds, subject to model support. Keep the sun direction consistent and preserve realistic footprints. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 9:16 / 6-second target. No rendered result is claimed.

### Success criteria

- Keep the sun direction consistent and preserve realistic footprints.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## lighting_15 — Desert daylight / Editorial hero

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring a lone traveler crossing pale sand dunes for "[creative_goal]". Specify the subject, composition, lighting, material, and 4:5 framing. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Keep the sun direction consistent and preserve realistic footprints. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a lone traveler crossing pale sand dunes. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep the sun direction consistent and preserve realistic footprints. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a lone traveler crossing pale sand dunes. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep the sun direction consistent and preserve realistic footprints. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 4:5 / single frame. No rendered result is claimed.

### Success criteria

- Keep the sun direction consistent and preserve realistic footprints.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## lighting_16 — Museum still life / Locked-off study

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring a small stone sculpture on a matte plinth for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Preserve the sculpture silhouette and subtle surface texture. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a small stone sculpture on a matte plinth. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Preserve the sculpture silhouette and subtle surface texture. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a small stone sculpture on a matte plinth. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Preserve the sculpture silhouette and subtle surface texture. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 16:9 / single frame. No rendered result is claimed.

### Success criteria

- Preserve the sculpture silhouette and subtle surface texture.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## lighting_17 — Museum still life / Slow push-in

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a small stone sculpture on a matte plinth for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Preserve the sculpture silhouette and subtle surface texture. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a small stone sculpture on a matte plinth. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Preserve the sculpture silhouette and subtle surface texture. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a small stone sculpture on a matte plinth. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Preserve the sculpture silhouette and subtle surface texture. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Preserve the sculpture silhouette and subtle surface texture.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## lighting_18 — Museum still life / Lateral track

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a small stone sculpture on a matte plinth for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Preserve the sculpture silhouette and subtle surface texture. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a small stone sculpture on a matte plinth. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Preserve the sculpture silhouette and subtle surface texture. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a small stone sculpture on a matte plinth. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Preserve the sculpture silhouette and subtle surface texture. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Preserve the sculpture silhouette and subtle surface texture.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## lighting_19 — Museum still life / Detail to reveal

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a small stone sculpture on a matte plinth for "[creative_goal]". Specify the subject, composition, lighting, material, and 9:16 framing. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Preserve the sculpture silhouette and subtle surface texture. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a small stone sculpture on a matte plinth. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Preserve the sculpture silhouette and subtle surface texture. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a small stone sculpture on a matte plinth. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting 6 seconds, subject to model support. Preserve the sculpture silhouette and subtle surface texture. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 9:16 / 6-second target. No rendered result is claimed.

### Success criteria

- Preserve the sculpture silhouette and subtle surface texture.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## lighting_20 — Museum still life / Editorial hero

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring a small stone sculpture on a matte plinth for "[creative_goal]". Specify the subject, composition, lighting, material, and 4:5 framing. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Preserve the sculpture silhouette and subtle surface texture. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a small stone sculpture on a matte plinth. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Preserve the sculpture silhouette and subtle surface texture. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a small stone sculpture on a matte plinth. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Preserve the sculpture silhouette and subtle surface texture. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 4:5 / single frame. No rendered result is claimed.

### Success criteria

- Preserve the sculpture silhouette and subtle surface texture.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## lighting_21 — Night interior / Locked-off study

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring an empty reading room with one brass desk lamp for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use a plausible motivated light source rather than unexplained glowing surfaces. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an empty reading room with one brass desk lamp. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Use a plausible motivated light source rather than unexplained glowing surfaces. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an empty reading room with one brass desk lamp. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Use a plausible motivated light source rather than unexplained glowing surfaces. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 16:9 / single frame. No rendered result is claimed.

### Success criteria

- Use a plausible motivated light source rather than unexplained glowing surfaces.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## lighting_22 — Night interior / Slow push-in

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring an empty reading room with one brass desk lamp for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use a plausible motivated light source rather than unexplained glowing surfaces. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an empty reading room with one brass desk lamp. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Use a plausible motivated light source rather than unexplained glowing surfaces. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an empty reading room with one brass desk lamp. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Use a plausible motivated light source rather than unexplained glowing surfaces. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Use a plausible motivated light source rather than unexplained glowing surfaces.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## lighting_23 — Night interior / Lateral track

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring an empty reading room with one brass desk lamp for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use a plausible motivated light source rather than unexplained glowing surfaces. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an empty reading room with one brass desk lamp. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Use a plausible motivated light source rather than unexplained glowing surfaces. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an empty reading room with one brass desk lamp. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Use a plausible motivated light source rather than unexplained glowing surfaces. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Use a plausible motivated light source rather than unexplained glowing surfaces.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## lighting_24 — Night interior / Detail to reveal

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring an empty reading room with one brass desk lamp for "[creative_goal]". Specify the subject, composition, lighting, material, and 9:16 framing. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a plausible motivated light source rather than unexplained glowing surfaces. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an empty reading room with one brass desk lamp. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Use a plausible motivated light source rather than unexplained glowing surfaces. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an empty reading room with one brass desk lamp. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting 6 seconds, subject to model support. Use a plausible motivated light source rather than unexplained glowing surfaces. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 9:16 / 6-second target. No rendered result is claimed.

### Success criteria

- Use a plausible motivated light source rather than unexplained glowing surfaces.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## lighting_25 — Night interior / Editorial hero

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring an empty reading room with one brass desk lamp for "[creative_goal]". Specify the subject, composition, lighting, material, and 4:5 framing. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use a plausible motivated light source rather than unexplained glowing surfaces. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an empty reading room with one brass desk lamp. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Use a plausible motivated light source rather than unexplained glowing surfaces. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an empty reading room with one brass desk lamp. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Use a plausible motivated light source rather than unexplained glowing surfaces. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 4:5 / single frame. No rendered result is claimed.

### Success criteria

- Use a plausible motivated light source rather than unexplained glowing surfaces.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.
