# Camera Motion — Atelier prompt edition

Copy a paragraph, replace its quoted placeholders, and review the success criteria. Examples are illustrative, not independently verified outcomes.

## camera_motion_01 — Orbit portrait / Locked-off study

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring a fictional explorer in a weathered orange flight suit standing on a basalt ridge for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Keep the face, suit seams, and horizon consistent as the camera moves. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a fictional explorer in a weathered orange flight suit standing on a basalt ridge. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep the face, suit seams, and horizon consistent as the camera moves. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a fictional explorer in a weathered orange flight suit standing on a basalt ridge. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep the face, suit seams, and horizon consistent as the camera moves. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 16:9 / single frame. No rendered result is claimed.

### Success criteria

- Keep the face, suit seams, and horizon consistent as the camera moves.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## camera_motion_02 — Orbit portrait / Slow push-in

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a fictional explorer in a weathered orange flight suit standing on a basalt ridge for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Keep the face, suit seams, and horizon consistent as the camera moves. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a fictional explorer in a weathered orange flight suit standing on a basalt ridge. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Keep the face, suit seams, and horizon consistent as the camera moves. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a fictional explorer in a weathered orange flight suit standing on a basalt ridge. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Keep the face, suit seams, and horizon consistent as the camera moves. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Keep the face, suit seams, and horizon consistent as the camera moves.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## camera_motion_03 — Orbit portrait / Lateral track

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a fictional explorer in a weathered orange flight suit standing on a basalt ridge for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Keep the face, suit seams, and horizon consistent as the camera moves. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a fictional explorer in a weathered orange flight suit standing on a basalt ridge. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Keep the face, suit seams, and horizon consistent as the camera moves. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a fictional explorer in a weathered orange flight suit standing on a basalt ridge. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Keep the face, suit seams, and horizon consistent as the camera moves. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Keep the face, suit seams, and horizon consistent as the camera moves.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## camera_motion_04 — Orbit portrait / Detail to reveal

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a fictional explorer in a weathered orange flight suit standing on a basalt ridge for "[creative_goal]". Specify the subject, composition, lighting, material, and 9:16 framing. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Keep the face, suit seams, and horizon consistent as the camera moves. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a fictional explorer in a weathered orange flight suit standing on a basalt ridge. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Keep the face, suit seams, and horizon consistent as the camera moves. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a fictional explorer in a weathered orange flight suit standing on a basalt ridge. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting 6 seconds, subject to model support. Keep the face, suit seams, and horizon consistent as the camera moves. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 9:16 / 6-second target. No rendered result is claimed.

### Success criteria

- Keep the face, suit seams, and horizon consistent as the camera moves.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## camera_motion_05 — Orbit portrait / Editorial hero

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring a fictional explorer in a weathered orange flight suit standing on a basalt ridge for "[creative_goal]". Specify the subject, composition, lighting, material, and 4:5 framing. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Keep the face, suit seams, and horizon consistent as the camera moves. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a fictional explorer in a weathered orange flight suit standing on a basalt ridge. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep the face, suit seams, and horizon consistent as the camera moves. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a fictional explorer in a weathered orange flight suit standing on a basalt ridge. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep the face, suit seams, and horizon consistent as the camera moves. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 4:5 / single frame. No rendered result is claimed.

### Success criteria

- Keep the face, suit seams, and horizon consistent as the camera moves.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## camera_motion_06 — Architectural reveal / Locked-off study

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring a concrete observatory partly concealed by a rocky foreground for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Preserve straight building edges and coherent parallax; do not invent extra structures. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a concrete observatory partly concealed by a rocky foreground. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Preserve straight building edges and coherent parallax; do not invent extra structures. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a concrete observatory partly concealed by a rocky foreground. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Preserve straight building edges and coherent parallax; do not invent extra structures. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 16:9 / single frame. No rendered result is claimed.

### Success criteria

- Preserve straight building edges and coherent parallax; do not invent extra structures.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## camera_motion_07 — Architectural reveal / Slow push-in

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a concrete observatory partly concealed by a rocky foreground for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Preserve straight building edges and coherent parallax; do not invent extra structures. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a concrete observatory partly concealed by a rocky foreground. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Preserve straight building edges and coherent parallax; do not invent extra structures. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a concrete observatory partly concealed by a rocky foreground. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Preserve straight building edges and coherent parallax; do not invent extra structures. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Preserve straight building edges and coherent parallax; do not invent extra structures.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## camera_motion_08 — Architectural reveal / Lateral track

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a concrete observatory partly concealed by a rocky foreground for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Preserve straight building edges and coherent parallax; do not invent extra structures. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a concrete observatory partly concealed by a rocky foreground. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Preserve straight building edges and coherent parallax; do not invent extra structures. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a concrete observatory partly concealed by a rocky foreground. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Preserve straight building edges and coherent parallax; do not invent extra structures. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Preserve straight building edges and coherent parallax; do not invent extra structures.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## camera_motion_09 — Architectural reveal / Detail to reveal

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a concrete observatory partly concealed by a rocky foreground for "[creative_goal]". Specify the subject, composition, lighting, material, and 9:16 framing. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Preserve straight building edges and coherent parallax; do not invent extra structures. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a concrete observatory partly concealed by a rocky foreground. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Preserve straight building edges and coherent parallax; do not invent extra structures. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a concrete observatory partly concealed by a rocky foreground. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting 6 seconds, subject to model support. Preserve straight building edges and coherent parallax; do not invent extra structures. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 9:16 / 6-second target. No rendered result is claimed.

### Success criteria

- Preserve straight building edges and coherent parallax; do not invent extra structures.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## camera_motion_10 — Architectural reveal / Editorial hero

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring a concrete observatory partly concealed by a rocky foreground for "[creative_goal]". Specify the subject, composition, lighting, material, and 4:5 framing. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Preserve straight building edges and coherent parallax; do not invent extra structures. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a concrete observatory partly concealed by a rocky foreground. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Preserve straight building edges and coherent parallax; do not invent extra structures. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a concrete observatory partly concealed by a rocky foreground. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Preserve straight building edges and coherent parallax; do not invent extra structures. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 4:5 / single frame. No rendered result is claimed.

### Success criteria

- Preserve straight building edges and coherent parallax; do not invent extra structures.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## camera_motion_11 — Street pursuit / Locked-off study

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring a cyclist passing shuttered storefronts at blue hour for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Keep wheel geometry, direction of travel, and street layout consistent. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a cyclist passing shuttered storefronts at blue hour. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep wheel geometry, direction of travel, and street layout consistent. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a cyclist passing shuttered storefronts at blue hour. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep wheel geometry, direction of travel, and street layout consistent. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 16:9 / single frame. No rendered result is claimed.

### Success criteria

- Keep wheel geometry, direction of travel, and street layout consistent.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## camera_motion_12 — Street pursuit / Slow push-in

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a cyclist passing shuttered storefronts at blue hour for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Keep wheel geometry, direction of travel, and street layout consistent. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a cyclist passing shuttered storefronts at blue hour. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Keep wheel geometry, direction of travel, and street layout consistent. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a cyclist passing shuttered storefronts at blue hour. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Keep wheel geometry, direction of travel, and street layout consistent. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Keep wheel geometry, direction of travel, and street layout consistent.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## camera_motion_13 — Street pursuit / Lateral track

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a cyclist passing shuttered storefronts at blue hour for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Keep wheel geometry, direction of travel, and street layout consistent. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a cyclist passing shuttered storefronts at blue hour. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Keep wheel geometry, direction of travel, and street layout consistent. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a cyclist passing shuttered storefronts at blue hour. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Keep wheel geometry, direction of travel, and street layout consistent. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Keep wheel geometry, direction of travel, and street layout consistent.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## camera_motion_14 — Street pursuit / Detail to reveal

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a cyclist passing shuttered storefronts at blue hour for "[creative_goal]". Specify the subject, composition, lighting, material, and 9:16 framing. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Keep wheel geometry, direction of travel, and street layout consistent. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a cyclist passing shuttered storefronts at blue hour. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Keep wheel geometry, direction of travel, and street layout consistent. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a cyclist passing shuttered storefronts at blue hour. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting 6 seconds, subject to model support. Keep wheel geometry, direction of travel, and street layout consistent. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 9:16 / 6-second target. No rendered result is claimed.

### Success criteria

- Keep wheel geometry, direction of travel, and street layout consistent.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## camera_motion_15 — Street pursuit / Editorial hero

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring a cyclist passing shuttered storefronts at blue hour for "[creative_goal]". Specify the subject, composition, lighting, material, and 4:5 framing. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Keep wheel geometry, direction of travel, and street layout consistent. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a cyclist passing shuttered storefronts at blue hour. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep wheel geometry, direction of travel, and street layout consistent. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a cyclist passing shuttered storefronts at blue hour. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep wheel geometry, direction of travel, and street layout consistent. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 4:5 / single frame. No rendered result is claimed.

### Success criteria

- Keep wheel geometry, direction of travel, and street layout consistent.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## camera_motion_16 — Nature macro / Locked-off study

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring a dew-covered fern beside a dark forest stream for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Maintain plant structure and realistic focus falloff; avoid elastic leaves. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a dew-covered fern beside a dark forest stream. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Maintain plant structure and realistic focus falloff; avoid elastic leaves. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a dew-covered fern beside a dark forest stream. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Maintain plant structure and realistic focus falloff; avoid elastic leaves. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 16:9 / single frame. No rendered result is claimed.

### Success criteria

- Maintain plant structure and realistic focus falloff; avoid elastic leaves.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## camera_motion_17 — Nature macro / Slow push-in

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a dew-covered fern beside a dark forest stream for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Maintain plant structure and realistic focus falloff; avoid elastic leaves. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a dew-covered fern beside a dark forest stream. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Maintain plant structure and realistic focus falloff; avoid elastic leaves. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a dew-covered fern beside a dark forest stream. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Maintain plant structure and realistic focus falloff; avoid elastic leaves. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Maintain plant structure and realistic focus falloff; avoid elastic leaves.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## camera_motion_18 — Nature macro / Lateral track

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a dew-covered fern beside a dark forest stream for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Maintain plant structure and realistic focus falloff; avoid elastic leaves. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a dew-covered fern beside a dark forest stream. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Maintain plant structure and realistic focus falloff; avoid elastic leaves. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a dew-covered fern beside a dark forest stream. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Maintain plant structure and realistic focus falloff; avoid elastic leaves. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Maintain plant structure and realistic focus falloff; avoid elastic leaves.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## camera_motion_19 — Nature macro / Detail to reveal

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a dew-covered fern beside a dark forest stream for "[creative_goal]". Specify the subject, composition, lighting, material, and 9:16 framing. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Maintain plant structure and realistic focus falloff; avoid elastic leaves. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a dew-covered fern beside a dark forest stream. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Maintain plant structure and realistic focus falloff; avoid elastic leaves. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a dew-covered fern beside a dark forest stream. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting 6 seconds, subject to model support. Maintain plant structure and realistic focus falloff; avoid elastic leaves. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 9:16 / 6-second target. No rendered result is claimed.

### Success criteria

- Maintain plant structure and realistic focus falloff; avoid elastic leaves.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## camera_motion_20 — Nature macro / Editorial hero

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring a dew-covered fern beside a dark forest stream for "[creative_goal]". Specify the subject, composition, lighting, material, and 4:5 framing. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Maintain plant structure and realistic focus falloff; avoid elastic leaves. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a dew-covered fern beside a dark forest stream. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Maintain plant structure and realistic focus falloff; avoid elastic leaves. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a dew-covered fern beside a dark forest stream. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Maintain plant structure and realistic focus falloff; avoid elastic leaves. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 4:5 / single frame. No rendered result is claimed.

### Success criteria

- Maintain plant structure and realistic focus falloff; avoid elastic leaves.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## camera_motion_21 — Tabletop movement / Locked-off study

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring a ceramic cup on a walnut table beside a folded linen napkin for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Keep the handle on the same side and maintain contact shadows. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a ceramic cup on a walnut table beside a folded linen napkin. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep the handle on the same side and maintain contact shadows. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a ceramic cup on a walnut table beside a folded linen napkin. A locked-off composition with deliberate negative space, layered foreground and background, and no camera movement. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep the handle on the same side and maintain contact shadows. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 16:9 / single frame. No rendered result is claimed.

### Success criteria

- Keep the handle on the same side and maintain contact shadows.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## camera_motion_22 — Tabletop movement / Slow push-in

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a ceramic cup on a walnut table beside a folded linen napkin for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Keep the handle on the same side and maintain contact shadows. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a ceramic cup on a walnut table beside a folded linen napkin. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Keep the handle on the same side and maintain contact shadows. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a ceramic cup on a walnut table beside a folded linen napkin. A single continuous slow push-in toward the subject with coherent perspective and subtle environmental motion. Use soft directional side light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Keep the handle on the same side and maintain contact shadows. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Keep the handle on the same side and maintain contact shadows.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## camera_motion_23 — Tabletop movement / Lateral track

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a ceramic cup on a walnut table beside a folded linen napkin for "[creative_goal]". Specify the subject, composition, lighting, material, and 16:9 framing. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Keep the handle on the same side and maintain contact shadows. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a ceramic cup on a walnut table beside a folded linen napkin. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Keep the handle on the same side and maintain contact shadows. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a ceramic cup on a walnut table beside a folded linen napkin. A single smooth left-to-right lateral track with controlled parallax; do not orbit or cut. Use warm low-angle rim light and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 16:9. Plan one continuous shot lasting 6 seconds, subject to model support. Keep the handle on the same side and maintain contact shadows. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 16:9 / 6-second target. No rendered result is claimed.

### Success criteria

- Keep the handle on the same side and maintain contact shadows.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## camera_motion_24 — Tabletop movement / Detail to reveal

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a video generation prompt featuring a ceramic cup on a walnut table beside a folded linen napkin for "[creative_goal]". Specify the subject, composition, lighting, material, and 9:16 framing. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Keep the handle on the same side and maintain contact shadows. Plan one continuous shot lasting "[duration_seconds]" seconds, subject to model support. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a ceramic cup on a walnut table beside a folded linen napkin. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting [duration_seconds] seconds, subject to model support. Keep the handle on the same side and maintain contact shadows. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[duration_seconds]** (optional/defaultable): Choose a target duration; confirm the selected generation model supports it. Example: 6
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a ceramic cup on a walnut table beside a folded linen napkin. Begin on a tactile close detail, then slowly pull back to reveal the full subject; maintain material continuity. Use a broad diffused key and restrained fill and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 9:16. Plan one continuous shot lasting 6 seconds, subject to model support. Keep the handle on the same side and maintain contact shadows. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, temporal flicker, unrequested cuts, elastic motion. Use original subjects and authorized material.
Format: video / 9:16 / 6-second target. No rendered result is claimed.

### Success criteria

- Keep the handle on the same side and maintain contact shadows.
- Motion and framing describe one coherent shot, not contradictory camera commands.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.

## camera_motion_25 — Tabletop movement / Editorial hero

### Assistant brief

Act as a cinematographer and visual prompt director. Prepare a production-ready prompt, not a claim that media has been generated. Write a image generation prompt featuring a ceramic cup on a walnut table beside a folded linen napkin for "[creative_goal]". Specify the subject, composition, lighting, material, and 4:5 framing. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Keep the handle on the same side and maintain contact shadows. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Respect "[additional_constraints]". Never claim a render, reference upload, or model capability that has not been verified. Return a directly usable positive prompt first, then a short avoid list and shot specification. Use "[difficulty]" depth: beginner keeps one subject and simple staging; intermediate adds motivated depth and continuity; expert adds optical behavior and explicit failure criteria. Keep generation text separate from assistant instructions. Ask for an actual authorized image when the brief requires one; never pretend that a reference or render exists.

### Direct visual-generation prompt

Depict a ceramic cup on a walnut table beside a folded linen napkin. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep the handle on the same side and maintain contact shadows. Creative purpose: [creative_goal]. Additional constraints: [additional_constraints]. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.

Supply an actual authorized reference if required. A filename is not an image attachment.

### Inputs

- **[creative_goal]** (required): Describe what the visual should make the viewer notice or feel, and where it will be used. Example: A calm, premium opening shot for a short product film.
- **[additional_constraints]** (optional/defaultable): Add non-negotiables, exclusions, access needs, budget, or tools; say none if there are no extras. Example: No paid tools; keep the result accessible.
- **[difficulty]** (optional/defaultable): Choose how much guidance and technical depth you want. Example: intermediate

### Example output

Illustrative target prompt: Depict a ceramic cup on a walnut table beside a folded linen napkin. A bold editorial still with a strong silhouette, asymmetric balance, and one clear visual focal point. Use high-contrast motivated light with readable shadow detail and believable material texture, restrained grading, and deliberate visual hierarchy. Frame for 4:5. Resolve everything in one coherent still frame; do not describe a sequence of cuts. Keep the handle on the same side and maintain contact shadows. Creative purpose: a calm, premium editorial opening. Additional constraints: no on-screen text, no logos, no extra subjects. Avoid: Warped anatomy or geometry, inconsistent identity, contradictory shadows, unwanted text or logos, accidental duplicate objects, implausible perspective. Use original subjects and authorized material.
Format: image / 4:5 / single frame. No rendered result is claimed.

### Success criteria

- Keep the handle on the same side and maintain contact shadows.
- Composition describes a single instant, not a temporal sequence.
- Reference requirements, provider-dependent controls, and avoid directions are explicit.
