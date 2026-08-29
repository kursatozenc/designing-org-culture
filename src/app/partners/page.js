import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { partners, partnerContact } from "@/content/partners";
import { getCohortBySlug, getCurrentCohort } from "@/content/cohorts";

export const metadata = { title: "Partners" };

// What a partner actually signs up for. Drawn from the shape every cohort has
// followed: the partner pitches, students interview their people, students
// present back.
const commitment = [
  {
    label: "What you bring",
    detail:
      "A real culture challenge, and a short session at the start of the quarter to put it to the class in your own words.",
  },
  {
    label: "What the class does",
    detail:
      "A multidisciplinary team of Stanford students, undergraduate and graduate, spends ten weeks on it: interviewing your people, mapping how the culture actually works, and prototyping interventions against it.",
  },
  {
    label: "What you get",
    detail:
      "A culture diagnosis grounded in your own employees' words, journey maps, and tested prototypes — a ritual, a policy, an artifact — presented back to you at the end of the quarter.",
  },
];

export default function PartnersPage() {
  const current = getCurrentCohort();
  const open = partners.filter((p) => p.open);
  const confirmed = partners.filter((p) => !p.open);
  const mailto = `mailto:${partnerContact.email}?subject=${encodeURIComponent(
    partnerContact.subject,
  )}`;

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-8">
          <p className="spec text-ink-soft">Collaborators</p>
          <h1 className="display mt-6 text-[clamp(2.25rem,6vw,4rem)] uppercase">
            Partners
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
            Organizations that have brought a real culture challenge to the
            class. This list accumulates year over year rather than resetting
            with each cohort.
          </p>
        </div>

        {/* ---- The open slot, where a prospective partner lands ---- */}
        {open.length > 0 && (
          <section className="border-y border-line bg-cyan-wash">
            <div className="mx-auto max-w-6xl px-6 py-14">
              <p className="spec text-cyan-deep">{current.term} · Open</p>
              <h2 className="display mt-4 max-w-2xl text-[clamp(1.75rem,4vw,2.75rem)]">
                This could be your organization
              </h2>
              {open.map((p) => (
                <p
                  key={p.slug}
                  className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft"
                >
                  {p.challenge}
                </p>
              ))}

              <dl className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-3">
                {commitment.map((c) => (
                  <div key={c.label} className="bg-paper p-6">
                    <dt className="spec text-ink-faint">{c.label}</dt>
                    <dd className="mt-3 text-sm leading-relaxed text-ink">
                      {c.detail}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* The address lives in the mailto only — it opens the visitor's
                  mail client without printing the address on the page. */}
              <div className="mt-10">
                <a
                  href={mailto}
                  className="spec inline-block border border-ink px-6 py-3.5 text-ink hover:bg-ink hover:text-paper"
                >
                  Bring us a challenge →
                </a>
              </div>
            </div>
          </section>
        )}

        {/* ---- Everyone who has already done it ---- */}
        <div className="mx-auto max-w-6xl px-6 pt-14 pb-16">
          <div className="flex items-end justify-between gap-6 border-b-2 border-ink pb-4">
            <h2 className="display text-[clamp(1.75rem,4vw,2.75rem)] uppercase">
              Who we&apos;ve worked with
            </h2>
            <p className="spec text-ink-faint">{confirmed.length} organizations</p>
          </div>
          {confirmed.map((p) => (
            <div
              key={p.slug}
              className="grid gap-x-8 gap-y-3 border-b border-line py-8 sm:grid-cols-[1fr_auto]"
            >
              <div>
                <h3 className="display text-2xl uppercase">{p.name}</h3>
                {p.challenge && (
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-soft">
                    {p.challenge}
                  </p>
                )}
              </div>
              <p className="spec whitespace-nowrap text-ink-faint sm:pt-2 sm:text-right">
                {p.cohorts
                  .map((slug) => getCohortBySlug(slug)?.term)
                  .filter(Boolean)
                  .join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
