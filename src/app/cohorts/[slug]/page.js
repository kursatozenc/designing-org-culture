import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ForcePill from "@/components/ForcePill";
import Portrait from "@/components/Portrait";
import { cohorts, getCohortBySlug } from "@/content/cohorts";
import { getPartnerBySlug } from "@/content/partners";
import { peopleForCohort } from "@/content/people";

export function generateStaticParams() {
  return cohorts.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cohort = getCohortBySlug(slug);
  return { title: cohort ? cohort.term : "Cohort" };
}

export default async function CohortPage({ params }) {
  const { slug } = await params;
  const cohort = getCohortBySlug(slug);
  if (!cohort) notFound();

  const cohortPartners = (cohort.partners ?? [])
    .map(getPartnerBySlug)
    .filter(Boolean);
  const roster = peopleForCohort(slug);
  const teaching = roster.filter((p) => p.role !== "guest");
  const guests = roster.filter((p) => p.role === "guest");

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="border-b border-line">
          <div className="mx-auto max-w-6xl px-6 pt-12 pb-14">
            <Link href="/cohorts" className="spec text-ink-soft hover:text-cyan-deep">
              ← All cohorts
            </Link>

            <div className="mt-10 flex flex-wrap items-baseline gap-x-6 gap-y-2">
              <span
                className="font-mono text-[clamp(3.5rem,12vw,8rem)] leading-none tabular-nums"
                style={{ letterSpacing: "-0.05em" }}
              >
                {cohort.year}
              </span>
              <div>
                <p className="display text-2xl uppercase">
                  {cohort.termLabel ?? cohort.term}
                </p>
                {cohort.current && (
                  <p className="spec mt-1 text-cyan-deep">Current cohort</p>
                )}
                {cohort.predecessor && (
                  <p className="spec mt-1 text-ink-faint">
                    Ritual Design · before the course
                  </p>
                )}
              </div>
            </div>

            <dl className="mt-10 grid gap-x-10 gap-y-5 sm:grid-cols-3">
              {cohort.dates && (
                <div>
                  <dt className="spec text-ink-faint">Dates</dt>
                  <dd className="mt-1.5 text-sm text-ink">{cohort.dates}</dd>
                </div>
              )}
              {cohort.schedule && (
                <div>
                  <dt className="spec text-ink-faint">Meets</dt>
                  <dd className="mt-1.5 text-sm text-ink">{cohort.schedule}</dd>
                </div>
              )}
              {teaching.length > 0 && (
                <div>
                  <dt className="spec text-ink-faint">Teaching team</dt>
                  <dd className="mt-1.5 text-sm text-ink">
                    {teaching
                      .map((p) => (p.role === "ta" ? `${p.name} (TA)` : p.name))
                      .join(", ")}
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-6 py-14">
          {cohort.pendingAudit && (
            <p className="mb-12 border-l-2 border-cyan bg-cyan-wash p-5 text-sm leading-relaxed text-ink-soft">
              This cohort&apos;s materials are still being reviewed for what is
              safe to publish. Check back once the audit is done.
            </p>
          )}

          {cohort.predecessor && (
            <p className="mb-10 max-w-2xl border-l-2 border-line-strong pl-5 text-sm leading-relaxed text-ink-soft">
              One of the Ritual Design for Better Workplaces classes that
              Designing Org Culture grew out of, taught before DESIGN 276
              existed.
            </p>
          )}

          {cohort.motto && (
            <figure className="mb-12 max-w-2xl">
              <blockquote className="display text-[clamp(1.25rem,2.6vw,1.75rem)] leading-snug text-cyan-deep">
                &ldquo;{cohort.motto}&rdquo;
              </blockquote>
              <figcaption className="spec mt-3 text-ink-faint">
                The class motto
              </figcaption>
            </figure>
          )}

          {cohort.summary && (
            <p className="max-w-2xl text-lg leading-relaxed">{cohort.summary}</p>
          )}

          {cohort.modules?.length > 0 && (
            <section className="mt-16">
              <h2 className="display border-b-2 border-ink pb-3 text-xl uppercase">
                Arc
              </h2>
              <ol>
                {cohort.modules.map((m, i) => (
                  <li
                    key={m.title}
                    className="grid grid-cols-[3rem_1fr] gap-x-6 border-b border-line py-7"
                  >
                    <span className="spec text-ink-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="display text-base uppercase">{m.title}</p>
                      {m.weeks && (
                        <p className="spec mt-1.5 text-ink-faint">{m.weeks}</p>
                      )}
                      <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-soft">
                        {m.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {cohort.letterGradeProject && (
            <section className="mt-16">
              <h2 className="display border-b-2 border-ink pb-3 text-xl uppercase">
                Letter-grade project
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft">
                {cohort.letterGradeProject}
              </p>
            </section>
          )}

          {cohortPartners.length > 0 && (
            <section className="mt-16">
              <h2 className="display border-b-2 border-ink pb-3 text-xl uppercase">
                Partners
              </h2>
              {cohortPartners.map((p) => (
                <Link
                  key={p.slug}
                  href="/partners"
                  className="group block border-b border-line py-7"
                >
                  <p className="display text-lg uppercase group-hover:text-cyan-deep">
                    {p.name}
                  </p>
                  {p.challenge && (
                    <p className="mt-2 max-w-2xl text-base leading-relaxed text-ink-soft">
                      {p.challenge}
                    </p>
                  )}
                </Link>
              ))}
            </section>
          )}

          {guests.length > 0 && (
            <section className="mt-16">
              <h2 className="display border-b-2 border-ink pb-3 text-xl uppercase">
                Guest speakers
              </h2>
              {guests.map((g) => (
                <Link
                  key={g.slug}
                  href="/people"
                  className="group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line py-6"
                >
                  <span className="flex items-center gap-4">
                    <Portrait person={g} size={52} />
                    <span>
                      <span className="display block text-lg uppercase group-hover:text-cyan-deep">
                        {g.name}
                      </span>
                      {g.topic && (
                        <span className="mt-1 block text-sm text-ink-soft">
                          {g.topic}
                        </span>
                      )}
                    </span>
                  </span>
                  {g.affiliation && (
                    <span className="spec text-ink-faint">{g.affiliation}</span>
                  )}
                </Link>
              ))}
            </section>
          )}

          {cohort.forces?.length > 0 && (
            <section className="mt-16">
              <h2 className="display border-b-2 border-ink pb-3 text-xl uppercase">
                Forces in play
              </h2>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-6">
                {cohort.forces.map((f) => (
                  <ForcePill key={f} slug={f} size="lg" />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
