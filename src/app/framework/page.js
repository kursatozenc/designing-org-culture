import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { forces, layers, forcesByLayer } from "@/content/forces";

export const metadata = { title: "Framework" };

export default function FrameworkPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ---- Thesis: the model itself, at full size ---- */}
        <section className="border-b border-line">
          <div className="mx-auto max-w-6xl px-6 pt-16 pb-20">
            <p className="spec text-ink-soft">The model</p>
            <h1 className="display mt-6 max-w-3xl text-[clamp(2.25rem,6vw,4rem)]">
              Culture is a living system
            </h1>
            <div className="mt-12 grid gap-14 sm:grid-cols-[1fr_1.05fr] sm:items-center">
              <div>
                <p className="text-lg leading-relaxed text-ink-soft">
                  Invisible and visible forces, constantly interacting. What a
                  group believes shapes what it does; what it does feeds back
                  into what it believes. Healthy cultures run that loop as a
                  virtuous cycle and unhealthy ones as a vicious one. Design
                  works on both sides: it facilitates values and norms on the
                  invisible side, and prototypes behaviors, practices, policies
                  and stories on the visible one.
                </p>
                <dl className="mt-10 grid gap-8">
                  {layers.map((l) => (
                    <div key={l.slug} className="flex gap-4">
                      <span
                        aria-hidden="true"
                        className={`mt-1.5 h-3 w-3 shrink-0 rounded-full ${
                          l.slug === "invisible" ? "bg-invisible" : "bg-visible"
                        }`}
                      />
                      <div>
                        <dt className="display text-base">{l.label}</dt>
                        <dd className="mt-1.5 max-w-md text-sm leading-relaxed text-ink-soft">
                          {l.lede}
                        </dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>
              <Image
                src="/brand/diagrams/culture-forces.png"
                alt="Culture Forces: beliefs, values and norms among the invisible forces; behaviors, artifacts and metrics among the visible ones, with arrows cycling between them."
                width={1400}
                height={1804}
                priority
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* ---- The mechanism ---- */}
        <section className="bg-paper-warm">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:grid-cols-[1.05fr_1fr] sm:items-center">
            <Image
              src="/brand/diagrams/culture-rituals.jpg"
              alt="Rituals sit between the invisible and visible forces of culture, carrying change in both directions."
              width={1400}
              height={1399}
              className="w-full"
            />
            <div>
              <p className="spec text-ink-soft">The mechanism</p>
              <h2 className="display mt-5 text-[clamp(1.75rem,4vw,2.75rem)]">
                Rituals carry culture across
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
                A value nobody enacts is a poster. A behavior nobody believes in
                is compliance. Rituals are the repeatable moments that move a
                belief into practice, and practice back into belief. That is
                why they are the class&apos;s primary design material.
              </p>
            </div>
          </div>
        </section>

        {/* ---- The vocabulary, on the ground it was drawn for ---- */}
        <section className="bg-night text-paper">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="spec text-invisible">The vocabulary</p>
            <h2 className="display mt-5 text-[clamp(1.75rem,4vw,2.75rem)]">
              Eight designable forces
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60">
              Every partner project on the site is tagged with the forces it
              actually moved, so cohorts stay comparable across years.
            </p>

            {layers.map((l) => (
              <div key={l.slug} className="mt-16">
                <p className="flex items-center gap-3 border-b border-white/15 pb-4">
                  <span
                    aria-hidden="true"
                    className={`h-2.5 w-2.5 rounded-full ${
                      l.slug === "invisible" ? "bg-invisible" : "bg-visible"
                    }`}
                  />
                  <span className="spec text-white/70">{l.label}</span>
                </p>
                <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4">
                  {forcesByLayer(l.slug).map((f) => (
                    <li key={f.slug}>
                      <Image
                        src={f.icon}
                        alt=""
                        width={600}
                        height={537}
                        aria-hidden="true"
                        className="w-24 object-contain"
                      />
                      <p className="display mt-4 text-base">{f.label}</p>
                      <p className="mt-2 text-sm leading-relaxed text-white/55">
                        {f.detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <p className="spec mt-16 border-t border-white/15 pt-6 text-white/45">
              {forces.length} forces · Culture Forces model, Kursat Ozenc, 2022
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
