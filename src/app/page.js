import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ForcePill from "@/components/ForcePill";
import { cohorts, getCurrentCohort } from "@/content/cohorts";
import { partners } from "@/content/partners";
import { forces } from "@/content/forces";

export default function Home() {
  const current = getCurrentCohort();
  const archive = cohorts.filter((c) => !c.current).slice(0, 3);

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 pt-16 pb-20">
          <p className="text-sm uppercase tracking-widest text-accent">
            Stanford d.school · DESIGN 276
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-medium leading-tight sm:text-5xl">
            Designing Org Culture
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Culture design must work toward both technological adoption and human
            flourishing. Student teams partner directly with organizations to diagnose
            systemic challenges and run live culture experiments — moving between the
            abstract and the concrete, one cohort at a time.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href={`/cohorts/${current.slug}`}
              className="border border-ink px-5 py-2.5 text-sm font-medium hover:bg-ink hover:text-paper"
            >
              Current cohort — {current.term}
            </Link>
            <Link
              href="/partners"
              className="px-5 py-2.5 text-sm font-medium text-ink-soft hover:text-ink"
            >
              Partner with us →
            </Link>
          </div>
        </section>

        <section className="border-t border-line bg-accent-soft/40">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-[1fr_1.2fr] sm:items-center">
            <div>
              <h2 className="text-2xl font-medium">Eight forces of culture</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                Every cohort project traces back to one or more of these forces — the
                vocabulary the class uses to name what it&apos;s actually designing.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {forces.map((f) => (
                  <ForcePill key={f.slug} slug={f.slug} />
                ))}
              </div>
              <Link
                href="/framework"
                className="mt-6 inline-block text-sm text-accent hover:underline"
              >
                Read the framework →
              </Link>
            </div>
            <Image
              src="/brand/culture-forces.png"
              alt="Hand-drawn icons for the eight forces of culture: policy, values, norms, practices, stories, behaviors, artifacts, metrics"
              width={1200}
              height={900}
              className="w-full rounded-lg"
            />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-medium">Past cohorts</h2>
            <Link href="/cohorts" className="text-sm text-accent hover:underline">
              View all →
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {archive.map((c) => (
              <Link
                key={c.slug}
                href={`/cohorts/${c.slug}`}
                className="border border-line p-5 hover:border-ink"
              >
                <p className="text-sm font-medium">{c.term}</p>
                {c.summary && (
                  <p className="mt-2 text-xs leading-relaxed text-ink-soft line-clamp-3">
                    {c.summary}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="flex items-baseline justify-between">
              <h2 className="text-2xl font-medium">Partner organizations</h2>
              <Link href="/partners" className="text-sm text-accent hover:underline">
                View all →
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {partners.map((p) => (
                <span
                  key={p.slug}
                  className="border border-line px-4 py-2 text-sm text-ink-soft"
                >
                  {p.name}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
