// What students actually make.
//
// In the first two weeks every cohort designs a ritual for the class's own
// culture before touching a partner org — the course teaching itself on
// itself. These are from that assignment.
//
// Each is described in the mechanics the class teaches: a trigger moment, an
// intention, a prop, and a flow. Rendered in the site's own language rather
// than as the original posters, because the posters credit named students and
// publishing student names is a consent question, not a design one. The
// source posters live in Drive under DP1-PsychSafetyRitual; add `poster` and
// `credits` here once students have agreed.

export const rituals = [
  {
    slug: "musical-stories",
    name: "Musical Stories",
    cohort: "winter-2023",
    tagline: "Getting to know a team through what they listen to",
    intention:
      "Build rapport between teammates who do not yet know each other well, without the forced quality of a traditional icebreaker.",
    trigger: "The start of a weekly team meeting",
    prop: "A shared playlist the team keeps adding to",
    flow: [
      "Every new team member adds ten songs that mean something to them.",
      "At the start of each weekly session, the playlist shuffles and plays roughly thirty seconds.",
      "The team guesses whose song it is.",
      "The owner explains the memory or feeling attached to it.",
    ],
    insight:
      "Music is unusually personal and hard to fake, so it gets a team past small talk faster than asking people to describe themselves.",
    forces: ["practices", "stories"],
  },
  {
    slug: "spin-the-bottle",
    name: "Spin the Bottle",
    cohort: "winter-2023",
    tagline: "Building team culture with a twist",
    intention:
      "Give a group a fast, repeatable way to surface something personal at the top of a meeting.",
    trigger: "The beginning of a class, meeting, or gathering",
    prop: "A bottle filled with written prompts",
    flow: [
      "Set a timer for two minutes; split groups larger than five.",
      "Team members write prompts and load them into the bottle.",
      "Spin it — whoever it lands on picks a prompt for the group.",
      "Everyone answers in turn around the circle.",
      "Close with snaps and claps, then whoever pulled the prompt replaces it with a new one.",
    ],
    forces: ["practices", "norms"],
  },
  {
    slug: "the-magic-pencil",
    name: "The Magic Pencil",
    cohort: "winter-2023",
    tagline: "A ritual for giving hard feedback to a friend",
    intention:
      "Take the sting out of critical feedback between people who are close, by separating the work from the relationship.",
    trigger: "When someone has feedback to deliver",
    prop: "An everyday object that stands in for the workplace — a pencil",
    flow: [
      "The person with feedback picks up the magic object.",
      "Holding it means the conversation is about the work, not the person.",
      "Remotely, saying “pencil” does the same job.",
      "They open with something the recipient did well, then give the critique.",
      "Putting the object down ends the work frame and returns the friendship.",
    ],
    insight:
      "The prop is doing the emotional work — it gives both people a shared, external signal for a shift that would otherwise be awkward to announce.",
    forces: ["norms", "behaviors"],
  },
  {
    slug: "toss-the-gratitude",
    name: "Toss the Gratitude",
    cohort: "winter-2023",
    tagline: "An appreciation ritual",
    intention:
      "Head off conflict by building camaraderie, so appreciation is routine rather than something that only appears when it is needed.",
    trigger: "The beginning of each team meeting",
    prop: "An object passed hand to hand around the circle",
    flow: [
      "The group stands in a circle.",
      "A volunteer starts and tosses the object to someone who has not gone yet.",
      "They name a specific thing that person did well.",
      "The chain continues until everyone has been complimented.",
    ],
    forces: ["practices", "behaviors"],
  },
];

export function ritualsForCohort(slug) {
  return rituals.filter((r) => r.cohort === slug);
}
