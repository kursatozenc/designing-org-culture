// Partners persist independently of any single cohort — an org can appear
// across multiple years. This is the "don't recreate the partners page
// every year" piece of the plan.

export const partners = [
  {
    slug: "metaphysic-ai",
    name: "Metaphysic AI",
    cohorts: ["winter-2025"],
    challenge: "Remote-first culture design.",
  },
  {
    slug: "akkio",
    name: "Akkio.ai",
    cohorts: ["winter-2025"],
    challenge: "",
  },
  {
    slug: "intrinsic-ai",
    name: "Intrinsic.ai",
    cohorts: ["winter-2025"],
    challenge:
      "Evolve the culture to be more mission-first, collaborative vs. optimizing for individual performance.",
  },
  {
    slug: "sypartners",
    name: "SYPartners",
    cohorts: ["winter-2025"],
    challenge:
      "How do you increase AI adoption across employees, and how do you set expectations for managers leading both AI and human teams?",
  },
  {
    slug: "health-domain-tbd",
    name: "Health domain partner (TBD)",
    cohorts: ["autumn-2026"],
    challenge: "Partner confirmation in progress for Autumn 2026.",
  },
  {
    slug: "stanford-medicine",
    name: "Stanford Medicine",
    cohorts: ["winter-2020"],
    challenge: "Designing rituals for well-being in clinical work environments.",
  },
  {
    slug: "airbnb",
    name: "Airbnb",
    cohorts: ["winter-2019"],
    challenge: "Workplace ritual design for a fast-scaling org.",
  },
];

export function getPartnerBySlug(slug) {
  return partners.find((p) => p.slug === slug);
}
