# Environments — Atelier prompt edition

Copy a paragraph, replace its quoted placeholders, and review the success criteria. Examples are illustrative, not independently verified outcomes.

## environments_01 — Brutalist retreat / Locked-off study

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring a remote concrete retreat above a fog-filled valley for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Preserve coherent architecture, horizon, and believable scale. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a remote concrete retreat above a fog-filled valley. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Preserve coherent architecture, horizon, and believable scale. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a remote concrete retreat above a fog-filled valley. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Preserve coherent architecture, horizon, and believable scale. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 16:9 / single frame. No rendered result is claimed.

### Success criteria

- Preserve coherent architecture, horizon, and believable scale.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## environments_02 — Brutalist retreat / Slow push-in

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a remote concrete retreat above a fog-filled valley for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Preserve coherent architecture, horizon, and believable scale. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a remote concrete retreat above a fog-filled valley. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Preserve coherent architecture, horizon, and believable scale. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a remote concrete retreat above a fog-filled valley. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Preserve coherent architecture, horizon, and believable scale. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Preserve coherent architecture, horizon, and believable scale.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## environments_03 — Brutalist retreat / Lateral track

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a remote concrete retreat above a fog-filled valley for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Preserve coherent architecture, horizon, and believable scale. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a remote concrete retreat above a fog-filled valley. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Preserve coherent architecture, horizon, and believable scale. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a remote concrete retreat above a fog-filled valley. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Preserve coherent architecture, horizon, and believable scale. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Preserve coherent architecture, horizon, and believable scale.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## environments_04 — Brutalist retreat / Detail to reveal

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a remote concrete retreat above a fog-filled valley for "[creative_goal]". Specify the subject, composition, lighting, material, and 9:16 framing. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Preserve coherent architecture, horizon, and believable scale. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a remote concrete retreat above a fog-filled valley. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Preserve coherent architecture, horizon, and believable scale. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a remote concrete retreat above a fog-filled valley. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting 6 seconds, subject to model support. Preserve coherent architecture, horizon, and believable scale. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 9:16 / 6-second target. No rendered result is claimed.

### Success criteria

- Preserve coherent architecture, horizon, and believable scale.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## environments_05 — Brutalist retreat / Editorial hero

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring a remote concrete retreat above a fog-filled valley for "[creative_goal]". Specify the subject, composition, lighting, material, and 4:5 framing. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Preserve coherent architecture, horizon, and believable scale. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a remote concrete retreat above a fog-filled valley. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Preserve coherent architecture, horizon, and believable scale. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a remote concrete retreat above a fog-filled valley. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Preserve coherent architecture, horizon, and believable scale. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 4:5 / single frame. No rendered result is claimed.

### Success criteria

- Preserve coherent architecture, horizon, and believable scale.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## environments_06 — Forest sanctuary / Locked-off study

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring a mossy woodland clearing with a narrow stream for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Keep water direction, tree positions, and lighting consistent. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a mossy woodland clearing with a narrow stream. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep water direction, tree positions, and lighting consistent. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a mossy woodland clearing with a narrow stream. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep water direction, tree positions, and lighting consistent. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 16:9 / single frame. No rendered result is claimed.

### Success criteria

- Keep water direction, tree positions, and lighting consistent.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## environments_07 — Forest sanctuary / Slow push-in

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a mossy woodland clearing with a narrow stream for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Keep water direction, tree positions, and lighting consistent. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a mossy woodland clearing with a narrow stream. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Keep water direction, tree positions, and lighting consistent. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a mossy woodland clearing with a narrow stream. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Keep water direction, tree positions, and lighting consistent. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Keep water direction, tree positions, and lighting consistent.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## environments_08 — Forest sanctuary / Lateral track

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a mossy woodland clearing with a narrow stream for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Keep water direction, tree positions, and lighting consistent. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a mossy woodland clearing with a narrow stream. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Keep water direction, tree positions, and lighting consistent. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a mossy woodland clearing with a narrow stream. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Keep water direction, tree positions, and lighting consistent. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Keep water direction, tree positions, and lighting consistent.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## environments_09 — Forest sanctuary / Detail to reveal

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a mossy woodland clearing with a narrow stream for "[creative_goal]". Specify the subject, composition, lighting, material, and 9:16 framing. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Keep water direction, tree positions, and lighting consistent. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a mossy woodland clearing with a narrow stream. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Keep water direction, tree positions, and lighting consistent. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a mossy woodland clearing with a narrow stream. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting 6 seconds, subject to model support. Keep water direction, tree positions, and lighting consistent. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 9:16 / 6-second target. No rendered result is claimed.

### Success criteria

- Keep water direction, tree positions, and lighting consistent.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## environments_10 — Forest sanctuary / Editorial hero

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring a mossy woodland clearing with a narrow stream for "[creative_goal]". Specify the subject, composition, lighting, material, and 4:5 framing. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Keep water direction, tree positions, and lighting consistent. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a mossy woodland clearing with a narrow stream. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep water direction, tree positions, and lighting consistent. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a mossy woodland clearing with a narrow stream. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep water direction, tree positions, and lighting consistent. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 4:5 / single frame. No rendered result is claimed.

### Success criteria

- Keep water direction, tree positions, and lighting consistent.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## environments_11 — Future transit / Locked-off study

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring an original near-future railway platform at dawn for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Maintain rail alignment and architecture; avoid pseudo-readable signage and unsafe visual instructions. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an original near-future railway platform at dawn. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Maintain rail alignment and architecture; avoid pseudo-readable signage and unsafe visual instructions. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an original near-future railway platform at dawn. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Maintain rail alignment and architecture; avoid pseudo-readable signage and unsafe visual instructions. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 16:9 / single frame. No rendered result is claimed.

### Success criteria

- Maintain rail alignment and architecture; avoid pseudo-readable signage and unsafe visual instructions.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## environments_12 — Future transit / Slow push-in

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring an original near-future railway platform at dawn for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Maintain rail alignment and architecture; avoid pseudo-readable signage and unsafe visual instructions. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an original near-future railway platform at dawn. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Maintain rail alignment and architecture; avoid pseudo-readable signage and unsafe visual instructions. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an original near-future railway platform at dawn. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Maintain rail alignment and architecture; avoid pseudo-readable signage and unsafe visual instructions. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Maintain rail alignment and architecture; avoid pseudo-readable signage and unsafe visual instructions.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## environments_13 — Future transit / Lateral track

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring an original near-future railway platform at dawn for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Maintain rail alignment and architecture; avoid pseudo-readable signage and unsafe visual instructions. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an original near-future railway platform at dawn. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Maintain rail alignment and architecture; avoid pseudo-readable signage and unsafe visual instructions. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an original near-future railway platform at dawn. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Maintain rail alignment and architecture; avoid pseudo-readable signage and unsafe visual instructions. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Maintain rail alignment and architecture; avoid pseudo-readable signage and unsafe visual instructions.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## environments_14 — Future transit / Detail to reveal

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring an original near-future railway platform at dawn for "[creative_goal]". Specify the subject, composition, lighting, material, and 9:16 framing. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Maintain rail alignment and architecture; avoid pseudo-readable signage and unsafe visual instructions. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an original near-future railway platform at dawn. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Maintain rail alignment and architecture; avoid pseudo-readable signage and unsafe visual instructions. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an original near-future railway platform at dawn. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting 6 seconds, subject to model support. Maintain rail alignment and architecture; avoid pseudo-readable signage and unsafe visual instructions. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 9:16 / 6-second target. No rendered result is claimed.

### Success criteria

- Maintain rail alignment and architecture; avoid pseudo-readable signage and unsafe visual instructions.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## environments_15 — Future transit / Editorial hero

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring an original near-future railway platform at dawn for "[creative_goal]". Specify the subject, composition, lighting, material, and 4:5 framing. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Maintain rail alignment and architecture; avoid pseudo-readable signage and unsafe visual instructions. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an original near-future railway platform at dawn. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Maintain rail alignment and architecture; avoid pseudo-readable signage and unsafe visual instructions. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an original near-future railway platform at dawn. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Maintain rail alignment and architecture; avoid pseudo-readable signage and unsafe visual instructions. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 4:5 / single frame. No rendered result is claimed.

### Success criteria

- Maintain rail alignment and architecture; avoid pseudo-readable signage and unsafe visual instructions.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## environments_16 — Coastal room / Locked-off study

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring a quiet limestone room overlooking a bright blue sea for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Preserve window geometry and water horizon; do not change the room layout. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a quiet limestone room overlooking a bright blue sea. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Preserve window geometry and water horizon; do not change the room layout. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a quiet limestone room overlooking a bright blue sea. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Preserve window geometry and water horizon; do not change the room layout. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 16:9 / single frame. No rendered result is claimed.

### Success criteria

- Preserve window geometry and water horizon; do not change the room layout.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## environments_17 — Coastal room / Slow push-in

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a quiet limestone room overlooking a bright blue sea for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Preserve window geometry and water horizon; do not change the room layout. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a quiet limestone room overlooking a bright blue sea. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Preserve window geometry and water horizon; do not change the room layout. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a quiet limestone room overlooking a bright blue sea. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Preserve window geometry and water horizon; do not change the room layout. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Preserve window geometry and water horizon; do not change the room layout.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## environments_18 — Coastal room / Lateral track

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a quiet limestone room overlooking a bright blue sea for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Preserve window geometry and water horizon; do not change the room layout. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a quiet limestone room overlooking a bright blue sea. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Preserve window geometry and water horizon; do not change the room layout. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a quiet limestone room overlooking a bright blue sea. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Preserve window geometry and water horizon; do not change the room layout. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Preserve window geometry and water horizon; do not change the room layout.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## environments_19 — Coastal room / Detail to reveal

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a quiet limestone room overlooking a bright blue sea for "[creative_goal]". Specify the subject, composition, lighting, material, and 9:16 framing. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Preserve window geometry and water horizon; do not change the room layout. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a quiet limestone room overlooking a bright blue sea. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Preserve window geometry and water horizon; do not change the room layout. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a quiet limestone room overlooking a bright blue sea. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting 6 seconds, subject to model support. Preserve window geometry and water horizon; do not change the room layout. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 9:16 / 6-second target. No rendered result is claimed.

### Success criteria

- Preserve window geometry and water horizon; do not change the room layout.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## environments_20 — Coastal room / Editorial hero

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring a quiet limestone room overlooking a bright blue sea for "[creative_goal]". Specify the subject, composition, lighting, material, and 4:5 framing. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Preserve window geometry and water horizon; do not change the room layout. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a quiet limestone room overlooking a bright blue sea. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Preserve window geometry and water horizon; do not change the room layout. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a quiet limestone room overlooking a bright blue sea. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Preserve window geometry and water horizon; do not change the room layout. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 4:5 / single frame. No rendered result is claimed.

### Success criteria

- Preserve window geometry and water horizon; do not change the room layout.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## environments_21 — Lunar landscape / Locked-off study

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring an original science-fiction outpost on a barren moon for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use a coherent fictional lighting model and preserve the outpost geometry. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an original science-fiction outpost on a barren moon. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Use a coherent fictional lighting model and preserve the outpost geometry. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an original science-fiction outpost on a barren moon. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Use a coherent fictional lighting model and preserve the outpost geometry. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 16:9 / single frame. No rendered result is claimed.

### Success criteria

- Use a coherent fictional lighting model and preserve the outpost geometry.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## environments_22 — Lunar landscape / Slow push-in

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring an original science-fiction outpost on a barren moon for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use a coherent fictional lighting model and preserve the outpost geometry. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an original science-fiction outpost on a barren moon. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Use a coherent fictional lighting model and preserve the outpost geometry. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an original science-fiction outpost on a barren moon. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Use a coherent fictional lighting model and preserve the outpost geometry. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Use a coherent fictional lighting model and preserve the outpost geometry.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## environments_23 — Lunar landscape / Lateral track

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring an original science-fiction outpost on a barren moon for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use a coherent fictional lighting model and preserve the outpost geometry. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an original science-fiction outpost on a barren moon. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Use a coherent fictional lighting model and preserve the outpost geometry. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an original science-fiction outpost on a barren moon. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Use a coherent fictional lighting model and preserve the outpost geometry. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Use a coherent fictional lighting model and preserve the outpost geometry.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## environments_24 — Lunar landscape / Detail to reveal

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring an original science-fiction outpost on a barren moon for "[creative_goal]". Specify the subject, composition, lighting, material, and 9:16 framing. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a coherent fictional lighting model and preserve the outpost geometry. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an original science-fiction outpost on a barren moon. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Use a coherent fictional lighting model and preserve the outpost geometry. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an original science-fiction outpost on a barren moon. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting 6 seconds, subject to model support. Use a coherent fictional lighting model and preserve the outpost geometry. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 9:16 / 6-second target. No rendered result is claimed.

### Success criteria

- Use a coherent fictional lighting model and preserve the outpost geometry.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## environments_25 — Lunar landscape / Editorial hero

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring an original science-fiction outpost on a barren moon for "[creative_goal]". Specify the subject, composition, lighting, material, and 4:5 framing. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use a coherent fictional lighting model and preserve the outpost geometry. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict an original science-fiction outpost on a barren moon. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Use a coherent fictional lighting model and preserve the outpost geometry. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict an original science-fiction outpost on a barren moon. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Use a coherent fictional lighting model and preserve the outpost geometry. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 4:5 / single frame. No rendered result is claimed.

### Success criteria

- Use a coherent fictional lighting model and preserve the outpost geometry.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.
