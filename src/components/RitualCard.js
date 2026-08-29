import ForcePill from "./ForcePill";

/**
 * A student ritual, shown in the mechanics the class teaches: a trigger
 * moment, an intention, a prop, then the flow. The three-cell header is the
 * point — it is the course's own method applied to the course's own output.
 *
 * `outcome` — what happened when the cohort actually ran it — is optional and
 * rendered above the insight, because a finding outranks a claim.
 */
export default function RitualCard({ ritual, index }) {
  const cells = [
    { label: "Trigger moment", value: ritual.trigger },
    { label: "Intention", value: ritual.intention },
    { label: "Prop", value: ritual.prop },
  ];

  return (
    <article className="border-b border-line py-12">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <span className="spec text-ink-faint">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="display text-2xl uppercase">{ritual.name}</h3>
      </div>
      {ritual.tagline && (
        <p className="mt-2 max-w-2xl text-base text-ink-soft">
          {ritual.tagline}
        </p>
      )}

      <div className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-3">
        {cells.map((c) => (
          <div key={c.label} className="bg-paper p-5">
            <p className="spec text-cyan-deep">{c.label}</p>
            <p className="mt-2.5 text-sm leading-relaxed text-ink">{c.value}</p>
          </div>
        ))}
      </div>

      <ol className="mt-8 max-w-2xl">
        {ritual.flow.map((step, i) => (
          <li key={step} className="flex gap-4 border-b border-line py-3 last:border-0">
            <span className="spec shrink-0 pt-1 text-ink-faint">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-sm leading-relaxed text-ink-soft">{step}</span>
          </li>
        ))}
      </ol>

      {ritual.outcome && (
        <div className="mt-8 max-w-2xl border border-line bg-paper-warm p-5">
          <p className="spec text-ink-soft">What happened when we ran it</p>
          <p className="mt-2.5 text-sm leading-relaxed text-ink">
            {ritual.outcome}
          </p>
        </div>
      )}

      {ritual.insight && (
        <p className="mt-6 max-w-2xl border-l-2 border-cyan pl-5 text-sm leading-relaxed text-ink-soft">
          {ritual.insight}
        </p>
      )}

      {ritual.forces?.length > 0 && (
        <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
          {ritual.forces.map((f) => (
            <ForcePill key={f} slug={f} />
          ))}
        </div>
      )}
    </article>
  );
}
