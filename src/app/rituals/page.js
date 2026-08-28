import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RitualCard from "@/components/RitualCard";
import { rituals } from "@/content/rituals";
import { getCohortBySlug } from "@/content/cohorts";

export const metadata = { title: "Rituals — Designing Org Culture" };

export default function RitualsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-night text-paper">
          <div className="mx-auto max-w-6xl px-6 pt-16 pb-20">
            <p className="spec text-invisible">The work</p>
            <h1 className="display mt-6 max-w-3xl text-[clamp(2.25rem,6vw,4rem)]">
              The class designs on itself first
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-white/60">
              Before anyone touches a partner organization, every cohort spends
              two weeks designing a ritual for the class&apos;s own culture.
              It is the fastest way to learn that culture is built out of
              small, repeatable moments — and the students have to live inside
              whatever they design.
            </p>
          </div>
        </section>

        <figure className="border-b border-line">
          <Image
            src="/brand/class/ritual-circle.jpg"
            alt="Students standing in a circle in the d.school studio, arms raised, running a ritual they designed."
            width={1600}
            height={1067}
            priority
            className="w-full"
          />
          <figcaption className="mx-auto max-w-6xl px-6 py-4">
            <span className="spec text-ink-faint">
              A cohort running one of their own rituals · d.school studio
            </span>
          </figcaption>
        </figure>

        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="border-b-2 border-ink pb-4">
            <p className="spec text-ink-soft">
              {rituals.length} rituals ·{" "}
              {getCohortBySlug(rituals[0].cohort)?.term}
            </p>
          </div>
          {rituals.map((r, i) => (
            <RitualCard key={r.slug} ritual={r} index={i} />
          ))}

          <p className="mt-12 max-w-2xl text-sm leading-relaxed text-ink-faint">
            Described in the class&apos;s own mechanics rather than reproduced
            from the students&apos; original posters, which carry their names.{" "}
            <Link href="/framework" className="text-cyan-deep hover:underline">
              The framework
            </Link>{" "}
            explains the forces each ritual moves.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
