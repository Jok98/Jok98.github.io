const test = require("node:test");
const assert = require("node:assert/strict");

const catalogApi = require("../assets/js/catalog.js");


function compactFixture() {
  return {
    schemaVersion: 2,
    folders: [
      { id: "engineering", parentId: null, path: "engineering", label: "Engineering", order: 10, count: 2 },
      { id: "archive", parentId: null, path: "archive", label: "Archive", order: 90, count: 1 },
      { id: "engineering/java", parentId: "engineering", path: "engineering/java", label: "Java", order: 100, count: 2 },
      { id: "archive/engineering", parentId: "archive", path: "archive/engineering", label: "Engineering", order: 10, count: 1 },
      { id: "archive/engineering/java", parentId: "archive/engineering", path: "archive/engineering/java", label: "Java", order: 100, count: 1 },
    ],
    items: [
      {
        id: "java-roadmap",
        folderId: "engineering/java",
        title: "Java Roadmap",
        summary: "Modern Java learning path",
        url: "/notes/java/roadmap/",
        tags: ["java", "roadmap"],
        order: 10,
        kind: "roadmap",
        status: "active",
        lang: "en",
      },
      {
        id: "java-lambda",
        folderId: "engineering/java",
        title: "Java Lambda",
        summary: "Lambda reference",
        url: "/notes/java/lambda/",
        tags: ["java"],
        order: 20,
        kind: "note",
        status: "active",
        lang: "en",
      },
      {
        id: "legacy-java",
        folderId: "archive/engineering/java",
        title: "Legacy Java",
        summary: "Historical Java reference",
        url: "/notes/java/legacy/",
        tags: ["java"],
        order: 30,
        kind: "note",
        status: "archived",
        lang: "en",
      },
    ],
    facets: {},
  };
}


test("normalizes schema v2 and browses direct folder content", () => {
  const catalog = catalogApi.normalizeCatalog(compactFixture());
  const selection = catalogApi.selectExplorerContent(catalog, {
    path: "engineering/java",
    view: "list",
    q: "",
    scope: "all",
    kind: "all",
  });

  assert.equal(catalog.schemaVersion, 2);
  assert.deepEqual(selection.items.map((item) => item.id), ["java-roadmap", "java-lambda"]);
  assert.deepEqual(selection.breadcrumbs.map((item) => item.label), ["Explorer", "Engineering", "Java"]);
});

test("global search includes archive while current-folder search stays scoped", () => {
  const catalog = catalogApi.normalizeCatalog(compactFixture());
  const globalResults = catalogApi.selectExplorerContent(catalog, {
    path: "engineering",
    view: "list",
    q: "java",
    scope: "all",
    kind: "all",
  });
  const currentResults = catalogApi.selectExplorerContent(catalog, {
    path: "engineering",
    view: "list",
    q: "java",
    scope: "current",
    kind: "note",
  });

  assert.equal(globalResults.items.length, 3);
  assert.deepEqual(currentResults.items.map((item) => item.id), ["java-lambda"]);
});

test("parses safe URL state and produces a shareable route", () => {
  const state = catalogApi.parseExplorerState("?path=engineering/java&view=grid&q=lambda&scope=current&kind=note");

  assert.deepEqual(state, {
    path: "engineering/java",
    view: "grid",
    q: "lambda",
    scope: "current",
    kind: "note",
  });
  assert.equal(
    catalogApi.buildExplorerUrl(state),
    "/explore/?path=engineering%2Fjava&view=grid&q=lambda&scope=current&kind=note",
  );
  assert.equal(catalogApi.parseExplorerState("?path=../../secret").path, "");
});

test("adapts schema v1 items during migration", () => {
  const legacy = catalogApi.normalizeCatalog({
    schemaVersion: 1,
    items: [
      {
        id: "legacy",
        title: "Legacy",
        summary: "Old note",
        sourcePath: "notes/dev/java/old/legacy.md",
        url: "/notes/dev/java/old/legacy/",
        area: { slug: "dev", label: "Engineering" },
        topic: { slug: "java", label: "Java" },
        tags: ["java"],
      },
    ],
  });

  assert.equal(legacy.items[0].folderId, "archive/engineering/java");
  assert.equal(legacy.items[0].status, "archived");
  assert.ok(legacy.folderById.has("archive/engineering/java"));
});

test("rejects duplicate compact catalog ids", () => {
  const fixture = compactFixture();
  fixture.items.push({ ...fixture.items[0] });

  assert.throws(() => catalogApi.normalizeCatalog(fixture), /duplicate item id/);
});
