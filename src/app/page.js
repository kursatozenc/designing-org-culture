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

export default function Home() {
  const current = getCurrentCohort();
  const recent = cohorts.slice(0, 4);

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ---- Hero: the grid, stated plainly, with one hand-mark across it ---- */}
        <section className="relative overflow-hidden border-b border-line">
          <div
            className="gridlines pointer-events-none absolute inset-0 opacity-60"
            aria-hidden="true"
          />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-6 pt-20 pb-16 min-[900px]:grid-cols-[1fr_220px] min-[900px]:items-start min-[900px]:gap-14">
            <div>
              <p className="spec text-ink-soft">
                Stanford d.school
                <span className="mx-2 text-line-strong">/</span>
                Design 276
                <span className="mx-2 text-line-strong">/</span>
                <span className="text-cyan-deep">{current.term}</span>
              </p>

              <h1 className="display mt-8 text-[clamp(2.75rem,8.5vw,6rem)] uppercase">
                Designing
                <br />
                Org Culture
              </h1>

              <p className="mt-11 max-w-xl text-lg leading-relaxed text-ink-soft">
                Culture is not what an organization says it values — it is the
                policies, rituals, and artifacts people actually live inside.
                Student teams embed with partner organizations to diagnose that
                gap and run live culture experiments against it.
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
              alt="Culture design: the invisible and visible halves of culture, each feeding the other."
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
                Culture is half invisible
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
                Beliefs, values, and norms cannot be observed directly. Behaviors,
                artifacts, and metrics can. Culture design works on the visible
                half — and reads the invisible half through it.
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
              alt="Culture Forces: beliefs, values and norms in the invisible half; behaviors, artifacts and metrics in the visible half, cycling into each other."
              width={1400}
              height={1804}
              className="w-full"
            />
          </div>
        </section>

        {/* ---- The vocabulary, on the ground it was drawn for ---- */}
        <section className="bg-night text-paper">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="flex flex-wrap items-end justify-between gap-6">
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

            <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4">
              {forces.map((f) => (
                <li key={f.slug}>
                  <Image
                    src={f.icon}
                    alt=""
                    width={600}
                    height={537}
                    aria-hidden="true"
                    className="w-24 object-contain"
                  />
                  <p className="display mt-4 flex items-center gap-2 text-base">
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
                  The class designs on itself first
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
            {recent.map((c) => (
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
