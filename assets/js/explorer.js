(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const root = document.querySelector("[data-explorer-root]");
    if (!root) {
      return;
    }

    const api = window.JokCatalog;
    const shell = root.querySelector(".explorer-shell");
    const form = root.querySelector("[data-explorer-search-form]");
    const searchInput = root.querySelector("#explorer-search-input");
    const scopeSelect = root.querySelector("#explorer-search-scope");
    const kindSelect = root.querySelector("#explorer-kind-filter");
    const clearLink = root.querySelector("[data-explorer-clear]");
    const breadcrumbs = root.querySelector("[data-explorer-breadcrumbs]");
    const status = root.querySelector("[data-explorer-status]");
    const folderSection = root.querySelector("[data-explorer-folder-section]");
    const folderList = root.querySelector("[data-explorer-folders]");
    const context = root.querySelector("[data-explorer-context]");
    const currentTitle = root.querySelector("#explorer-current-title");
    const resultCount = root.querySelector("[data-explorer-result-count]");
    const itemList = root.querySelector("[data-explorer-items]");
    const empty = root.querySelector("[data-explorer-empty]");
    const staticFallback = root.querySelector("[data-explorer-static-fallback]");
    const viewButtons = Array.from(root.querySelectorAll("[data-explorer-view]"));

    let catalog;
    let state = api ? api.parseExplorerState(window.location.search) : null;
    let searchGeneration = 0;
    let pagefindPromise;

    if (!api) {
      showFatalError("The explorer module could not be loaded.");
      return;
    }

    fetch("/assets/data/content-index.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Catalog request failed: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        catalog = api.normalizeCatalog(data);
        populateKinds();
        syncControls();
        render();
        shell.setAttribute("aria-busy", "false");
        staticFallback.hidden = true;
      })
      .catch(() => {
        showFatalError("The notes catalog could not be loaded. Reload the page to try again.");
      });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      navigate({
        ...state,
        q: searchInput.value.trim(),
        scope: scopeSelect.value,
        kind: kindSelect.value,
      });
    });

    clearLink.addEventListener("click", (event) => {
      event.preventDefault();
      navigate({ ...state, q: "", scope: "all", kind: "all" });
    });

    viewButtons.forEach((button) => {
      button.addEventListener("click", () => {
        navigate({ ...state, view: button.dataset.explorerView });
      });
    });

    root.addEventListener("click", (event) => {
      const link = event.target.closest("[data-explorer-path]");
      if (!link) {
        return;
      }
      event.preventDefault();
      navigate({ ...state, path: link.dataset.explorerPath || "", q: "" }, true);
    });

    window.addEventListener("popstate", () => {
      state = api.parseExplorerState(window.location.search);
      syncControls();
      render();
      focusCurrentTitle();
    });

    function navigate(nextState, moveFocus) {
      state = api.parseExplorerState(new URL(api.buildExplorerUrl(nextState), window.location.origin).search);
      window.history.pushState({}, "", api.buildExplorerUrl(state));
      syncControls();
      render();
      if (moveFocus) {
        focusCurrentTitle();
      }
    }

    function populateKinds() {
      const kinds = Array.from(new Set(catalog.items.map((item) => item.kind))).sort();
      kinds.forEach((kind) => {
        const option = document.createElement("option");
        option.value = kind;
        option.textContent = humanize(kind);
        kindSelect.appendChild(option);
      });
    }

    function syncControls() {
      searchInput.value = state.q;
      scopeSelect.value = state.scope;
      kindSelect.value = Array.from(kindSelect.options).some((option) => option.value === state.kind)
        ? state.kind
        : "all";
      viewButtons.forEach((button) => {
        button.setAttribute("aria-pressed", button.dataset.explorerView === state.view ? "true" : "false");
      });
      itemList.dataset.view = state.view;
      clearLink.hidden = !state.q && state.kind === "all" && state.scope === "all";
      clearLink.href = api.buildExplorerUrl({ ...state, q: "", scope: "all", kind: "all" });
    }

    function render() {
      if (!catalog) {
        return;
      }
      const generation = ++searchGeneration;
      const selection = api.selectExplorerContent(catalog, state);
      if (selection.invalidPath) {
        state = selection.state;
        window.history.replaceState({}, "", api.buildExplorerUrl(state));
        syncControls();
      }

      renderBreadcrumbs(selection.breadcrumbs);
      renderFolders(state.q ? [] : selection.folders);
      renderItems(selection.items);

      const folderName = selection.currentFolder ? selection.currentFolder.label : "All folders";
      context.textContent = state.q ? "Search results" : "Current folder";
      currentTitle.textContent = state.q ? `Results for “${state.q}”` : folderName;
      resultCount.textContent = `${selection.items.length} ${selection.items.length === 1 ? "note" : "notes"}`;

      if (selection.invalidPath) {
        setStatus("That folder does not exist. Showing the explorer root.", "warning");
      } else if (state.q) {
        const scopeLabel = state.scope === "current" && state.path ? ` in ${folderName}` : " across all folders";
        setStatus(`Searching note content${scopeLabel}…`, "loading");
        searchFullText(selection, folderName, generation);
      } else {
        setStatus(`${selection.folders.length} ${selection.folders.length === 1 ? "folder" : "folders"}, ${selection.items.length} ${selection.items.length === 1 ? "note" : "notes"}.`, "ready");
      }
    }

    function searchFullText(selection, folderName, generation) {
      loadPagefind()
        .then((pagefind) => pagefind.search(state.q))
        .then((search) => Promise.all(search.results.map(async (result) => ({
          result,
          data: await result.data(),
        }))))
        .then((entries) => {
          if (generation !== searchGeneration) {
            return;
          }

          const itemByUrl = new Map(catalog.items.map((item) => [normalizedPath(item.url), item]));
          const fullTextItems = [];
          const excerpts = new Map();
          entries.forEach(({ data }) => {
            const item = itemByUrl.get(normalizedPath(data.url));
            if (!item || !matchesActiveFilters(item)) {
              return;
            }
            fullTextItems.push(item);
            if (data.excerpt) {
              excerpts.set(item.url, plainText(data.excerpt));
            }
          });

          const seen = new Set(fullTextItems.map((item) => item.id));
          const combinedItems = fullTextItems.concat(
            selection.items.filter((item) => !seen.has(item.id)),
          );
          renderItems(combinedItems, excerpts);
          resultCount.textContent = `${combinedItems.length} ${combinedItems.length === 1 ? "note" : "notes"}`;

          const scopeLabel = state.scope === "current" && state.path ? ` in ${folderName}` : " across all folders";
          setStatus(`${combinedItems.length} full-text ${combinedItems.length === 1 ? "result" : "results"}${scopeLabel}.`, "ready");
        })
        .catch(() => {
          if (generation !== searchGeneration) {
            return;
          }
          const scopeLabel = state.scope === "current" && state.path ? ` in ${folderName}` : " across all folders";
          setStatus(`Full-text search is unavailable. Showing ${selection.items.length} catalog ${selection.items.length === 1 ? "match" : "matches"}${scopeLabel}.`, "warning");
        });
    }

    function loadPagefind() {
      if (!pagefindPromise) {
        pagefindPromise = import("/assets/pagefind/pagefind.js")
          .then(async (pagefind) => {
            await pagefind.options({
              baseUrl: "/",
              basePath: "/assets/pagefind/",
            });
            return pagefind;
          });
      }
      return pagefindPromise;
    }

    function matchesActiveFilters(item) {
      const matchesFolder = state.scope !== "current"
        || !state.path
        || api.isFolderWithin(item.folderId, state.path);
      const matchesKind = state.kind === "all" || item.kind === state.kind;
      return matchesFolder && matchesKind;
    }

    function renderBreadcrumbs(entries) {
      breadcrumbs.innerHTML = "";
      entries.forEach((entry, index) => {
        const listItem = document.createElement("li");
        if (index === entries.length - 1) {
          const current = document.createElement("span");
          current.textContent = entry.label;
          current.setAttribute("aria-current", "page");
          listItem.appendChild(current);
        } else {
          const link = document.createElement("a");
          link.textContent = entry.label;
          link.dataset.explorerPath = entry.path;
          link.href = api.buildExplorerUrl({ ...state, path: entry.path, q: "" });
          listItem.appendChild(link);
        }
        breadcrumbs.appendChild(listItem);
      });
    }

    function renderFolders(folders) {
      folderList.innerHTML = "";
      folderSection.hidden = folders.length === 0;
      folders.forEach((folder) => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.className = "explorer-folder-card";
        link.dataset.explorerPath = folder.path;
        link.href = api.buildExplorerUrl({ ...state, path: folder.path, q: "" });

        const icon = document.createElement("i");
        icon.className = folder.id === "archive" ? "fas fa-box-archive" : "fas fa-folder";
        icon.setAttribute("aria-hidden", "true");
        const text = document.createElement("span");
        text.className = "explorer-folder-name";
        text.textContent = folder.label;
        const count = document.createElement("span");
        count.className = "nav-count";
        count.textContent = folder.count;
        count.setAttribute("aria-label", `${folder.count} notes`);

        link.append(icon, text, count);
        listItem.appendChild(link);
        folderList.appendChild(listItem);
      });
    }

    function renderItems(items, excerpts) {
      itemList.innerHTML = "";
      itemList.dataset.view = state.view;
      empty.hidden = items.length !== 0;
      if (!items.length) {
        empty.textContent = state.q
          ? "No notes match this search and filter combination."
          : state.path
            ? "This folder contains subfolders but no notes at this level."
            : "Choose a folder or search across the knowledge base.";
        return;
      }

      items.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.className = "explorer-note-card";
        const link = document.createElement("a");
        link.href = item.url;
        link.className = "explorer-note-link";

        const heading = document.createElement("h3");
        heading.textContent = item.title;
        const summary = document.createElement("p");
        summary.textContent = excerpts && excerpts.get(item.url)
          ? excerpts.get(item.url)
          : item.summary || "Open note";
        const meta = document.createElement("div");
        meta.className = "explorer-note-meta";
        meta.appendChild(makeBadge(humanize(item.kind), "kind"));
        if (item.status === "archived") {
          meta.appendChild(makeBadge("Archived", "archived"));
        }
        const path = document.createElement("span");
        path.textContent = item.breadcrumbs.join(" / ");
        meta.appendChild(path);

        link.append(heading, summary, meta);
        listItem.appendChild(link);
        itemList.appendChild(listItem);
      });
    }

    function makeBadge(label, variant) {
      const badge = document.createElement("span");
      badge.className = `explorer-badge explorer-badge-${variant}`;
      badge.textContent = label;
      return badge;
    }

    function setStatus(message, stateName) {
      status.textContent = message;
      status.dataset.state = stateName;
    }

    function showFatalError(message) {
      shell.setAttribute("aria-busy", "false");
      setStatus(message, "error");
      form.querySelectorAll("input, select, button").forEach((control) => {
        control.disabled = true;
      });
      folderSection.hidden = true;
      staticFallback.hidden = false;
      itemList.innerHTML = "";
      empty.hidden = false;
      empty.textContent = "Use the home page navigation while the explorer is unavailable.";
    }

    function focusCurrentTitle() {
      window.requestAnimationFrame(() => currentTitle.focus());
    }

    function normalizedPath(url) {
      const path = new URL(url, window.location.origin).pathname
        .replace(/index\.html$/, "")
        .replace(/\/+$/, "");
      return path || "/";
    }

    function plainText(html) {
      return new DOMParser()
        .parseFromString(String(html), "text/html")
        .body.textContent.trim();
    }

    function humanize(value) {
      return String(value || "")
        .replace(/[-_]+/g, " ")
        .replace(/\b\w/g, (character) => character.toUpperCase());
    }
  });
}());
