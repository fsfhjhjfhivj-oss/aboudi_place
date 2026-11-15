// Optional same-origin AI client. No provider key is ever requested or stored by this page.
const ai = {
  mode: "assistant",
  token: "",
  connected: false,
  configured: false,
  models: {},
  jobs: new Map(),
  chat: [],
  media: new Map(),
  loading: new Set(),
  polling: new Set(),
  epoch: 0,
  sending: false,
  pendingSubmission: null,
  historyFilter: "all",
  historyLimit: 12,
};
let lastAIText = "";
async function aiAPI(route, options = {}) {
  if (
    !/^\/api\/(health|config|stats|jobs(?:\/[a-f0-9-]+(?:\/media\/\d+|\/cancel)?)?)$/.test(
      route,
    )
  )
    throw Error("Invalid API route.");
  let response;
  try {
    response = await fetch(route, {
      ...options,
      headers: {
        Accept: "application/json",
        ...(options.body ? { "Content-Type": "application/json" } : {}),
        "X-Milaf-Token": ai.token,
        ...options.headers,
      },
      credentials: "omit",
      redirect: "error",
      signal: AbortSignal.timeout(30000),
    });
  } catch {
    throw Error(
      options.method === "POST"
        ? "Submission was interrupted. Check server history and Google usage before retrying: the request may already have been accepted."
        : "The local AI server is unavailable. Run npm start and open its printed address.",
    );
  }
  if (!response.ok) {
    let message = "";
    try {
      message = (await response.json()).error;
    } catch {}
    if (response.status === 401) {
      ai.connected = false;
      updateAIConnection();
    }
    throw Error(message || `Server returned ${response.status}.`);
  }
  return response;
}
function openAIConnection() {
  $("aiAppToken").value = "";
  $("aiConnectionStatus").textContent = ai.connected
    ? "Connected to this page’s same-origin backend. Google model access is checked only by an explicit generation request."
    : "Run the included Node server first. This static preview cannot connect to a different backend origin.";
  $("aiConnectDialog").showModal();
}
$("aiConnectionButton").onclick = openAIConnection;
$("aiSetupHelp").onclick = openAIConnection;
function updateAIConnection() {
  const usable = ai.connected && ai.configured;
  $("aiConnectionDot").textContent = usable ? "●" : "○";
  $("aiConnectionLabel").textContent = usable
    ? "Backend connected"
    : ai.connected
      ? "Server needs Google key"
      : "Connect AI backend";
  $("aiSetupBanner").classList.toggle("hidden", usable);
  $("aiModelLabel").textContent = usable
    ? ai.models[ai.mode] || "Configured model"
    : "No provider account connected";
  $("aiModelsInfo").textContent = ai.connected
    ? "Server models:\nAssistant: " +
      (ai.models.assistant || "not set") +
      "\nImage: " +
      (ai.models.image || "not set") +
      "\nVideo: " +
      (ai.models.video || "not set") +
      "\n\nAccount access and billing are not pre-verified."
    : "Provider details appear after connecting.";
  updateAIReferenceInfo();
  studioHooks.aiConnectionChanged?.();
}
$("aiConnectConfirm").onclick = async () => {
  const token = $("aiAppToken").value.trim();
  if (token.startsWith("AIza")) {
    $("aiAppToken").value = "";
    $("aiConnectionStatus").textContent =
      "Do not enter a Google API key here. Put it in the server .env; use the APP ACCESS TOKEN from the terminal.";
    return;
  }
  if (token.length < 32) {
    $("aiConnectionStatus").textContent =
      "Enter the app access token printed by the server (at least 32 characters).";
    return;
  }
  const button = $("aiConnectConfirm");
  button.disabled = true;
  $("aiConnectionStatus").textContent = "Checking this website’s backend…";
  try {
    ai.token = token;
    const config = await (await aiAPI("/api/config")).json();
    ai.connected = true;
    ai.configured = Boolean(config.configured);
    ai.models = config.models || {};
    $("aiAppToken").value = "";
    updateAIConnection();
    $("aiConnectionStatus").textContent = ai.configured
      ? "Connected. No Google request or charge was made by this check."
      : "Connected, but the server needs GOOGLE_API_KEY configured and a restart.";
    if (ai.configured) {
      $("aiConnectDialog").close();
      await loadAIJobs();
      toast("Backend connected. Authorize each submitted AI request.");
    }
  } catch (err) {
    ai.token = "";
    ai.connected = false;
    updateAIConnection();
    $("aiConnectionStatus").textContent = err.message;
  } finally {
    button.disabled = false;
  }
};
$("aiDisconnect").onclick = () => {
  ai.epoch++;
  ai.connected = false;
  ai.token = "";
  ai.pendingSubmission = null;
  ai.jobs.clear();
  for (const item of ai.media.values()) URL.revokeObjectURL(item.url);
  ai.media.clear();
  ai.loading.clear();
  updateAIConnection();
  renderAIJobs();
  $("aiConnectionStatus").textContent =
    "Disconnected in this page. Already-submitted Google requests are not canceled.";
};
function setAIMode(mode) {
  ai.mode = ["assistant", "image", "video"].includes(mode) ? mode : "assistant";
  document
    .querySelectorAll("[data-ai-mode]")
    .forEach((el) =>
      el.classList.toggle("selected", el.dataset.aiMode === ai.mode),
    );
  $("aiAssistantPanel").classList.toggle("hidden", ai.mode !== "assistant");
  $("aiGenerationPanel").classList.toggle("hidden", ai.mode === "assistant");
  $("aiVideoDurationField").classList.toggle("hidden", ai.mode !== "video");
  $("aiGenerate").textContent =
    ai.mode === "video" ? "Generate video ↗" : "Generate image ↗";
  $("aiGenerationArtwork").src =
    ai.mode === "video" ? ARTWORK.astronaut : ARTWORK["orange-glass"];
  for (const option of $("aiGenerationRatio").options)
    option.disabled =
      ai.mode === "video" && !["16:9", "9:16"].includes(option.value);
  if (
    ai.mode === "video" &&
    !["16:9", "9:16"].includes($("aiGenerationRatio").value)
  )
    $("aiGenerationRatio").value = "16:9";
  updateAIConnection();
}
document
  .querySelectorAll("[data-ai-mode]")
  .forEach((el) => (el.onclick = () => setAIMode(el.dataset.aiMode)));
function updateAIReferenceInfo() {
  $("aiReferenceInfo").textContent = reference
    ? "Selected locally: " +
      reference.name +
      ". Sent to Google only if the reference checkbox is selected."
    : "No reference selected. Add one in Create if needed.";
}
function aiPreflight() {
  if (!ai.connected || !ai.configured) {
    openAIConnection();
    return false;
  }
  if (!$("aiConsent").checked) {
    toast(
      "Authorize sending content to Google and acknowledge possible charges first.",
    );
    $("aiConsent").focus();
    return false;
  }
  if ($("aiReferenceConsent").checked && !reference) {
    toast("Choose a reference in Create, or turn off the reference checkbox.");
    return false;
  }
  return true;
}
function selectedAIReference() {
  if (!$("aiReferenceConsent").checked || !reference) return undefined;
  const match = reference.data.match(
    /^data:(image\/(?:png|jpeg|webp));base64,([a-zA-Z0-9+/=]+)$/,
  );
  if (!match) throw Error("The selected reference has an unsupported format.");
  return { mimeType: match[1], data: match[2] };
}
function renderAIChat() {
  if (!ai.chat.length) return;
  const area = $("aiMessages");
  area.innerHTML = ai.chat
    .map(
      (entry, i) =>
        `<div class="ai-bubble ${entry.role === "user" ? "user" : entry.error ? "error" : ""}"><header>${entry.role === "user" ? "YOU" : "MILAF / GOOGLE AI"}${entry.pending ? " · WAITING FOR PROVIDER" : ""}</header><pre>${esc(entry.text)}</pre>${entry.role === "assistant" && !entry.pending && !entry.error ? `<div class="ai-bubble-actions"><button class="text-button" data-ai-copy="${i}">Copy response</button><button class="text-button" data-ai-reuse="${i}">Use as generation prompt ↗</button>${parseAIShots(entry.text) ? `<button class="text-button" data-ai-shots="${i}">Add shots to storyboard ＋</button>` : ""}</div>` : ""}</div>`,
    )
    .join("");
  area.scrollTop = area.scrollHeight;
}
document.querySelectorAll("[data-suggestion]").forEach(
  (el) =>
    (el.onclick = () => {
      $("aiMessage").value = el.dataset.suggestion;
      $("aiMessage").focus();
    }),
);
function parseAIShots(text) {
  try {
    const cleaned = String(text)
      .trim()
      .replace(/^```(?:json)?\s*/i, "")
      .replace(/\s*```$/, "");
    const json = JSON.parse(cleaned);
    if (
      !Array.isArray(json.shots) ||
      !json.shots.length ||
      json.shots.length > 12
    )
      return null;
    const list = json.shots
      .filter(
        (s) =>
          typeof s.title === "string" &&
          typeof s.prompt === "string" &&
          s.prompt.trim(),
      )
      .map((s) => ({
        title: s.title.slice(0, 150),
        prompt: s.prompt.slice(0, 20000),
        duration: Math.max(
          3,
          Math.min(15, Math.round(Number(s.duration) || 6)),
        ),
      }));
    return list.length
      ? {
          title:
            typeof json.title === "string"
              ? json.title.slice(0, 140)
              : "AI-assisted sequence",
          shots: list,
        }
      : null;
  } catch {
    return null;
  }
}
$("aiMessages").addEventListener("click", (e) => {
  const copy = e.target.closest("[data-ai-copy]");
  if (copy) clipboard(ai.chat[Number(copy.dataset.aiCopy)].text);
  const reuse = e.target.closest("[data-ai-reuse]");
  if (reuse) {
    lastAIText = ai.chat[Number(reuse.dataset.aiReuse)].text;
    $("aiGenerationPrompt").value = lastAIText;
    setAIMode("image");
    toast(
      "Response copied into the image prompt. Review it before generating.",
    );
  }
  const shotButton = e.target.closest("[data-ai-shots]");
  if (shotButton) {
    const parsed = parseAIShots(
      ai.chat[Number(shotButton.dataset.aiShots)].text,
    );
    if (!parsed) return toast("This reply is not a valid shot list.");
    if (shots.length + parsed.shots.length > 50)
      return toast("This would exceed the 50-shot storyboard limit.");
    for (const s of parsed.shots)
      addShot(s.title, s.prompt, ARTWORK.monolith, s.duration);
    $("boardTitle").value = parsed.title;
    showView("storyboard");
    toast("AI-authored shot drafts added. Review continuity and timing.");
  }
});
function currentBriefForAI() {
  return $("outputPrompt")
    .value.replace(/No generation is performed by this workspace\./g, "")
    .replace(/^Reference:.*$/gm, "")
    .trim();
}
$("aiUseCurrent").onclick = () => {
  const text = currentBriefForAI();
  if (!text) return toast("Build a creative brief first in Create.");
  $("aiMessage").value = text;
  $("aiAction").value = "refine";
  toast("Brief copied. Review before sending to Google.");
};
$("aiUseCurrentGeneration").onclick = () => {
  const text = currentBriefForAI();
  if (!text) return toast("Build a creative brief first.");
  $("aiGenerationPrompt").value = text;
  toast("Brief copied. Review before generating.");
};
async function postAIJob(payload) {
  const body = JSON.stringify({
    ...payload,
    reference: selectedAIReference(),
    consent: true,
  });
  if (!ai.pendingSubmission || ai.pendingSubmission.body !== body)
    ai.pendingSubmission = {
      body,
      key:
        typeof crypto.randomUUID === "function"
          ? crypto.randomUUID()
          : uid("submission"),
    };
  const response = await aiAPI("/api/jobs", {
    method: "POST",
    headers: { "Idempotency-Key": ai.pendingSubmission.key },
    body,
  });
  const job = await response.json();
  ai.pendingSubmission = null;
  $("aiConsent").checked = false;
  ai.jobs.set(job.id, job);
  renderAIJobs();
  loadAIStats();
  return job;
}
async function pollAIJob(id) {
  const epoch = ai.epoch;
  ai.polling.add(id);
  try {
    for (let i = 0; i < 450; i++) {
      if (!ai.connected || epoch !== ai.epoch) return null;
      const job = await (await aiAPI("/api/jobs/" + id)).json();
      ai.jobs.set(id, job);
      renderAIJobs();
      if (["completed", "failed", "canceled"].includes(job.status)) {
        loadAIStats();
        return job;
      }
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
    throw Error(
      "Still pending. Refresh history later; do not resubmit blindly because charges may apply.",
    );
  } finally {
    ai.polling.delete(id);
  }
}
$("aiSend").onclick = async () => {
  if (ai.sending) return;
  if (!aiPreflight()) return;
  const prompt = $("aiMessage").value.trim();
  if (!prompt) return toast("Write a message or paste a prompt first.");
  const history = ai.chat
    .filter((x) => !x.pending && !x.error)
    .slice(-12)
    .map((x) => ({ role: x.role, text: x.text.slice(0, 4000) }));
  const pending = {
    role: "assistant",
    text: "Waiting for the Google provider. No response has been generated yet.",
    pending: true,
  };
  ai.chat.push({ role: "user", text: prompt }, pending);
  renderAIChat();
  ai.sending = true;
  $("aiSend").disabled = true;
  try {
    const submitted = await postAIJob({
      kind: "assistant",
      action: $("aiAction").value,
      prompt,
      history,
    });
    const job = await pollAIJob(submitted.id);
    if (!job) {
      pending.text =
        "Disconnected while this request was pending. Reconnect and check history before resubmitting.";
      pending.error = true;
    } else if (job.status !== "completed") {
      pending.text = job.error;
      pending.error = true;
    } else {
      pending.text = job.text;
      lastAIText = job.text;
    }
    $("aiMessage").value = "";
  } catch (err) {
    pending.text = err.message;
    pending.error = true;
  } finally {
    pending.pending = false;
    ai.sending = false;
    $("aiSend").disabled = false;
    renderAIChat();
  }
};
$("aiGenerate").onclick = async () => {
  if (!aiPreflight()) return;
  const prompt = $("aiGenerationPrompt").value.trim();
  if (!prompt) return toast("Describe the image or video to generate.");
  if (/\[[a-z_]+\]/.test(prompt))
    return toast(
      "Fill the bracketed placeholders before making a paid generation request.",
    );
  if (ai.mode === "video" && !$("aiVideoDuration").checkValidity())
    return toast("Choose a video duration from 3 to 15 seconds.");
  const button = $("aiGenerate");
  button.disabled = true;
  try {
    const job = await postAIJob({
      kind: ai.mode,
      prompt,
      ratio: $("aiGenerationRatio").value,
      duration: Number($("aiVideoDuration").value),
    });
    toast("Submitted to Google. Provider charges may apply.");
    pollAIJob(job.id)
      .then((result) => {
        if (result)
          toast(
            result.status === "completed"
              ? "Google result received. Review it before use."
              : result.error,
          );
      })
      .catch((err) => toast(err.message));
  } catch (err) {
    toast(err.message);
  } finally {
    button.disabled = false;
  }
};
async function fetchAIMedia(job, index) {
  const key = job.id + ":" + index;
  if (ai.media.has(key)) return ai.media.get(key);
  const file = job.files?.[index];
  if (!file || !/^\/api\/jobs\/[a-f0-9-]+\/media\/\d+$/.test(file.url))
    throw Error("No generated media file is available.");
  const response = await aiAPI(file.url);
  const blob = await response.blob();
  const value = {
    url: URL.createObjectURL(blob),
    blob,
    mimeType: file.mimeType,
  };
  if (ai.media.size >= 16) {
    const oldest = ai.media.keys().next().value;
    URL.revokeObjectURL(ai.media.get(oldest).url);
    ai.media.delete(oldest);
  }
  ai.media.set(key, value);
  return value;
}
async function loadMediaCard(job, index) {
  const key = job.id + ":" + index;
  if (ai.loading.has(key) || ai.media.has(key)) return;
  ai.loading.add(key);
  try {
    await fetchAIMedia(job, index);
    renderAIJobs();
  } catch (err) {
    const message = $("aiMediaError_" + job.id);
    if (message) message.textContent = err.message;
  } finally {
    ai.loading.delete(key);
  }
}
function renderAIJobs() {
  const list = [...ai.jobs.values()]
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .filter((job) => {
      if (ai.historyFilter === "all") return true;
      if (ai.historyFilter === "waiting")
        return ["queued", "running"].includes(job.status);
      if (ai.historyFilter === "failed")
        return ["failed", "canceled"].includes(job.status);
      return job.kind === ai.historyFilter;
    });
  $("aiHistoryStatus").textContent = ai.connected
    ? list.length + " server jobs · private to this shared-token workspace"
    : "Connect to load this server’s history.";
  $("maxHistoryMore")?.classList.toggle(
    "hidden",
    list.length <= ai.historyLimit,
  );
  if (!list.length) {
    $("aiJobGrid").innerHTML = empty(
      "No provider results loaded.",
      "Connect your backend and explicitly submit a request. This static preview does not make paid calls.",
      "ai",
      "Open the AI workspace",
    );
    return;
  }
  $("aiJobGrid").innerHTML = list
    .slice(0, 12)
    .map((job) => {
      const media = ai.media.get(job.id + ":0");
      const visual = media
        ? media.mimeType.startsWith("video")
          ? `<video src="${media.url}" controls preload="metadata" aria-label="Generated video"></video>`
          : `<img src="${media.url}" alt="AI-generated image returned by Google">`
        : `<span class="job-symbol">${job.kind === "video" ? "▷" : job.kind === "image" ? "◇" : "✳"}</span>`;
      return `<article class="ai-job"><div class="ai-job-preview">${visual}<span class="job-status">${esc(job.status.toUpperCase())}</span></div><div class="ai-job-body"><div class="ai-job-meta">${esc(job.kind.toUpperCase())} / ${esc(job.model || "Google model")}</div><h3 title="${esc(job.prompt)}">${esc(job.prompt)}</h3>${job.error ? `<div class="ai-job-text job-error">${esc(job.error)}</div>` : job.text ? `<div class="ai-job-text">${esc(job.text)}</div>` : ""}<div id="aiMediaError_${esc(job.id)}" class="ai-job-text job-error"></div><div class="ai-job-actions">${job.status === "completed" && job.files?.length ? `<button class="text-button" data-ai-download="${esc(job.id)}">Download result ↗</button>` : ""}${job.status === "completed" && job.files?.[0]?.mimeType?.startsWith("image/") ? `<button class="text-button" data-ai-reference="${esc(job.id)}">Use image as reference ↗</button>` : ""}${job.text ? `<button class="text-button" data-ai-result-copy="${esc(job.id)}">Copy text</button>` : ""}${job.status === "queued" ? `<button class="text-button" data-ai-cancel="${esc(job.id)}">Cancel queued job</button>` : ""}${["completed", "failed", "canceled"].includes(job.status) ? `<button class="text-button" data-ai-delete="${esc(job.id)}">Delete server result</button>` : ""}</div></div></article>`;
    })
    .join("");
  for (const job of list.slice(0, 6))
    if (job.status === "completed" && job.files?.length) loadMediaCard(job, 0);
}
$("aiJobGrid").onclick = async (e) => {
  const downloadButton = e.target.closest("[data-ai-download]");
  if (downloadButton) {
    try {
      const job = ai.jobs.get(downloadButton.dataset.aiDownload);
      const file = await fetchAIMedia(job, 0);
      const extension =
        file.mimeType === "video/mp4"
          ? "mp4"
          : file.mimeType === "image/jpeg"
            ? "jpg"
            : file.mimeType === "image/webp"
              ? "webp"
              : "png";
      download(
        "milaf-generated-" + job.id + "." + extension,
        file.blob,
        file.mimeType,
      );
    } catch (err) {
      toast(err.message);
    }
  }
  const copy = e.target.closest("[data-ai-result-copy]");
  if (copy) clipboard(ai.jobs.get(copy.dataset.aiResultCopy).text);
  const del = e.target.closest("[data-ai-delete]");
  if (
    del &&
    confirm(
      "Delete this job and its generated files from the private server? Download a backup first.",
    )
  ) {
    try {
      const id = del.dataset.aiDelete;
      await aiAPI("/api/jobs/" + id, { method: "DELETE" });
      ai.jobs.delete(id);
      for (const [key, value] of ai.media)
        if (key.startsWith(id + ":")) {
          URL.revokeObjectURL(value.url);
          ai.media.delete(key);
        }
      renderAIJobs();
      toast(
        "Server result deleted. Google provider retention is controlled separately.",
      );
    } catch (err) {
      toast(err.message);
    }
  }
};
async function loadAIJobs() {
  if (!ai.connected) return toast("Connect the AI backend first.");
  try {
    const data = await (await aiAPI("/api/jobs")).json();
    ai.jobs = new Map((data.jobs || []).map((job) => [job.id, job]));
    renderAIJobs();
    loadAIStats();
    for (const job of ai.jobs.values())
      if (["running", "queued"].includes(job.status) && !ai.polling.has(job.id))
        pollAIJob(job.id).catch((err) => toast(err.message));
  } catch (err) {
    toast(err.message);
  }
}
$("aiRefreshJobs").onclick = loadAIJobs;
// Add clear pathways from the existing prompt-only workspace without making automatic provider calls.
const aiStudioButton = document.createElement("button");
aiStudioButton.className = "button ai-button-inline";
aiStudioButton.textContent = "Open this brief in the AI workspace ↗";
aiStudioButton.type = "button";
aiStudioButton.onclick = () => {
  if (!validBrief()) return;
  $("aiGenerationPrompt").value = currentBriefForAI();
  setAIMode(mode === "image" ? "image" : "video");
  updateAIReferenceInfo();
  showView("ai");
  toast(
    "Review the prompt and explicit consent before submitting. No call has been made.",
  );
};
document.querySelector(".output-body").append(aiStudioButton);
const aiRefineButton = document.createElement("button");
aiRefineButton.className = "text-button";
aiRefineButton.textContent = "Improve with Google AI ↗";
aiRefineButton.type = "button";
aiRefineButton.style.cssText = "margin-top:15px;display:block";
aiRefineButton.onclick = () => {
  if (!validBrief()) return;
  $("aiMessage").value = currentBriefForAI();
  $("aiAction").value = "refine";
  setAIMode("assistant");
  showView("ai");
};
document.querySelector(".output-body").append(aiRefineButton);
// Refresh reference disclosure whenever this tab is opened.
document.addEventListener("click", (e) => {
  if (e.target.closest('[data-go="ai"]')) updateAIReferenceInfo();
});
document.querySelectorAll("#aiConnectDialog").forEach((dialog) =>
  dialog.addEventListener("click", (e) => {
    if (e.target !== dialog) return;
    const r = dialog.getBoundingClientRect();
    if (
      e.clientX < r.left ||
      e.clientX > r.right ||
      e.clientY < r.top ||
      e.clientY > r.bottom
    )
      dialog.close();
  }),
);
setAIMode("assistant");
updateAIConnection();
const libraryAIButton = document.createElement("button");
libraryAIButton.className = "button small";
libraryAIButton.textContent = "Improve with AI ✳";
libraryAIButton.onclick = () => {
  $("aiMessage").value = $("detailPrompt").value;
  $("aiAction").value = "refine";
  setAIMode("assistant");
  $("promptDialog").close();
  showView("ai");
  toast(
    "Selected prompt copied. Review and authorize before sending to Google.",
  );
};
$("copyDetail").before(libraryAIButton);

$("aiJobGrid").addEventListener("click", async (e) => {
  const button = e.target.closest("[data-ai-reference]");
  if (!button) return;
  try {
    const job = ai.jobs.get(button.dataset.aiReference);
    const file = await fetchAIMedia(job, 0);
    if (!file.mimeType.startsWith("image/")) return;
    await handleReference(
      new File(
        [file.blob],
        "generated-reference." +
          (file.mimeType === "image/webp"
            ? "webp"
            : file.mimeType === "image/jpeg"
              ? "jpg"
              : "png"),
        { type: file.mimeType },
      ),
    );
    $("aiReferenceConsent").checked = false;
    if (!$("cSubject").value.trim()) $("cSubject").value = job.prompt;
    mode = "video";
    updateModeButtons();
    updateOutput();
    showView("create");
    toast(
      "Image loaded as a local reference. Opt in again before sending it for video generation.",
    );
  } catch (err) {
    toast(err.message);
  }
});

async function loadAIStats() {
  const el = $("maxAIStats");
  if (!el) return;
  if (!ai.connected) {
    el.innerHTML =
      "<span>Connect the backend for real queue, usage, and storage counts.</span>";
    return;
  }
  try {
    const stats = await (await aiAPI("/api/stats")).json();
    el.innerHTML = `<span><b>${stats.active}</b>active</span><span><b>${stats.queued}</b>queued</span><span><b>${stats.dailyUsed} / ${stats.dailyLimit}</b>admitted today (UTC)</span><span><b>${(stats.storageBytes / 1048576).toFixed(1)} MB</b>local storage</span><span class="stat-muted">LOCAL COUNTERS · NOT A GOOGLE BILLING ESTIMATE</span>`;
  } catch {
    el.textContent = "Queue statistics unavailable. Check the local server.";
  }
}
$("aiJobGrid").addEventListener("click", async (e) => {
  const button = e.target.closest("[data-ai-cancel]");
  if (!button) return;
  try {
    const id = button.dataset.aiCancel;
    const job = await (
      await aiAPI("/api/jobs/" + id + "/cancel", { method: "POST" })
    ).json();
    ai.jobs.set(id, job);
    renderAIJobs();
    loadAIStats();
    toast("Canceled before this queued job was sent to Google.");
  } catch (error) {
    toast(error.message);
  }
});
