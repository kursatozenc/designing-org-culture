// Everyone who has taught, assisted, or visited the class.
//
// `lead: true` marks whoever carries the course across years — rendered
// ahead of the rest of the teaching team, at a larger size.
//
// A person holds a ROLE PER COHORT, not one role forever — Martin Gonzalez
// instructed in 2023 and 2025 and guest-lectured in 2026; Kate Judson has
// come back as a guest twice. So each person carries `appearances`, and the
// site reads roles and years back out of that.
//
// This is the single source of truth for who taught a cohort; the cohort
// pages read their roster from here rather than keeping a second copy.
//
// Portraits come from the 2023 "Photos of speakers and partners" folder in
// Drive, gathered by the teaching team for exactly this purpose. People
// without one fall back to initials, so a missing photo never breaks the row.
//
// Sources: the Fall 2021 (DESINST 221), Winter 2023, Winter 2024, Winter 2025
// and Autumn 2026 syllabi, plus Kursat's own record of who actually showed up,
// which is what named the coaches. Deliberately NOT listed: students, and partner-org contacts
// who appear only in planning docs alongside personal email addresses —
// naming a private individual publicly is the course's call to make with
// their consent.

export const people = [
  // ---- Teaching team ----
  {
    slug: "kursat-ozenc",
    name: "Kursat Ozenc",
    lead: true,
    affiliation: "Executive Design Director, JPMorganChase",
    appearances: [
      { cohort: "winter-2019", role: "instructor" },
      { cohort: "winter-2020", role: "instructor" },
      { cohort: "fall-2021", role: "instructor" },
      { cohort: "winter-2023", role: "instructor" },
      { cohort: "winter-2024", role: "instructor" },
      { cohort: "winter-2025", role: "instructor" },
      { cohort: "autumn-2026", role: "instructor" },
    ],
  },
  {
    slug: "martin-gonzalez",
    name: "Martin Gonzalez",
    affiliation: "Principal of Org Design and Development, Google DeepMind",
    appearances: [
      { cohort: "winter-2023", role: "instructor" },
      { cohort: "winter-2024", role: "instructor" },
      { cohort: "winter-2025", role: "instructor" },
      { cohort: "autumn-2026", role: "guest" },
    ],
  },
  {
    slug: "shannon-mahon",
    name: "Shannon Mahon",
    appearances: [{ cohort: "autumn-2026", role: "instructor" }],
  },
  {
    slug: "ted-matthews",
    name: "Ted Matthews",
    affiliation: "Oslo School of Architecture and Design",
    appearances: [{ cohort: "winter-2020", role: "instructor" }],
  },
  {
    slug: "kajal-khanna",
    name: "Kajal Khanna",
    affiliation: "Stanford Medicine",
    appearances: [{ cohort: "winter-2020", role: "instructor" }],
  },
  {
    slug: "josh-mcveigh-shutz",
    name: "Josh McVeigh-Shutz",
    affiliation: "San Francisco State University",
    appearances: [{ cohort: "winter-2019", role: "instructor" }],
  },

  {
    slug: "ida-benedetto",
    name: "Ida Benedetto",
    appearances: [{ cohort: "fall-2021", role: "instructor" }],
  },
  {
    slug: "anand-upender",
    name: "Anand Upender",
    appearances: [{ cohort: "fall-2021", role: "instructor" }],
  },

  // ---- Teaching assistants ----
  {
    // The Fall 2021 syllabus lists her under "Teaching Team", a masthead that
    // does not separate roles; Kursat confirms she was the TA.
    slug: "gabi-gavrila",
    name: "Gabi Gavrila",
    appearances: [{ cohort: "fall-2021", role: "ta" }],
  },
  {
    slug: "sonya-kotov",
    name: "Sonya Kotov",
    appearances: [{ cohort: "winter-2023", role: "ta" }],
  },
  {
    slug: "jeung-lee",
    name: "Jeung Lee",
    appearances: [{ cohort: "winter-2024", role: "ta" }],
  },
  {
    slug: "gatsby-frimpong",
    name: "Gatsby Frimpong",
    affiliation: "MS Design ’25",
    appearances: [{ cohort: "winter-2025", role: "ta" }],
  },

  // ---- Coaches ----
  {
    slug: "alan-ratliff",
    name: "Alan Ratliff",
    topic: "Prototyping expertise during the ideation session",
    appearances: [{ cohort: "winter-2025", role: "coach" }],
  },
  {
    slug: "ian-stuart",
    name: "Ian Stuart",
    topic: "Joined the ideation session alongside Alan",
    appearances: [{ cohort: "winter-2025", role: "coach" }],
  },

  // ---- Guest speakers ----
  {
    slug: "claudy-jules",
    photo: "/brand/people/claudy-jules.jpg",
    name: "Claudy Jules",
    affiliation: "Partner, McKinsey",
    topic: "Challenges in scaling culture in startups",
    appearances: [{ cohort: "winter-2023", role: "guest" }],
  },
  {
    slug: "darren-murph",
    photo: "/brand/people/darren-murph.jpg",
    name: "Darren Murph",
    affiliation: "Head of Remote, GitLab",
    topic: "Building culture in remote working teams",
    appearances: [{ cohort: "winter-2023", role: "guest" }],
  },
  {
    slug: "gina-maya-rudan",
    photo: "/brand/people/gina-maya-rudan.jpg",
    name: "Gina “Maya” Rudan",
    affiliation: "Cultural Alchemist, Google X",
    topic: "Cultural practices at X, including the Día de los Muertos initiative she led",
    appearances: [{ cohort: "winter-2023", role: "guest" }],
  },
  {
    slug: "michael-norton",
    name: "Michael Norton",
    affiliation: "Harvard Business School",
    topic: "Rituals and the IKEA effect",
    appearances: [{ cohort: "winter-2023", role: "guest" }],
  },
  {
    slug: "lisa-wocken",
    photo: "/brand/people/lisa-wocken.jpg",
    name: "Lisa Wocken",
    affiliation: "DAO researcher; founding member, TalentDAO",
    topic: "Culture in blockchain-based DAOs",
    appearances: [{ cohort: "winter-2023", role: "guest" }],
  },
  {
    slug: "takuo-fukuda",
    photo: "/brand/people/takuo-fukuda.jpg",
    name: "Takuo Fukuda",
    affiliation: "SYPartners",
    topic: "Discovery share-out expert",
    appearances: [{ cohort: "winter-2023", role: "guest" }],
  },
  {
    slug: "kate-judson",
    photo: "/brand/people/kate-judson.jpg",
    name: "Kate Judson",
    affiliation: "Adobe",
    topic: "Employee pathways",
    appearances: [
      { cohort: "winter-2023", role: "guest" },
      { cohort: "winter-2024", role: "guest" },
      { cohort: "winter-2025", role: "guest" },
    ],
  },
  {
    // Syllabus spells this "Laila Vons Albansleben"; corrected against her
    // public profile — Head of Culture & Collaboration at MURAL.
    slug: "laila-von-alvensleben",
    name: "Laïla von Alvensleben",
    affiliation: "Head of Culture & Collaboration, MURAL",
    topic: "Creative rituals",
    appearances: [{ cohort: "winter-2025", role: "guest" }],
  },
  {
    slug: "christian-busch",
    name: "Christian Busch",
    affiliation: "Author, The Serendipity Mindset",
    appearances: [{ cohort: "winter-2025", role: "guest" }],
  },
  {
    slug: "anna-davda",
    name: "Anna Davda",
    affiliation: "formerly Waymo",
    topic: "Co-creating with ethics",
    appearances: [{ cohort: "winter-2025", role: "guest" }],
  },
  {
    slug: "robbie-tilleard",
    name: "Robbie Tilleard",
    affiliation: "Applied behavioural scientist — UK Behavioural Insights Team, Humu, Fluidly",
    topic: "Outside-In Speaker Series I",
    appearances: [{ cohort: "fall-2021", role: "guest" }],
  },
  {
    slug: "john-paul-stephens",
    name: "John Paul Stephens",
    affiliation: "Associate Professor of Organizational Behavior, Case Western Reserve University",
    topic: "Outside-In Speaker Series II",
    appearances: [{ cohort: "fall-2021", role: "guest" }],
  },
  {
    slug: "monica-worline",
    name: "Monica C. Worline",
    affiliation: "Center for Positive Organizations, University of Michigan Ross School of Business",
    topic: "Human flourishing, wellbeing, and positive organizational scholarship",
    appearances: [{ cohort: "fall-2021", role: "guest" }],
  },
  {
    slug: "iris-bohnet",
    name: "Iris Bohnet",
    affiliation: "Albert Pratt Professor of Business and Government, Harvard Kennedy School",
    topic: "Shaping norms — culture as stories, and DEI",
    appearances: [{ cohort: "fall-2021", role: "guest" }],
  },
  {
    slug: "natalia-vasquez",
    name: "Natalia Vasquez",
    affiliation: "Climate, IDEO",
    topic: "Understanding the sustainability landscape",
    appearances: [{ cohort: "winter-2024", role: "guest" }],
  },
  {
    slug: "lisa-gross",
    name: "Lisa Gross",
    affiliation: "ChargePoint",
    topic: "Scaling challenges",
    appearances: [{ cohort: "winter-2024", role: "guest" }],
  },
  {
    slug: "prasita-kutty",
    name: "Prasita Kutty",
    affiliation: "ChargePoint",
    topic: "Scaling challenges",
    appearances: [{ cohort: "winter-2024", role: "guest" }],
  },
  {
    slug: "michael-hughes",
    name: "Michael Hughes",
    affiliation: "ChargePoint",
    topic: "Scaling challenges",
    appearances: [{ cohort: "winter-2024", role: "guest" }],
  },
  {
    slug: "bob-sutton",
    name: "Bob Sutton",
    affiliation: "Stanford University",
    topic: "Creative rituals",
    appearances: [{ cohort: "autumn-2026", role: "guest" }],
  },
  {
    slug: "elen-kiss",
    name: "Elen Kiss",
    affiliation: "Nubank",
    topic: "Employee pathways",
    appearances: [{ cohort: "autumn-2026", role: "guest" }],
  },
];

export const roles = [
  { slug: "instructor", label: "Teaching team" },
  { slug: "ta", label: "Teaching assistants" },
  { slug: "coach", label: "Coaches" },
  { slug: "guest", label: "Guest speakers" },
];

const roleOrder = roles.map((r) => r.slug);

/** People who have held `role`, each with the cohort slugs they held it in.
 *  Leads sort to the top of their group. */
export function peopleByRole(role) {
  return people
    .filter((p) => p.appearances.some((a) => a.role === role))
    .map((p) => ({
      ...p,
      cohorts: p.appearances.filter((a) => a.role === role).map((a) => a.cohort),
    }))
    .sort((a, b) => Boolean(b.lead) - Boolean(a.lead));
}

/** Everyone attached to one cohort, each with the role they held that year. */
export function peopleForCohort(slug) {
  return people
    .filter((p) => p.appearances.some((a) => a.cohort === slug))
    .map((p) => ({
      ...p,
      role: p.appearances.find((a) => a.cohort === slug).role,
    }))
    .sort(
      (a, b) =>
        roleOrder.indexOf(a.role) - roleOrder.indexOf(b.role) ||
        Boolean(b.lead) - Boolean(a.lead),
    );
}

/** Cohort slugs a person appears in, any role — for "all years" display. */
export function allCohorts(person) {
  return [...new Set(person.appearances.map((a) => a.cohort))];
}
