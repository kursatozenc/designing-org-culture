// One entry per cohort/year. This is the entire "add a new year" mechanism:
// append an entry here (or, once Sanity is wired up, create one `cohort`
// document in the Studio) and flip `current` on the new one.
//
// `current: true` marks the cohort shown on the homepage. Exactly one
// entry should carry it at a time.
//
// Who taught a cohort lives in people.js, not here — a person accumulates
// cohort slugs there and the cohort pages read the roster back out.

// `predecessor: true` marks the Ritual Design classes that ran before
// DESIGN 276 existed. They belong in the year-by-year record — the course grew
// out of them — but the people who taught them did not teach this course, so
// nothing should present them as Designing Org Culture faculty.
export const cohorts = [
  {
    slug: "autumn-2026",
    year: "2026",
    term: "Autumn 2026",
    termLabel: "Autumn",
    headline:
      "Culture design for technological adoption and human flourishing.",
    current: true,
    dates: "Sept 22 – Dec 6, 2026",
    schedule: "Tuesdays & Thursdays, 3:30–5:20pm, Stanford d.school",
    course: "DESIGN 276",
    summary:
      "In an era of rapid technological disruption, culture design must work toward both technological adoption and human flourishing. Student teams partner with forward-looking organizations to diagnose systemic challenges, map human-AI workflows, and run live culture experiments.",
    modules: [
      {
        title: "Module 1: Fundamentals of Culture Design",
        weeks: "Weeks 1–2",
        detail:
          "Intro to human-centered culture design, invisible drivers of behavior, ritual design and share-outs, meeting partner organizations.",
      },
      {
        title: "Module 2: Culture Program Design with Partner Org",
        weeks: "Weeks 3–?",
        detail:
          "Discovery through employee interviews and journey mapping, synthesis into insights, reframing the design challenge, and prototyping culture interventions with a partner org.",
      },
    ],
    partners: ["health-domain-tbd"],
    forces: ["values", "practices", "artifacts"],
  },
  {
    slug: "winter-2025",
    year: "2025",
    term: "Winter 2025",
    termLabel: "Winter",
    headline:
      "Startup culture challenges, tackled as live design experiments.",
    current: false,
    dates: "Jan 7 – Mar 13, 2025",
    schedule: "Tuesdays & Thursdays, 4:30–6:20pm, d.school Studio 3",
    course: "DESIGN 276",
    summary:
      "Students tackled startup culture challenges and designed culture experiments by leveraging behavioral and experience design frameworks — following a discovery, design, and delivery process to prototype real culture policies, practices, and artifacts with partner organizations.",
    modules: [
      {
        title: "Discovery",
        weeks: "Weeks 1–4",
        detail:
          "Ritual design fundamentals, meeting partners, culture-champion interviews, employee-pathway mapping, insight synthesis.",
      },
      {
        title: "Design & Delivery",
        weeks: "Weeks 5–10",
        detail:
          "Reframing the problem, prototyping culture interventions, and final presentations back to partner organizations.",
      },
    ],
    partners: ["metaphysic-ai", "intrinsic-ai", "sypartners"],
    letterGradeProject:
      "AI Agent Adoption and Culture Design — a case study + custom AI agent concept for a company implementing agentic AI.",
    forces: ["norms", "stories", "metrics"],
  },
  {
    slug: "winter-2024",
    year: "2024",
    term: "Winter 2024",
    termLabel: "Winter",
    headline: "Purpose-driven startups, and the culture of scaling climate work.",
    current: false,
    dates: "Jan 8 – Mar 13, 2024",
    schedule: "Mondays & Wednesdays, 3:30–5:20pm, d.school Studio 1",
    course: "DESIGN 276 · Purpose-driven startups",
    summary:
      "Aimed at purpose-driven and climate startups, which have to chase social or environmental impact and financial success at once. After funding, most startups that fail do so for people reasons rather than technical ones — passion and pace outrunning the organizational acumen needed to align mission with action and keep people. The class ritual project asked how you might prevent burnout.",
    modules: [
      {
        title: "Module 1: Fundamentals of Culture Design",
        weeks: "Weeks 1–2",
        detail:
          "Human-centered culture design, invisible drivers of behavior, and designing team rituals — with DP1 framed as: how might we prevent burnout?",
      },
      {
        title: "Module 2: Designing a Culture Program for a Partner Organization",
        weeks: "Weeks 3–10",
        detail:
          "Participatory research, culture champions and employee pathways, the sustainability landscape, problem framing, idea books, prototyping, and evaluating a new team ritual.",
      },
    ],
    partners: ["doerr-school-sustainability", "blue-ocean-barns"],
    forces: ["values", "norms", "practices"],
  },
  {
    slug: "winter-2023",
    year: "2023",
    term: "Winter 2023",
    termLabel: "Winter",
    headline: "Scaling culture in startups, taught as Design for Business.",
    current: false,
    dates: "Jan 10 – Mar 16, 2023",
    schedule: "Tuesdays & Thursdays, 4:30–5:50pm, d.school Studio 3",
    course: "How to Scale Organizational Culture",
    summary:
      "Run under the Design for Business program as “How to Scale Organizational Culture” — the offering behind scalingorgculture.com. Students designed a psychological-safety ritual for the class itself, then built a culture program with a partner startup, alongside a run of guest talks on remote culture, DAOs, ritual design, and ethics.",
    modules: [
      {
        title: "Module 1: Fundamentals of Culture Design",
        weeks: "Weeks 1–2",
        detail:
          "Human-centered culture design, invisible drivers of behavior, designing team rituals, and measuring the impact of an intervention — practised on the class's own culture.",
      },
      {
        title: "Module 2: Designing a Culture Program for a Partner Startup",
        weeks: "Weeks 3–10",
        detail:
          "Participatory research and bias spotting, culture champions and employee pathways, problem framing, idea books, prototyping culture, and evaluating a new team ritual.",
      },
    ],
    partners: ["benchsci", "snappy", "spenmo"],
    forces: ["norms", "practices"],
  },
  {
    slug: "fall-2021",
    year: "2021",
    term: "Fall 2021",
    termLabel: "Fall",
    headline: "Culture practices for happy, effective teams.",
    current: false,
    dates: "Sept 21 – Dec 2, 2021",
    course: "DESINST 221",
    summary:
      "Taught as DESINST 221 — the offering behind designorgculture.netlify.app. Framed around Ann Swidler's argument that people reach into culture as a toolkit during unsettled times: COVID, racial injustice, inequality. Three design projects built up from a team's own identity and ritual, through a culture repertoire of policy, habit, ritual and story provocations, to a culture program with a partner org. Ran an Outside-In Speaker Series across the quarter.",
    modules: [
      {
        title: "Module 1: Fundamentals of Culture Design",
        weeks: "DP1 · Crafting your team culture",
        detail:
          "Human-centered culture design, then core values, purpose and symbols — students design their own team identity and ritual.",
      },
      {
        title: "Module 2: Forms & Principles of Organizational Culture",
        weeks: "DP2 · Designing a culture repertoire",
        detail:
          "Culture as a system, as behaviors, as practices, and as stories — each paired with a principle (performance, creativity, human flourishing, DEI) and a provocation to design: a policy, a habit, a ritual, a story.",
      },
      {
        title: "Module 3: Participatory Culture Design",
        weeks: "DP3 · Culture program for a partner org",
        detail:
          "Participatory design research, insight crafting and journey mapping, two rounds of experience prototyping with the partner, then a final critique.",
      },
    ],
    partners: ["boba-guys", "mesa"],
    forces: ["values", "norms", "practices", "stories"],
  },
  {
    slug: "winter-2020",
    year: "2020",
    term: "Winter 2020",
    termLabel: "Winter",
    headline: "Ritual Design for Better Workplaces, focused on well-being.",
    current: false,
    predecessor: true,
    course: "Ritual Design for Better Workplaces",
    summary:
      "Ritual Design for Better Workplaces, with a focus on well-being — held with Stanford Medicine. Students designed personal rituals and explored how ritual mechanics (trigger, intention, props, acts) can build more intentional culture.",
    partners: ["stanford-medicine"],
    forces: ["practices", "behaviors"],
  },
  {
    slug: "winter-2019",
    year: "2019",
    term: "Winter 2019",
    termLabel: "Winter",
    headline: "Ritual Design pop-up, building a workplace ritual toolkit.",
    current: false,
    predecessor: true,
    course: "Ritual Design for Better Workplaces (pop-up)",
    summary:
      "Ritual Design for Better Workplaces pop-up, co-taught with SF State University. Students built a ritual-design toolkit and worked directly with Airbnb on workplace ritual concepts.",
    partners: ["airbnb"],
    forces: ["practices", "stories"],
  },
];

export function getCurrentCohort() {
  return cohorts.find((c) => c.current) ?? cohorts[0];
}

export function getCohortBySlug(slug) {
  return cohorts.find((c) => c.slug === slug);
}

/** True for the Ritual Design classes that preceded DESIGN 276. */
export function isPredecessor(slug) {
  return Boolean(getCohortBySlug(slug)?.predecessor);
}
