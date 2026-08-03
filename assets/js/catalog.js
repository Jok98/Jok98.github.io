(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }
  root.JokCatalog = api;
}(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  const AREA_ROOTS = {
    dev: { id: "engineering", label: "Engineering", order: 10 },
    etc: { id: "personal", label: "Personal", order: 20 },
    uni: { id: "university", label: "University", order: 30 },
  };

  function normalizeCatalog(data) {
    if (!data || !Array.isArray(data.items)) {
      throw new Error("The notes catalog has an invalid format.");
    }
    return Number(data.schemaVersion) >= 2
      ? normalizeCompactCatalog(data)
      : normalizeLegacyCatalog(data);
  }

  function normalizeCompactCatalog(data) {
    if (!Array.isArray(data.folders)) {
      throw new Error("The compact notes catalog has no folders.");
    }

    const folders = data.folders.map((folder) => ({
      id: String(folder.id || folder.path || ""),
      parentId: folder.parentId || null,
      path: String(folder.path || folder.id || ""),
      label: String(folder.label || humanize(folder.id)),
      order: numberOrNull(folder.order),
      count: Number(folder.count) || 0,
    }));
    assertUniqueIds(folders, "folder");
    const folderById = new Map(folders.map((folder) => [folder.id, folder]));

    const items = data.items.map((item) => normalizeItem(item, folderById));
    assertUniqueIds(items, "item");
    items.forEach((item) => {
      if (!folderById.has(item.folderId)) {
        throw new Error(`Catalog item ${item.id} references an unknown folder.`);
      }
    });

    return buildRuntimeCatalog(data.schemaVersion, folders, items, data.facets || {});
  }

  function normalizeLegacyCatalog(data) {
    const labels = new Map();
    const items = data.items.map((item) => {
      const areaSlug = item.area && item.area.slug ? item.area.slug : "uncategorized";
      const area = AREA_ROOTS[areaSlug] || {
        id: slugify(areaSlug) || "uncategorized",
        label: item.area && item.area.label ? item.area.label : humanize(areaSlug),
        order: 50,
      };
      const topicSlug = slugify(item.topic && item.topic.slug) || "uncategorized";
      const topicLabel = item.topic && item.topic.label ? item.topic.label : humanize(topicSlug);
      const sourceParts = String(item.sourcePath || "").toLowerCase().split("/");
      const status = item.status || (sourceParts.includes("old") ? "archived" : "active");
      const folderId = status === "archived"
        ? `archive/${area.id}/${topicSlug}`
        : `${area.id}/${topicSlug}`;

      labels.set(area.id, area.label);
      labels.set(topicSlug, topicLabel);
      labels.set("archive", "Archive");

      return {
        id: String(item.id || slugify(item.url)),
        folderId,
        title: String(item.title || "Untitled"),
        summary: String(item.summary || ""),
        url: String(item.url || "#"),
        tags: Array.isArray(item.tags) ? item.tags.map(String) : [],
        order: numberOrNull(item.order),
        kind: item.kind || (String(item.url).includes("roadmap") ? "roadmap" : "note"),
        status,
        lang: item.lang || "en",
      };
    });

    const folders = buildFoldersFromItems(items, labels);
    const folderById = new Map(folders.map((folder) => [folder.id, folder]));
    const normalizedItems = items.map((item) => normalizeItem(item, folderById));
    return buildRuntimeCatalog(1, folders, normalizedItems, data.facets || {});
  }

  function normalizeItem(item, folderById) {
    const folderId = String(item.folderId || "");
    const breadcrumbs = folderLabels(folderId, folderById);
    const normalized = {
      id: String(item.id || slugify(item.url)),
      folderId,
      title: String(item.title || "Untitled"),
      summary: String(item.summary || ""),
      url: String(item.url || "#"),
      tags: Array.isArray(item.tags) ? item.tags.map(String) : [],
      order: numberOrNull(item.order),
      kind: String(item.kind || "note"),
      status: String(item.status || "active"),
      lang: String(item.lang || "en"),
      breadcrumbs,
    };
    normalized.searchText = [
      normalized.title,
      normalized.summary,
      ...normalized.tags,
      ...breadcrumbs,
      normalized.kind,
      normalized.status,
    ].join(" ").toLocaleLowerCase();
    return normalized;
  }

  function buildRuntimeCatalog(schemaVersion, folders, items, facets) {
    return {
      schemaVersion: Number(schemaVersion) || 1,
      folders: sortFolders(folders),
      items: sortItems(items),
      facets,
      folderById: new Map(folders.map((folder) => [folder.id, folder])),
    };
  }

  function buildFoldersFromItems(items, labels) {
    const counts = new Map();
    items.forEach((item) => {
      const parts = item.folderId.split("/");
      for (let index = 1; index <= parts.length; index += 1) {
        const path = parts.slice(0, index).join("/");
        counts.set(path, (counts.get(path) || 0) + 1);
      }
    });

    return Array.from(counts, ([path, count]) => {
      const parts = path.split("/");
      const segment = parts[parts.length - 1];
      const root = AREA_ROOTS[segment];
      return {
        id: path,
        parentId: parts.length > 1 ? parts.slice(0, -1).join("/") : null,
        path,
        label: labels.get(segment) || (root ? root.label : humanize(segment)),
        order: segment === "archive" ? 90 : root ? root.order : 100,
        count,
      };
    });
  }

  function parseExplorerState(search) {
    const params = new URLSearchParams(search || "");
    return {
      path: safeFolderPath(params.get("path")),
      view: params.get("view") === "grid" ? "grid" : "list",
      q: String(params.get("q") || "").trim().slice(0, 160),
      scope: params.get("scope") === "current" ? "current" : "all",
      kind: safeFilter(params.get("kind")),
    };
  }

  function buildExplorerUrl(state, basePath) {
    const base = basePath || "/explore/";
    const params = new URLSearchParams();
    const path = safeFolderPath(state.path);
    if (path) {
      params.set("path", path);
    }
    params.set("view", state.view === "grid" ? "grid" : "list");
    if (state.q) {
      params.set("q", String(state.q).trim().slice(0, 160));
    }
    if (state.scope === "current") {
      params.set("scope", "current");
    }
    if (state.kind && state.kind !== "all") {
      params.set("kind", safeFilter(state.kind));
    }
    return `${base}?${params.toString()}`;
  }

  function selectExplorerContent(catalog, requestedState) {
    const validPath = !requestedState.path || catalog.folderById.has(requestedState.path);
    const state = { ...requestedState, path: validPath ? requestedState.path : "" };
    const folders = catalog.folders.filter((folder) => (
      state.path ? folder.parentId === state.path : folder.parentId === null
    ));

    let items;
    if (state.q) {
      items = catalog.items.filter((item) => (
        state.scope !== "current"
        || !state.path
        || isFolderWithin(item.folderId, state.path)
      ));
      const terms = state.q.toLocaleLowerCase().split(/\s+/).filter(Boolean);
      items = items.filter((item) => terms.every((term) => item.searchText.includes(term)));
    } else {
      items = state.path
        ? catalog.items.filter((item) => item.folderId === state.path)
        : [];
    }

    if (state.kind && state.kind !== "all") {
      items = items.filter((item) => item.kind === state.kind);
    }

    return {
      state,
      invalidPath: !validPath,
      currentFolder: state.path ? catalog.folderById.get(state.path) : null,
      breadcrumbs: getBreadcrumbs(catalog, state.path),
      folders: sortFolders(folders),
      items: sortItems(items),
    };
  }

  function getBreadcrumbs(catalog, folderId) {
    const breadcrumbs = [{ id: "", path: "", label: "Explorer" }];
    const chain = [];
    let current = catalog.folderById.get(folderId);
    while (current) {
      chain.unshift(current);
      current = current.parentId ? catalog.folderById.get(current.parentId) : null;
    }
    return breadcrumbs.concat(chain);
  }

  function folderLabels(folderId, folderById) {
    const labels = [];
    let current = folderById.get(folderId);
    while (current) {
      labels.unshift(current.label);
      current = current.parentId ? folderById.get(current.parentId) : null;
    }
    return labels;
  }

  function isFolderWithin(folderId, parentId) {
    return folderId === parentId || folderId.startsWith(`${parentId}/`);
  }

  function sortFolders(folders) {
    return [...folders].sort((left, right) => (
      numberForSort(left.order) - numberForSort(right.order)
      || left.label.localeCompare(right.label)
    ));
  }

  function sortItems(items) {
    return [...items].sort((left, right) => (
      numberForSort(left.order) - numberForSort(right.order)
      || left.title.localeCompare(right.title)
    ));
  }

  function assertUniqueIds(entries, type) {
    const seen = new Set();
    entries.forEach((entry) => {
      if (!entry.id || seen.has(entry.id)) {
        throw new Error(`The catalog contains an invalid or duplicate ${type} id.`);
      }
      seen.add(entry.id);
    });
  }

  function safeFolderPath(value) {
    if (!value) {
      return "";
    }
    const path = String(value).replace(/^\/+|\/+$/g, "");
    return path.split("/").every((segment) => /^[a-z0-9][a-z0-9-]*$/.test(segment))
      ? path
      : "";
  }

  function safeFilter(value) {
    return /^[a-z0-9][a-z0-9-]*$/.test(String(value || "")) ? String(value) : "all";
  }

  function numberOrNull(value) {
    return Number.isFinite(Number(value)) && value !== null ? Number(value) : null;
  }

  function numberForSort(value) {
    return value === null || value === undefined ? Number.MAX_SAFE_INTEGER : Number(value);
  }

  function slugify(value) {
    return String(value || "")
      .toLocaleLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function humanize(value) {
    const special = {
      ai: "AI",
      api: "API",
      dsa: "DSA",
      devops: "DevOps",
      jwt: "JWT",
      ssh: "SSH",
    };
    const text = String(value || "").replace(/[-_]+/g, " ").trim();
    if (special[text.toLocaleLowerCase()]) {
      return special[text.toLocaleLowerCase()];
    }
    return text.replace(/\b\w/g, (character) => character.toLocaleUpperCase());
  }

  return {
    normalizeCatalog,
    parseExplorerState,
    buildExplorerUrl,
    selectExplorerContent,
    getBreadcrumbs,
    isFolderWithin,
  };
}));
