"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

const LINKS = [
  { href: "/cohorts", label: "Cohorts" },
  { href: "/rituals", label: "Rituals" },
  { href: "/partners", label: "Partners" },
  { href: "/people", label: "People" },
  { href: "/framework", label: "Framework" },
  { href: "/resources", label: "Resources" },
];

export default function Header() {
  const pathname = usePathname();
  const navRef = useRef(null);
  const inkRef = useRef(null);
  const linkRefs = useRef(new Map());
  const hasMounted = useRef(false);
  const [hovered, setHovered] = useState(null);

  // A cohort detail page (/cohorts/2025) still belongs to Cohorts.
  const activeHref =
    LINKS.find(
      (l) => pathname === l.href || pathname.startsWith(`${l.href}/`),
    )?.href ?? null;

  // The line rests under the current section and follows the pointer, so one
  // indicator answers both "where am I" and "where would this take me".
  // Geometry is measured rather than stored: the nav wraps to two rows on
  // narrow screens, and Archivo swaps in after first paint.
  const moveTo = useCallback((href, animate) => {
    const nav = navRef.current;
    const ink = inkRef.current;
    if (!nav || !ink) return;

    const el = href ? linkRefs.current.get(href) : null;
    if (!el) {
      ink.style.opacity = "0";
      return;
    }

    if (!animate) ink.style.transition = "none";

    const navBox = nav.getBoundingClientRect();
    const linkBox = el.getBoundingClientRect();
    // .spec carries 0.16em tracking, which pads the box past the last glyph.
    const tracking = parseFloat(getComputedStyle(el).letterSpacing) || 0;

    ink.style.width = `${Math.max(0, linkBox.width - tracking)}px`;
    ink.style.top = `${linkBox.bottom - navBox.top}px`;
    ink.style.transform = `translateX(${linkBox.left - navBox.left}px)`;
    ink.style.opacity = "1";

    if (!animate) {
      void ink.offsetWidth; // flush, so the restored transition can't replay
      ink.style.transition = "";
    }
  }, []);

  const target = hovered ?? activeHref;

  useLayoutEffect(() => {
    // Land in place on first paint; travel on every change after that.
    moveTo(target, hasMounted.current);
    hasMounted.current = true;
  }, [target, moveTo]);

  useEffect(() => {
    const reposition = () => moveTo(target, false);

    window.addEventListener("resize", reposition);
    // Webfont metrics differ from the fallback; re-measure once they land.
    document.fonts?.ready.then(reposition).catch(() => {});

    return () => window.removeEventListener("resize", reposition);
  }, [target, moveTo]);

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-2.5 px-6 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-4">
        <Link
          href="/"
          className="display text-[0.8rem] uppercase leading-none sm:text-[0.95rem]"
        >
          Designing Org Culture
        </Link>

        <nav
          ref={navRef}
          className="relative flex flex-wrap gap-x-4 gap-y-2 sm:gap-5"
          onPointerLeave={() => setHovered(null)}
        >
          {LINKS.map((l) => {
            const isActive = l.href === activeHref;
            return (
              <Link
                key={l.href}
                href={l.href}
                ref={(node) => {
                  if (node) linkRefs.current.set(l.href, node);
                  else linkRefs.current.delete(l.href);
                }}
                aria-current={isActive ? "page" : undefined}
                onPointerEnter={() => setHovered(l.href)}
                onFocus={() => setHovered(l.href)}
                onBlur={() => setHovered(null)}
                className={`spec pb-1.5 transition-colors duration-150 ${
                  isActive
                    ? "text-cyan-deep [font-variation-settings:'wght'_600]"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                {l.label}
              </Link>
            );
          })}

          <span
            ref={inkRef}
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 h-0.5 w-0 rounded-full bg-cyan-deep opacity-0 transition-[transform,width,top,opacity] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none"
          />
        </nav>
      </div>
    </header>
  );
}
