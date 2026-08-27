import Link from "next/link";

const LINKS = [
  { href: "/cohorts", label: "Cohorts" },
  { href: "/partners", label: "Partners" },
  { href: "/framework", label: "Framework" },
];

export default function Header() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-6xl items-baseline justify-between px-6 py-6">
        <Link href="/" className="text-sm font-medium tracking-tight uppercase">
          Designing Org Culture
        </Link>
        <nav className="flex gap-6 text-sm">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-ink-soft hover:text-ink">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
