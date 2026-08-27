import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { resources } from "@/content/resources";

export const metadata = { title: "Resources — Designing Org Culture" };

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h1 className="text-3xl font-medium">Resources</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
            POV pieces on culture and ritual design, evergreen across cohorts. A
            given quarter&apos;s assigned reading list lives on that cohort&apos;s own page,
            not here.
          </p>
          <div className="mt-10 divide-y divide-line border-t border-b border-line">
            {resources.map((r) => (
              <a
                key={r.slug}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block py-6"
              >
                <p className="text-base font-medium group-hover:text-accent">
                  {r.title} <span aria-hidden="true">→</span>
                </p>
                {r.subtitle && (
                  <p className="mt-1 text-sm text-ink-soft">{r.subtitle}</p>
                )}
                <p className="mt-2 text-xs text-ink-soft">
                  {r.author}
                  {r.year ? ` · ${r.year}` : ""}
                </p>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
