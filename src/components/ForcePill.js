import Image from "next/image";
import { getForce } from "@/content/forces";

/**
 * A force tag. The hand-drawn marks carry internal lettering and fine line
 * work, so they only earn their place at a readable size — `lg` shows the
 * mark, `sm` (inline in dense ledger rows) reduces to a cyan dot and label.
 */
export default function ForcePill({ slug, size = "sm" }) {
  const force = getForce(slug);
  if (!force) return null;

  if (size === "lg") {
    return (
      <span className="inline-flex w-24 flex-col items-center gap-2 text-center">
        <Image
          src={force.icon}
          alt=""
          width={600}
          height={537}
          aria-hidden="true"
          className="w-20 object-contain"
        />
        <span className="spec text-ink-soft">{force.label}</span>
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-2">
      <span
        className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan"
        aria-hidden="true"
      />
      <span className="spec text-ink-soft">{force.label}</span>
    </span>
  );
}
