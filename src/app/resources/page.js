import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { resources } from "@/content/resources";

export const metadata = { title: "Resources — Designing Org Culture" };

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-8">
          <p className="spec text-ink-soft">Point of view</p>
          <h1 className="display mt-6 text-[clamp(2.25rem,6vw,4rem)] uppercase">
            Resources
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
            Writing on culture and ritual design that holds across cohorts. A
            given quarter&apos;s assigned readings stay on that cohort&apos;s
            page, where they belong.
          </p>
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-16">
          <div className="border-b-2 border-ink" />
          {resources.map((r, i) => (
            <a
              key={r.slug}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-[3rem_1fr] items-baseline gap-x-6 gap-y-2 border-b border-line py-8 sm:grid-cols-[3rem_1fr_auto]"
            >
              <span className="spec text-ink-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="display text-xl uppercase group-hover:text-cyan-deep">
                  {r.title}
                </h2>
                {r.subtitle && (
                  <p className="mt-2 max-w-xl text-base leading-relaxed text-ink-soft">
                    {r.subtitle}
                  </p>
                )}
                <p className="spec mt-3 text-ink-faint">
                  {r.author}
                  {r.year ? ` · ${r.year}` : ""}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="spec col-start-2 text-ink-faint group-hover:text-cyan-deep sm:col-start-3"
              >
                Read →
              </span>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
