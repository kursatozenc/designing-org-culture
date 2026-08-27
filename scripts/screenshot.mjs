import { chromium } from "playwright";
import path from "node:path";

const pages = ["/", "/cohorts", "/cohorts/autumn-2026", "/partners", "/framework"];
const outDir = new URL("../.screenshots/", import.meta.url).pathname;

const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome", args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
const errors = [];
page.on("console", (msg) => { if (msg.type() === "error") errors.push(`${msg.location().url} :: ${msg.text()}`); });
page.on("pageerror", (err) => errors.push(String(err)));

for (const route of pages) {
  await page.goto(`http://localhost:3000${route}`, { waitUntil: "networkidle" });
  const name = route === "/" ? "home" : route.replaceAll("/", "_").slice(1);
  await page.screenshot({ path: path.join(outDir, `${name}.png`), fullPage: true });
}

await browser.close();
console.log("done", errors.length ? errors : "no console errors");
