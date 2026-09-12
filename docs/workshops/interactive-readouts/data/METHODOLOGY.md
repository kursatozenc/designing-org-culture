# Cedar Ridge Health onboarding study — methodology note

**Read this first, and make your readout carry a version of it.**

## What this is

Cedar Ridge Health is not a real organization. This dataset is **synthetic** —
generated for DESIGN 276 so that every team can practise building a research
readout on the same evidence, and so that nobody's actual partner-org interview
data ends up on a public web page during a skills workshop.

It is built to behave like real data: the effects in it are real effects that
survive a cut, the sample sizes are honest, and at least one apparent finding is
confounded. It will reward you for being careful and embarrass you for not being.

Cedar Ridge stands in for a mid-size regional health system: roughly 4,200
employees, two hospitals, two outpatient clinics, 24-hour operation.

## The study, as it would be described in a real readout

- **Survey.** 148 employees hired in the previous 18 months, fielded March 2026,
  62% response rate against a sampling frame of 239. Self-report. Five-point
  scales unless noted.
- **Interviews.** 18 semi-structured interviews with recent hires and 4 with
  managers who onboard, 45–60 minutes, conducted February–March 2026.
- **Fielded by** the People Experience team, not an independent researcher.

## Fields in `cedar-ridge-onboarding-survey.csv`

| Field | Meaning |
| --- | --- |
| `respondent_id` | Anonymous ID |
| `role_family` | Nursing, Admin & Ops, Allied Health, Support Services, IT & Data, Physicians |
| `site` | Which facility, or Systemwide / Remote |
| `shift` | Day, Evening, Night |
| `work_mode` | Onsite, Hybrid, Remote |
| `hire_wave` | Quarter hired, 2025 Q1 – 2026 Q1 |
| `tenure_months` | Months since start date |
| `ai_assisted_onboarding` | Whether their onboarding included Ridge Assist, the AI assistant rolled out progressively from mid-2025 |
| `orientation_rating` | "The formal orientation was well run." 1–5 |
| `tools_ready_day1` | "My accounts, access, and equipment were ready when I started." 1–5 |
| `policy_clarity` | "I knew the formal rules and where to look them up." 1–5 |
| `knew_who_to_ask` | "I knew who to go to with a question I couldn't look up." 1–5 |
| `unwritten_rules_confidence` | "I understood how things actually work here, not just how they're written." 1–5 |
| `belonging_by_day30` | "By my first month I felt like I belonged on my team." 1–5 |
| `would_recommend` | "I would recommend Cedar Ridge to someone in my field." 1–5 |
| `weeks_to_feeling_productive` | Self-reported weeks until "I felt like I was contributing, not catching up." |
| `learned_unwritten_rules_from` | Single-select: peer, manager, orientation, trial and error, the AI assistant, no one |
| `had_week_one_peer_guide` | "In my first week, someone informally showed me how things really work." yes/no |

## Known limitations — you are expected to state these, not hide them

1. **Self-report throughout.** `weeks_to_feeling_productive` is a memory, not a
   measurement, and people who are happy now remember ramping faster.
2. **Survivor bias.** Everyone in this sample still works here. The people whose
   onboarding failed worst are, by construction, missing.
3. **The AI cohort is also the newest cohort.** Ridge Assist rolled out over
   time, so anyone who onboarded with it also has shorter tenure and a fresher
   memory, and started under whatever else changed in late 2025. Any difference
   you find between the AI and non-AI groups is confounded with recency. You can
   still make an argument about it. You cannot make a causal one.
4. **Fielded internally.** Respondents knew the People Experience team would read
   it, which is not a neutral condition for a question about your manager.
5. **n is small once you cut.** Physicians are n=14, Night shift n=19. Cut
   twice and you are reporting on six people. Say the n on the chart.
