import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { partners } from "@/content/partners";
import { getCohortBySlug } from "@/content/cohorts";

export const metadata = { title: "Partners — Designing Org Culture" };

export default function PartnersPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h1 className="text-3xl font-medium">Partners</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
            Organizations we&apos;ve worked with, across every cohort. This list grows
            year over year rather than starting over.
          </p>
          <div className="mt-10 divide-y divide-line border-t border-b border-line">
            {partners.map((p) => (
              <div key={p.slug} className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <p className="text-base font-medium">{p.name}</p>
                  {p.challenge && (
                    <p className="mt-1 max-w-xl text-sm leading-relaxed text-ink-soft">
                      {p.challenge}
                    </p>
                  )}
                </div>
                <p className="text-xs text-ink-soft whitespace-nowrap">
                  {p.cohorts
                    .map((slug) => getCohortBySlug(slug)?.term)
                    .filter(Boolean)
                    .join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
