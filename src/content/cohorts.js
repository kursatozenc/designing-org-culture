// One entry per cohort/year. This is the entire "add a new year" mechanism:
// append an entry here (or, once Sanity is wired up, create one `cohort`
// document in the Studio) and flip `current` on the new one.
//
// `current: true` marks the cohort shown on the homepage. Exactly one
// entry should carry it at a time.

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
    instructors: ["Kursat Ozenc", "Shannon Mahon"],
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
    instructors: ["Kursat Ozenc", "Martin Gonzalez"],
    teachingAssistant: "Gatsby Frimpong",
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
    partners: ["metaphysic-ai", "akkio", "intrinsic-ai", "sypartners"],
    letterGradeProject:
      "AI Agent Adoption and Culture Design — a case study + custom AI agent concept for a company implementing agentic AI.",
    forces: ["norms", "stories", "metrics"],
  },
  {
    slug: "2024",
    year: "2024",
    term: "2024",
    termLabel: "Pending audit",
    headline: "Materials still under review for what is public-safe to publish.",
    current: false,
    summary:
      "Archive entry pending a full content audit — this cohort's materials live in Drive under 2024-DOC-DesigningOrgCulture but haven't been reviewed for what's public-safe to publish here yet.",
    pendingAudit: true,
    partners: [],
    forces: [],
  },
  {
    slug: "winter-2020",
    year: "2020",
    term: "Winter 2020",
    termLabel: "Winter",
    headline: "Ritual Design for Better Workplaces, focused on well-being.",
    current: false,
    instructors: ["Kursat Ozenc", "Ted Matthews", "Kajal Khanna"],
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
    instructors: ["Kursat Ozenc", "Josh McVeigh-Shutz"],
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
