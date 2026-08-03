(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const contexts = Array.from(document.querySelectorAll("[data-note-context]"));
    const api = window.JokCatalog;
    const preferences = window.JokPreferences;
    if (!contexts.length || !api) {
      return;
    }

    if (preferences) {
      contexts.forEach((context) => {
        preferences.recordRecent(context.dataset.noteUrl || window.location.pathname);
      });
    }

    fetch("/assets/data/content-index.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Catalog request failed: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const catalog = api.normalizeCatalog(data);
        contexts.forEach((context) => enhanceContext(context, catalog));
      })
      .catch(() => {
        // The static Explorer -> note breadcrumb remains usable without enhancement.
      });

    function enhanceContext(context, catalog) {
      const currentUrl = normalizeUrl(context.dataset.noteUrl || window.location.pathname);
      const item = catalog.items.find((candidate) => normalizeUrl(candidate.url) === currentUrl);
      if (!item) {
        return;
      }

      const breadcrumbList = context.querySelector("[data-note-breadcrumbs]");
      const actions = context.querySelector("[data-note-actions]");
      const folderBreadcrumbs = api.getBreadcrumbs(catalog, item.folderId);
      breadcrumbList.innerHTML = "";

      folderBreadcrumbs.forEach((breadcrumb) => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.textContent = breadcrumb.label;
        link.href = api.buildExplorerUrl({
          path: breadcrumb.path,
          view: "list",
          q: "",
          scope: "all",
          kind: "all",
        });
        listItem.appendChild(link);
        breadcrumbList.appendChild(listItem);
      });

      const currentItem = document.createElement("li");
      const currentLabel = document.createElement("span");
      currentLabel.textContent = item.title;
      currentLabel.setAttribute("aria-current", "page");
      currentItem.appendChild(currentLabel);
      breadcrumbList.appendChild(currentItem);

      actions.innerHTML = "";
      if (item.status === "archived") {
        const archived = document.createElement("span");
        archived.className = "note-context-status";
        archived.textContent = "Archived";
        actions.appendChild(archived);
      }
      if (preferences) {
        actions.appendChild(makeFavorite(item));
      }

      const siblings = catalog.items.filter((candidate) => candidate.folderId === item.folderId);
      const currentIndex = siblings.findIndex((candidate) => candidate.id === item.id);
      const previous = currentIndex > 0 ? siblings[currentIndex - 1] : null;
      const next = currentIndex >= 0 && currentIndex < siblings.length - 1
        ? siblings[currentIndex + 1]
        : null;

      if (previous) {
        actions.appendChild(makeNeighbor(previous, "Previous", "fa-arrow-left"));
      }
      if (next) {
        actions.appendChild(makeNeighbor(next, "Next", "fa-arrow-right"));
      }
    }

    function makeNeighbor(item, label, iconClass) {
      const link = document.createElement("a");
      link.className = "note-context-neighbor";
      link.href = item.url;
      link.setAttribute("aria-label", `${label} note: ${item.title}`);

      if (label === "Previous") {
        link.appendChild(makeIcon(iconClass));
      }
      const text = document.createElement("span");
      text.textContent = label;
      link.appendChild(text);
      if (label === "Next") {
        link.appendChild(makeIcon(iconClass));
      }
      return link;
    }

    function makeFavorite(item) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "note-context-favorite";

      const render = () => {
        const selected = preferences.isFavorite(item.url);
        button.setAttribute("aria-pressed", selected ? "true" : "false");
        button.setAttribute(
          "aria-label",
          selected ? `Remove ${item.title} from favorites` : `Save ${item.title} as a favorite`,
        );
        button.innerHTML = "";
        const icon = document.createElement("i");
        icon.className = selected ? "fas fa-star" : "far fa-star";
        icon.setAttribute("aria-hidden", "true");
        const label = document.createElement("span");
        label.textContent = selected ? "Saved" : "Save";
        button.append(icon, label);
      };

      button.addEventListener("click", () => {
        preferences.toggleFavorite(item.url);
        render();
      });
      render();
      return button;
    }

    function makeIcon(iconClass) {
      const icon = document.createElement("i");
      icon.className = `fas ${iconClass}`;
      icon.setAttribute("aria-hidden", "true");
      return icon;
    }

    function normalizeUrl(value) {
      const url = String(value || "/").replace(/\/index\.html$/, "/");
      return url.length > 1 && url.endsWith("/") ? url.slice(0, -1) : url;
    }
  });
}());
