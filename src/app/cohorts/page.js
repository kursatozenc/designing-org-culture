import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CohortCard from "@/components/CohortCard";
import { cohorts } from "@/content/cohorts";

export const metadata = { title: "Cohorts — Designing Org Culture" };

export default function CohortsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="text-3xl font-medium">Cohorts</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
            Every year the class has run, in one place — same template, different
            partners and challenges. Adding a new year means adding one entry here,
            not building a new site.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cohorts.map((c) => (
              <CohortCard key={c.slug} cohort={c} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
