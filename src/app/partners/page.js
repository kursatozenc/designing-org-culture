import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { partners } from "@/content/partners";
import { getCohortBySlug } from "@/content/cohorts";

export const metadata = { title: "Partners" };

export default function PartnersPage() {
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

        <div className="mx-auto max-w-6xl px-6 pb-16">
          <div className="border-b-2 border-ink" />
          {partners.map((p) => (
            <div
              key={p.slug}
              className="grid gap-x-8 gap-y-3 border-b border-line py-8 sm:grid-cols-[1fr_auto]"
            >
              <div>
                <h2 className="display text-2xl uppercase">{p.name}</h2>
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
