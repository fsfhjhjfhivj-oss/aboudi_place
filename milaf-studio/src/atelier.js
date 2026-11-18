// Atelier v5: conversation ergonomics, safe rich replies, explicit context, and optional browser speech.
const atelierDefaults = {
  tone: "warm",
  detail: "balanced",
  level: "intermediate",
  style: "partner",
  language: "auto",
  enterToSend: true,
};
const atelierOptions = {
  tone: ["warm", "professional", "direct", "playful"],
  detail: ["short", "balanced", "detailed"],
  level: ["beginner", "intermediate", "expert"],
  style: ["partner", "coach", "answer-first"],
  language: ["auto", "en", "es", "fr", "ar", "de", "pt", "ja"],
};
function atelierCleanPreferences(value) {
  const p = { ...atelierDefaults };
  if (value && typeof value === "object") {
    for (const [key, options] of Object.entries(atelierOptions))
      if (options.includes(value[key])) p[key] = value[key];
    p.enterToSend = value.enterToSend !== false;
  }
  return p;
}
const atelier = {
  preferences: atelierCleanPreferences(
    readStorage("milaf-atelier-conversation", {}),
  ),
  promptMode: "assistant",
  visibleMessages: 40,
  recognition: null,
  recording: false,
  speechConsent: false,
};
function atelierSelect(label, id, options) {
  return `<label class="field"><span>${label}</span><select id="${id}">${options.map(([value, title]) => `<option value="${value}">${title}</option>`).join("")}</select></label>`;
}
const navIcons = {
  explore: "◉",
  create: "✧",
  ai: "✦",
  storyboard: "▥",
  library: "⌕",
  projects: "▧",
};
document.querySelectorAll("#mainNav [data-go]").forEach((button) => {
  const span = document.createElement("span");
  span.className = "atelier-nav-icon";
  span.setAttribute("aria-hidden", "true");
  span.textContent = navIcons[button.dataset.go] || "◇";
  button.prepend(span);
});
const note = document.createElement("div");
note.className = "atelier-top-note";
note.textContent =
  "A little structure for your ideas. Space to make them yours.";
document.querySelector(".topbar").append(note);
document.querySelector(".intro h1").innerHTML =
  'From a rough idea<br>to <span class="serif">something remarkable.</span>';
document.querySelector(".intro p").innerHTML =
  "Make a scene. Solve a problem. Find the right words.<br>Your prompts, projects, and creative partner—in one calm workspace.";
document.querySelector(".hero-main img").src = ARTWORK["atelier-dawn"];
document.querySelector(".hero-main h2").innerHTML =
  "A different<br>point of view.";
$("aiView").querySelector(".workspace-heading h1").innerHTML =
  'What are you <span class="serif">imagining?</span>';
$("aiView").querySelector(".workspace-heading p").textContent =
  "Talk it through, shape a better prompt, or build a visual story. Start wherever you are.";
$("aiSend").textContent = "Send to Milaf ↗";
$("aiMessage").placeholder =
  "Tell me what you have in mind. A rough idea is enough…";
$("aiMessage").setAttribute("aria-label", "Message Milaf");
$("aiSetupBanner").querySelector("strong").textContent =
  "Connect when you’re ready to create with AI.";
$("aiSetupBanner").querySelector("p").textContent =
  "Use the included local server and your own Google account. The library, drafts, and planning tools work without a connection.";
document.querySelector(".ai-sidebar .panel-title").innerHTML =
  "<span>↗</span> Reference & connection";
const actionLabels = {
  chat: "Talk it through",
  refine: "Upgrade a prompt",
  storyboard: "Build a shot list",
  explain: "Explain clearly",
  brainstorm: "Explore directions",
};
for (const option of $("aiAction").options)
  option.textContent = actionLabels[option.value] || option.textContent;
for (const value of ["explain", "brainstorm"]) {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = actionLabels[value];
  $("aiAction").append(option);
}

// User-selected communication preferences. No transcript, token, or pinned context is persisted here.
const profile = document.createElement("section");
profile.className = "atelier-profile";
profile.innerHTML =
  '<div class="mini-heading">MAKE THE CONVERSATION YOURS</div>' +
  atelierSelect("Voice & tone", "atelierTone", [
    ["warm", "Warm & thoughtful"],
    ["professional", "Professional & clear"],
    ["direct", "Straight to the point"],
    ["playful", "Creative & playful"],
  ]) +
  atelierSelect("How much detail?", "atelierDetail", [
    ["short", "Keep it short"],
    ["balanced", "A useful middle ground"],
    ["detailed", "Go into depth"],
  ]) +
  '<details style="grid-column:1/-1"><summary>Language & working style</summary><div style="padding-top:14px">' +
  atelierSelect("Your familiarity", "atelierLevel", [
    ["beginner", "Explain from the beginning"],
    ["intermediate", "I know the basics"],
    ["expert", "Use expert detail"],
  ]) +
  atelierSelect("Work with me as…", "atelierStyle", [
    ["partner", "A creative partner"],
    ["coach", "A patient coach"],
    ["answer-first", "An answer-first specialist"],
  ]) +
  atelierSelect("Reply language", "atelierLanguage", [
    ["auto", "Match my language"],
    ["en", "English"],
    ["es", "Español"],
    ["fr", "Français"],
    ["ar", "العربية"],
    ["de", "Deutsch"],
    ["pt", "Português"],
    ["ja", "日本語"],
  ]) +
  "</div></details>";
document.querySelector(".ai-sidebar").prepend(profile);
const context = document.createElement("details");
context.className = "atelier-context";
context.innerHTML =
  '<summary>Context you choose to include</summary><textarea id="atelierPinnedContext" maxlength="4000" rows="4" placeholder="Important notes to keep in view: audience, goal, constraints…" aria-label="Pinned conversation context"></textarea><label><input id="atelierIncludeBrief" type="checkbox"><span>Include the current creative brief (up to 2,000 characters).</span></label><div id="atelierContextCount" class="atelier-context-count"></div><small>Pinned notes stay in this page session. They are sent with assistant requests, not automatically saved as permanent AI memory.</small><label><input id="atelierRequiresReference" type="checkbox"><span>This image/video brief requires an actual reference image.</span></label>';
profile.after(context);
const modeHelp = document.createElement("div");
modeHelp.className = "atelier-composer-hint";
modeHelp.innerHTML =
  '<span id="atelierEnterHint">Enter to send · Shift+Enter for a new line</span><button id="atelierHowToTalk" class="text-button">How to talk to Milaf ↗</button>';
$("aiMessage").closest(".field").after(modeHelp);
const voicebar = document.createElement("div");
voicebar.className = "atelier-voicebar";
voicebar.innerHTML =
  '<button type="button" id="atelierDictate">◉ Voice typing</button><button type="button" id="atelierStopSpeech" class="hidden">Stop reading</button><span id="atelierVoiceStatus">Optional browser speech · nothing starts automatically</span>';
modeHelp.after(voicebar);
const atelierConsent = $("aiConsent").closest("label");
atelierConsent.classList.add("atelier-send-consent");
function atelierPlaceConsent(mode) {
  const target = document.querySelector(
    mode === "assistant"
      ? ".ai-composer-actions"
      : ".ai-generate-form .ai-composer-actions",
  );
  target.before(atelierConsent);
}
atelierPlaceConsent("assistant");
const previewButton = document.createElement("button");
previewButton.className = "text-button";
previewButton.id = "atelierPreviewRequest";
previewButton.type = "button";
previewButton.textContent = "Preview what will be sent";
document.querySelector(".ai-composer-actions").prepend(previewButton);
const exportChat = document.createElement("button");
exportChat.className = "text-button";
exportChat.type = "button";
exportChat.textContent = "Export conversation";
document.querySelector(".ai-composer-actions").prepend(exportChat);
const enterSetting = document.createElement("label");
enterSetting.className = "max-toggle";
enterSetting.innerHTML =
  '<input type="checkbox" id="atelierEnterToSend"><span><strong>Enter sends a message</strong><small>Shift+Enter inserts a new line. Turn off to use Ctrl/Command+Enter instead. Provider consent is still required.</small></span>';
document
  .querySelector("#maxSettingsDialog .max-settings-grid section")
  .append(enterSetting);
const mapPreferences = {
  tone: "atelierTone",
  detail: "atelierDetail",
  level: "atelierLevel",
  style: "atelierStyle",
  language: "atelierLanguage",
  enterToSend: "atelierEnterToSend",
};
function atelierApplyPreferences() {
  for (const [key, id] of Object.entries(mapPreferences)) {
    if (key === "enterToSend") $(id).checked = atelier.preferences[key];
    else $(id).value = atelier.preferences[key];
  }
  $("atelierEnterHint").textContent = atelier.preferences.enterToSend
    ? "Enter to send · Shift+Enter for a new line"
    : "Ctrl/⌘ + Enter to send";
}
for (const [key, id] of Object.entries(mapPreferences))
  $(id).onchange = () => {
    atelier.preferences[key] =
      key === "enterToSend" ? $(id).checked : $(id).value;
    writeStorage("milaf-atelier-conversation", atelier.preferences);
    atelierApplyPreferences();
  };
function atelierContextText() {
  const notes = $("atelierPinnedContext").value.trim();
  const brief = $("atelierIncludeBrief").checked
    ? currentBriefForAI().slice(0, 2000)
    : "";
  return [
    notes ? "Pinned user notes:\n" + notes : "",
    brief ? "Current creative brief:\n" + brief : "",
  ]
    .filter(Boolean)
    .join("\n\n")
    .slice(0, 6000);
}
function atelierUpdateContext() {
  const text = atelierContextText();
  const count = MilafText.historyForModel(ai.chat).length;
  $("atelierContextCount").textContent =
    `${text.length.toLocaleString()} attached context characters · up to ${count} previous text messages.`;
}
$("atelierPinnedContext").oninput = atelierUpdateContext;
$("atelierIncludeBrief").onchange = atelierUpdateContext;
const previousWorkspaceHook = studioHooks.workspaceChanged;
studioHooks.workspaceChanged = () => {
  previousWorkspaceHook?.();
  atelierUpdateContext();
};
studioHooks.requestExtras = (payload) =>
  payload.kind === "assistant"
    ? {
        preferences: Object.fromEntries(
          Object.keys(atelierOptions).map((key) => [
            key,
            atelier.preferences[key],
          ]),
        ),
        userContext: atelierContextText(),
      }
    : { requiresReference: $("atelierRequiresReference").checked };
studioHooks.aiPreflight = () => {
  if (
    ai.mode !== "assistant" &&
    $("atelierRequiresReference").checked &&
    (!reference || !$("aiReferenceConsent").checked)
  ) {
    toast(
      "This brief needs an actual reference. Choose it in Create and explicitly include it before generating.",
    );
    return false;
  }
  return true;
};
$("aiMessage").addEventListener("keydown", (event) => {
  if (event.isComposing || event.key !== "Enter") return;
  const send = atelier.preferences.enterToSend
    ? !event.shiftKey && !event.ctrlKey && !event.metaKey
    : !!(event.ctrlKey || event.metaKey);
  if (send) {
    event.preventDefault();
    if (!ai.sending) $("aiSend").click();
    else
      toast(
        "A reply is still on its way. Your next message stays in the draft box.",
      );
  }
});
$("atelierHowToTalk").onclick = () => $("atelierTalkDialog").showModal();
function atelierPreview() {
  const history = MilafText.historyForModel(ai.chat);
  const object = {
    action: $("aiAction").value,
    message: $("aiMessage").value,
    preferences: Object.fromEntries(
      Object.keys(atelierOptions).map((key) => [key, atelier.preferences[key]]),
    ),
    attachedUserContext: atelierContextText() || "(none)",
    history,
    referenceImage:
      $("aiReferenceConsent").checked && reference
        ? reference.name + " (actual resized image bytes will be sent)"
        : "(not included)",
    note: "No credentials or full prompt library are included in the model conversation.",
  };
  $("atelierPreviewContent").textContent = JSON.stringify(object, null, 2);
  $("atelierPreviewDialog").showModal();
}
previewButton.onclick = atelierPreview;
exportChat.onclick = () => {
  const messages = ai.chat.filter((x) => !x.pending);
  if (!messages.length) return toast("There is no conversation to export yet.");
  const lines = [
    "# Milaf conversation",
    "",
    "User-requested local export. May contain private information.",
    "",
  ];
  for (const entry of messages)
    lines.push(
      "## " +
        (entry.role === "user" ? "You" : "Milaf / AI") +
        (entry.error ? " (error)" : ""),
      "",
      entry.text,
      "",
    );
  download("milaf-conversation.md", lines.join("\n"), "text/markdown");
};

function atelierWelcome() {
  return '<div class="ai-welcome"><div class="atelier-orb" aria-hidden="true">✳</div><h3>Start with an idea.<br>We can shape it together.</h3><p>A half-formed thought, a draft that needs work, or a question you can’t quite phrase—start there. Milaf is an AI, and you stay in control.</p><div class="atelier-starters"><button class="atelier-starter" data-atelier-starter="brainstorm">I have an idea, not a plan.<small>Explore three genuinely different directions.</small></button><button class="atelier-starter" data-atelier-starter="refine">Make my prompt better.<small>Keep the intent. Sharpen the instructions.</small></button><button class="atelier-starter" data-atelier-starter="explain">Help me understand something.<small>Plain language, one useful example.</small></button><button class="atelier-starter" data-atelier-starter="storyboard">Turn a scene into a story.<small>Build shots with clear visual continuity.</small></button></div></div>';
}
function atelierRenderChat() {
  const area = $("aiMessages");
  document
    .querySelector(".ai-main")
    .classList.toggle("atelier-has-chat", ai.chat.length > 0);
  atelierUpdateContext();
  if (!ai.chat.length) {
    area.innerHTML = atelierWelcome();
    return;
  }
  const nearBottom =
    area.scrollHeight - area.scrollTop - area.clientHeight < 90;
  const visible = ai.chat.slice(-atelier.visibleMessages);
  const ids = new Set();
  for (const entry of visible) {
    if (!entry.id) entry.id = uid("message");
    ids.add(entry.id);
  }
  for (const child of [...area.children])
    if (!child.dataset.messageId || !ids.has(child.dataset.messageId))
      child.remove();
  if (ai.chat.length > atelier.visibleMessages) {
    const older = document.createElement("button");
    older.className = "atelier-load-older";
    older.dataset.atelierOlder = "true";
    older.textContent = "Show earlier messages ↑";
    area.prepend(older);
  }
  const last = ai.chat.findLastIndex(
    (x) =>
      x.role === "assistant" && !x.pending && !x.error && !x.excludeFromHistory,
  );
  for (const entry of visible) {
    const index = ai.chat.indexOf(entry);
    let node = [...area.querySelectorAll("[data-message-id]")].find(
      (n) => n.dataset.messageId === entry.id,
    );
    if (!node) {
      node = document.createElement("article");
      node.dataset.messageId = entry.id;
      area.append(node);
    }
    node.className =
      "ai-bubble " +
      (entry.role === "user" ? "user" : entry.error ? "error" : "");
    const signature =
      entry.role +
      "|" +
      entry.text +
      "|" +
      entry.pending +
      "|" +
      entry.excludeFromHistory +
      "|" +
      (index === last);
    if (node.dataset.signature === signature) continue;
    node.dataset.signature = signature;
    const role =
      entry.role === "user"
        ? "YOU" + (entry.excludeFromHistory ? " · DELIVERY UNCONFIRMED" : "")
        : "MILAF · AI ASSISTANT";
    let body =
      entry.role === "user"
        ? esc(entry.text)
        : entry.pending
          ? '<div class="atelier-pending"><i aria-hidden="true"></i>' +
            esc(entry.text) +
            "</div>"
          : MilafText.renderMarkdown(
              parseAIShots(entry.text) && !entry.text.trim().startsWith("```")
                ? "```json\n" + entry.text + "\n```"
                : entry.text,
            );
    const actions =
      entry.role === "assistant" && !entry.pending && !entry.error
        ? `<div class="ai-bubble-actions"><button data-ai-copy="${index}">Copy</button><button data-atelier-read="${index}" ${!("speechSynthesis" in window) ? 'disabled title="Read-aloud is unavailable here"' : ""}>Read aloud</button><button data-atelier-pin="${index}">Pin as context</button><button data-ai-reuse="${index}">Use as generation prompt ↗</button>${parseAIShots(entry.text) ? `<button data-ai-shots="${index}">Add shots to storyboard ＋</button>` : ""}</div>${index === last ? '<div class="atelier-followups"><button data-atelier-followup="shorter">Make it shorter</button><button data-atelier-followup="example">Show an example</button><button data-atelier-followup="specific">Make it more specific</button><button data-atelier-followup="why">Explain the choices</button></div>' : ""}`
        : entry.role === "user"
          ? `<div class="ai-bubble-actions"><button data-atelier-reword="${index}">Reuse this message</button></div>`
          : "";
    node.innerHTML =
      '<header><span aria-hidden="true">' +
      (entry.role === "user" ? "◌" : "✳") +
      "</span>" +
      role +
      '</header><div class="atelier-message" dir="auto">' +
      body +
      "</div>" +
      actions;
  }
  if (nearBottom || ai.chat.length < 3) area.scrollTop = area.scrollHeight;
}
studioHooks.renderChat = atelierRenderChat;
studioHooks.jobUpdated = (job) => {
  const pending = ai.chat.find((x) => x.pending && x.jobId === job.id);
  if (!pending) return;
  const status =
    job.status === "queued"
      ? "Your request is waiting in the local queue."
      : job.status === "running"
        ? "The Google request is running. Waiting for its response."
        : pending.text;
  if (status !== pending.text) {
    pending.text = status;
    atelierRenderChat();
  }
};
function atelierPrefill(text, action = "chat") {
  if (atelier.recording) atelierStopDictation();
  $("aiAction").value = action;
  $("aiMessage").value = text;
  setAIMode("assistant");
  $("aiMessage").focus();
  toast("Ready to edit. Nothing has been sent yet.");
}
$("aiMessages").addEventListener("click", (event) => {
  const starter = event.target.closest("[data-atelier-starter]");
  if (starter) {
    const prompts = {
      brainstorm:
        "I have an idea, but I need help shaping it. Ask me one useful question to get started, then suggest three different directions.",
      refine:
        "I want to improve a prompt while keeping my actual goal. Ask me to paste it, then return a clearer, copy-ready version.",
      explain:
        "Help me understand a concept. Ask what I am trying to learn and explain it at the level I choose.",
      storyboard:
        "Help me turn a scene idea into a coherent short shot list. Ask for the subject and intended mood if I have not supplied them.",
    };
    atelierPrefill(
      prompts[starter.dataset.atelierStarter],
      starter.dataset.atelierStarter,
    );
    return;
  }
  const older = event.target.closest("[data-atelier-older]");
  if (older) {
    atelier.visibleMessages += 40;
    atelierRenderChat();
    return;
  }
  const code = event.target.closest(".atelier-copy-code");
  if (code) {
    clipboard(code.closest(".atelier-code").querySelector("code").textContent);
    return;
  }
  const pin = event.target.closest("[data-atelier-pin]");
  if (pin) {
    $("atelierPinnedContext").value = ai.chat[
      Number(pin.dataset.atelierPin)
    ].text.slice(0, 4000);
    context.open = true;
    atelierUpdateContext();
    toast(
      "Pinned locally for upcoming assistant requests. Review it in the context panel.",
    );
    return;
  }
  const reword = event.target.closest("[data-atelier-reword]");
  if (reword) {
    const entry = ai.chat[Number(reword.dataset.atelierReword)];
    atelierPrefill(entry.text, entry.action || "chat");
    return;
  }
  const follow = event.target.closest("[data-atelier-followup]");
  if (follow) {
    const followups = {
      shorter:
        "Make your last answer shorter. Keep the important constraints and the most useful next step.",
      example:
        "Show one concrete example applying your last answer to the idea we are discussing.",
      specific:
        "Make your last answer more specific to the information I already provided. State any important assumption instead of inventing details.",
      why: "Explain the main choices in your last answer and their trade-offs in plain language.",
    };
    atelierPrefill(followups[follow.dataset.atelierFollowup]);
    return;
  }
  const read = event.target.closest("[data-atelier-read]");
  if (read) atelierReadAloud(ai.chat[Number(read.dataset.atelierRead)].text);
});
const clearConversation = [
  ...document.querySelectorAll(".ai-composer-actions button"),
].find((b) => b.textContent === "Clear conversation");
clearConversation?.addEventListener("click", () => {
  if (!ai.chat.length) {
    atelierStopDictation();
    atelierStopSpeech();
    ai.pendingSubmission = null;
    $("atelierPinnedContext").value = "";
    $("atelierIncludeBrief").checked = false;
    atelierRenderChat();
    toast(
      "Conversation and pinned notes cleared in this page. Server results are unchanged.",
    );
  }
});

// Voice is opt-in browser functionality, never an automatic API submission or hidden recording.
const SpeechRecognitionAPI =
  window.SpeechRecognition || window.webkitSpeechRecognition;
function atelierStopDictation() {
  if (atelier.recognition) {
    try {
      atelier.recognition.stop();
    } catch {}
  }
  atelier.recording = false;
  $("atelierDictate").classList.remove("recording");
  $("atelierDictate").textContent = "◉ Voice typing";
}
if (!SpeechRecognitionAPI) {
  $("atelierDictate").disabled = true;
  $("atelierDictate").title =
    "This browser does not offer voice typing here. You can still type normally.";
}
$("atelierDictate").onclick = () => {
  if (atelier.recording) {
    atelierStopDictation();
    return;
  }
  if (!SpeechRecognitionAPI) return;
  if (
    !confirm(
      "Voice typing uses your browser’s speech service and microphone permission. Audio may be processed remotely by that service. It fills the text box only; it does not send an AI request. Continue?",
    )
  )
    return;
  const recognition = new SpeechRecognitionAPI();
  atelier.recognition = recognition;
  recognition.continuous = false;
  recognition.interimResults = false;
  const langs = {
    en: "en-US",
    es: "es-ES",
    fr: "fr-FR",
    ar: "ar-SA",
    de: "de-DE",
    pt: "pt-BR",
    ja: "ja-JP",
  };
  recognition.lang =
    langs[atelier.preferences.language] || navigator.language || "en-US";
  recognition.onresult = (event) => {
    const text = [...event.results]
      .map((result) => result[0].transcript)
      .join(" ");
    $("aiMessage").value = [$("aiMessage").value.trim(), text]
      .filter(Boolean)
      .join(" ")
      .slice(0, 24000);
    $("aiMessage").focus();
    $("atelierVoiceStatus").textContent =
      "Transcript added. Review it, then authorize and send when ready.";
  };
  recognition.onerror = (event) => {
    $("atelierVoiceStatus").textContent =
      event.error === "not-allowed"
        ? "Microphone permission was denied. Typing still works."
        : "Voice input was unavailable or interrupted. Typing still works.";
  };
  recognition.onend = () => {
    atelier.recording = false;
    $("atelierDictate").classList.remove("recording");
    $("atelierDictate").textContent = "◉ Voice typing";
  };
  try {
    recognition.start();
    atelier.recording = true;
    $("atelierDictate").classList.add("recording");
    $("atelierDictate").textContent = "■ Stop voice typing";
    $("atelierVoiceStatus").textContent =
      "Listening through your browser. No AI request is being sent.";
  } catch {
    $("atelierVoiceStatus").textContent =
      "Voice input could not start in this browser context.";
  }
};
function atelierStopSpeech() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  $("atelierStopSpeech").classList.add("hidden");
}
function atelierReadAloud(text) {
  if (!("speechSynthesis" in window))
    return toast("Read-aloud is not available in this browser.");
  if (!atelier.speechConsent) {
    if (
      !confirm(
        "Read this reply using your browser/operating-system voice? Some voices may process text remotely. Nothing is spoken automatically.",
      )
    )
      return;
    atelier.speechConsent = true;
  }
  atelierStopSpeech();
  const utterance = new SpeechSynthesisUtterance(
    MilafText.plainForSpeech(text),
  );
  const languages = {
    en: "en-US",
    es: "es-ES",
    fr: "fr-FR",
    ar: "ar-SA",
    de: "de-DE",
    pt: "pt-BR",
    ja: "ja-JP",
  };
  utterance.lang =
    languages[atelier.preferences.language] || navigator.language || "en-US";
  utterance.rate = 1;
  utterance.onend = utterance.onerror = () =>
    $("atelierStopSpeech").classList.add("hidden");
  $("atelierStopSpeech").classList.remove("hidden");
  window.speechSynthesis.speak(utterance);
}
$("atelierStopSpeech").onclick = atelierStopSpeech;
studioHooks.viewChanged = (view) => {
  if (view !== "ai") {
    atelierStopDictation();
    atelierStopSpeech();
  }
};
studioHooks.aiModeChanged = (mode) => {
  atelierPlaceConsent(mode);
  if (mode !== "assistant") {
    atelierStopDictation();
    atelierStopSpeech();
  }
};

// The library now distinguishes direct generation text from assistant-facing instructions.
const promptModes = document.createElement("div");
promptModes.className = "atelier-prompt-modes";
promptModes.innerHTML =
  '<button id="atelierAssistantPrompt" type="button">Assistant brief</button><button id="atelierGenerationPrompt" type="button">Direct visual prompt</button>';
$("detailPrompt").before(promptModes);
const criteria = document.createElement("section");
criteria.className = "atelier-criteria";
criteria.innerHTML =
  '<h3>What a good result should do</h3><ul id="atelierCriteria"></ul>';
document
  .querySelector("#promptDialog .prompt-dialog-body aside")
  .append(criteria);
function atelierSetPromptMode(mode) {
  atelier.promptMode = mode;
  $("atelierAssistantPrompt").classList.toggle("active", mode === "assistant");
  $("atelierGenerationPrompt").classList.toggle(
    "active",
    mode === "generation",
  );
  const base =
    mode === "generation"
      ? activePrompt?.generationPrompt
      : activePrompt?.promptText;
  document
    .querySelectorAll("#detailFields [data-placeholder]")
    .forEach((field) =>
      field
        .closest(".field")
        .classList.toggle("hidden", !base?.includes(field.dataset.placeholder)),
    );
  compileDetail();
}
$("atelierAssistantPrompt").onclick = () => atelierSetPromptMode("assistant");
$("atelierGenerationPrompt").onclick = () => atelierSetPromptMode("generation");
studioHooks.promptBase = (p) =>
  atelier.promptMode === "generation" && p.generationPrompt
    ? p.generationPrompt
    : p.promptText;
studioHooks.promptCompiled = (values) => {
  if (!activePrompt) return;
  $("atelierCriteria").innerHTML = (activePrompt.successCriteria || [])
    .map(
      (c) =>
        "<li>" +
        esc(c.replace(/\[[a-z_]+\]/g, (key) => values.get(key) || key)) +
        "</li>",
    )
    .join("");
};
studioHooks.promptOpened = (p) => {
  atelier.promptMode = p.generationPrompt ? "generation" : "assistant";
  $("atelierGenerationPrompt").classList.toggle("hidden", !p.generationPrompt);
  $("atelierCriteria").innerHTML = (p.successCriteria || [])
    .map((c) => "<li>" + esc(c) + "</li>")
    .join("");
  criteria.classList.toggle("hidden", !p.successCriteria?.length);
  for (const field of document.querySelectorAll(
    "#detailFields [data-placeholder]",
  )) {
    const key = field.dataset.placeholder;
    const input = p.inputGuide?.[key];
    if (!input) continue;
    const hint = document.createElement("small");
    hint.className = "atelier-input-help";
    hint.textContent = input.description;
    field.after(hint);
    if (field.tagName === "TEXTAREA") field.placeholder = input.example || key;
    if (key === "[duration_seconds]") field.value = "6";
    if (key === "[reference_image]" && reference)
      field.value = "the authorized image selected in Create";
    if (key === "[additional_constraints]" && !input.required)
      field.value = "No extra constraints.";
    if (key === "[desired_length]" && !input.required)
      field.value =
        "As short as possible while satisfying the requested format.";
  }
  atelierSetPromptMode(atelier.promptMode);
};
$("detailWorkspace").addEventListener("click", () => {
  $("atelierRequiresReference").checked =
    activePrompt?.requiresReference === true;
});
$("newProject").addEventListener("click", () => {
  if (!$("cSubject").value.trim())
    $("atelierRequiresReference").checked = false;
});
const explainPrompt = document.createElement("button");
explainPrompt.className = "button small";
explainPrompt.textContent = "Explain this prompt";
explainPrompt.onclick = () => {
  if (!activePrompt) return;
  atelierPrefill(
    "Explain what this prompt asks for and which inputs I need to provide. Use plain language.\n\n" +
      $("detailPrompt").value,
    "explain",
  );
  $("promptDialog").close();
  showView("ai");
};
$("copyDetail").before(explainPrompt);
// Apply preferences only; no automatic model call, microphone start, or speech output.
atelierApplyPreferences();
atelierUpdateContext();
atelierRenderChat();

studioHooks.exportConversationPreferences = () => ({ ...atelier.preferences });
studioHooks.importConversationPreferences = (value) => {
  if (!value) return;
  atelier.preferences = atelierCleanPreferences(value);
  writeStorage("milaf-atelier-conversation", atelier.preferences);
  atelierApplyPreferences();
};

const atelierPriorConnectionHook = studioHooks.aiConnectionChanged;
studioHooks.aiConnectionChanged = () => {
  atelierPriorConnectionHook?.();
  $("maxAIStats").classList.toggle("hidden", !ai.connected);
};
$("maxAIStats").classList.toggle("hidden", !ai.connected);

$("aiMessage").setAttribute("dir", "auto");
$("atelierPinnedContext").setAttribute("dir", "auto");
