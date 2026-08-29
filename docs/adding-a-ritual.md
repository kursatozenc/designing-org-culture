# Adding rituals to the library

Every cohort designs a ritual for the class's own culture in the first two
weeks (DP1). That work has always existed; it just never accumulated
anywhere, which is why the library currently holds one year.

The fix is to make submission part of the deliverable, so the library fills
itself at roughly five or six rituals a year.

---

## 1. For students — what to submit

Add this to the DP1 brief. It asks for nothing students are not already
producing for the one-pager.

> **Submit your ritual to the course library.**
>
> Alongside your one-pager, fill in the six fields below and hand them in
> with your poster. Selected rituals join the public library at
> designingorgculture.com/rituals, credited to your team if you want to be
> named.
>
> 1. **Name** — what you call it. Short and memorable.
> 2. **One line** — what it does, in a sentence a stranger would understand.
> 3. **Intention** — the value or need it manifests. What is it *for*?
> 4. **Trigger moment** — when exactly it fires. Be specific: "the start of
>    a weekly team meeting", not "sometimes".
> 5. **Prop** — the object or signal the ritual runs on, if there is one.
> 6. **Flow** — the steps, in order, as short imperative lines.
>
> Optional but welcome: one insight — the thing you learned designing it
> that you would tell the next team.
>
> **Credit:** tell us whether you want your names published with the ritual,
> or the ritual published without them. Either is fine; we will not publish
> names without a yes.

And a second ask, at the **end** of the quarter rather than at DP1 — you have
been living inside your ritual for ten weeks by then, which is the only reason
any of this is worth publishing:

> **What happened when you ran it?** Three or four sentences. Did the team
> still do it in week 8, or did it quietly die? What did you change after the
> first try? What did it turn out to be for, once it was real?
>
> Say the unflattering version if that is the true one. A ritual that stopped
> working after two weeks, with an honest account of why, is more useful to
> the next cohort than one that is only ever described as intended.

This is the field the library has never had, and its absence is the single
biggest gap on the public page: four rituals, no evidence. The course teaches
Metrics as one of the eight forces and then publishes work with no
observations attached. One paragraph per ritual changes the register of the
whole page from *assignment* to *field notes*.

## 2. For the teaching team — adding them to the site

Each ritual is one object in `src/content/rituals.js`:

```js
{
  slug: "toss-the-gratitude",        // url-safe, unique
  name: "Toss the Gratitude",
  cohort: "winter-2023",             // must match a slug in cohorts.js
  tagline: "An appreciation ritual",
  intention: "…",
  trigger: "…",
  prop: "…",
  flow: ["…", "…"],                  // ordered steps
  outcome: "…",                      // optional — what happened when they ran it
  insight: "…",                      // optional
  forces: ["practices", "behaviors"], // slugs from forces.js
}
```

Only `slug`, `name`, `cohort`, `intention`, `trigger`, `prop` and `flow` are
required. `credits` and `poster` fields are not rendered yet — add them once
students have agreed to be named.

`outcome` renders above `insight` on the card, under the heading "What
happened when we ran it", because a finding outranks a claim. Fill it in at
the end of the quarter, not at DP1.

Order in the file is editorial, not chronological: the homepage teases the
first three entries, so put the strongest ritual first.

Tagging `forces` is what keeps the library comparable: it lets a reader see
that a ritual moved norms rather than artifacts, and connects back to the
framework.

## 3. The annual step

At the end of a quarter, the whole "new year" ceremony is:

1. Add the cohort to `src/content/cohorts.js`, and move `current: true` onto it.
2. Add that cohort's people to `src/content/people.js` as `appearances`.
3. Add the year's rituals here.
4. Add any new partners to `src/content/partners.js`.
5. Regenerate the social card, which has the current term baked into it:

   ```bash
   npm run dev &
   node scripts/og.mjs
   ```

No new pages, no new site.
