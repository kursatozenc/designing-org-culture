import { getForce } from "@/content/forces";

export default function ForcePill({ slug }) {
  const force = getForce(slug);
  if (!force) return null;
  return (
    <span className="inline-block rounded-full border border-accent px-3 py-1 text-xs text-accent">
      {force.label}
    </span>
  );
}
