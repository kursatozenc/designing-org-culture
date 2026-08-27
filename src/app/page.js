import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CohortRow from "@/components/CohortRow";
import { cohorts, getCurrentCohort } from "@/content/cohorts";
import { partners } from "@/content/partners";
import { forces } from "@/content/forces";
import { resources } from "@/content/resources";

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
          <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-16">
            <p className="spec text-ink-soft">
              Stanford d.school
              <span className="mx-2 text-line-strong">/</span>
              Design 276
              <span className="mx-2 text-line-strong">/</span>
              <span className="text-cyan-deep">{current.term}</span>
            </p>

            <h1 className="display mt-8 max-w-4xl text-[clamp(2.75rem,8.5vw,6rem)] uppercase">
              Designing
              <br />
              Org Culture
            </h1>

            <div className="mt-12 grid gap-10 sm:grid-cols-[1.35fr_1fr] sm:items-end">
              <p className="max-w-xl text-lg leading-relaxed text-ink-soft">
                Culture is not what an organization says it values — it is the
                policies, rituals, and artifacts people actually live inside.
                Student teams embed with partner organizations to diagnose that
                gap and run live culture experiments against it.
              </p>
              <Image
                src="/brand/forces/shapes-of-culture.png"
                alt=""
                width={600}
                height={376}
                priority
                aria-hidden="true"
                className="tilt-mark hidden w-52 justify-self-end sm:block"
              />
            </div>

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
        </section>

        {/* ---- The forces, on the ground they were drawn for ---- */}
        <section className="bg-night text-paper">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="spec text-cyan">The vocabulary</p>
                <h2 className="display mt-4 text-[clamp(1.75rem,4vw,2.75rem)] uppercase">
                  Eight forces of culture
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-white/60">
                Every cohort project traces back to one or more of these. They
                are how the class names what it is actually designing — and how
                this archive stays comparable across years.
              </p>
            </div>

            <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4">
              {forces.map((f) => (
                <li key={f.slug}>
                  <span className="spec text-white/45">{f.number}</span>
                  <Image
                    src={f.icon}
                    alt=""
                    width={600}
                    height={537}
                    aria-hidden="true"
                    className="mt-3 w-24 object-contain"
                  />
                  <p className="display mt-4 text-base uppercase">{f.label}</p>
                </li>
              ))}
            </ul>

            <Link
              href="/framework"
              className="spec mt-14 inline-block border-b border-cyan pb-1 text-cyan hover:text-paper"
            >
              Read the framework →
            </Link>
          </div>
        </section>

        {/* ---- The archive, as a ledger ---- */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-end justify-between gap-6 border-b-2 border-ink pb-4">
            <h2 className="display text-[clamp(1.75rem,4vw,2.75rem)] uppercase">
              The archive
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
