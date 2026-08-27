// Everyone who has taught, assisted, or visited the class. Like partners,
// people persist across cohorts rather than being re-entered each year — a
// person gains a cohort slug and the archive gets deeper on its own.
//
// This is the single source of truth for a cohort's teaching team; the
// cohort pages read from here rather than keeping their own copy.
//
// Deliberately NOT listed: students (their work and grades are private), and
// partner-org contacts, who appear in the Drive planning docs alongside
// personal email addresses. Naming private individuals publicly is the
// course's call to make with their consent, not something to infer from a
// planning doc.

export const people = [
  // ---- Teaching team ----
  {
    slug: "kursat-ozenc",
    name: "Kursat Ozenc",
    role: "instructor",
    affiliation: "Executive Design Director, JPMorganChase",
    cohorts: ["winter-2019", "winter-2020", "winter-2025", "autumn-2026"],
  },
  {
    slug: "shannon-mahon",
    name: "Shannon Mahon",
    role: "instructor",
    cohorts: ["autumn-2026"],
  },
  {
    slug: "martin-gonzalez",
    name: "Martin Gonzalez",
    role: "instructor",
    affiliation: "Principal of Org Design and Development, Google DeepMind",
    cohorts: ["winter-2025"],
  },
  {
    slug: "ted-matthews",
    name: "Ted Matthews",
    role: "instructor",
    affiliation: "Oslo School of Architecture and Design",
    cohorts: ["winter-2020"],
  },
  {
    slug: "kajal-khanna",
    name: "Kajal Khanna",
    role: "instructor",
    affiliation: "Stanford Medicine",
    cohorts: ["winter-2020"],
  },
  {
    slug: "josh-mcveigh-shutz",
    name: "Josh McVeigh-Shutz",
    role: "instructor",
    affiliation: "San Francisco State University",
    cohorts: ["winter-2019"],
  },

  // ---- Teaching assistants ----
  {
    slug: "gatsby-frimpong",
    name: "Gatsby Frimpong",
    role: "ta",
    affiliation: "MS Design ’25",
    cohorts: ["winter-2025"],
  },

  // ---- Guest speakers ----
  {
    slug: "kate-judson",
    name: "Kate Judson",
    role: "guest",
    affiliation: "Adobe",
    cohorts: ["winter-2025"],
  },
  {
    slug: "elen-kiss",
    name: "Elen Kiss",
    role: "guest",
    affiliation: "Nubank",
    cohorts: ["autumn-2026"],
  },

  // ---- Coaches ----
  // None recorded yet. Add them here with role: "coach" and they appear
  // automatically; the section stays hidden while the list is empty.
];

export const roles = [
  { slug: "instructor", label: "Teaching team" },
  { slug: "ta", label: "Teaching assistants" },
  { slug: "guest", label: "Guest speakers" },
  { slug: "coach", label: "Coaches" },
];

export function peopleByRole(role) {
  return people.filter((p) => p.role === role);
}

/** Everyone attached to one cohort, in the role order above. */
export function peopleForCohort(slug) {
  const order = roles.map((r) => r.slug);
  return people
    .filter((p) => p.cohorts.includes(slug))
    .sort((a, b) => order.indexOf(a.role) - order.indexOf(b.role));
}
