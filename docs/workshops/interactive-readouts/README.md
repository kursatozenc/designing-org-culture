# Workshop — Research readouts as pages, not decks

A single 110-minute workshop for DESIGN 276 in which student teams stop making
slides and start making a thing with a URL: a scrolling, self-explaining
research readout, in the tradition of the Microsoft Work Trend Index and the
Anthropic Institute pieces. The session builds the argument; the page is
finished as homework.

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

**One session, 110 minutes, in week 6 — right after synthesis.** By then teams
have discovery data and insights and the next thing they have to do is make an
argument out of them. The format then carries the rest of the quarter: the
reframe is a page, the prototype write-up is a page, and the final share-back is
a page with a link.

The session teaches the argument. **The page is built afterward.** That is not a
compromise forced by the clock — the argument is the hard, transferable part and
the part that needs a room full of strangers to test it, while building from a
starter file with an assistant is genuinely something a team can do alone.

## The run of show

| Time | Min | Block | What happens |
| --- | --- | --- | --- |
| 4:30 | 10 | **Cold read, on ourselves** | Last year's best student deck on screen, ninety seconds, no narration. Then: "in one sentence, what did it claim?" Four answers, none matching. The thesis, proved rather than asserted. |
| 4:40 | 10 | **Harvest the contract** | Straight off the pre-work sheets, at the wall, in their words. No pair block — the teardown happened at home, which makes the pre-work load-bearing. |
| 4:50 | 25 | **The claim spine — no screens** | Evidence packet on paper, index cards. Five to seven claims, one per card, full sentences with verbs, in order. Survey and interviews only. |
| 5:15 | 20 | **The silent spine gallery** | Card stacks on tables, nobody at their own, four rotations of four minutes, cold-read cards. The gallery, run on spines rather than pages. |
| 5:35 | 10 | **Read your cards, cut one** | Three minutes silent, then one line out loud: "readers thought we were claiming ___, we meant ___." Then physically remove a card. |
| 5:45 | 8 | **Live build** | You build a section on the room screen with an assistant, including checking a number, finding it wrong, and fixing it. |
| 5:53 | 17 | **Build your first section** | Starter file. Nobody finishes; the point is hitting the first obstacle while you are still in the room. Everyone publishes before they leave. |
| 6:10 | 10 | **Close, and hand out the complication** | The homework brief, verbally as well as on paper. |

### Why the gallery moves onto the spines

The gallery does not need a finished page. It needs something to cold-read, and
a card spine is the better object: no chart, no typography and no colour to hide
a weak argument behind. Twelve index cards either hold as a case or they do not.
This is the change that makes a single session work without losing anything
load-bearing.

### The homework, and why the second source arrives late

Finish the readout against the contract and publish to the URL you already have.
Then the part that matters, handed out at 6:10 rather than at 4:50:

> Here is a second source — what the systems actually logged for 131 of the 148
> people. Your spine was written from what people *said*; this is what the
> organization *recorded*. Join it and answer one question in your readout: does
> it change your argument? If it does, say how. If it doesn't, say why not.

Giving them everything up front is the obvious move and the worse one.
Committing to an argument and *then* receiving evidence that complicates it is
the harder exercise and a truer description of how research goes — and it makes
triangulation something they perform rather than something they are handed.

What is waiting in there: the two sources agree on the week-one guide almost
exactly and then invert at the extremes. No team will have that claim on a card,
because it is in neither file alone.

### If you can borrow thirty minutes later

You do not need a second block, but thirty minutes at the top of any later
session, once the readouts are in, buys the gallery again on the finished pages
— twenty minutes of silent reading with the "where did you stop reading" card,
then ten for the cards and the two reveals (the confound, and whether they would
show this to the people it describes).

A full second block is better still — it trades homework for supervised
building, which helps the least technical teams most — but not enough to be
worth displacing something else in a ten-week quarter.

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
judgment remains with the person. It is worth ten minutes when the readouts come
back.

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
- A way for every team to get a URL in under two minutes, decided in advance and
  tested by you. The 5:53 block depends on it.
- Table space for six card spines to be laid out and walked between.

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

**A team goes home and never builds.** The risk you take by moving the build out
of the room. Publishing before they leave is the whole mitigation — an
unfinished page at a URL gets finished, a blank file does not get started. Any
team that leaves without publishing is the team to email the next day.

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

**The spine block overruns and the gallery gets cut.** The gallery is the session.
If the session runs hot, the minutes come out of the 5:53 build, never out of
the spine or the gallery. A team that leaves with fifteen minutes of building
and an argument four strangers have already tested is in better shape than one
with a styled page and a spine nobody read.
