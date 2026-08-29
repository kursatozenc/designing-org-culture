import { chromium } from "playwright";
import path from "node:path";

/** Cohort pages are a dynamic route, so the list has to come from the data
 *  rather than be typed out here. It used to name `/cohorts/autumn-2026`
 *  literally, which meant that the moment a new cohort became current the
 *  check kept screenshotting last year's page and stopped covering the one
 *  the homepage points at. Reading cohorts.js keeps every year covered,
 *  including whichever one is current, with no edit to this file.
 *
 *  The import is dynamic, and the default warning listener is swapped out
 *  first, only so Node stays quiet about the content files being ESM inside a
 *  package with no `"type": "module"`. That warning is cosmetic, and this
 *  script's output is meant to read as "did anything break" — every other
 *  warning still prints. */
process.removeAllListeners("warning");
process.on("warning", (w) => {
  if (w.code !== "MODULE_TYPELESS_PACKAGE_JSON") console.warn(w.stack ?? w);
});
const { cohorts } = await import("../src/content/cohorts.js");
const routes = [
  "/",
  "/cohorts",
  ...cohorts.map((c) => `/cohorts/${c.slug}`),
  "/rituals",
  "/partners",
  "/people",
  "/framework",
  "/resources",
];
const outDir = new URL("../.screenshots/", import.meta.url).pathname;

const browser = await chromium.launch({
  executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
  args: ["--no-sandbox"],
});
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
const errors = [];
page.on("console", (m) => { if (m.type() === "error") errors.push(`${m.location().url} :: ${m.text()}`); });
page.on("pageerror", (e) => errors.push(String(e)));

/** Images below the fold are lazy, and a fullPage capture can paint them as
 *  empty boxes even once loaded. Force them eager, scroll the page, then wait
 *  for every one to decode — otherwise the screenshot lies about the page. */
async function settleImages() {
  await page.evaluate(() => {
    for (const img of document.images) img.loading = "eager";
  });
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let y = 0;
      const step = () => {
        y += window.innerHeight;
        window.scrollTo(0, y);
        if (y < document.body.scrollHeight) requestAnimationFrame(step);
        else { window.scrollTo(0, 0); resolve(); }
      };
      step();
    });
  });
  await page.waitForFunction(
    () => Array.from(document.images).every((i) => i.complete && i.naturalWidth > 0),
    null,
    { timeout: 15000 },
  );
}

for (const route of routes) {
  await page.goto(`http://localhost:3000${route}`, { waitUntil: "networkidle" });
  await settleImages();
  const name = route === "/" ? "home" : route.replaceAll("/", "_").slice(1);
  await page.screenshot({ path: path.join(outDir, `${name}.png`), fullPage: true });

  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
  );
  if (overflow) errors.push(`horizontal overflow on ${route}`);
}

await browser.close();
console.log("done", errors.length ? errors : "no console errors");
