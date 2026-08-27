import Image from "next/image";
import { getForce } from "@/content/forces";

/**
 * A force tag. The hand-drawn marks carry internal lettering and fine line
 * work, so they only earn their place at a readable size — `lg` shows the
 * mark, `sm` (inline in dense ledger rows) reduces to a dot. The dot is
 * coloured by layer, so it reports whether the force is something the
 * culture believes or something it does.
 */
export default function ForcePill({ slug, size = "sm" }) {
  const force = getForce(slug);
  if (!force) return null;

  const dot = force.layer === "invisible" ? "bg-invisible" : "bg-visible";

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
      <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} aria-hidden="true" />
      <span className="spec text-ink-soft">{force.label}</span>
    </span>
  );
}
