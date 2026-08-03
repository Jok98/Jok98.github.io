(function (root, factory) {
  const api = factory(root);
  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }
  root.JokPreferences = api;
}(typeof globalThis !== "undefined" ? globalThis : this, function (root) {
  "use strict";

  const STORAGE_KEY = "jok98.preferences.v1";
  const CHANGE_EVENT = "jok:preferenceschange";
  const THEMES = ["system", "light", "dark"];
  const UI_KEYS = new Set(["sidebarExpanded", "tocExpandedMobile"]);
  const MAX_FAVORITES = 100;
  const MAX_RECENT = 12;

  function defaultState() {
    return {
      schemaVersion: 1,
      theme: "system",
      favorites: [],
      recent: [],
      ui: {
        sidebarExpanded: false,
        tocExpandedMobile: false,
      },
    };
  }

  function createStore(options) {
    const settings = options || {};
    let memoryState = defaultState();

    function resolveStorage() {
      if (Object.prototype.hasOwnProperty.call(settings, "storage")) {
        return settings.storage;
      }
      try {
        return settings.root && settings.root.document && settings.root.localStorage
          ? settings.root.localStorage
          : null;
      } catch (_error) {
        return null;
      }
    }

    function get() {
      const storage = resolveStorage();
      if (storage) {
        try {
          const storedValue = storage.getItem(STORAGE_KEY);
          if (storedValue) {
            memoryState = normalizeState(JSON.parse(storedValue));
          }
        } catch (_error) {
          // Continue with the in-memory state when storage is unavailable or malformed.
        }
      }
      return clone(memoryState);
    }

    function save(nextState) {
      memoryState = normalizeState(nextState);
      const storage = resolveStorage();
      if (storage) {
        try {
          storage.setItem(STORAGE_KEY, JSON.stringify(memoryState));
        } catch (_error) {
          // The normalized in-memory state remains the safe fallback.
        }
      }
      return clone(memoryState);
    }

    function setTheme(theme) {
      const state = get();
      state.theme = THEMES.includes(theme) ? theme : "system";
      return save(state);
    }

    function toggleFavorite(url) {
      const normalizedUrl = normalizeNoteUrl(url);
      const state = get();
      if (!normalizedUrl) {
        return state;
      }
      state.favorites = state.favorites.includes(normalizedUrl)
        ? state.favorites.filter((favorite) => favorite !== normalizedUrl)
        : [normalizedUrl, ...state.favorites];
      return save(state);
    }

    function recordRecent(url, visitedAt) {
      const normalizedUrl = normalizeNoteUrl(url);
      const state = get();
      if (!normalizedUrl) {
        return state;
      }
      const timestamp = Number.isFinite(Number(visitedAt)) ? Number(visitedAt) : Date.now();
      state.recent = [
        { url: normalizedUrl, visitedAt: timestamp },
        ...state.recent.filter((entry) => entry.url !== normalizedUrl),
      ];
      return save(state);
    }

    function clearRecent() {
      const state = get();
      state.recent = [];
      return save(state);
    }

    function setUi(key, value) {
      const state = get();
      if (!UI_KEYS.has(key)) {
        return state;
      }
      state.ui[key] = Boolean(value);
      return save(state);
    }

    return {
      get,
      save,
      setTheme,
      toggleFavorite,
      recordRecent,
      clearRecent,
      setUi,
    };
  }

  function normalizeState(value) {
    const fallback = defaultState();
    const candidate = value && typeof value === "object" ? value : {};
    const favorites = Array.isArray(candidate.favorites) ? candidate.favorites : [];
    const recent = Array.isArray(candidate.recent) ? candidate.recent : [];
    const ui = candidate.ui && typeof candidate.ui === "object" ? candidate.ui : {};

    return {
      schemaVersion: 1,
      theme: THEMES.includes(candidate.theme) ? candidate.theme : fallback.theme,
      favorites: unique(
        favorites.map(normalizeNoteUrl).filter(Boolean),
      ).slice(0, MAX_FAVORITES),
      recent: normalizeRecent(recent),
      ui: {
        sidebarExpanded: typeof ui.sidebarExpanded === "boolean"
          ? ui.sidebarExpanded
          : fallback.ui.sidebarExpanded,
        tocExpandedMobile: typeof ui.tocExpandedMobile === "boolean"
          ? ui.tocExpandedMobile
          : fallback.ui.tocExpandedMobile,
      },
    };
  }

  function normalizeRecent(entries) {
    const seen = new Set();
    const normalized = [];
    entries.forEach((entry) => {
      if (!entry || typeof entry !== "object") {
        return;
      }
      const url = normalizeNoteUrl(entry.url);
      const visitedAt = Number(entry.visitedAt);
      if (!url || seen.has(url) || !Number.isFinite(visitedAt) || visitedAt < 0) {
        return;
      }
      seen.add(url);
      normalized.push({ url, visitedAt });
    });
    return normalized.slice(0, MAX_RECENT);
  }

  function normalizeNoteUrl(value) {
    const path = String(value || "")
      .split(/[?#]/, 1)[0]
      .replace(/\/index\.html$/, "/");
    if (!path.startsWith("/notes/") || path.split("/").includes("..")) {
      return "";
    }
    return path.endsWith("/") ? path : `${path}/`;
  }

  function unique(values) {
    return Array.from(new Set(values));
  }

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function resolvedTheme(theme, prefersDark) {
    if (theme === "light" || theme === "dark") {
      return theme;
    }
    return prefersDark ? "dark" : "light";
  }

  const store = createStore({ root });

  function systemPrefersDark() {
    return typeof root.matchMedia === "function"
      && root.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function applyTheme(theme) {
    const resolved = resolvedTheme(theme, systemPrefersDark());
    if (root.document && root.document.documentElement) {
      root.document.documentElement.dataset.theme = resolved;
      root.document.documentElement.dataset.themePreference = theme;
    }
    return resolved;
  }

  function emit(state) {
    if (typeof root.dispatchEvent === "function" && typeof root.CustomEvent === "function") {
      root.dispatchEvent(new root.CustomEvent(CHANGE_EVENT, { detail: clone(state) }));
    }
  }

  function update(method, ...args) {
    const state = store[method](...args);
    if (method === "setTheme") {
      applyTheme(state.theme);
    }
    emit(state);
    return state;
  }

  const api = {
    STORAGE_KEY,
    CHANGE_EVENT,
    THEMES: [...THEMES],
    createStore,
    normalizeState,
    normalizeNoteUrl,
    resolvedTheme,
    get: store.get,
    save: (state) => update("save", state),
    setTheme: (theme) => update("setTheme", theme),
    toggleFavorite: (url) => update("toggleFavorite", url),
    recordRecent: (url, visitedAt) => update("recordRecent", url, visitedAt),
    clearRecent: () => update("clearRecent"),
    setUi: (key, value) => update("setUi", key, value),
    isFavorite: (url) => store.get().favorites.includes(normalizeNoteUrl(url)),
    applyTheme,
  };

  applyTheme(store.get().theme);

  if (root.document) {
    root.document.addEventListener("DOMContentLoaded", () => {
      const buttons = Array.from(root.document.querySelectorAll("[data-theme-toggle]"));
      const renderButtons = () => {
        const state = store.get();
        const resolved = applyTheme(state.theme);
        const nextTheme = THEMES[(THEMES.indexOf(state.theme) + 1) % THEMES.length];
        buttons.forEach((button) => {
          button.dataset.themePreference = state.theme;
          button.setAttribute("aria-label", `Theme: ${state.theme}. Switch to ${nextTheme}.`);
          button.title = `Theme: ${state.theme} (${resolved}). Switch to ${nextTheme}.`;
          const icon = button.querySelector("i");
          if (icon) {
            icon.className = state.theme === "light"
              ? "fas fa-sun"
              : state.theme === "dark"
                ? "fas fa-moon"
                : "fas fa-circle-half-stroke";
          }
        });
      };

      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          const currentTheme = store.get().theme;
          api.setTheme(THEMES[(THEMES.indexOf(currentTheme) + 1) % THEMES.length]);
          renderButtons();
        });
      });
      renderButtons();
      root.addEventListener(CHANGE_EVENT, renderButtons);
    });

    if (typeof root.addEventListener === "function") {
      root.addEventListener("storage", (event) => {
        if (event.key === STORAGE_KEY || event.key === null) {
          const state = store.get();
          applyTheme(state.theme);
          emit(state);
        }
      });
    }

    if (typeof root.matchMedia === "function") {
      const colorScheme = root.matchMedia("(prefers-color-scheme: dark)");
      const syncSystemTheme = () => {
        const state = store.get();
        if (state.theme === "system") {
          applyTheme(state.theme);
        }
      };
      if (typeof colorScheme.addEventListener === "function") {
        colorScheme.addEventListener("change", syncSystemTheme);
      }
    }
  }

  return api;
}));
