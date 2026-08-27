import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Portrait from "@/components/Portrait";
import { roles, peopleByRole } from "@/content/people";
import { getCohortBySlug, getCurrentCohort } from "@/content/cohorts";

export const metadata = { title: "People — Designing Org Culture" };

export default function PeoplePage() {
  const current = getCurrentCohort();
  const groups = roles
    .map((r) => ({ ...r, members: peopleByRole(r.slug) }))
    .filter((g) => g.members.length > 0);

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-8">
          <p className="spec text-ink-soft">The room</p>
          <h1 className="display mt-6 text-[clamp(2.25rem,6vw,4rem)] uppercase">
            People
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
            Everyone who has taught the class or come in to teach alongside it.
            Like the partner list, this one accumulates — a name earns a year
            and stays, and some names come back in a different chair.
          </p>
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-16">
          {groups.map((g) => (
            <section key={g.slug} className="mt-14 first:mt-0">
              <h2 className="display border-b-2 border-ink pb-3 text-xl uppercase">
                {g.label}
              </h2>
              {g.members.map((p) => {
                // scoped to this role: Martin is current as a guest, not as an instructor
                const isCurrent = p.cohorts.includes(current.slug);
                return (
                  <div
                    key={p.slug}
                    className={`grid gap-x-8 gap-y-2 border-b border-line sm:grid-cols-[1fr_auto] ${
                      p.lead ? "py-8" : "py-6"
                    }`}
                  >
                    <div className="flex items-start gap-5">
                      <Portrait person={p} size={p.lead ? 104 : 72} />
                      <div>
                        <p
                          className={`display flex flex-wrap items-baseline gap-x-3 uppercase ${
                            p.lead ? "text-2xl" : "text-xl"
                          }`}
                        >
                          {p.name}
                          {p.lead && (
                            <span className="spec border border-ink px-2 py-0.5 text-ink">
                              Lead
                            </span>
                          )}
                          {isCurrent && (
                            <span className="spec text-cyan-deep">Current</span>
                          )}
                        </p>
                        {p.affiliation && (
                          <p className="mt-1.5 text-sm text-ink-soft">
                            {p.affiliation}
                          </p>
                        )}
                        {p.topic && (
                          <p className="mt-1 text-sm text-ink-faint">
                            {p.topic}
                          </p>
                        )}
                      </div>
                    </div>
                    <p className="spec text-ink-faint sm:pt-2 sm:text-right">
                      {p.cohorts
                        .map((s) => getCohortBySlug(s)?.year)
                        .filter(Boolean)
                        .join(" · ")}
                    </p>
                  </div>
                );
              })}
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
