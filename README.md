# Designing Org Culture

The public site for Stanford d.school's Designing Org Culture course (DESIGN 276) — one home for the current cohort, past years, and partner organizations, instead of a new site every year.

## Content model

All content lives in `src/content/` as plain JS data for now:

- `cohorts.js` — one entry per year. Exactly one should have `current: true`; that's the entry the homepage and nav treat as "this year." Adding a new year means adding one entry here and flipping the flag — not building a new page or site.
- `partners.js` — organizations the class has worked with, independent of any single cohort, referenced by slug from `cohorts.js`.
- `forces.js` — the eight-force culture taxonomy (Policy, Values, Norms, Practices, Stories, Behaviors, Artifacts, Metrics) used to tag cohorts and, eventually, partner projects.

This is written to map 1:1 onto a Sanity schema (`cohort` / `partner` / a `cultureForce` tag list) — see "Light content management" below for the planned upgrade path.

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

Not yet deployed. Intended target: Vercel, with `designingorgculture.com` as the canonical domain and the legacy sites (Netlify build, `scalingorgculture.com`, the Google Site) redirected to it.
