import Link from "next/link";
import ForcePill from "./ForcePill";
import { getPartnerBySlug } from "@/content/partners";

/**
 * One line in the cohort ledger. Deliberately a table-like row rather than a
 * card: the list gains a row per year forever, and rows stay legible at
 * twenty entries where a card grid would not.
 */
export default function CohortRow({ cohort }) {
  const partnerNames = (cohort.partners ?? [])
    .map((s) => getPartnerBySlug(s)?.name)
    .filter(Boolean);

  return (
    <Link
      href={`/cohorts/${cohort.slug}`}
      className="group grid grid-cols-1 items-baseline gap-x-8 gap-y-3 border-b border-line py-7 sm:grid-cols-[7rem_1fr_auto]"
    >
      <div className="flex items-baseline gap-3">
        <span
          className="font-mono text-3xl leading-none tabular-nums text-ink group-hover:text-cyan-deep"
          style={{ letterSpacing: "-0.04em" }}
        >
          {cohort.year}
        </span>
        {cohort.current && (
          <span className="h-2 w-2 shrink-0 rounded-full bg-cyan" aria-hidden="true" />
        )}
      </div>

      <div>
        <p className="spec text-ink-faint">
          {cohort.termLabel ?? cohort.term}
          {cohort.current && <span className="text-cyan-deep"> · Current</span>}
        </p>
        <p className="mt-1.5 text-[0.95rem] leading-snug text-ink">
          {cohort.headline ?? cohort.summary}
        </p>
        {partnerNames.length > 0 && (
          <p className="mt-2 text-sm text-ink-soft">{partnerNames.join(", ")}</p>
        )}
        {cohort.forces?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
            {cohort.forces.map((f) => (
              <ForcePill key={f} slug={f} />
            ))}
          </div>
        )}
      </div>

      <span
        aria-hidden="true"
        className="spec hidden text-ink-faint group-hover:text-cyan-deep sm:block"
      >
        View →
      </span>
    </Link>
  );
}
