// The forces that make up a culture, drawn from Kursat's hand-drawn marks.
// Each icon is cropped out of the original "Shapes of Culture" sheet into
// public/brand/forces/, so a force can carry its own mark anywhere.
//
// `layer` follows the Culture Forces diagram (Ozenc, 2022): the blue family
// is what a culture believes and cannot be observed directly; the green
// family is what it does and leaves behind. Rituals are what move one into
// the other.
//
// NOTE — one open question for Kursat: the drawn Culture Forces diagram
// names six forces (Beliefs / Values / Norms, Behaviors / Artifacts /
// Metrics) while the icon sheet draws eight (adding Policy, Practices,
// Stories, and no Beliefs). The two overlap but are not the same model.
// Below keeps the eight, since cohorts are already tagged with them, and
// assigns each a layer. Beliefs has no mark yet.

export const forces = [
  { slug: "values", label: "Values", layer: "invisible", detail: "The shared beliefs a group orients around, stated or not." },
  { slug: "norms", label: "Norms", layer: "invisible", detail: "The unwritten expectations that govern everyday behavior." },
  { slug: "policy", label: "Policy", layer: "visible", detail: "Formal rules and decisions that shape what people are allowed and expected to do." },
  { slug: "practices", label: "Practices", layer: "visible", detail: "Repeated routines and rituals that make culture tangible." },
  { slug: "stories", label: "Stories", layer: "visible", detail: "The narratives people tell that carry meaning across a group." },
  { slug: "behaviors", label: "Behaviors", layer: "visible", detail: "What people actually do, moment to moment." },
  { slug: "artifacts", label: "Artifacts", layer: "visible", detail: "The physical and digital objects a culture produces and leaves behind." },
  { slug: "metrics", label: "Metrics", layer: "visible", detail: "What a group chooses to measure — and so, implicitly, what it values." },
].map((f, i) => ({
  ...f,
  number: String(i + 1).padStart(2, "0"),
  icon: `/brand/forces/${f.slug}.png`,
}));

export const layers = [
  {
    slug: "invisible",
    label: "Invisible",
    lede: "What a culture believes. You cannot observe it directly — you infer it from what people do.",
  },
  {
    slug: "visible",
    label: "Visible",
    lede: "What a culture does and leaves behind. Observable, countable, and the only part you can prototype directly.",
  },
];

export function getForce(slug) {
  return forces.find((f) => f.slug === slug);
}

export function forcesByLayer(layer) {
  return forces.filter((f) => f.layer === layer);
}
