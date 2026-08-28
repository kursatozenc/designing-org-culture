// Regenerates public/og.png — the social card — by screenshotting the real
// homepage hero, so it uses the site's own type and drawing rather than a
// separately maintained image. The current term is baked in, so re-run this
// whenever `current` moves to a new cohort. Needs `npm run dev` running.
import { chromium } from "playwright-core";
const b = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });
const p = await b.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await p.goto("http://localhost:3000/", { waitUntil: "networkidle" });
// hide the site header so the card is just the hero
await p.evaluate(() => { document.querySelector("header")?.remove(); document.querySelector("nextjs-portal")?.remove(); for (const e of document.querySelectorAll("[data-nextjs-toast],[data-next-badge-root],#__next-build-watcher")) e.remove(); document.body.style.overflow = "hidden"; });
await p.waitForTimeout(400);
await p.screenshot({ path: "public/og.png", clip: { x: 0, y: 0, width: 1200, height: 630 } });
await b.close();
