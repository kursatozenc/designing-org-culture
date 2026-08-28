import { chromium } from "playwright";
import path from "node:path";

const routes = ["/", "/cohorts", "/cohorts/autumn-2026", "/rituals", "/partners", "/people", "/framework", "/resources"];
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
