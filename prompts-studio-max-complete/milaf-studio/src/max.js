// MAX workspace tools: all local. No provider calls or credentials enter recovery/backups.
const maxDefaults = {
  autosave: true,
  includeReferences: false,
  density: "comfortable",
  reduceMotion: false,
};
function maxCleanPreferences(value) {
  const source = value && typeof value === "object" ? value : {};
  return {
    autosave: source.autosave !== false,
    includeReferences: source.includeReferences === true,
    density: source.density === "compact" ? "compact" : "comfortable",
    reduceMotion: source.reduceMotion === true,
  };
}
const maxState = {
  preferences: maxCleanPreferences(
    readStorage("milaf-max-preferences", maxDefaults),
  ),
  collections: [],
  collectionFilter: "all",
  selected: new Set(),
  versions: [],
  ready: false,
  recoveryPending: false,
  restoring: false,
  dirty: false,
  lastJSON: "",
  saveTimer: null,
  versionBusy: false,
  collectionPrompt: null,
  storageFailed: false,
  commandResults: [],
  commandIndex: 0,
};
const maxEditorialAssets = new Set(Object.values(ARTWORK));
const maxAssetNames = new Map(
  Object.entries(ARTWORK).map(([name, data]) => [data, name]),
);
function maxPackArt(value) {
  const safe = safeArt(value);
  const name = maxAssetNames.get(safe);
  return name ? "milaf-art:" + name : safe;
}
function maxUnpackArt(value) {
  return typeof value === "string" && value.startsWith("milaf-art:")
    ? ARTWORK[value.slice(10)] || ARTWORK.monolith
    : safeArt(value);
}
function maxExpandRecord(record) {
  return {
    ...record,
    art: maxUnpackArt(record.art),
    shots: Array.isArray(record.shots)
      ? record.shots
          .slice(0, 50)
          .map((s) => ({ ...s, art: maxUnpackArt(s?.art) }))
      : [],
  };
}
function maxCompactRecord(record) {
  return {
    ...record,
    art: maxPackArt(record.art),
    shots: record.shots
      .slice(0, 50)
      .map((s) => ({ ...s, art: maxPackArt(s.art) })),
  };
}
function maxCleanCollections(values) {
  if (!Array.isArray(values)) return [];
  const known = new Set(allPrompts.map((p) => p.id));
  const seen = new Set();
  return values.slice(0, 30).flatMap((value) => {
    if (
      !value ||
      typeof value.name !== "string" ||
      !value.name.trim() ||
      !Array.isArray(value.promptIds)
    )
      return [];
    const id =
      typeof value.id === "string" && /^[-a-zA-Z0-9_]{1,120}$/.test(value.id)
        ? value.id
        : uid("collection");
    if (seen.has(id)) return [];
    seen.add(id);
    return [
      {
        id,
        name: value.name.trim().slice(0, 60),
        promptIds: [
          ...new Set(
            value.promptIds.filter(
              (id) => typeof id === "string" && known.has(id),
            ),
          ),
        ].slice(0, 1500),
      },
    ];
  });
}
maxState.collections = maxCleanCollections(
  readStorage("milaf-max-collections", []),
);

let maxDBPromise;
function maxDB() {
  if (maxDBPromise) return maxDBPromise;
  maxDBPromise = new Promise((resolve, reject) => {
    if (!window.indexedDB)
      return reject(
        Error("IndexedDB is not available in this browser context."),
      );
    const request = indexedDB.open("milaf-max-workspace", 1);
    const timer = setTimeout(
      () => reject(Error("Local recovery storage could not be opened.")),
      5000,
    );
    request.onupgradeneeded = () => {
      for (const name of ["state", "versions"])
        if (!request.result.objectStoreNames.contains(name))
          request.result.createObjectStore(name, { keyPath: "id" });
    };
    request.onsuccess = () => {
      clearTimeout(timer);
      request.result.onversionchange = () => request.result.close();
      resolve(request.result);
    };
    request.onerror = () => {
      clearTimeout(timer);
      reject(Error("Local recovery storage is blocked or unavailable."));
    };
    request.onblocked = () => {
      clearTimeout(timer);
      reject(Error("Close another Milaf tab to unlock recovery storage."));
    };
  });
  return maxDBPromise;
}
async function maxDBAction(store, method, value) {
  const db = await maxDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(
      store,
      ["get", "getAll"].includes(method) ? "readonly" : "readwrite",
    );
    const request =
      value === undefined
        ? tx.objectStore(store)[method]()
        : tx.objectStore(store)[method](value);
    tx.oncomplete = () => resolve(request.result);
    tx.onerror = tx.onabort = () =>
      reject(
        Error(
          "Browser recovery storage failed or is full. Export a private backup.",
        ),
      );
  });
}
function maxSetStatus(message) {
  $("maxSaveState").textContent = message;
}
function maxCaptureWorkspace() {
  const include = maxState.preferences.includeReferences;
  const safeArtwork = (value) =>
    include || maxEditorialAssets.has(value)
      ? maxPackArt(value)
      : "milaf-art:monolith";
  return {
    settings: getSettings(),
    title: $("cTitle").value || "Untitled workspace",
    prompt: include
      ? $("outputPrompt").value
      : $("outputPrompt").value.replace(/^Reference:.*$/gm, ""),
    reference: include ? reference : null,
    art: safeArtwork(activeArtwork),
    boardTitle: $("boardTitle").value,
    shots: shots.map((s) => ({ ...s, art: safeArtwork(s.art) })),
    view: state.view === "storyboard" ? "storyboard" : "create",
    activeProjectId,
    referencesExcluded: !!reference && !include,
  };
}
function maxWorkspaceHasContent(record) {
  return Boolean(
    record?.settings?.subject?.trim() ||
      record?.prompt?.trim() ||
      record?.shots?.length,
  );
}
function maxCleanWorkspace(raw) {
  if (!raw || !raw.settings || !Array.isArray(raw.shots)) return null;
  const clean = cleanProject({
    ...maxExpandRecord(raw),
    title: typeof raw.title === "string" ? raw.title : "Recovered workspace",
    kind: raw.view === "storyboard" ? "storyboard" : "brief",
  });
  if (!clean) return null;
  return {
    ...clean,
    view: raw.view === "storyboard" ? "storyboard" : "create",
    activeProjectId:
      typeof raw.activeProjectId === "string" ? raw.activeProjectId : null,
    referencesExcluded: raw.referencesExcluded === true,
  };
}
async function maxSaveWorkspace() {
  if (
    !maxState.ready ||
    maxState.recoveryPending ||
    !maxState.preferences.autosave ||
    maxState.restoring
  )
    return;
  const record = maxCaptureWorkspace();
  const serialized = JSON.stringify(record);
  if (serialized === maxState.lastJSON) {
    maxState.dirty = false;
    return;
  }
  try {
    maxSetStatus("Saving locally…");
    if (maxWorkspaceHasContent(record))
      await maxDBAction("state", "put", {
        id: "workspace",
        ...record,
        updatedAt: new Date().toISOString(),
      });
    else await maxDBAction("state", "delete", "workspace");
    maxState.lastJSON = serialized;
    maxState.dirty = false;
    maxState.storageFailed = false;
    maxSetStatus(
      "Saved locally" +
        (record.referencesExcluded ? " · reference excluded" : ""),
    );
  } catch (error) {
    maxSetStatus("Recovery unavailable · export a backup");
    if (!maxState.storageFailed) toast(error.message);
    maxState.storageFailed = true;
  }
}
function maxScheduleSave() {
  if (maxState.restoring) return;
  maxState.dirty = true;
  if (!maxState.ready || maxState.recoveryPending) return;
  if (!maxState.preferences.autosave) {
    maxSetStatus("Autosave off · save or export your work");
    return;
  }
  maxSetStatus("Unsaved changes…");
  clearTimeout(maxState.saveTimer);
  maxState.saveTimer = setTimeout(maxSaveWorkspace, 650);
}
async function maxRestoreRecord(raw, announce = true) {
  const record = maxCleanWorkspace(raw);
  if (!record) throw Error("This recovery record is invalid.");
  maxState.restoring = true;
  try {
    activeArtwork = safeArt(record.art);
    setSettings(record.settings);
    setReference(record.reference || null);
    $("outputPrompt").value = record.prompt || compileCreative();
    shots = record.shots.slice(0, 50).map((s) => ({
      ...s,
      duration: Math.round(s.duration),
    }));
    $("boardTitle").value = record.boardTitle || "Recovered sequence";
    activeProjectId = projects.some((p) => p.id === record.activeProjectId)
      ? record.activeProjectId
      : null;
    $("aiReferenceConsent").checked = false;
    $("aiConsent").checked = false;
    showView(record.view);
    renderShots();
  } finally {
    maxState.restoring = false;
  }
  maxState.recoveryPending = false;
  $("maxRestoreBanner").classList.add("hidden");
  maxState.lastJSON = "";
  maxScheduleSave();
  if (announce)
    toast(
      record.referencesExcluded
        ? "Text and shots restored. Reference images were excluded; choose them again if needed."
        : "Workspace restored locally. No provider request was made.",
    );
}
async function maxLoadVersions() {
  maxState.versions = (await maxDBAction("versions", "getAll")).sort((a, b) =>
    b.createdAt.localeCompare(a.createdAt),
  );
  maxRenderVersions();
}
function maxRenderVersions() {
  $("maxVersionList").innerHTML = maxState.versions.length
    ? maxState.versions
        .map(
          (v) =>
            `<article class="max-version"><div><strong>${esc(v.label)}</strong><small>${esc(new Date(v.createdAt).toLocaleString())} · ${v.workspace.shots.length} shots${v.workspace.referencesExcluded ? " · reference excluded" : ""}</small></div><div class="max-version-actions"><button class="text-button" data-max-restore-version="${esc(v.id)}">Restore ↗</button><button class="text-button" data-max-delete-version="${esc(v.id)}">Delete</button></div></article>`,
        )
        .join("")
    : '<p class="muted small-text">No saved versions yet. Save one before exploring another direction.</p>';
}
async function maxCreateVersion() {
  if (maxState.versionBusy) return;
  const workspace = maxCaptureWorkspace();
  if (!maxWorkspaceHasContent(workspace))
    return toast("Start a brief or add a shot before saving a version.");
  maxState.versionBusy = true;
  try {
    const version = {
      id: uid("version"),
      label:
        (state.view === "storyboard"
          ? $("boardTitle").value
          : $("cTitle").value
        )
          .trim()
          .slice(0, 140) || "Untitled direction",
      createdAt: new Date().toISOString(),
      workspace,
    };
    await maxDBAction("versions", "put", version);
    await maxLoadVersions();
    for (const old of maxState.versions.slice(20))
      await maxDBAction("versions", "delete", old.id);
    await maxLoadVersions();
    maxState.dirty = false;
    maxUpdatePulse();
    toast(
      "Version saved locally. References follow your recovery privacy setting.",
    );
  } catch (error) {
    toast(error.message);
  } finally {
    maxState.versionBusy = false;
  }
}
$("maxVersionQuick").onclick = maxCreateVersion;
$("maxCreateVersion").onclick = maxCreateVersion;
$("maxVersionList").onclick = async (e) => {
  const restore = e.target.closest("[data-max-restore-version]");
  const remove = e.target.closest("[data-max-delete-version]");
  try {
    if (
      restore &&
      confirm(
        "Restore this version? The current unsaved workspace will be replaced.",
      )
    ) {
      const version = maxState.versions.find(
        (v) => v.id === restore.dataset.maxRestoreVersion,
      );
      await maxRestoreRecord(version.workspace);
      $("maxSettingsDialog").close();
    }
    if (
      remove &&
      confirm(
        "Delete this local version? Export a backup first if you want to keep it.",
      )
    ) {
      await maxDBAction("versions", "delete", remove.dataset.maxDeleteVersion);
      await maxLoadVersions();
      maxUpdatePulse();
    }
  } catch (error) {
    toast(error.message);
  }
};
function maxApplyPreferences() {
  const p = maxState.preferences;
  document.body.dataset.density = p.density;
  document.body.dataset.reduceMotion = String(p.reduceMotion);
  $("maxAutosave").checked = p.autosave;
  $("maxIncludeReferences").checked = p.includeReferences;
  $("maxDensity").value = p.density;
  $("maxReduceMotion").checked = p.reduceMotion;
  $("maxStorageStatus").textContent = p.includeReferences
    ? "Recovery may contain private reference images. Keep exported backups private."
    : "Text/shot recovery only. Reference images are excluded unless you opt in.";
  $("maxReferencePrivacy").textContent = p.includeReferences
    ? "Recovery includes private references on this browser."
    : "Reference images are excluded from autosave/versions by default.";
}
for (const id of [
  "maxAutosave",
  "maxIncludeReferences",
  "maxDensity",
  "maxReduceMotion",
])
  $(id).onchange = () => {
    maxState.preferences = {
      autosave: $("maxAutosave").checked,
      includeReferences: $("maxIncludeReferences").checked,
      density: $("maxDensity").value,
      reduceMotion: $("maxReduceMotion").checked,
    };
    writeStorage("milaf-max-preferences", maxState.preferences);
    maxApplyPreferences();
    maxState.lastJSON = "";
    maxScheduleSave();
  };
function maxOpenSettings() {
  maxRenderVersions();
  $("maxSettingsDialog").showModal();
}
$("maxSettingsButton").onclick = maxOpenSettings;
$("maxClearRecovery").onclick = async () => {
  if (
    !confirm(
      "Delete the latest recovery workspace and all local versions, and turn autosave off? Saved projects, prompt collections, and server results are separate and will remain.",
    )
  )
    return;
  try {
    clearTimeout(maxState.saveTimer);
    await maxDBAction("state", "delete", "workspace");
    for (const version of await maxDBAction("versions", "getAll"))
      await maxDBAction("versions", "delete", version.id);
    maxState.preferences.autosave = false;
    writeStorage("milaf-max-preferences", maxState.preferences);
    maxState.recoveryPending = false;
    maxState.lastJSON = "";
    maxState.versions = [];
    $("maxRestoreBanner").classList.add("hidden");
    maxApplyPreferences();
    maxRenderVersions();
    maxUpdatePulse();
    maxSetStatus("Recovery cleared · autosave off");
    toast("Recovery data cleared. Explicitly saved projects are unchanged.");
  } catch (error) {
    toast(error.message);
  }
};

function maxPersistCollections() {
  writeStorage("milaf-max-collections", maxState.collections);
  maxRenderCollectionFilter();
  maxRenderCollections();
  maxUpdatePulse();
}
function maxOpenCollections(promptId = null) {
  maxState.collectionPrompt = typeof promptId === "string" ? promptId : null;
  maxRenderCollections();
  $("maxCollectionsDialog").showModal();
}
function maxRenderCollections() {
  const p = allPrompts.find((p) => p.id === maxState.collectionPrompt);
  $("maxCollectionContext").textContent = p
    ? "Select collections for: " + p.title
    : "Organize prompt IDs locally. Original prompts remain unchanged.";
  $("maxCollectionList").innerHTML = maxState.collections.length
    ? maxState.collections
        .map(
          (c) =>
            `<article class="max-collection"><label>${p ? `<input type="checkbox" data-max-membership="${esc(c.id)}" ${c.promptIds.includes(p.id) ? "checked" : ""}>` : ""}<span><strong>${esc(c.name)}</strong><small>${c.promptIds.length} prompts</small></span></label><button class="text-button" data-max-delete-collection="${esc(c.id)}">Delete collection</button></article>`,
        )
        .join("")
    : '<p class="muted small-text">Create your first collection for a campaign, skill, or visual direction.</p>';
}
$("maxCollectionForm").onsubmit = (e) => {
  e.preventDefault();
  const name = $("maxCollectionName").value.trim();
  if (!name) return;
  if (maxState.collections.length >= 30)
    return toast("Keep up to 30 personal collections.");
  const c = {
    id: uid("collection"),
    name: name.slice(0, 60),
    promptIds: maxState.collectionPrompt ? [maxState.collectionPrompt] : [],
  };
  maxState.collections.push(c);
  $("maxCollectionName").value = "";
  maxPersistCollections();
  toast("Personal collection created.");
};
$("maxCollectionList").onchange = (e) => {
  if (!e.target.matches("[data-max-membership]")) return;
  const c = maxState.collections.find(
    (c) => c.id === e.target.dataset.maxMembership,
  );
  if (!c || !maxState.collectionPrompt) return;
  c.promptIds = c.promptIds.filter((id) => id !== maxState.collectionPrompt);
  if (e.target.checked) c.promptIds.push(maxState.collectionPrompt);
  maxPersistCollections();
  renderLibrary();
};
$("maxCollectionList").onclick = (e) => {
  const b = e.target.closest("[data-max-delete-collection]");
  if (
    !b ||
    !confirm(
      "Delete this personal collection? Its prompts will remain in the library.",
    )
  )
    return;
  maxState.collections = maxState.collections.filter(
    (c) => c.id !== b.dataset.maxDeleteCollection,
  );
  if (maxState.collectionFilter === b.dataset.maxDeleteCollection)
    maxState.collectionFilter = "all";
  maxPersistCollections();
  renderLibrary();
};
$("maxOpenCollections").onclick = () => maxOpenCollections();

// Add collection filters and local multi-select tools without changing the JSON library schema.
const collectionBar = document.createElement("div");
collectionBar.className = "max-collection-filter";
collectionBar.innerHTML =
  '<label>Personal collection<select id="maxCollectionSelect" aria-label="Filter by personal collection"><option value="all">All prompts</option></select></label><button id="maxManageCollections" class="text-button">Manage collections ＋</button>';
document.querySelector(".library-controls").before(collectionBar);
const bulkBar = document.createElement("div");
bulkBar.id = "maxBulkBar";
bulkBar.className = "max-bulkbar hidden";
bulkBar.innerHTML =
  '<strong id="maxSelectionCount">0 selected</strong><button class="button small" id="maxCompareSelected">Compare 2–3</button><button class="button small" id="maxExportSelected">Export JSON</button><button class="button small" id="maxAddSelectedCollection">Add to chosen collection</button><button class="text-button" id="maxClearSelected">Clear</button>';
document.querySelector("#libraryView .result-meta").after(bulkBar);
function maxRenderCollectionFilter() {
  const select = $("maxCollectionSelect");
  select.innerHTML =
    '<option value="all">All prompts</option>' +
    maxState.collections
      .map(
        (c) =>
          `<option value="${esc(c.id)}">${esc(c.name)} (${c.promptIds.length})</option>`,
      )
      .join("");
  select.value = maxState.collectionFilter;
}
$("maxCollectionSelect").onchange = (e) => {
  maxState.collectionFilter = e.target.value;
  state.libraryLimit = 16;
  renderLibrary();
};
$("maxManageCollections").onclick = () => maxOpenCollections();
studioHooks.filterLibrary = (list) => {
  if (maxState.collectionFilter === "all") return list;
  const c = maxState.collections.find(
    (c) => c.id === maxState.collectionFilter,
  );
  return c ? list.filter((p) => c.promptIds.includes(p.id)) : list;
};
function maxRenderSelection() {
  const count = maxState.selected.size;
  $("maxBulkBar").classList.toggle("hidden", !count);
  $("maxSelectionCount").textContent = count + " selected";
  $("maxCompareSelected").disabled = count < 2 || count > 3;
  document
    .querySelectorAll("[data-max-select]")
    .forEach(
      (el) => (el.checked = maxState.selected.has(el.dataset.maxSelect)),
    );
}
studioHooks.libraryRendered = () => {
  for (const card of document.querySelectorAll("#libraryGrid .text-card")) {
    const id = card.querySelector("[data-open]").dataset.open;
    const label = document.createElement("label");
    label.className = "max-select-label";
    label.innerHTML = `<input type="checkbox" data-max-select="${esc(id)}" aria-label="Select ${esc(allPrompts.find((p) => p.id === id)?.title || id)}">Select for compare / export`;
    card.prepend(label);
  }
  maxRenderCollectionFilter();
  maxRenderSelection();
  maxUpdatePulse();
};
$("libraryGrid").addEventListener("change", (e) => {
  if (!e.target.matches("[data-max-select]")) return;
  const id = e.target.dataset.maxSelect;
  if (e.target.checked) maxState.selected.add(id);
  else maxState.selected.delete(id);
  maxRenderSelection();
});
$("maxClearSelected").onclick = () => {
  maxState.selected.clear();
  maxRenderSelection();
};
$("maxExportSelected").onclick = () =>
  exportPack(
    allPrompts.filter((p) => maxState.selected.has(p.id)),
    "milaf-selected-prompts.json",
  );
$("maxAddSelectedCollection").onclick = () => {
  const c = maxState.collections.find(
    (c) => c.id === maxState.collectionFilter,
  );
  if (!c) return toast("Choose a personal collection from the dropdown first.");
  c.promptIds = [...new Set([...c.promptIds, ...maxState.selected])];
  maxPersistCollections();
  toast("Selected prompts added to " + c.name + ".");
  renderLibrary();
};
$("maxCompareSelected").onclick = () => {
  const list = allPrompts.filter((p) => maxState.selected.has(p.id));
  if (list.length < 2 || list.length > 3)
    return toast("Select two or three prompts to compare.");
  $("maxCompareColumns").classList.toggle("three", list.length === 3);
  $("maxCompareColumns").innerHTML = list
    .map(
      (p) =>
        `<article class="max-compare-column"><div class="card-category">${esc(p.category)} / ${esc(p.medium)}</div><h3>${esc(p.title)}</h3><div class="max-compare-meta">${p.promptText.length.toLocaleString()} characters · ${p.templates.length} inputs<br>${esc(p.id)} · ${esc(p.variant)}</div><pre>${esc(p.promptText)}</pre><button class="button small" data-max-compare-open="${esc(p.id)}">Customize this prompt ↗</button></article>`,
    )
    .join("");
  $("maxCompareDialog").showModal();
};
$("maxCompareColumns").onclick = (e) => {
  const b = e.target.closest("[data-max-compare-open]");
  if (!b) return;
  $("maxCompareDialog").close();
  openPrompt(b.dataset.maxCompareOpen);
};
for (const id of ["resetLibrary", "allCategories"])
  $(id).addEventListener("click", () => {
    maxState.collectionFilter = "all";
    renderLibrary();
  });
const detailCollection = document.createElement("button");
detailCollection.className = "button small";
detailCollection.textContent = "Add to collection ＋";
detailCollection.onclick = () =>
  activePrompt && maxOpenCollections(activePrompt.id);
$("copyDetail").before(detailCollection);

// Private, explicit backup/restore. Never serializes the AI object or provider tokens.
async function maxExportBackup() {
  try {
    let versions = [];
    try {
      versions = await maxDBAction("versions", "getAll");
    } catch {}
    const backup = {
      format: "milaf-workspace-backup-v1",
      version: 4,
      exportedAt: new Date().toISOString(),
      notice:
        "May contain private project images. Excludes AI credentials, current chat, and server-generated media.",
      preferences: maxState.preferences,
      favorites: [...favorites],
      projects: projects.map(maxCompactRecord),
      imports,
      collections: maxState.collections,
      workspace: maxCaptureWorkspace(),
      versions,
    };
    download(
      "milaf-private-workspace-backup.json",
      JSON.stringify(backup, null, 2),
    );
    toast("Private backup exported. Keep it somewhere safe.");
  } catch (error) {
    toast(error.message);
  }
}
$("maxExportBackup").onclick = maxExportBackup;
$("maxImportBackup").onchange = async (e) => {
  try {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 40 * 1024 * 1024)
      throw Error("Choose a workspace backup smaller than 40 MB.");
    let backup;
    try {
      backup = JSON.parse(await file.text());
    } catch {
      throw Error("That backup is not valid JSON.");
    }
    if (
      backup.format !== "milaf-workspace-backup-v1" ||
      !Array.isArray(backup.projects) ||
      !Array.isArray(backup.imports) ||
      !Array.isArray(backup.favorites)
    )
      throw Error("This is not a supported Milaf workspace backup.");
    const importedProjects = backup.projects
      .slice(0, 25)
      .map((p) =>
        p && typeof p === "object" ? cleanProject(maxExpandRecord(p)) : null,
      )
      .filter(Boolean);
    const importedPrompts = backup.imports
      .slice(0, 500)
      .map((p) =>
        cleanPrompt(
          p,
          typeof p?.category === "string" ? p.category : "Imported",
        ),
      )
      .filter(Boolean);
    const workspace = backup.workspace
      ? maxCleanWorkspace(backup.workspace)
      : null;
    if (
      !confirm(
        "Merge this backup into local data and restore its workspace? Existing projects remain subject to the 25-project limit. No AI requests will be made.",
      )
    )
      return;
    const known = new Set(allPrompts.map((p) => p.id));
    for (const p of importedPrompts)
      if (!known.has(p.id) && imports.length < 500) {
        imports.push(p);
        known.add(p.id);
      }
    allPrompts = [...bundled, ...imports];
    projects.push(
      ...importedProjects.slice(0, Math.max(0, 25 - projects.length)),
    );
    favorites = new Set([
      ...favorites,
      ...backup.favorites.filter(
        (id) => typeof id === "string" && known.has(id),
      ),
    ]);
    const incoming = maxCleanCollections(backup.collections);
    for (const c of incoming) {
      const prior = maxState.collections.find((x) => x.id === c.id);
      if (prior)
        prior.promptIds = [...new Set([...prior.promptIds, ...c.promptIds])];
      else if (maxState.collections.length < 30) maxState.collections.push(c);
    }
    maxState.preferences = maxCleanPreferences(backup.preferences);
    writeStorage("milaf-v2-projects", projects);
    writeStorage("milaf-v2-imports", imports);
    writeStorage("milaf-favorites", [...favorites]);
    writeStorage("milaf-max-preferences", maxState.preferences);
    writeStorage("milaf-max-collections", maxState.collections);
    maxApplyPreferences();
    try {
      for (const v of (Array.isArray(backup.versions)
        ? backup.versions
        : []
      ).slice(0, 20)) {
        const clean = maxCleanWorkspace(v?.workspace);
        if (clean)
          await maxDBAction("versions", "put", {
            id: uid("version"),
            label:
              typeof v.label === "string"
                ? v.label.slice(0, 140)
                : "Imported version",
            createdAt: new Date().toISOString(),
            workspace: maxCompactRecord(clean),
          });
      }
      await maxLoadVersions();
      for (const old of maxState.versions.slice(20))
        await maxDBAction("versions", "delete", old.id);
      await maxLoadVersions();
    } catch {
      toast(
        "Main data merged, but versions could not be persisted. Export a fresh backup.",
      );
    }
    renderProjects();
    renderLibrary();
    renderExplore();
    if (workspace) await maxRestoreRecord(workspace, false);
    maxUpdatePulse();
    toast(
      "Backup merged. Check counts and export a fresh backup; local storage limits still apply.",
    );
  } catch (error) {
    toast(error.message);
  } finally {
    e.target.value = "";
  }
};

// Storyboard handoff formats and honest local starter plans.
const boardExtras = document.createElement("div");
boardExtras.className = "max-board-extras";
boardExtras.innerHTML =
  '<button class="button small" id="maxExportMarkdown">Export Markdown ↗</button><button class="button small" id="maxPrintBoard">Print / save PDF ↗</button><button class="button small" id="maxStarterBoard">＋ 3-shot starter plan</button><span>LOCAL PLANNING · NO AI CALL</span>';
document.querySelector(".board-toolbar").after(boardExtras);
function maxTime(seconds) {
  const n = Math.round(seconds);
  return (
    String(Math.floor(n / 60)).padStart(2, "0") +
    ":" +
    String(n % 60).padStart(2, "0")
  );
}
function maxShotTiming() {
  let time = 0;
  return shots.map((s, i) => {
    const start = time;
    time += Number(s.duration);
    return { ...s, number: i + 1, start, end: time };
  });
}
$("maxExportMarkdown").onclick = () => {
  if (!shots.length) return toast("Add at least one shot.");
  const lines = [
    "# " + $("boardTitle").value,
    "",
    "Planning document only. No rendered footage is implied.",
    "",
    `Total target runtime: ${maxTime(shots.reduce((sum, s) => sum + Number(s.duration), 0))}`,
    "",
  ];
  for (const s of maxShotTiming())
    lines.push(
      `## ${String(s.number).padStart(2, "0")} / ${s.title}`,
      `**${maxTime(s.start)}–${maxTime(s.end)} · ${s.duration} seconds**`,
      "",
      s.prompt,
      "",
    );
  download("milaf-storyboard.md", lines.join("\n"), "text/markdown");
};
$("maxPrintBoard").onclick = () => {
  if (!shots.length) return toast("Add a shot before printing.");
  $("maxPrintSheet").innerHTML =
    `<h1>${esc($("boardTitle").value)}</h1><div class="print-meta">MILAF STUDIO MAX · Planning only / no rendered footage implied · ${shots.length} shots</div>` +
    maxShotTiming()
      .map(
        (s) =>
          `<article class="print-shot"><img src="${safeArt(s.art)}" alt="Illustrative reference"><h2>${String(s.number).padStart(2, "0")} / ${esc(s.title)}</h2><div class="print-meta">${maxTime(s.start)}–${maxTime(s.end)} · ${s.duration} seconds</div><pre>${esc(s.prompt)}</pre></article>`,
      )
      .join("");
  window.print();
};
$("maxStarterBoard").onclick = () => {
  if (
    shots.length &&
    !confirm(
      "Replace the current shot plan with a local three-shot starter? Save a version first if needed.",
    )
  )
    return;
  const subject = $("cSubject").value.trim() || "[describe your subject]";
  shots = [];
  for (const [title, camera, duration] of [
    [
      "Establish the world",
      "Locked-off wide frame, environmental context, clear screen direction",
      5,
    ],
    [
      "Find the detail",
      "A deliberate close detail with matching light and material continuity",
      4,
    ],
    [
      "Deliver the final beat",
      "A controlled pull-back or calm closing frame with a resolved composition",
      6,
    ],
  ])
    addShot(
      title,
      `${subject}. ${camera}. Keep subject identity, geometry, color, and lighting consistent with the previous shot. This is a planning draft; refine the action before generating.`,
      reference?.data || activeArtwork,
      duration,
    );
  renderShots();
  maxScheduleSave();
  toast("Local 3-shot starter added. No AI request was made.");
};

// Project search/sort preserves existing delegated project actions and project IDs.
const projectTools = document.createElement("div");
projectTools.className = "max-project-controls";
projectTools.innerHTML =
  '<label class="search-box"><span>⌕</span><input id="maxProjectSearch" type="search" placeholder="Search your projects…" aria-label="Search saved projects"></label><select id="maxProjectSort" aria-label="Sort saved projects"><option value="recent">Recently updated</option><option value="title">Project title A–Z</option></select><span id="maxProjectCount"></span>';
$("projectsGrid").before(projectTools);
function maxFilterProjects() {
  const query = $("maxProjectSearch").value.trim().toLowerCase();
  let visible = 0;
  const cards = [...document.querySelectorAll("#projectsGrid [data-project]")];
  cards.sort((a, b) => {
    const left = projects.find((p) => p.id === a.dataset.project);
    const right = projects.find((p) => p.id === b.dataset.project);
    return $("maxProjectSort").value === "title"
      ? left.title.localeCompare(right.title)
      : String(right.updatedAt).localeCompare(String(left.updatedAt));
  });
  for (const card of cards) {
    const p = projects.find((p) => p.id === card.dataset.project);
    const show = [p.title, p.settings.subject, p.prompt]
      .join(" ")
      .toLowerCase()
      .includes(query);
    card.classList.toggle("hidden", !show);
    if (show) visible++;
    $("projectsGrid").append(card);
  }
  $("maxProjectCount").textContent =
    visible + " / " + projects.length + " projects";
  maxUpdatePulse();
}
studioHooks.projectsRendered = maxFilterProjects;
$("maxProjectSearch").oninput = maxFilterProjects;
$("maxProjectSort").onchange = maxFilterProjects;

// Global command palette: real navigation/actions, never an implicit paid request.
function maxCommands(query) {
  const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const match = (text) => words.every((w) => text.toLowerCase().includes(w));
  let list = [
    ...[
      ["explore", "Explore cinematic ideas"],
      ["create", "Open the creative brief builder"],
      ["ai", "Open Google AI workspace"],
      ["library", "Search the entire prompt library"],
      ["storyboard", "Plan a storyboard"],
      ["projects", "Open saved projects"],
    ].map(([view, label]) => ({
      label,
      detail: "Navigate / " + view,
      run: () => showView(view),
    })),
    {
      label: "Save a workspace version",
      detail: "Local action / no AI call",
      run: maxCreateVersion,
    },
    {
      label: "Export a private workspace backup",
      detail: "Local file / may contain project images",
      run: maxExportBackup,
    },
    {
      label: "Manage personal collections",
      detail: "Organize your prompt IDs locally",
      run: () => maxOpenCollections(),
    },
    {
      label: "Workspace settings and version history",
      detail: "Recovery / privacy / display",
      run: maxOpenSettings,
    },
  ].filter((x) => match(x.label + " " + x.detail));
  if (words.length) {
    for (const p of allPrompts
      .filter((p) => match([p.id, p.title, p.category, ...p.tags].join(" ")))
      .slice(0, 14))
      list.push({
        label: p.title,
        detail: p.category + " / " + p.id,
        run: () => openPrompt(p.id),
      });
    for (const p of projects.filter((p) => match(p.title)).slice(0, 5))
      list.push({
        label: p.title,
        detail: "Saved project / open",
        run: () => {
          showView("projects");
          const card = [...document.querySelectorAll("[data-project]")].find(
            (el) => el.dataset.project === p.id,
          );
          card?.querySelector('[data-project-action="open"]')?.click();
        },
      });
  }
  return list.slice(0, 22);
}
function maxRenderCommands() {
  maxState.commandResults = maxCommands($("maxCommandInput").value);
  maxState.commandIndex = Math.min(
    Math.max(0, maxState.commandIndex),
    Math.max(0, maxState.commandResults.length - 1),
  );
  $("maxCommandResults").innerHTML = maxState.commandResults.length
    ? maxState.commandResults
        .map(
          (item, i) =>
            `<button class="max-command-result ${i === maxState.commandIndex ? "active" : ""}" role="option" aria-selected="${i === maxState.commandIndex}" id="maxCommandOption${i}" data-max-command="${i}" tabindex="-1"><div><strong>${esc(item.label)}</strong><small>${esc(item.detail)}</small></div><span>↗</span></button>`,
        )
        .join("")
    : '<div class="empty-state"><p>No local matches. Try a shorter title or a prompt ID.</p></div>';
  $("maxCommandInput").setAttribute(
    "aria-activedescendant",
    maxState.commandResults.length
      ? "maxCommandOption" + maxState.commandIndex
      : "",
  );
}
function maxOpenCommand() {
  if (document.querySelector("dialog[open]")) return;
  $("maxCommandInput").value = "";
  maxState.commandIndex = 0;
  maxRenderCommands();
  $("maxCommandDialog").showModal();
  $("maxCommandInput").focus();
}
function maxRunCommand(index) {
  const item = maxState.commandResults[index];
  if (!item) return;
  $("maxCommandDialog").close();
  item.run();
}
$("maxCommandButton").onclick = maxOpenCommand;
$("maxCommandInput").oninput = () => {
  maxState.commandIndex = 0;
  maxRenderCommands();
};
$("maxCommandResults").onclick = (e) => {
  const b = e.target.closest("[data-max-command]");
  if (b) maxRunCommand(Number(b.dataset.maxCommand));
};
$("maxCommandInput").onkeydown = (e) => {
  if (["ArrowDown", "ArrowUp"].includes(e.key)) {
    e.preventDefault();
    const count = maxState.commandResults.length;
    if (count)
      maxState.commandIndex =
        (maxState.commandIndex + (e.key === "ArrowDown" ? 1 : -1) + count) %
        count;
    maxRenderCommands();
    $("maxCommandOption" + maxState.commandIndex)?.scrollIntoView({
      block: "nearest",
    });
  }
  if (e.key === "Enter") {
    e.preventDefault();
    maxRunCommand(maxState.commandIndex);
  }
};
document.addEventListener(
  "keydown",
  (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      e.stopImmediatePropagation();
      maxOpenCommand();
    }
    if (
      (e.ctrlKey || e.metaKey) &&
      e.key.toLowerCase() === "s" &&
      !document.querySelector("dialog[open]")
    ) {
      e.preventDefault();
      e.stopImmediatePropagation();
      maxCreateVersion();
    }
  },
  true,
);

function maxUpdatePulse() {
  const pulse = $("maxPulse");
  if (pulse)
    pulse.innerHTML = `<span><strong>${allPrompts.length.toLocaleString()}</strong> prompts</span><span><strong>${new Set(allPrompts.map((p) => p.category)).size}</strong> library packs</span><span><strong>${favorites.size}</strong> favorites</span><span><strong>${projects.length}</strong> projects</span><span><strong>${maxState.versions.length}</strong> saved versions</span><span><strong>${maxState.collections.length}</strong> personal collections</span>`;
}
const pulse = document.createElement("div");
pulse.className = "max-pulse";
pulse.id = "maxPulse";
document.querySelector(".quick-tools").after(pulse);
const metrics = document.createElement("div");
metrics.className = "max-brief-metrics";
metrics.id = "maxBriefMetrics";
$("outputPrompt").after(metrics);
function maxUpdateBriefMetrics() {
  const text = $("outputPrompt").value;
  const missing = new Set(text.match(/\[[a-z_]+\]/g) || []);
  $("maxBriefMetrics").innerHTML =
    `<span>${text.length.toLocaleString()} characters</span><span>${text.trim() ? text.trim().split(/\s+/).length : 0} words</span><span class="${missing.size ? "attention" : ""}">${missing.size ? missing.size + " unresolved inputs" : "No bracketed inputs"}</span>`;
}
studioHooks.workspaceChanged = () => {
  maxUpdateBriefMetrics();
  maxScheduleSave();
};
const refNote = document.createElement("p");
refNote.id = "maxReferencePrivacy";
refNote.className = "max-reference-note";
document.querySelector(".reference-row").after(refNote);
const collectionTool = document.createElement("button");
collectionTool.className = "tool-item";
collectionTool.innerHTML =
  "<strong>Workspace settings & private backups ↗</strong><span>Autosave privacy, version history, collections, and full local recovery.</span>";
collectionTool.onclick = () => {
  $("toolkitDialog").close();
  maxOpenSettings();
};
document.querySelector(".toolkit-actions").append(collectionTool);
document.addEventListener("input", (e) => {
  if (e.target.closest("#createForm,#outputPrompt,#boardTitle,#shotList")) {
    maxUpdateBriefMetrics();
    maxScheduleSave();
  }
});
document.addEventListener("click", (e) => {
  if (e.target.closest("[data-favorite],#favoriteDetail,[data-project-action]"))
    maxUpdatePulse();
  if (
    e.target.closest(
      "#refinePrompt,#newProject,[data-project-action],#detailWorkspace",
    )
  )
    setTimeout(maxScheduleSave, 0);
});
window.addEventListener("beforeunload", (e) => {
  if (maxState.dirty) {
    e.preventDefault();
    e.returnValue = "";
  }
});
async function maxInitialize() {
  maxApplyPreferences();
  maxRenderCollectionFilter();
  renderLibrary();
  maxFilterProjects();
  maxUpdatePulse();
  maxUpdateBriefMetrics();
  try {
    await maxLoadVersions();
    const prior = await maxDBAction("state", "get", "workspace");
    maxState.ready = true;
    if (prior && maxWorkspaceHasContent(prior)) {
      maxState.recoveryPending = true;
      maxSetStatus("Recovery waiting for your choice");
      $("maxRestoreDescription").textContent =
        (prior.settings?.title || "Untitled workspace") +
        " · saved " +
        new Date(prior.updatedAt).toLocaleString() +
        (prior.referencesExcluded ? " · reference excluded" : "");
      $("maxRestoreBanner").classList.remove("hidden");
      $("maxRestoreWorkspace").onclick = async () => {
        try {
          await maxRestoreRecord(prior);
        } catch (error) {
          toast(error.message);
        }
      };
      $("maxDiscardRecovery").onclick = async () => {
        try {
          await maxDBAction("state", "delete", "workspace");
          maxState.recoveryPending = false;
          $("maxRestoreBanner").classList.add("hidden");
          maxState.lastJSON = "";
          maxScheduleSave();
          toast(
            "Recovery dismissed. Saved projects and versions are unchanged.",
          );
        } catch (error) {
          toast(error.message);
        }
      };
    } else
      maxSetStatus(
        maxState.preferences.autosave
          ? "Autosave ready · local only"
          : "Autosave off",
      );
    maxUpdatePulse();
  } catch (error) {
    maxState.ready = true;
    maxState.storageFailed = true;
    maxSetStatus("Recovery unavailable · export a backup");
    $("maxStorageStatus").textContent = error.message;
  }
}

const statsPanel = document.createElement("div");
statsPanel.id = "maxAIStats";
statsPanel.className = "max-ai-stats";
statsPanel.innerHTML =
  "<span>Connect the backend for real queue, usage, and storage counts.</span>";
document.querySelector(".ai-modebar").after(statsPanel);
const historyControls = document.createElement("div");
historyControls.className = "max-project-controls";
historyControls.innerHTML =
  '<label class="field" style="margin:0"><span>Generation history</span><select id="maxHistoryFilter" aria-label="Filter generation history"><option value="all">All jobs</option><option value="assistant">Assistant</option><option value="image">Images</option><option value="video">Video</option><option value="waiting">Queued / running</option><option value="failed">Failed / canceled</option></select></label><span>Filters never create or retry a paid request.</span>';
$("aiJobGrid").before(historyControls);
const historyMore = document.createElement("button");
historyMore.id = "maxHistoryMore";
historyMore.className = "button center-button hidden";
historyMore.textContent = "Load more history ↓";
$("aiJobGrid").after(historyMore);
historyMore.onclick = () => {
  ai.historyLimit += 12;
  renderAIJobs();
};
$("maxHistoryFilter").onchange = (e) => {
  ai.historyFilter = e.target.value;
  ai.historyLimit = 12;
  renderAIJobs();
};
const clearChat = document.createElement("button");
clearChat.className = "text-button";
clearChat.textContent = "Clear conversation";
clearChat.type = "button";
clearChat.onclick = () => {
  if (ai.sending)
    return toast(
      "Wait for the current assistant request, or disconnect; upstream costs may already apply.",
    );
  if (!ai.chat.length)
    return toast("The current conversation is already empty.");
  if (
    !confirm(
      "Clear this page’s conversation? Server job history remains until deleted or expired.",
    )
  )
    return;
  ai.chat = [];
  lastAIText = "";
  $("aiMessages").innerHTML =
    '<div class="ai-welcome"><span>✳</span><h3>A fresh conversation.</h3><p>Only the next text you explicitly submit will start this conversation. Server job history is managed separately below.</p></div>';
  toast("Conversation cleared in this page. No server results were deleted.");
};
document.querySelector(".ai-composer-actions").prepend(clearChat);
studioHooks.aiConnectionChanged = () => loadAIStats();
studioHooks.projectSaved = (saved) => {
  if (saved) {
    maxState.dirty = false;
    maxSetStatus(
      maxState.preferences.autosave
        ? "Project saved locally"
        : "Project saved · autosave off",
    );
  }
};

maxInitialize();
