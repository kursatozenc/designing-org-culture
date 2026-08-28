import Link from "next/link";

const LINKS = [
  { href: "/cohorts", label: "Cohorts" },
  { href: "/rituals", label: "Rituals" },
  { href: "/partners", label: "Partners" },
  { href: "/people", label: "People" },
  { href: "/framework", label: "Framework" },
  { href: "/resources", label: "Resources" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-2.5 px-6 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-4">
        <Link
          href="/"
          className="display text-[0.8rem] uppercase leading-none sm:text-[0.95rem]"
        >
          Designing Org Culture
        </Link>
        <nav className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-5">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="spec text-ink-soft hover:text-cyan-deep"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
