(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const api = window.JokCatalog;
    const folderList = document.querySelector("[data-home-folders]");
    const featuredList = document.querySelector("[data-home-featured]");
    const status = document.querySelector("[data-home-status]");
    const preferences = window.JokPreferences;
    const personal = document.querySelector("[data-home-personal]");
    const favoriteList = document.querySelector("[data-home-favorites]");
    const favoriteEmpty = document.querySelector("[data-home-favorites-empty]");
    const favoriteCount = document.querySelector("[data-home-favorite-count]");
    const recentList = document.querySelector("[data-home-recent]");
    const recentEmpty = document.querySelector("[data-home-recent-empty]");
    const clearRecent = document.querySelector("[data-home-clear-recent]");
    let catalog;
    if (!api || !folderList || !featuredList || !status) {
      return;
    }

    if (preferences && personal) {
      personal.addEventListener("click", (event) => {
        const removeFavorite = event.target.closest("[data-remove-favorite]");
        if (removeFavorite) {
          preferences.toggleFavorite(removeFavorite.dataset.removeFavorite);
        }
      });
      clearRecent.addEventListener("click", () => preferences.clearRecent());
      window.addEventListener(preferences.CHANGE_EVENT, () => {
        if (catalog) {
          renderPersonal(catalog);
        }
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
        catalog = api.normalizeCatalog(data);
        renderFolders(catalog);
        renderFeatured(catalog);
        renderPersonal(catalog);
        status.hidden = true;
      })
      .catch(() => {
        status.textContent = "The library overview could not be loaded. Open Explorer for the static note list.";
        status.dataset.state = "error";
      });

    function renderFolders(catalog) {
      const roots = catalog.folders.filter((folder) => folder.parentId === null);
      const activeRoots = roots.filter((folder) => folder.id !== "archive");
      const archive = roots.find((folder) => folder.id === "archive");
      folderList.innerHTML = "";

      activeRoots.forEach((folder) => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = api.buildExplorerUrl({
          path: folder.path,
          view: "list",
          q: "",
          scope: "all",
          kind: "all",
        });
        link.className = "home-folder-link";

        const icon = document.createElement("i");
        icon.className = "fas fa-folder";
        icon.setAttribute("aria-hidden", "true");
        const name = document.createElement("span");
        name.textContent = folder.label;
        const count = document.createElement("span");
        count.className = "nav-count";
        count.textContent = folder.count;
        count.setAttribute("aria-label", `${folder.count} active notes`);
        link.append(icon, name, count);
        listItem.appendChild(link);
        folderList.appendChild(listItem);
      });

      const activeCount = activeRoots.reduce((total, folder) => total + folder.count, 0);
      const activeCountLabel = document.querySelector("[data-home-active-count]");
      activeCountLabel.textContent = `${activeCount} active notes`;
      const archiveCount = document.querySelector("[data-home-archive-count]");
      archiveCount.textContent = archive ? archive.count : "0";
    }

    function renderFeatured(catalog) {
      const featured = catalog.items
        .filter((item) => item.status === "active" && item.kind === "roadmap")
        .slice(0, 6);
      featuredList.innerHTML = "";

      featured.forEach((item) => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = item.url;
        const title = document.createElement("span");
        title.className = "home-featured-title";
        title.textContent = item.title;
        const path = document.createElement("span");
        path.className = "home-featured-path";
        path.textContent = item.breadcrumbs.join(" / ");
        link.append(title, path);
        listItem.appendChild(link);
        featuredList.appendChild(listItem);
      });
    }

    function renderPersonal(currentCatalog) {
      if (!preferences || !favoriteList || !recentList) {
        return;
      }
      const state = preferences.get();
      const itemByUrl = new Map(currentCatalog.items.map((item) => [item.url, item]));
      const favoriteItems = state.favorites
        .map((url) => itemByUrl.get(url))
        .filter(Boolean)
        .slice(0, 6);
      const recentItems = state.recent
        .map((entry) => itemByUrl.get(entry.url))
        .filter(Boolean)
        .slice(0, 6);

      renderPersonalList(favoriteList, favoriteItems, true);
      renderPersonalList(recentList, recentItems, false);
      favoriteEmpty.hidden = favoriteItems.length > 0;
      recentEmpty.hidden = recentItems.length > 0;
      favoriteCount.textContent = String(favoriteItems.length);
      favoriteCount.setAttribute("aria-label", `${favoriteItems.length} favorite notes`);
      clearRecent.hidden = recentItems.length === 0;
    }

    function renderPersonalList(list, items, removable) {
      list.innerHTML = "";
      items.forEach((item) => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = item.url;
        const title = document.createElement("span");
        title.className = "home-personal-title";
        title.textContent = item.title;
        const path = document.createElement("span");
        path.className = "home-personal-path";
        path.textContent = item.breadcrumbs.join(" / ");
        link.append(title, path);
        listItem.appendChild(link);

        if (removable) {
          const remove = document.createElement("button");
          remove.type = "button";
          remove.dataset.removeFavorite = item.url;
          remove.setAttribute("aria-label", `Remove ${item.title} from favorites`);
          const icon = document.createElement("i");
          icon.className = "fas fa-xmark";
          icon.setAttribute("aria-hidden", "true");
          remove.appendChild(icon);
          listItem.appendChild(remove);
        }
        list.appendChild(listItem);
      });
    }
  });
}());
