# Visual Effects — Atelier prompt edition

Copy a paragraph, replace its quoted placeholders, and review the success criteria. Examples are illustrative, not independently verified outcomes.

## visual_effects_01 — Dust reveal / Locked-off study

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring an original stone sculpture emerging from a thin veil of dust for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Keep dust scale and direction physically plausible; maintain the sculpture silhouette. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an original stone sculpture emerging from a thin veil of dust. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep dust scale and direction physically plausible; maintain the sculpture silhouette. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an original stone sculpture emerging from a thin veil of dust. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep dust scale and direction physically plausible; maintain the sculpture silhouette. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 16:9 / single frame. No rendered result is claimed.

### Success criteria

- Keep dust scale and direction physically plausible; maintain the sculpture silhouette.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## visual_effects_02 — Dust reveal / Slow push-in

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring an original stone sculpture emerging from a thin veil of dust for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Keep dust scale and direction physically plausible; maintain the sculpture silhouette. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an original stone sculpture emerging from a thin veil of dust. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Keep dust scale and direction physically plausible; maintain the sculpture silhouette. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an original stone sculpture emerging from a thin veil of dust. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Keep dust scale and direction physically plausible; maintain the sculpture silhouette. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Keep dust scale and direction physically plausible; maintain the sculpture silhouette.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## visual_effects_03 — Dust reveal / Lateral track

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring an original stone sculpture emerging from a thin veil of dust for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Keep dust scale and direction physically plausible; maintain the sculpture silhouette. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an original stone sculpture emerging from a thin veil of dust. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Keep dust scale and direction physically plausible; maintain the sculpture silhouette. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an original stone sculpture emerging from a thin veil of dust. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Keep dust scale and direction physically plausible; maintain the sculpture silhouette. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Keep dust scale and direction physically plausible; maintain the sculpture silhouette.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## visual_effects_04 — Dust reveal / Detail to reveal

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring an original stone sculpture emerging from a thin veil of dust for "[creative_goal]". Specify the subject, composition, lighting, material, and 9:16 framing. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Keep dust scale and direction physically plausible; maintain the sculpture silhouette. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an original stone sculpture emerging from a thin veil of dust. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Keep dust scale and direction physically plausible; maintain the sculpture silhouette. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an original stone sculpture emerging from a thin veil of dust. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting 6 seconds, subject to model support. Keep dust scale and direction physically plausible; maintain the sculpture silhouette. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 9:16 / 6-second target. No rendered result is claimed.

### Success criteria

- Keep dust scale and direction physically plausible; maintain the sculpture silhouette.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## visual_effects_05 — Dust reveal / Editorial hero

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring an original stone sculpture emerging from a thin veil of dust for "[creative_goal]". Specify the subject, composition, lighting, material, and 4:5 framing. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Keep dust scale and direction physically plausible; maintain the sculpture silhouette. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an original stone sculpture emerging from a thin veil of dust. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep dust scale and direction physically plausible; maintain the sculpture silhouette. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an original stone sculpture emerging from a thin veil of dust. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep dust scale and direction physically plausible; maintain the sculpture silhouette. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 4:5 / single frame. No rendered result is claimed.

### Success criteria

- Keep dust scale and direction physically plausible; maintain the sculpture silhouette.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## visual_effects_06 — Water interaction / Locked-off study

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring a smooth pebble dropping into a shallow dark pool for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use a coherent impact, expanding ripples, and realistic reflections; no impossible splash timing. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a smooth pebble dropping into a shallow dark pool. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Use a coherent impact, expanding ripples, and realistic reflections; no impossible splash timing. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a smooth pebble dropping into a shallow dark pool. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Use a coherent impact, expanding ripples, and realistic reflections; no impossible splash timing. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 16:9 / single frame. No rendered result is claimed.

### Success criteria

- Use a coherent impact, expanding ripples, and realistic reflections; no impossible splash timing.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## visual_effects_07 — Water interaction / Slow push-in

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a smooth pebble dropping into a shallow dark pool for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use a coherent impact, expanding ripples, and realistic reflections; no impossible splash timing. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a smooth pebble dropping into a shallow dark pool. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Use a coherent impact, expanding ripples, and realistic reflections; no impossible splash timing. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a smooth pebble dropping into a shallow dark pool. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Use a coherent impact, expanding ripples, and realistic reflections; no impossible splash timing. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Use a coherent impact, expanding ripples, and realistic reflections; no impossible splash timing.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## visual_effects_08 — Water interaction / Lateral track

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a smooth pebble dropping into a shallow dark pool for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use a coherent impact, expanding ripples, and realistic reflections; no impossible splash timing. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a smooth pebble dropping into a shallow dark pool. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Use a coherent impact, expanding ripples, and realistic reflections; no impossible splash timing. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a smooth pebble dropping into a shallow dark pool. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Use a coherent impact, expanding ripples, and realistic reflections; no impossible splash timing. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Use a coherent impact, expanding ripples, and realistic reflections; no impossible splash timing.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## visual_effects_09 — Water interaction / Detail to reveal

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a smooth pebble dropping into a shallow dark pool for "[creative_goal]". Specify the subject, composition, lighting, material, and 9:16 framing. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a coherent impact, expanding ripples, and realistic reflections; no impossible splash timing. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a smooth pebble dropping into a shallow dark pool. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Use a coherent impact, expanding ripples, and realistic reflections; no impossible splash timing. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a smooth pebble dropping into a shallow dark pool. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting 6 seconds, subject to model support. Use a coherent impact, expanding ripples, and realistic reflections; no impossible splash timing. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 9:16 / 6-second target. No rendered result is claimed.

### Success criteria

- Use a coherent impact, expanding ripples, and realistic reflections; no impossible splash timing.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## visual_effects_10 — Water interaction / Editorial hero

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring a smooth pebble dropping into a shallow dark pool for "[creative_goal]". Specify the subject, composition, lighting, material, and 4:5 framing. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use a coherent impact, expanding ripples, and realistic reflections; no impossible splash timing. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a smooth pebble dropping into a shallow dark pool. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Use a coherent impact, expanding ripples, and realistic reflections; no impossible splash timing. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a smooth pebble dropping into a shallow dark pool. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Use a coherent impact, expanding ripples, and realistic reflections; no impossible splash timing. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 4:5 / single frame. No rendered result is claimed.

### Success criteria

- Use a coherent impact, expanding ripples, and realistic reflections; no impossible splash timing.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## visual_effects_11 — Fabric motion / Locked-off study

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring a pale silk ribbon suspended against a dark background for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Keep ribbon length and weave consistent; use smooth cloth motion without merging edges. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a pale silk ribbon suspended against a dark background. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep ribbon length and weave consistent; use smooth cloth motion without merging edges. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a pale silk ribbon suspended against a dark background. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep ribbon length and weave consistent; use smooth cloth motion without merging edges. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 16:9 / single frame. No rendered result is claimed.

### Success criteria

- Keep ribbon length and weave consistent; use smooth cloth motion without merging edges.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## visual_effects_12 — Fabric motion / Slow push-in

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a pale silk ribbon suspended against a dark background for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Keep ribbon length and weave consistent; use smooth cloth motion without merging edges. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a pale silk ribbon suspended against a dark background. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Keep ribbon length and weave consistent; use smooth cloth motion without merging edges. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a pale silk ribbon suspended against a dark background. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Keep ribbon length and weave consistent; use smooth cloth motion without merging edges. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Keep ribbon length and weave consistent; use smooth cloth motion without merging edges.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## visual_effects_13 — Fabric motion / Lateral track

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a pale silk ribbon suspended against a dark background for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Keep ribbon length and weave consistent; use smooth cloth motion without merging edges. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a pale silk ribbon suspended against a dark background. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Keep ribbon length and weave consistent; use smooth cloth motion without merging edges. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a pale silk ribbon suspended against a dark background. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Keep ribbon length and weave consistent; use smooth cloth motion without merging edges. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Keep ribbon length and weave consistent; use smooth cloth motion without merging edges.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## visual_effects_14 — Fabric motion / Detail to reveal

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a pale silk ribbon suspended against a dark background for "[creative_goal]". Specify the subject, composition, lighting, material, and 9:16 framing. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Keep ribbon length and weave consistent; use smooth cloth motion without merging edges. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a pale silk ribbon suspended against a dark background. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Keep ribbon length and weave consistent; use smooth cloth motion without merging edges. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a pale silk ribbon suspended against a dark background. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting 6 seconds, subject to model support. Keep ribbon length and weave consistent; use smooth cloth motion without merging edges. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 9:16 / 6-second target. No rendered result is claimed.

### Success criteria

- Keep ribbon length and weave consistent; use smooth cloth motion without merging edges.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## visual_effects_15 — Fabric motion / Editorial hero

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring a pale silk ribbon suspended against a dark background for "[creative_goal]". Specify the subject, composition, lighting, material, and 4:5 framing. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Keep ribbon length and weave consistent; use smooth cloth motion without merging edges. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a pale silk ribbon suspended against a dark background. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep ribbon length and weave consistent; use smooth cloth motion without merging edges. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a pale silk ribbon suspended against a dark background. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep ribbon length and weave consistent; use smooth cloth motion without merging edges. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 4:5 / single frame. No rendered result is claimed.

### Success criteria

- Keep ribbon length and weave consistent; use smooth cloth motion without merging edges.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## visual_effects_16 — Light sweep / Locked-off study

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring an unbranded brushed-metal object under a moving strip light for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Move illumination rather than deforming the object; keep reflections consistent with its surface. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an unbranded brushed-metal object under a moving strip light. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Move illumination rather than deforming the object; keep reflections consistent with its surface. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an unbranded brushed-metal object under a moving strip light. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Move illumination rather than deforming the object; keep reflections consistent with its surface. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 16:9 / single frame. No rendered result is claimed.

### Success criteria

- Move illumination rather than deforming the object; keep reflections consistent with its surface.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## visual_effects_17 — Light sweep / Slow push-in

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring an unbranded brushed-metal object under a moving strip light for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Move illumination rather than deforming the object; keep reflections consistent with its surface. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an unbranded brushed-metal object under a moving strip light. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Move illumination rather than deforming the object; keep reflections consistent with its surface. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an unbranded brushed-metal object under a moving strip light. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Move illumination rather than deforming the object; keep reflections consistent with its surface. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Move illumination rather than deforming the object; keep reflections consistent with its surface.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## visual_effects_18 — Light sweep / Lateral track

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring an unbranded brushed-metal object under a moving strip light for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Move illumination rather than deforming the object; keep reflections consistent with its surface. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an unbranded brushed-metal object under a moving strip light. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Move illumination rather than deforming the object; keep reflections consistent with its surface. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an unbranded brushed-metal object under a moving strip light. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Move illumination rather than deforming the object; keep reflections consistent with its surface. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Move illumination rather than deforming the object; keep reflections consistent with its surface.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## visual_effects_19 — Light sweep / Detail to reveal

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring an unbranded brushed-metal object under a moving strip light for "[creative_goal]". Specify the subject, composition, lighting, material, and 9:16 framing. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Move illumination rather than deforming the object; keep reflections consistent with its surface. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an unbranded brushed-metal object under a moving strip light. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Move illumination rather than deforming the object; keep reflections consistent with its surface. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an unbranded brushed-metal object under a moving strip light. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting 6 seconds, subject to model support. Move illumination rather than deforming the object; keep reflections consistent with its surface. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 9:16 / 6-second target. No rendered result is claimed.

### Success criteria

- Move illumination rather than deforming the object; keep reflections consistent with its surface.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## visual_effects_20 — Light sweep / Editorial hero

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring an unbranded brushed-metal object under a moving strip light for "[creative_goal]". Specify the subject, composition, lighting, material, and 4:5 framing. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Move illumination rather than deforming the object; keep reflections consistent with its surface. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an unbranded brushed-metal object under a moving strip light. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Move illumination rather than deforming the object; keep reflections consistent with its surface. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an unbranded brushed-metal object under a moving strip light. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Move illumination rather than deforming the object; keep reflections consistent with its surface. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 4:5 / single frame. No rendered result is claimed.

### Success criteria

- Move illumination rather than deforming the object; keep reflections consistent with its surface.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## visual_effects_21 — Atmospheric transition / Locked-off study

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring an empty woodland path with a low layer of mist for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use gentle drifting mist with stable trees and no sudden weather discontinuity. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an empty woodland path with a low layer of mist. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Use gentle drifting mist with stable trees and no sudden weather discontinuity. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an empty woodland path with a low layer of mist. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Use gentle drifting mist with stable trees and no sudden weather discontinuity. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 16:9 / single frame. No rendered result is claimed.

### Success criteria

- Use gentle drifting mist with stable trees and no sudden weather discontinuity.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## visual_effects_22 — Atmospheric transition / Slow push-in

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring an empty woodland path with a low layer of mist for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use gentle drifting mist with stable trees and no sudden weather discontinuity. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an empty woodland path with a low layer of mist. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Use gentle drifting mist with stable trees and no sudden weather discontinuity. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an empty woodland path with a low layer of mist. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Use gentle drifting mist with stable trees and no sudden weather discontinuity. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Use gentle drifting mist with stable trees and no sudden weather discontinuity.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## visual_effects_23 — Atmospheric transition / Lateral track

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring an empty woodland path with a low layer of mist for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use gentle drifting mist with stable trees and no sudden weather discontinuity. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an empty woodland path with a low layer of mist. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Use gentle drifting mist with stable trees and no sudden weather discontinuity. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an empty woodland path with a low layer of mist. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Use gentle drifting mist with stable trees and no sudden weather discontinuity. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Use gentle drifting mist with stable trees and no sudden weather discontinuity.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## visual_effects_24 — Atmospheric transition / Detail to reveal

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring an empty woodland path with a low layer of mist for "[creative_goal]". Specify the subject, composition, lighting, material, and 9:16 framing. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use gentle drifting mist with stable trees and no sudden weather discontinuity. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an empty woodland path with a low layer of mist. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Use gentle drifting mist with stable trees and no sudden weather discontinuity. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an empty woodland path with a low layer of mist. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting 6 seconds, subject to model support. Use gentle drifting mist with stable trees and no sudden weather discontinuity. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 9:16 / 6-second target. No rendered result is claimed.

### Success criteria

- Use gentle drifting mist with stable trees and no sudden weather discontinuity.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## visual_effects_25 — Atmospheric transition / Editorial hero

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring an empty woodland path with a low layer of mist for "[creative_goal]". Specify the subject, composition, lighting, material, and 4:5 framing. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use gentle drifting mist with stable trees and no sudden weather discontinuity. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an empty woodland path with a low layer of mist. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Use gentle drifting mist with stable trees and no sudden weather discontinuity. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an empty woodland path with a low layer of mist. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Use gentle drifting mist with stable trees and no sudden weather discontinuity. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 4:5 / single frame. No rendered result is claimed.

### Success criteria

- Use gentle drifting mist with stable trees and no sudden weather discontinuity.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.
