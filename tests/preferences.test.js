const test = require("node:test");
const assert = require("node:assert/strict");

const preferencesApi = require("../assets/js/preferences.js");


function memoryStorage(initialValue) {
  const values = new Map();
  if (initialValue !== undefined) {
    values.set(preferencesApi.STORAGE_KEY, initialValue);
  }
  return {
    getItem(key) {
      return values.has(key) ? values.get(key) : null;
    },
    setItem(key, value) {
      values.set(key, value);
    },
  };
}


test("normalizes malformed or unsupported stored preferences", () => {
  const storage = memoryStorage(JSON.stringify({
    schemaVersion: 99,
    theme: "sepia",
    favorites: ["/notes/dev/java/roadmap_java", "/notes/dev/java/roadmap_java/", "/cv/"],
    recent: [
      { url: "/notes/dev/java/roadmap_java/", visitedAt: 20 },
      { url: "/notes/dev/java/roadmap_java/", visitedAt: 10 },
      { url: "../secret", visitedAt: 30 },
    ],
    ui: { sidebarExpanded: "yes", tocExpandedMobile: true },
  }));
  const store = preferencesApi.createStore({ storage });

  assert.deepEqual(store.get(), {
    schemaVersion: 1,
    theme: "system",
    favorites: ["/notes/dev/java/roadmap_java/"],
    recent: [{ url: "/notes/dev/java/roadmap_java/", visitedAt: 20 }],
    ui: { sidebarExpanded: false, tocExpandedMobile: true },
  });
});


test("toggles favorites and rejects non-note URLs", () => {
  const store = preferencesApi.createStore({ storage: memoryStorage() });

  store.toggleFavorite("/notes/dev/java/roadmap_java/");
  store.toggleFavorite("/cv/");
  assert.deepEqual(store.get().favorites, ["/notes/dev/java/roadmap_java/"]);

  store.toggleFavorite("/notes/dev/java/roadmap_java/");
  assert.deepEqual(store.get().favorites, []);
});


test("keeps recent notes unique, ordered, and capped", () => {
  const store = preferencesApi.createStore({ storage: memoryStorage() });
  for (let index = 0; index < 15; index += 1) {
    store.recordRecent(`/notes/dev/topic/note-${index}/`, index);
  }
  store.recordRecent("/notes/dev/topic/note-4/", 99);

  const recent = store.get().recent;
  assert.equal(recent.length, 12);
  assert.deepEqual(recent[0], { url: "/notes/dev/topic/note-4/", visitedAt: 99 });
  assert.equal(recent.filter((entry) => entry.url.endsWith("note-4/")).length, 1);

  store.clearRecent();
  assert.deepEqual(store.get().recent, []);
});


test("persists validated theme and UI state with an in-memory fallback", () => {
  const throwingStorage = {
    getItem() {
      throw new Error("blocked");
    },
    setItem() {
      throw new Error("blocked");
    },
  };
  const store = preferencesApi.createStore({ storage: throwingStorage });

  store.setTheme("light");
  store.setUi("sidebarExpanded", true);
  store.setUi("unknown", true);

  assert.equal(store.get().theme, "light");
  assert.deepEqual(store.get().ui, {
    sidebarExpanded: true,
    tocExpandedMobile: false,
  });
  assert.equal(preferencesApi.resolvedTheme("system", true), "dark");
  assert.equal(preferencesApi.resolvedTheme("system", false), "light");
});
