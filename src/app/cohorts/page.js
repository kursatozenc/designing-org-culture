import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CohortRow from "@/components/CohortRow";
import { cohorts } from "@/content/cohorts";

export const metadata = { title: "Cohorts" };

export default function CohortsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-8">
          <p className="spec text-ink-soft">Year by year</p>
          <h1 className="display mt-6 text-[clamp(2.25rem,6vw,4rem)] uppercase">
            Cohorts
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
            Every year the class has run, on one page — same template, different
            partners and challenges. A new year is one more row here, not a new
            website.
          </p>
        </div>
        <div className="mx-auto max-w-6xl px-6 pb-16">
          <div className="border-b-2 border-ink" />
          {cohorts.map((c) => (
            <CohortRow key={c.slug} cohort={c} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
