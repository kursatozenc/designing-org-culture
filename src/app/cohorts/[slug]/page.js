import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ForcePill from "@/components/ForcePill";
import { cohorts, getCohortBySlug } from "@/content/cohorts";
import { getPartnerBySlug } from "@/content/partners";

export function generateStaticParams() {
  return cohorts.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cohort = getCohortBySlug(slug);
  return { title: cohort ? `${cohort.term} — Designing Org Culture` : "Cohort" };
}

export default async function CohortPage({ params }) {
  const { slug } = await params;
  const cohort = getCohortBySlug(slug);
  if (!cohort) notFound();

  const cohortPartners = (cohort.partners ?? [])
    .map(getPartnerBySlug)
    .filter(Boolean);

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <Link href="/cohorts" className="text-sm text-ink-soft hover:text-ink">
            ← All cohorts
          </Link>

          <div className="mt-6 flex items-baseline justify-between gap-4">
            <h1 className="text-3xl font-medium">{cohort.term}</h1>
            {cohort.current && (
              <span className="rounded-full bg-accent-soft px-3 py-1 text-xs text-accent">
                Current
              </span>
            )}
          </div>

          {cohort.dates && <p className="mt-2 text-sm text-ink-soft">{cohort.dates}</p>}
          {cohort.schedule && (
            <p className="mt-1 text-sm text-ink-soft">{cohort.schedule}</p>
          )}
          {cohort.instructors && (
            <p className="mt-4 text-sm">
              <span className="text-ink-soft">Instructors: </span>
              {cohort.instructors.join(", ")}
              {cohort.teachingAssistant && (
                <>
                  {" · "}
                  <span className="text-ink-soft">TA: </span>
                  {cohort.teachingAssistant}
                </>
              )}
            </p>
          )}

          {cohort.pendingAudit && (
            <p className="mt-6 border border-line bg-accent-soft/40 p-4 text-sm text-ink-soft">
              This cohort&apos;s materials are still being audited for what&apos;s safe
              to publish. Check back once the review is done.
            </p>
          )}

          {cohort.summary && (
            <p className="mt-8 text-base leading-relaxed">{cohort.summary}</p>
          )}

          {cohort.modules?.length > 0 && (
            <div className="mt-10">
              <h2 className="text-lg font-medium">Arc</h2>
              <div className="mt-4 space-y-6">
                {cohort.modules.map((m) => (
                  <div key={m.title} className="border-l-2 border-line pl-4">
                    <p className="text-sm font-medium">
                      {m.title}
                      {m.weeks && (
                        <span className="ml-2 text-xs text-ink-soft">{m.weeks}</span>
                      )}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {m.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {cohort.letterGradeProject && (
            <div className="mt-10">
              <h2 className="text-lg font-medium">Letter-grade project</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {cohort.letterGradeProject}
              </p>
            </div>
          )}

          {cohortPartners.length > 0 && (
            <div className="mt-10">
              <h2 className="text-lg font-medium">Partners</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {cohortPartners.map((p) => (
                  <Link
                    key={p.slug}
                    href="/partners"
                    className="border border-line p-4 hover:border-ink"
                  >
                    <p className="text-sm font-medium">{p.name}</p>
                    {p.challenge && (
                      <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                        {p.challenge}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {cohort.forces?.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-2">
              {cohort.forces.map((f) => (
                <ForcePill key={f} slug={f} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
