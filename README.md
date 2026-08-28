# Designing Org Culture

The public site for Stanford d.school's Designing Org Culture course (DESIGN 276) — one home for the current cohort, past years, and partner organizations, instead of a new site every year.

## Content model

All content lives in `src/content/` as plain JS data for now:

- `cohorts.js` — one entry per year. Exactly one should have `current: true`; that's the entry the homepage and nav treat as "this year." Adding a new year means adding one entry here and flipping the flag — not building a new page or site.
- `partners.js` — organizations the class has worked with, independent of any single cohort, referenced by slug from `cohorts.js`.
- `forces.js` — the eight-force culture taxonomy (Policy, Values, Norms, Practices, Stories, Behaviors, Artifacts, Metrics) used to tag cohorts and rituals.
- `people.js` — teaching team, TAs, coaches, and guest speakers. A person holds a role *per cohort*, so someone can instruct one year and guest-lecture the next.
- `rituals.js` — the ritual library: what students actually make. See [docs/adding-a-ritual.md](docs/adding-a-ritual.md) for how it fills.
- `tools.js` — outbound links to the Rituals for Work site and generator.

This is written to map 1:1 onto a Sanity schema (`cohort` / `partner` / a `cultureForce` tag list) — see "Light content management" below for the planned upgrade path.

## The annual step

At the end of a quarter: add the cohort to `cohorts.js` and move `current: true`
onto it, add that year's people to `people.js`, add its rituals to `rituals.js`,
and add any new partners. No new pages, no new site — that is the whole point.
[docs/adding-a-ritual.md](docs/adding-a-ritual.md) has the detail, including the
DP1 submission wording to paste into the brief.

## Development

```bash
npm run dev
```

```bash
npm run build   # production build
```

To sanity-check all routes render (screenshots + console-error check):

```bash
npm run dev &
node scripts/screenshot.mjs
```

## Light content management (planned)

The goal is for Kursat to edit content — add a cohort, update partners, swap images — through a proper editor UI, the same way [kursat-ozenc-portfolio](https://github.com/kursatozenc/kursat-ozenc-portfolio) uses Sanity Studio, without touching code. That requires a Sanity project, which needs an interactive login only the account owner can do:

1. Create a project at [sanity.io/manage](https://www.sanity.io/manage) (or run `npx sanity init` locally).
2. Add the resulting project ID and dataset as `NEXT_PUBLIC_SANITY_PROJECT_ID` / `NEXT_PUBLIC_SANITY_DATASET` env vars.
3. Port `src/content/*.js` into Sanity schema types (`cohort`, `partner`) mirroring the shapes already in this repo, and swap the imports in each page for a Sanity query.

Until that's wired up, content changes are just edits to the files in `src/content/`.

## Deploy

Target: Vercel, with `designingorgculture.com` as the canonical domain and the
legacy sites redirected to it.

The repo is deploy-ready — no env vars are required, and Vercel detects Next.js
with no configuration. `NEXT_PUBLIC_SITE_URL` is optional and only needed if the
canonical domain changes; it defaults to `https://designingorgculture.com` and
feeds the social card, canonical URL, `robots.txt`, and `sitemap.xml`.

### First deploy

1. At [vercel.com/new](https://vercel.com/new), import `kursatozenc/designing-org-culture`.
2. Accept the detected settings (Framework: Next.js) and deploy. It lands on a
   `*.vercel.app` URL within a couple of minutes.
3. Every push to `main` redeploys automatically; pull requests get their own
   preview URL.

### Domain consolidation

The point of the project is that four addresses become one. In Vercel, under
Project → Settings → Domains, add `designingorgculture.com` and `www`, then
point the registrar at the records Vercel shows. Once it resolves:

| Old address | What to do |
| --- | --- |
| `designingorgculture.com` | Becomes the canonical site. |
| `scalingorgculture.com` | Redirect at the registrar, or add it in Vercel and set it to redirect to the canonical domain. |
| `designorgculture.netlify.app` | In Netlify, either delete the site or add a redirect rule to the canonical domain. |
| The Google Site | Cannot redirect. Replace its content with a link, then unpublish. |

Redirecting rather than deleting is what preserves the links already sitting in
old syllabi, emails, and student portfolios. `sitemap.xml` lists every page so
search engines re-index the consolidated site rather than the four it replaces.
