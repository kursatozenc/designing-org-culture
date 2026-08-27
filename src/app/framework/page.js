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
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h1 className="text-3xl font-medium">Eight forces of culture</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
            The vocabulary this class uses to name what it&apos;s actually designing —
            every partner project traces back to one or more of these.
          </p>

          <Image
            src="/brand/culture-forces.png"
            alt="Hand-drawn icons for the eight forces of culture"
            width={1200}
            height={900}
            className="mt-10 w-full rounded-lg"
          />

          <dl className="mt-12 grid gap-8 sm:grid-cols-2">
            {forces.map((f) => (
              <div key={f.slug}>
                <dt className="text-sm font-medium text-accent">{f.label}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-ink-soft">
                  {f.detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </main>
      <Footer />
    </>
  );
}
