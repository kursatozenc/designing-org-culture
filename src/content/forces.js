// The eight "forces" that make up a culture — drawn from Kursat's hand-drawn
// icon set (public/brand/culture-forces.png). Used to tag cohort highlights
// and partner projects so the taxonomy stays consistent year to year.

export const forces = [
  { slug: "policy", label: "Policy", detail: "Formal rules and decisions that shape what people are allowed and expected to do." },
  { slug: "values", label: "Values", detail: "The shared beliefs a group orients around, stated or not." },
  { slug: "norms", label: "Norms", detail: "The unwritten expectations that govern everyday behavior." },
  { slug: "practices", label: "Practices", detail: "Repeated routines and rituals that make culture tangible." },
  { slug: "stories", label: "Stories", detail: "The narratives people tell that carry meaning across a group." },
  { slug: "behaviors", label: "Behaviors", detail: "What people actually do, moment to moment." },
  { slug: "artifacts", label: "Artifacts", detail: "The physical and digital objects a culture produces and leaves behind." },
  { slug: "metrics", label: "Metrics", detail: "What a group chooses to measure — and so, implicitly, what it values." },
];

export function getForce(slug) {
  return forces.find((f) => f.slug === slug);
}
