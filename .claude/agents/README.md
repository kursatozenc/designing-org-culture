# The teaching-team agents

Four subagents for running DESIGN 276, Designing Org Culture. They are for the
teaching team, not for students — each one reads the course record in
`src/content/` so it plans against the actual cohort, modules, and forces
rather than a generic idea of a design class.

| Agent | What it does |
| --- | --- |
| `session-planner` | Drafts and pressure-tests class sessions against the module arc and the real time block. Produces a run of show with minutes, materials, deliverable, and failure modes. |
| `ritual-librarian` | Turns DP1 submissions into well-formed entries in `src/content/rituals.js`, tags forces, and audits the library. Will not publish student names without a yes. |
| `partner-researcher` | Researches a partner org, frames candidate culture challenges, and writes the interview guides and journey-mapping prompts for Module 2 discovery. |
| `content-steward` | Runs the annual step end to end — new cohort, flipping `current`, people appearances, partners, the social card — and verifies every route. |

## Using them

In a Claude Code session on this repo, ask for the work and the right agent gets
picked up:

- "Plan week 4 for Autumn 2026 — first discovery session after the partner
  kickoff."
- "Here are six DP1 submissions from this year's class, add them to the
  library."
- "Research [org] as a health-domain partner and give me three candidate
  challenge framings."
- "Autumn 2026 is over. Add Winter 2027 and make it the current cohort."

Or name one directly: "use the session-planner agent to pressure-test this plan."

## Where they get their facts

Every agent grounds in the content files before writing:

- `src/content/cohorts.js` — modules, dates, schedule. `current: true` is this year.
- `src/content/forces.js` — the eight-force taxonomy.
- `src/content/rituals.js` — what students have actually made.
- `src/content/people.js` — who is teaching or visiting.
- `src/content/partners.js` — past partners and how their challenges were framed.
- `docs/adding-a-ritual.md` — the DP1 submission contract.

So the annual step keeps these useful: update the content files at the end of a
quarter and the agents follow, with no edit to the agent definitions. That step
is itself `content-steward`'s job, which makes the loop close on itself — the
agent that updates the facts is the reason the other three stay current.

## The consent rules are in the agents

Student names, partner-side contacts, and unbacked claims about a partner org
stay out of the repo. `ritual-librarian`, `partner-researcher` and
`content-steward` each carry those rules explicitly, because all three write
toward the public site.
