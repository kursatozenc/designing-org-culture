// Partners persist independently of any single cohort — an org can appear
// across multiple years. This is the "don't recreate the partners page
// every year" piece of the plan.
//
// Naming an org here is a public claim about a third party, so each entry
// should be backed by that cohort's own working files, not by a summary
// written after the fact. Kursat has confirmed no partner NDAs were signed,
// so the names themselves are safe to publish; partner-side contacts still
// are not, and stay out of this file. A `challenge` is a public claim too:
// frame it as the goal the partner is designing toward, not as a diagnosis
// of what is currently wrong with them.
//
// `open: true` turns an entry into the recruitment slot at the top of the
// partners page. No entry carries it right now — Autumn 2026 is full — so
// that section is not rendering. Add one back to reopen recruitment.

export const partners = [
  {
    slug: "metaphysic-ai",
    name: "Metaphysic AI",
    cohorts: ["winter-2025"],
    challenge: "Remote-first culture design.",
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
    slug: "mdlive",
    name: "MDLIVE",
    cohorts: ["autumn-2026"],
    challenge:
      "A virtual care company in the Evernorth (Cigna) group. How do you onboard contracted physicians into the platform \u2014 its AI agents and its quality standards \u2014 so that they do good work, want to stay, and hold to the standard?",
  },
  {
    slug: "san-mateo-medical-center",
    name: "San Mateo Medical Center",
    cohorts: ["autumn-2026"],
    challenge:
      "San Mateo County Health's medical center. Onboarding \u2014 how new people arrive, learn what is expected of them, and decide to stay. The specific framing is being scoped with the class.",
  },
  {
    slug: "doerr-school-sustainability",
    name: "Stanford Doerr School of Sustainability",
    cohorts: ["winter-2024"],
    challenge:
      "Shape the culture, identity, and collaborative norms of Stanford's first new school in 70 years — across interdisciplinary research, daily operations, student and postdoc belonging, and translating research outward.",
  },
  {
    slug: "blue-ocean-barns",
    name: "Blue Ocean Barns",
    cohorts: ["winter-2024"],
    challenge:
      "Keep a decentralized climate-tech team mission-driven and trusting while managing high-stakes execution timelines.",
  },
  {
    slug: "benchsci",
    name: "BenchSci",
    cohorts: ["winter-2023"],
    challenge:
      "Bridge the cultures of AI engineering and biomedical science as the company scaled, and build psychological safety into fast-failure R&D.",
  },
  {
    slug: "snappy",
    name: "Snappy",
    cohorts: ["winter-2023"],
    challenge: "Scaling culture across a fast-growing sales organization.",
  },
  {
    slug: "spenmo",
    name: "Spenmo",
    cohorts: ["winter-2023"],
    challenge:
      "Build cross-regional trust as a Southeast Asian fintech grew across country offices, and align local office cultures with a shared global strategy.",
  },
  {
    slug: "boba-guys",
    name: "Boba Guys",
    cohorts: ["fall-2021"],
    challenge:
      "Carry founding values from headquarters down to frontline store teams while the retail footprint grew, against shift turnover and burnout.",
  },
  {
    slug: "mesa",
    name: "Mesa",
    cohorts: ["fall-2021"],
    challenge:
      "Establish an intentional asynchronous culture in a remote-first, distributed team — clarifying cross-functional norms without adding meetings.",
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

/** Where a prospective partner writes. Published on the partners page. */
export const partnerContact = {
  email: "kursat@dschool.stanford.edu",
  subject: "Partnering with Designing Org Culture",
  intakeFormUrl: "https://forms.gle/Vu8LgW9UCW3jyMaU6",
};

export function getPartnerBySlug(slug) {
  return partners.find((p) => p.slug === slug);
}
