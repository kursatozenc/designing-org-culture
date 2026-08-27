import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { forces } from "@/content/forces";

export const metadata = { title: "Framework — Designing Org Culture" };

export default function FrameworkPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-night text-paper">
          <div className="mx-auto max-w-6xl px-6 pt-16 pb-20">
            <p className="spec text-cyan">The vocabulary</p>
            <div className="mt-6 grid gap-10 sm:grid-cols-[1.3fr_1fr] sm:items-end">
              <h1 className="display text-[clamp(2.25rem,6vw,4rem)] uppercase">
                Eight forces
                <br />
                of culture
              </h1>
              <Image
                src="/brand/forces/shapes-of-culture.png"
                alt="Shapes of Culture"
                width={600}
                height={376}
                priority
                className="tilt-mark w-48 justify-self-start invert sm:justify-self-end"
              />
            </div>
            <p className="mt-10 max-w-xl text-base leading-relaxed text-white/60">
              Culture gets talked about as a mood. It is more useful to treat it
              as eight designable materials. Every partner project in the
              archive is tagged with the forces it actually moved.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <ol>
            {forces.map((f) => (
              <li
                key={f.slug}
                className="grid grid-cols-[3rem_1fr] items-start gap-x-6 gap-y-4 border-b border-line py-10 sm:grid-cols-[3rem_9rem_1fr]"
              >
                <span className="spec pt-2 text-ink-faint">{f.number}</span>
                <Image
                  src={f.icon}
                  alt=""
                  width={600}
                  height={537}
                  aria-hidden="true"
                  className="col-start-2 w-24 object-contain sm:w-28"
                />
                <div className="col-span-2 sm:col-span-1 sm:col-start-3">
                  <h2 className="display text-2xl uppercase">{f.label}</h2>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-soft">
                    {f.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </main>
      <Footer />
    </>
  );
}
