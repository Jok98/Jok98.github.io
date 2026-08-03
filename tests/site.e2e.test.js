const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");

const puppeteer = require("puppeteer-core");


const REPO_ROOT = path.resolve(__dirname, "..");
const SITE_ROOT = path.join(REPO_ROOT, "_site");
const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".svg": "image/svg+xml",
  ".wasm": "application/wasm",
};

let browser;
let server;
let baseUrl;


test.before(async () => {
  server = http.createServer(serveStaticSite);
  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", resolve);
  });
  const address = server.address();
  baseUrl = `http://127.0.0.1:${address.port}`;

  browser = await puppeteer.launch({
    executablePath: findChromium(),
    headless: true,
    args: ["--disable-dev-shm-usage", "--no-sandbox"],
  });
});


test.after(async () => {
  if (browser) {
    await browser.close();
  }
  if (server) {
    await new Promise((resolve) => server.close(resolve));
  }
});


test("home exposes the three active roots and the explorer entry point", async () => {
  await withPage(async (page) => {
    await open(page, "/");
    await page.waitForSelector("[data-home-folders] li:nth-child(3)");

    assert.equal(await page.$$eval("[data-home-folders] > li", (items) => items.length), 3);
    assert.equal(
      await page.$eval("a.cv-button[href='/explore/']", (link) => link.textContent.includes("Explore notes")),
      true,
    );
  });
});


test("explorer browses virtual folders and finds a body-only term", async () => {
  await withPage(async (page) => {
    await open(page, "/explore/?path=engineering%2Fjava&view=list");
    await page.waitForFunction(() => (
      document.querySelector(".explorer-shell")?.getAttribute("aria-busy") === "false"
    ));
    assert.deepEqual(
      await page.$$eval("[data-explorer-breadcrumbs] li", (items) => (
        items.map((item) => item.textContent.trim())
      )),
      ["Explorer", "Engineering", "Java"],
    );

    await open(page, "/explore/?view=list&q=sdkman");
    await page.waitForFunction(() => {
      const status = document.querySelector("[data-explorer-status]");
      return status?.dataset.state === "ready" && status.textContent.includes("full-text");
    });
    const rawSearchResults = await page.evaluate(async () => {
      const pagefind = await import("/assets/pagefind/pagefind.js");
      await pagefind.options({ baseUrl: "/", basePath: "/assets/pagefind/" });
      const search = await pagefind.search("sdkman");
      return Promise.all(search.results.map(async (result) => (await result.data()).url));
    });
    const resultLinks = await page.$$eval("[data-explorer-items] a", (links) => (
      links.map((link) => new URL(link.href).pathname)
    ));
    assert.ok(
      resultLinks.includes("/notes/dev/java/roadmap_java/"),
      `Unexpected full-text results: raw=${JSON.stringify(rawSearchResults)}, ui=${JSON.stringify(resultLinks)}`,
    );
  });
});


test("an archived note retains explorer context and mobile TOC order", async () => {
  await withPage(async (page) => {
    await open(page, "/notes/dev/c/old/1.0_c_init/");
    await page.waitForFunction(() => (
      document.querySelector("[data-note-breadcrumbs]")?.textContent.includes("Archive")
    ));
    assert.match(
      await page.$eval("[data-note-breadcrumbs]", (element) => element.textContent),
      /Explorer.*Archive.*Engineering/s,
    );

    await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
    await open(page, "/notes/dev/java/roadmap_java/");
    await page.waitForSelector("#page-toc-disclosure");
    const tocState = await page.evaluate(() => {
      const heading = document.querySelector("main h1").getBoundingClientRect();
      const toc = document.querySelector("#page-toc").getBoundingClientRect();
      const disclosure = document.querySelector("#page-toc-disclosure");
      return { afterHeading: toc.top >= heading.bottom, open: disclosure.open };
    });
    assert.deepEqual(tocState, { afterHeading: true, open: false });
  });
});


test("explorer keeps a complete static fallback without JavaScript", async () => {
  await withPage(async (page) => {
    await page.setJavaScriptEnabled(false);
    await open(page, "/explore/");
    assert.equal(
      await page.$$eval("[data-explorer-static-fallback] li", (items) => items.length),
      73,
    );
  });
});


test("theme, favorites, recent notes, and sidebar state persist locally", async () => {
  await withPage(async (page) => {
    await open(page, "/");
    await page.evaluate(() => localStorage.removeItem(window.JokPreferences.STORAGE_KEY));
    await page.reload({ waitUntil: "domcontentloaded" });

    await page.click("[data-theme-toggle]");
    await page.waitForFunction(() => document.documentElement.dataset.themePreference === "light");
    await page.reload({ waitUntil: "domcontentloaded" });
    assert.equal(
      await page.evaluate(() => document.documentElement.dataset.themePreference),
      "light",
    );

    await open(page, "/notes/dev/java/roadmap_java/");
    await page.waitForSelector(".note-context-favorite");
    await page.click(".note-context-favorite");
    assert.equal(
      await page.$eval(".note-context-favorite", (button) => button.getAttribute("aria-pressed")),
      "true",
    );
    await page.click("#sidebar-toggle");
    assert.equal(await page.$eval("#sidebar-toggle", (button) => button.ariaExpanded), "true");
    await page.reload({ waitUntil: "domcontentloaded" });
    await page.waitForSelector(".note-context-favorite[aria-pressed='true']");
    assert.equal(await page.$eval("#sidebar-toggle", (button) => button.ariaExpanded), "true");

    await open(page, "/");
    await page.waitForSelector("[data-home-favorites] a[href='/notes/dev/java/roadmap_java/']");
    await page.waitForSelector("[data-home-recent] a[href='/notes/dev/java/roadmap_java/']");
  });
});


test("preferences fall back to memory when localStorage is blocked", async () => {
  const page = await browser.newPage();
  await page.evaluateOnNewDocument(() => {
    Storage.prototype.getItem = () => {
      throw new DOMException("blocked", "SecurityError");
    };
    Storage.prototype.setItem = () => {
      throw new DOMException("blocked", "SecurityError");
    };
  });
  try {
    await open(page, "/notes/dev/java/roadmap_java/");
    await page.waitForSelector(".note-context-favorite");
    await page.click("[data-theme-toggle]");
    await page.click(".note-context-favorite");
    assert.equal(
      await page.$eval(".note-context-favorite", (button) => button.getAttribute("aria-pressed")),
      "true",
    );
    assert.equal(
      await page.evaluate(() => document.documentElement.dataset.themePreference),
      "light",
    );
  } finally {
    await page.close();
  }
});


test("representative pages have no serious or critical axe violations", async () => {
  await withPage(async (page) => {
    const axePath = require.resolve("axe-core/axe.min.js");
    const routes = [
      "/",
      "/explore/",
      "/notes/dev/java/roadmap_java/",
      "/notes/etc/anime_list/",
      "/notes/etc/trip/osaka_2024/diary/",
      "/cv/",
    ];

    for (const theme of ["dark", "light"]) {
      await open(page, "/");
      await page.evaluate((selectedTheme) => {
        window.JokPreferences.setTheme(selectedTheme);
      }, theme);

      for (const route of routes) {
        await open(page, route);
        await page.addScriptTag({ path: axePath });
        const violations = await page.evaluate(async () => {
          const result = await axe.run(document, {
            runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21aa"] },
          });
          return result.violations
            .filter((violation) => ["serious", "critical"].includes(violation.impact))
            .map((violation) => ({
              id: violation.id,
              impact: violation.impact,
              targets: violation.nodes.map((node) => node.target.join(" ")),
            }));
        });
        assert.deepEqual(
          violations,
          [],
          `${theme} ${route}: ${JSON.stringify(violations)}`,
        );
      }
    }
  });
});


async function withPage(callback) {
  const page = await browser.newPage();
  try {
    await callback(page);
  } finally {
    await page.close();
  }
}


async function open(page, route) {
  const response = await page.goto(`${baseUrl}${route}`, { waitUntil: "domcontentloaded" });
  assert.equal(response.status(), 200, `Expected ${route} to return HTTP 200`);
}


function findChromium() {
  const candidates = [
    process.env.CHROMIUM_BIN,
    process.env.CHROME_BIN,
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
    "/usr/bin/google-chrome",
    "/usr/bin/google-chrome-stable",
  ].filter(Boolean);
  const executable = candidates.find((candidate) => fs.existsSync(candidate));
  if (!executable) {
    throw new Error("Chromium/Chrome was not found. Set CHROMIUM_BIN before running E2E tests.");
  }
  return executable;
}


function serveStaticSite(request, response) {
  const requestUrl = new URL(request.url, "http://127.0.0.1");
  const decodedPath = decodeURIComponent(requestUrl.pathname);
  const candidates = resolveCandidates(decodedPath);
  const file = candidates.find((candidate) => fs.existsSync(candidate) && fs.statSync(candidate).isFile());
  if (!file) {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  const extension = path.extname(file).toLowerCase();
  response.writeHead(200, {
    "cache-control": "no-store",
    "content-type": MIME_TYPES[extension] || "application/octet-stream",
  });
  fs.createReadStream(file).pipe(response);
}


function resolveCandidates(urlPath) {
  const relative = urlPath.replace(/^\/+/, "");
  const direct = path.resolve(SITE_ROOT, relative);
  if (!direct.startsWith(`${SITE_ROOT}${path.sep}`) && direct !== SITE_ROOT) {
    return [];
  }
  if (!relative || urlPath.endsWith("/")) {
    return [path.join(direct, "index.html")];
  }
  return [direct, `${direct}.html`, path.join(direct, "index.html")];
}
