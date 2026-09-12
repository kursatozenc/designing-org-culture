# Workshop — Research readouts as pages, not decks

A two-session workshop for DESIGN 276 in which student teams stop making slides
and start making a thing with a URL: a scrolling, self-explaining research
readout, in the tradition of the Microsoft Work Trend Index and the Anthropic
Institute pieces.

Everything the workshop needs is in this folder. Nothing here is on the public
site; this is teaching material.

```
data/     the shared dataset students build on, plus its methodology note
starter/  the one-file HTML skeleton students fill in
build/    the worked specimen — the thing they tear down in session A
```

---

## Why this, and why now

A deck is a performance aid. It assumes a presenter, a room, and forty minutes
of someone's attention. Almost none of that survives contact with a partner
organization: the deck gets emailed, forwarded to someone who was not in the
room, opened on a phone, and read with no one there to say the sentence that
made slide 14 make sense.

A readout is built for the opposite condition. It is read alone, in silence,
out of order, by someone who may only give it ninety seconds. That constraint
forces three things a deck lets you avoid:

1. **The argument has to be on the page.** You cannot narrate the gap between
   two charts. If the claim is not written down, it does not exist.
2. **Every number has to carry its own conditions.** No presenter to say "small
   sample, obviously." The n goes on the chart or the chart is dishonest.
3. **It outlives the meeting.** A link can be sent to a night-shift supervisor
   who was never going to be in the room. That is not a nice-to-have for this
   course — it is the difference between a culture recommendation reaching the
   people it describes and staying with the executives who commissioned it.

There is also a plain professional argument. This is what serious research
communication currently looks like. Students who leave able to make one have a
transferable skill; students who leave able to make a nice deck have the skill
everyone already has.

### The three specimens

| Piece | What to steal from it |
| --- | --- |
| [Microsoft, *Work Trend Index 2026*](https://www.microsoft.com/en-us/worklab/work-trend-index/agents-human-agency-and-the-opportunity-for-every-organization) | Chapter structure by stakeholder (employees → leaders → organizations); a jump nav; every chart carrying sample size, date range, and a downloadable dataset; an endnotes section that treats method as a credibility asset rather than an appendix. |
| [Microsoft, *AI is already changing work*](https://www.microsoft.com/en-us/worklab/ai-is-already-changing-work-microsoft-included) | Non-linear entry: the same content navigable *by question* or *by function*, so a reader arrives at their own role. Also the honesty of an organization reporting on itself. |
| [Anthropic Institute, *Recursive self-improvement*](https://www.anthropic.com/institute/recursive-self-improvement) | Restraint. A long argument carried mostly by prose and a small number of diagrams that show a mechanism rather than a quantity. The counterweight to students who think "interactive" means "lots of widgets." |

Send all three as pre-work. The third is the one that stops the workshop
becoming a dashboard-building exercise.

---

## Should students get data? Yes — but not their own, not yet

This was the open question, and the answer that holds up is: **a shared
synthetic dataset for the workshop, their own partner data for the
deliverable.**

Three reasons.

**Identical data makes craft visible.** When every team builds from the same
148 rows, the difference between a readout that lands and one that does not is
unmistakably the argument and the execution. There is nowhere to hide behind
"we had better interviews." Students learn more from six different readings of
one dataset than from six readouts nobody can compare.

**Teams arrive uneven.** In week 6 one team has twenty interviews and another
has four and a rescheduled site visit. Building the workshop on their own
discovery data means half the room spends the session on data cleanup and never
reaches the actual lesson.

**Publishing partner data is a consent problem, not a design one.** Interview
quotes about what is broken at a real medical center should not go on a public
URL as a skills exercise. The shared dataset removes that question from the
workshop entirely, which lets you raise it deliberately later, where it
belongs.

So the sequence is:

| When | Data | Purpose |
| --- | --- | --- |
| Module 1, week 1–2 | The class's own DP1 ritual submissions and a five-question survey of the room | Warm-up. Ten minutes: turn data about ourselves into one claim and one chart. |
| **This workshop** | `data/` — Cedar Ridge Health, 148 responses + 22 interviews | Learn the form on shared evidence. |
| Weeks 7–10 | Their partner's actual discovery data | The real deliverable. |

### The dataset — three sources, not one

The specimens are not built on a dataset. They are built on **triangulation**:
the Work Trend Index puts survey responses beside Microsoft 365 telemetry, and
the authority comes from the two disagreeing in interesting places. That maps
directly onto this course's own taxonomy — the invisible forces are what people
tell you, the visible ones are what the organization records.

So students get three sources and the study is what sits between them:

| File | What it is |
| --- | --- |
| `data/cedar-ridge-onboarding-survey.csv` | 148 recent hires at a fictional regional health system. Role, shift, work mode, hire quarter, eleven self-report measures. |
| `data/cedar-ridge-systems-data.csv` | What the systems logged for 131 of them: scheduling, paging directory, the learning platform, Ridge Assist. Joins on `respondent_id`. |
| `data/cedar-ridge-interviews.md` | 22 coded interview excerpts, tagged by role and tenure. |

`data/METHODOLOGY.md` describes all three and is where the limits live.

It is deliberately built so that:

- **There is more than one true story in it.** The formal/informal split, the
  week-one peer guide, the distribution problem, and the AI-assistant finding
  are four different readouts. Teams will not converge, which makes the critique
  session worth having.
- **The most quotable finding is confounded.** The AI cohort scores higher on
  policy clarity and lower on "knew who to ask" — and is also the newest cohort.
  Teams that notice and say so should score above teams that found a punchier
  headline. This is the single most useful trap in the set.
- **Cutting twice gets you to n = 6.** Physicians are n = 14, Night is n = 19.
  The dataset punishes a team that slices until the bar chart looks dramatic.
- **The two sources agree, and then invert.** On the week-one guide they concur
  exactly — 6.6 paired shifts for people who said yes, 1.5 for people who said
  no. Then: physicians report the *lowest* sense of knowing who to ask and have
  by far the *highest* number of colleagues contacted, roughly double the
  average. Support Services are the mirror image. Contact volume and felt access
  run backwards at the extremes. **That finding exists in neither file alone.**
  A team that finds it has done something a single dataset cannot teach.
- **It raises a measurement-ethics question on its own.** Two columns are paging
  metadata and shift records, collected to run schedules and now being used to
  assess whether people feel like they belong. Nobody told the 131 people. A
  readout does not have to resolve this. It has to show it noticed.
- **The join is incomplete.** 131 of 148. The 17 missing are per-diem and agency
  staff. A team that reports on 148 using systems data is wrong by 11%.

It is synthetic and says so on its face, in the methodology note and in the
specimen readout. Say this out loud in class too — students should not leave
thinking Cedar Ridge is real, and should see that labeling a synthetic dataset
is itself part of research honesty.

---

## Where it goes in the quarter

**Recommended: week 6, the Tuesday/Thursday pair, immediately after synthesis.**

By then teams have discovery data and insights and the next thing they have to
do is make an argument out of them. Dropping the format in here means the
remaining four weeks of the quarter run on it — the reframe gets published as a
page, the prototype readout is a page, the final share-back to MDLIVE and San
Mateo Medical Center is a page. The skill gets four weeks of reps instead of
one workshop.

Putting it in week 1–2 instead makes it a tool students have before they need
it, which is usually a tool they forget. Putting it in week 9 makes it a
last-minute format change on a deliverable that already exists.

Both sessions assume the real block: **4:30–6:20pm, 110 minutes.**

---

## What students should leave able to do

Write the argument of a research finding as a sequence of claims that hold up
without a presenter, and build it as a page where every chart carries its own
conditions and every interaction earns its place.

**Forces in play:** `artifacts` — the readout is itself a culture artifact, and
a durable one; `stories` — the piece is a narrative claim about an organization
made to circulate inside it; `metrics` — what you choose to chart is a statement
about what matters, which is the whole lesson of section 04 of the specimen.

---

## Pre-work (assign the Thursday before)

1. Read all three specimens. Spend at least fifteen minutes with each.
2. Fill in the teardown sheet for **one** of them (below). Bring it on paper.
3. Nothing else. Do not start building.

**Teardown sheet — seven questions**

1. What is this piece claiming? Write it in one sentence, in your own words.
2. Where in the piece is that sentence actually written down? Quote it. If you
   cannot find it, say so — that is a finding.
3. Count the interactive elements. For each one, write the question a reader
   can answer with it that they could not answer from a static image.
4. How many *kinds* of evidence is this piece using — survey, telemetry, case
   study, outside research? Find a place where two of them are put side by side.
   Do they agree?
5. Pick any chart. What does it tell you about its own sample and limits?
6. Where did you stop reading, honestly? What was on screen?
7. What would be lost if this were a deck? What would be gained?

---

## Session A — Read one, take it apart

*Tuesday, 4:30–6:20pm. Teams of 3–4. Laptops closed until 5:45.*

| Time | Min | Block | What is happening |
| --- | --- | --- | --- |
| 4:30 | 10 | **Cold read, on ourselves** | Put last quarter's best student deck on screen with no narration for ninety seconds. Then close it and ask the room to write down what it claimed. Read four answers aloud. They will not match. That is the session's thesis and it takes ten minutes to prove. |
| 4:40 | 20 | **Teardown, in pairs** | Pairs that read *different* specimens trade sheets and interrogate each other's answers to Q1–Q3. The goal is disagreement about what each piece claims. |
| 5:00 | 15 | **Build the contract** | Whole room. Harvest the teardowns into a list on the wall of what a readout must do. Steer toward the seven in "The readout contract" below, but let them arrive at it — a rule they wrote is a rule they follow. |
| 5:15 | 20 | **The claim spine — no screens** | Teams get the Cedar Ridge packet on paper and index cards. Write five to seven claims, one per card, each a full sentence with a verb, in order. This is the whole argument. No charts yet, no laptops. |
| 5:35 | 10 | **Spine swap** | Trade card stacks with another team. Read a stranger's spine cold and write down: what is this readout about, and where does the argument jump? Hand the note back. |
| 5:45 | 25 | **First section only** | Laptops open. Teams open `starter/readout-starter.html` and build exactly one section: claim, one chart, one quote, one axis note. Nothing else. Teaching team circulates. |
| 6:10 | 10 | **Close** | Each team says one sentence: the claim they are cutting before Thursday. Cutting, not adding. |

**Why the spine happens on paper.** The moment a laptop opens, the work becomes
formatting. Twenty minutes of writing sentences with no ability to style them is
the only reliable way to get an argument first. Hold the line on this even when
a team says they think better on a screen.

---

## Session B — Build it, then be silent while it is read

*Thursday, 4:30–6:20pm.*

| Time | Min | Block | What is happening |
| --- | --- | --- | --- |
| 4:30 | 3 | **Constraints back up** | The readout contract goes on the board. Point at the one-interaction rule and at rule 8. |
| 4:33 | 8 | **Live build** | You build a claim into a working section on the room screen, with an assistant, out loud — including checking one number against the CSV and making one revision when it comes back wrong. Use a claim no team is working on. |
| 4:41 | 34 | **Build** | Full draft, in named roles (below). Teaching team circulates with one question only: "show me the sentence that says that." |
| 5:15 | 5 | **Ship it** | Every team gets their page onto a URL. Nothing is critiqued as a local file — the artifact is a link or it is not done. |
| 5:20 | 30 | **The silent gallery** | Readouts open on screens around the room. Nobody stands at their own. Each person reads four other readouts, six minutes each, in silence, and leaves a card at each. **No author may explain anything.** This is not a rule for the exercise, it is a simulation of the actual delivery condition. |
| 5:50 | 20 | **Read your cards** | Teams return to their own screen and read their stack. Then each team says out loud: what readers thought we claimed, versus what we meant. The gap is the critique; the teaching team does not need to add much. |
| 6:10 | 10 | **Close** | One change each, named, before a partner sees anything in this format. |

**The cold-read card** — three questions, printed, one card per reader per
readout:

1. In one sentence, what is this readout claiming?
2. Which single number do you remember?
3. Where did you stop reading? Name the section.

Question 3 is the one that does the work. It locates the exact place a piece
loses people, which no amount of "I really liked the visuals" ever does.

---

## The readout contract

Seven constraints. They go on the board and they are graded against.

1. **Five to seven claims, in order.** Each is a full sentence with a verb, set
   in the largest type on the page. A reader who scrolls past everything else
   and reads only these gets the whole argument.
2. **The claim sits in the heading, never in the chart title.** "Two layers, two
   different results" is a chart title. "The written layer transmits cleanly and
   the unwritten layer does not transmit at all" is a claim.
3. **Give away the finding in the first eighty words.** Nobody is in the room to
   build suspense for.
4. **Every figure carries its conditions.** The n, the scale, where the bars
   start, and the thing that would let someone misread it. One line under every
   chart, no exceptions.
5. **Exactly one interactive element** — two if you can defend the second. Before
   building it, write the reader's question it answers as a comment in the code.
   If a static chart answers that question, ship the static chart.
6. **A limits section with at least three real entries.** "Further research is
   needed" is not an entry. Name the confound, the survivor bias, the small
   cells.
7. **It works on a phone and it works in the dark.** Someone will open it on a
   phone in a hospital corridor. The starter handles both; do not break them.
8. **Every quote and number traces to a source.** Quotes carry their speaker ID
   (`P09`, `M02`), figures name their file and their n. Nothing invented, no
   quotation tidied into something the person did not say. If an assistant
   produced a number you cannot find in the CSV, it is not a number.
9. **Evidence, interpretation, and proposal are visibly different things.** What
   the data says, what you think it means, and what you want them to do must not
   blur into one another. In the specimen the interpretation is the claim
   heading, the evidence is the figure, and the proposals are quarantined in
   section 07. A partner has to be able to disagree with your reading while
   still accepting your evidence.

**The diagnostic, for when a team asks if theirs is good:** screenshot each
section and paste the screenshots into a slide deck. If nothing is lost, they
built a deck in HTML. Something has to depend on it being a page — the
continuity of the argument, the one interaction, the fact that it has a URL.

---

## On building with AI

Most of this room cannot hand-write HTML, and that is no longer the constraint
it was. Students should build these conversationally with an AI assistant, from
the starter file. Say this explicitly rather than letting half the room assume
it is cheating and the other half assume it is the whole assignment.

What to tell them:

- **The bottleneck has moved from syntax to editorial judgment.** What is being
  graded is the argument, the claim sentences, the choice of what to chart, and
  the limits section. None of that is something to hand off.
- **Paste the contract into your first prompt.** The seven constraints are a
  better brief than anything they will improvise.
- **Check every number against the CSV yourself.** An assistant will happily
  produce a bar of the wrong length or round a mean into a different story. At
  least one team will ship a chart whose bars do not match its labels; catching
  this in the gallery is a good outcome, catching it before is better.
- **Ask for less.** The default failure is an assistant cheerfully adding six
  animated widgets. The constraint list exists to be pointed at.

This is also, unavoidably, a live demonstration of the thing the 2026 cohort is
studying — what a capable assistant does to the work it is handed, and what
judgment remains with the person. It is worth ten minutes of the Thursday
debrief.

---

## Materials and prep

**Bring:**
- Index cards, four colors, roughly 40 per team.
- The Cedar Ridge packet printed — the methodology note and the interview
  excerpts read much better on paper during the spine block. The CSV stays
  digital.
- Printed cold-read cards, enough for every student × 4.
- Last year's best student deck, for the ten-minute opener. Ask permission
  first; the point is not to embarrass anyone and the deck should be a *good*
  one, which makes the demonstration land harder.

**Set up:**
- `starter/readout-starter.html` and the `data/` folder somewhere students can
  download in one click.
- The specimen readout in `build/` open on the room screen for session A.
- Six screens or laptops that can be left open around the room for the gallery.
- A way for every team to get a URL by 5:20 on Thursday. Whatever the class is
  already using is fine; decide in advance rather than at 5:18.

---

## Deliverable and assessment

**From the workshop:** one published readout per team, built on Cedar Ridge,
with the URL posted. Ungraded, or graded complete/incomplete — this is a skills
workshop and grading the first attempt suppresses the risk-taking the second
attempt needs.

**Downstream:** the reframe deliverable and the final partner share-back are
both readouts — and the submission is not only the page. Each team takes one
finding from their own partner research through this method, **uses the readout
in an actual partner conversation**, and submits:

- the published readout,
- what the partner **recognized** — the part that landed as obviously true,
- what the partner **challenged**, and whether they were right,
- what new question or experiment came out of the conversation.

The readout is the instrument. What it produced in the room is the finding.
A beautiful page that changed nothing is a weaker submission than a rough one
that got a partner to say "that is not what is happening, it is this."

That is where the rubric applies.

| Dimension | What a strong one looks like |
| --- | --- |
| **Argument** | Five to seven claims that hold in order. A reader who reads only the headings gets the case. |
| **Evidence** | Every claim is attached to a number or a quote that actually supports it, not adjacent to it. |
| **Honesty** | The limits are specific and appear where they matter, not only at the bottom. A team that surfaces a confound that weakens their own headline scores above one that does not. |
| **Chart craft** | Scales are honest, baselines are stated, n is visible, nothing is cut twice into six people. |
| **Triangulation** | Two sources are actually put side by side, and the team says something about where they agree and where they do not. |
| **Restraint** | The interaction earns its place. Decoration is absent. |
| **Does it survive being read alone** | The cold-read test. Readers can state the claim without the author. |

The heaviest weight belongs on the last row. It is the only one that measures
the thing the format exists for.

### Before anything with partner data goes on a URL

Three rules, stated in class before week 7:

1. Unlisted link by default. Nothing partner-related is publicly indexed
   without the partner saying yes in writing.
2. No attributable quotes. Role and tenure, as in the specimen. Never a name,
   never a combination of details that identifies one person on one unit.
3. The partner sees it before anyone else does. A readout is more durable and
   more forwardable than a deck, which is its value and also its risk.

---

## Where this fails

**A team builds a beautiful page with no argument.** The most likely failure by
some distance, and it is visible by 5:00 on Thursday. The recovery is to make
them close the laptop and say the five claims out loud; if they cannot, they go
back to cards while the other teams keep building. Losing twenty minutes of
build time is cheaper than shipping a decorated void.

**Nobody finds the confound.** If no team flags that the AI cohort is also the
newest cohort, do not tell them during the build. Let the gallery happen, then
put the hire-quarter cut on screen in the last ten minutes and let the room work
out what it does to three of the readouts in the room. Handing it to them
earlier costs the lesson.

**The technical spread is wider than expected.** One team has a developer and
one team has nobody who has opened a text editor. Mitigations, in order: the
starter file means nobody begins at zero; pair the two teams for the build block
only, not the argument; and make the rubric's weighting explicit at the start,
so the non-technical team knows the argument rows are worth more than the craft
rows.

**The gallery turns into people explaining their work.** It will try to. The
authors standing at their own screens is how it happens, so physically move
people. If it still breaks down, run the last ten minutes as written critique
only and take the discussion into the next session.

**Build blocks overrun and the gallery gets cut.** The gallery is the session.
If the Thursday build is running long, cut it at 5:15 regardless of state — a
half-finished readout being cold-read teaches more than a finished one nobody
reads. Say this at 4:35 so it is not a surprise at 5:15.
