import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Portrait from "@/components/Portrait";
import {
  roles,
  peopleByRole,
  peopleForCohort,
  allCohorts,
} from "@/content/people";
import {
  getCohortBySlug,
  getCurrentCohort,
  isPredecessor,
} from "@/content/cohorts";

export const metadata = { title: "People" };

function PersonRow({ person, years }) {
  return (
    <div
      className={`grid gap-x-8 gap-y-2 border-b border-line sm:grid-cols-[1fr_auto] ${
        person.lead ? "py-8" : "py-6"
      }`}
    >
      <div className="flex items-start gap-5">
        <Portrait person={person} size={person.lead ? 104 : 72} />
        <div>
          <p
            className={`display flex flex-wrap items-baseline gap-x-3 uppercase ${
              person.lead ? "text-2xl" : "text-xl"
            }`}
          >
            {person.name}
            {person.lead && (
              <span className="spec border border-ink px-2 py-0.5 text-ink">
                Lead
              </span>
            )}
          </p>
          {person.affiliation && (
            <p className="mt-1.5 text-sm text-ink-soft">{person.affiliation}</p>
          )}
          {person.topic && (
            <p className="mt-1 text-sm text-ink-faint">{person.topic}</p>
          )}
        </div>
      </div>
      <p className="spec text-ink-faint sm:pt-2 sm:text-right">
        {years
          .map((s) => getCohortBySlug(s)?.year)
          .filter(Boolean)
          .join(" · ")}
      </p>
    </div>
  );
}

function RoleGroup({ label, children }) {
  return (
    <section className="mt-14 first:mt-0">
      <h3 className="display border-b-2 border-ink pb-3 text-xl uppercase">
        {label}
      </h3>
      {children}
    </section>
  );
}

export default function PeoplePage() {
  const current = getCurrentCohort();

  // This year's roster, grouped by the chair each person holds *this year* —
  // so someone who used to instruct and now guest-lectures lands under guests.
  const thisYear = peopleForCohort(current.slug);
  const currentGroups = roles
    .map((r) => ({
      ...r,
      members: thisYear.filter((p) => p.role === r.slug),
    }))
    .filter((g) => g.members.length > 0);

  // Everyone else, by the roles they have held. Anyone in this year's roster is
  // shown above instead, so nobody appears twice.
  const past = roles
    .map((r) => ({
      ...r,
      members: peopleByRole(r.slug).filter(
        (p) => !p.appearances.some((a) => a.cohort === current.slug),
      ),
    }))
    .filter((g) => g.members.length > 0);

  // Someone who only ever taught a Ritual Design class did not teach DESIGN 276,
  // so they are listed under those classes rather than as course faculty.
  const onlyPredecessor = (p) => p.cohorts.every(isPredecessor);
  const pastGroups = past.map((g) => ({
    ...g,
    members: g.members.filter((p) => !onlyPredecessor(p)),
  }));
  const ritualDesign = past
    .map((g) => ({ ...g, members: g.members.filter(onlyPredecessor) }))
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

        {/* ---- This year, first ---- */}
        <section className="border-y border-line bg-cyan-wash">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <p className="spec text-cyan-deep">This year</p>
            <h2 className="display mt-4 text-[clamp(1.75rem,4vw,2.75rem)] uppercase">
              {current.term}
            </h2>
            <div className="mt-10">
              {currentGroups.map((g) => (
                <RoleGroup key={g.slug} label={g.label}>
                  {g.members.map((p) => (
                    <PersonRow key={p.slug} person={p} years={allCohorts(p)} />
                  ))}
                </RoleGroup>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Every year before it ---- */}
        <div className="mx-auto max-w-6xl px-6 pt-14 pb-16">
          <p className="spec text-ink-soft">Previously</p>
          <h2 className="display mt-4 text-[clamp(1.75rem,4vw,2.75rem)] uppercase">
            Past years
          </h2>
          <div className="mt-10">
            {pastGroups
              .filter((g) => g.members.length > 0)
              .map((g) => (
                <RoleGroup key={g.slug} label={g.label}>
                  {g.members.map((p) => (
                    <PersonRow key={p.slug} person={p} years={p.cohorts} />
                  ))}
                </RoleGroup>
              ))}
          </div>
        </div>

        {/* ---- The classes this course grew out of ---- */}
        {ritualDesign.length > 0 && (
          <div className="border-t border-line bg-paper-warm">
            <div className="mx-auto max-w-6xl px-6 py-14">
              <p className="spec text-ink-soft">Before the course</p>
              <h2 className="display mt-4 text-[clamp(1.75rem,4vw,2.75rem)] uppercase">
                Ritual Design classes
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
                Designing Org Culture grew out of the Ritual Design for Better
                Workplaces classes of 2019 and 2020. The people who taught those
                taught ritual design, not this course.
              </p>
              <div className="mt-10">
                {ritualDesign.map((g) => (
                  <RoleGroup key={g.slug} label={g.label}>
                    {g.members.map((p) => (
                      <PersonRow key={p.slug} person={p} years={p.cohorts} />
                    ))}
                  </RoleGroup>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
