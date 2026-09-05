import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CohortRow from "@/components/CohortRow";
import { cohorts, getCurrentCohort } from "@/content/cohorts";
import { partners } from "@/content/partners";
import { forces, layers } from "@/content/forces";
import { resources } from "@/content/resources";
import { roles, peopleByRole } from "@/content/people";
import { rituals } from "@/content/rituals";

// The homepage line is evergreen: the course is about culture design, and
// flourishing is the lens it is currently read through. A cohort can override
// it with `heroHeadline` in the year that genuinely wants its own — but the
// default lives here rather than pretending a permanent line is this year's.
const HERO_HEADLINE = "Cultures where people flourish";

export default function Home() {
  const current = getCurrentCohort();
  // Every year, not a slice of them — a site whose whole point is that the
  // years accumulate should not hide four of them behind a link.

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ---- Hero: the grid, stated plainly, with one hand-mark across it ---- */}
        {/* Fills the first screen so the next band does not bleed above the fold.
            svh rather than vh so mobile browser chrome does not overshoot. */}
        <section className="relative flex min-h-[calc(100svh-var(--header-h))] items-center overflow-hidden border-b border-line">
          <div
            className="gridlines pointer-events-none absolute inset-0 opacity-60"
            aria-hidden="true"
          />
          <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 min-[900px]:grid-cols-[1fr_220px] min-[900px]:items-start min-[900px]:gap-14">
            <div>
              <p className="spec text-ink-soft">
                Stanford d.school
                <span className="mx-2 text-line-strong">/</span>
                Design 276
                <span className="mx-2 text-line-strong">/</span>
                <span className="text-cyan-deep">{current.term}</span>
              </p>

              {/* The header wordmark already carries the course name, so the
                  headline spends this space on the claim instead. Sentence
                  case rather than the uppercase used elsewhere: ascenders and
                  descenders carry a long line where a caps block turns into a
                  wall. Sized up to compensate for the lighter mass. No hard
                  breaks — `display` sets text-wrap: balance, which reflows
                  better across widths than fixed line endings. */}
              <h1 className="display mt-8 max-w-3xl text-[clamp(2.75rem,8vw,5.9rem)]">
                {current.heroHeadline ?? HERO_HEADLINE}
              </h1>

              <p className="mt-11 max-w-xl text-lg leading-relaxed text-ink-soft">
                A culture is a living system: invisible forces &mdash; values,
                norms, beliefs &mdash; driving visible ones &mdash; behaviors,
                practices, artifacts &mdash; in loops that either compound or
                corrode. Student teams spend ten weeks inside a partner
                organization finding those loops, then prototype with cultural
                materials to shift them.
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link
                  href={`/cohorts/${current.slug}`}
                  className="spec border border-ink px-6 py-3.5 text-ink hover:bg-ink hover:text-paper"
                >
                  This year — {current.term}
                </Link>
                <Link href="/partners" className="spec text-cyan-deep hover:text-ink">
                  Partner with us →
                </Link>
              </div>
            </div>

            {/* Top-aligned with the wordmark, not floating beside the paragraph. */}
            <Image
              src="/brand/diagrams/invisible-visible.png"
              alt="Culture design: invisible and visible forces of culture feeding each other in a continuous cycle."
              width={900}
              height={1120}
              priority
              className="hidden w-[220px] justify-self-end self-start min-[900px]:mt-13 min-[900px]:block"
            />
          </div>
        </section>

        {/* ---- The model, at the size it deserves ---- */}
        <section className="border-b border-line bg-paper-warm">
          <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 sm:grid-cols-[1fr_1.05fr] sm:items-center">
            <div>
              <p className="spec text-ink-soft">The model</p>
              <h2 className="display mt-5 text-[clamp(1.75rem,4vw,2.75rem)]">
                Culture is a living system
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
                Invisible forces (beliefs, values, norms) and visible ones
                (behaviors, practices, artifacts) are constantly interacting. A
                healthy culture runs that loop as a virtuous cycle; an unhealthy
                one runs the same loop the other way. Culture design works on
                both sides of it.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                {layers.map((l) => (
                  <span key={l.slug} className="inline-flex items-center gap-2.5">
                    <span
                      aria-hidden="true"
                      className={`h-2.5 w-2.5 rounded-full ${
                        l.slug === "invisible" ? "bg-invisible" : "bg-visible"
                      }`}
                    />
                    <span className="spec text-ink-soft">{l.label}</span>
                  </span>
                ))}
              </div>
              <Link
                href="/framework"
                className="spec mt-8 inline-block border-b border-ink pb-1 hover:text-cyan-deep"
              >
                Read the framework →
              </Link>
            </div>
            <Image
              src="/brand/diagrams/culture-forces.png"
              alt="Culture Forces: beliefs, values and norms among the invisible forces; behaviors, artifacts and metrics among the visible ones, cycling into each other."
              width={1400}
              height={1804}
              className="w-full"
            />
          </div>
        </section>

        {/* ---- The vocabulary, on the ground it was drawn for ---- */}
        <section className="bg-night text-paper">
          <div className="mx-auto max-w-6xl px-6 py-28">
            <div className="flex flex-wrap items-end justify-between gap-8">
              <div>
                <p className="spec text-invisible">The vocabulary</p>
                <h2 className="display mt-4 text-[clamp(1.75rem,4vw,2.75rem)]">
                  Eight designable forces
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-white/60">
                Every cohort project is tagged with the forces it actually
                moved, which is what keeps the cohorts comparable across years.
              </p>
            </div>

            <ul className="mt-20 grid grid-cols-2 gap-x-10 gap-y-20 sm:grid-cols-4">
              {forces.map((f) => (
                <li key={f.slug}>
                  <Image
                    src={f.icon}
                    alt=""
                    width={600}
                    height={537}
                    aria-hidden="true"
                    className="w-28 object-contain sm:w-32"
                  />
                  <p className="display mt-6 flex items-center gap-2.5 text-lg">
                    <span
                      aria-hidden="true"
                      className={`h-1.5 w-1.5 rounded-full ${
                        f.layer === "invisible" ? "bg-invisible" : "bg-visible"
                      }`}
                    />
                    {f.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---- What students actually make ---- */}
        <section className="border-b border-line bg-paper-warm">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="spec text-ink-soft">The work</p>
                <h2 className="display mt-5 text-[clamp(1.75rem,4vw,2.75rem)]">
                  The class is its own first partner
                </h2>
              </div>
              <Link href="/rituals" className="spec text-ink-soft hover:text-cyan-deep">
                All rituals →
              </Link>
            </div>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
              Two weeks in, before anyone meets a partner org, every cohort
              designs a ritual for the class&apos;s own culture — and then has
              to live inside it.
            </p>

            <ul className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-3">
              {rituals.slice(0, 3).map((r) => (
                <li key={r.slug} className="bg-paper p-6">
                  <Link href="/rituals" className="group block">
                    <h3 className="display text-lg uppercase group-hover:text-cyan-deep">
                      {r.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {r.tagline}
                    </p>
                    <dl className="mt-5 space-y-2.5">
                      <div>
                        <dt className="spec text-ink-faint">Trigger</dt>
                        <dd className="mt-1 text-sm text-ink">{r.trigger}</dd>
                      </div>
                      <div>
                        <dt className="spec text-ink-faint">Prop</dt>
                        <dd className="mt-1 text-sm text-ink">{r.prop}</dd>
                      </div>
                    </dl>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---- The room itself ---- */}
        <section className="border-b border-line">
          <ul className="grid grid-cols-2 gap-px bg-line sm:grid-cols-4">
            {[
              { src: "ritual-circle", alt: "Students in a circle running a ritual they designed." },
              { src: "insights-wall", alt: "A wall of sticky notes and journey maps during synthesis." },
              { src: "prototyping-table", alt: "A table of figurines and a hand-drawn feedback map, mid-prototype." },
              { src: "studio-session", alt: "The cohort seated in the d.school studio during a session." },
            ].map((p) => (
              <li key={p.src} className="bg-paper">
                <Image
                  src={`/brand/class/${p.src}.jpg`}
                  alt={p.alt}
                  width={1600}
                  height={1067}
                  className="h-full w-full object-cover"
                />
              </li>
            ))}
          </ul>
        </section>

        {/* ---- Every year the class has run, as a ledger ---- */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-end justify-between gap-6 border-b-2 border-ink pb-4">
            <h2 className="display text-[clamp(1.75rem,4vw,2.75rem)] uppercase">
              Year by year
            </h2>
            <Link href="/cohorts" className="spec text-ink-soft hover:text-cyan-deep">
              All cohorts →
            </Link>
          </div>
          <div>
            {cohorts.map((c) => (
              <CohortRow key={c.slug} cohort={c} />
            ))}
          </div>
        </section>

        {/* ---- Partners ---- */}
        <section className="border-t border-line bg-cyan-wash">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="flex items-end justify-between gap-6">
              <h2 className="display text-[clamp(1.75rem,4vw,2.75rem)] uppercase">
                Partner orgs
              </h2>
              <Link href="/partners" className="spec text-ink-soft hover:text-cyan-deep">
                All partners →
              </Link>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              {partners.map((p) => (
                <li key={p.slug} className="display text-xl uppercase text-ink">
                  {p.name}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---- People ---- */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-end justify-between gap-6 border-b-2 border-ink pb-4">
            <h2 className="display text-[clamp(1.75rem,4vw,2.75rem)] uppercase">
              The room
            </h2>
            <Link href="/people" className="spec text-ink-soft hover:text-cyan-deep">
              All people →
            </Link>
          </div>
          <div className="mt-8 grid gap-10 sm:grid-cols-3">
            {roles
              .map((r) => ({ ...r, members: peopleByRole(r.slug) }))
              .filter((g) => g.members.length > 0)
              .map((g) => (
                <div key={g.slug}>
                  <p className="spec text-ink-faint">{g.label}</p>
                  <ul className="mt-4 flex flex-col gap-2">
                    {g.members.slice(0, 6).map((p) => (
                      <li key={p.slug} className="display text-base uppercase">
                        {p.name}
                      </li>
                    ))}
                    {g.members.length > 6 && (
                      <li className="spec text-ink-faint">
                        +{g.members.length - 6} more
                      </li>
                    )}
                  </ul>
                </div>
              ))}
          </div>
        </section>

        {/* ---- Resources ---- */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-end justify-between gap-6 border-b-2 border-ink pb-4">
            <h2 className="display text-[clamp(1.75rem,4vw,2.75rem)] uppercase">
              Reading
            </h2>
            <Link href="/resources" className="spec text-ink-soft hover:text-cyan-deep">
              All resources →
            </Link>
          </div>
          <ul>
            {resources.slice(0, 3).map((r) => (
              <li key={r.slug}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between gap-6 border-b border-line py-6"
                >
                  <span className="text-[1.05rem] text-ink group-hover:text-cyan-deep">
                    {r.title}
                  </span>
                  <span className="spec shrink-0 text-ink-faint">{r.year}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
