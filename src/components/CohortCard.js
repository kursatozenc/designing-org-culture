import Link from "next/link";
import ForcePill from "./ForcePill";

export default function CohortCard({ cohort }) {
  return (
    <Link
      href={`/cohorts/${cohort.slug}`}
      className="group block border border-line p-6 transition hover:border-ink"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-medium">{cohort.term}</h3>
        {cohort.current && (
          <span className="rounded-full bg-accent-soft px-2 py-0.5 text-xs text-accent">
            Current
          </span>
        )}
      </div>
      {cohort.dates && <p className="mt-1 text-sm text-ink-soft">{cohort.dates}</p>}
      {cohort.summary && (
        <p className="mt-4 text-sm leading-relaxed text-ink-soft line-clamp-3">
          {cohort.summary}
        </p>
      )}
      {cohort.forces?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {cohort.forces.map((f) => (
            <ForcePill key={f} slug={f} />
          ))}
        </div>
      )}
    </Link>
  );
}
