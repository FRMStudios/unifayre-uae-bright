"use client";

/**
 * VegLandingNav — bright variant.
 * Cream sticky header, dark charcoal text, minimal earth-tone CTA.
 */

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#products", label: "Categories" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#why", label: "Why Unifayre" },
];

export default function VegLandingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-[color:var(--line)] bg-[color:var(--bg-paper)]/95 backdrop-blur-xl"
          : "border-b border-transparent bg-[color:var(--bg)]/85 backdrop-blur-md"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1320px] items-center justify-between px-5 transition-[height] duration-300 ease-out md:px-10 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <Link
          href="#top"
          className={`flex origin-left items-center gap-2.5 transition-transform duration-300 ease-out ${
            scrolled ? "scale-90" : "scale-100"
          }`}
        >
          <span className="relative inline-flex h-3 w-3 items-center justify-center rounded-full bg-[color:var(--earth)]">
            <span className="absolute inset-[3px] rounded-full bg-[color:var(--bg-paper)]" />
          </span>
          <span className="font-display text-[1.7rem] font-medium tracking-[-0.01em] text-ink">
            Unifayre
          </span>
          <span className="hidden rounded-full border border-[color:var(--line)] px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--earth)] sm:inline">
            Foods
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.86rem] font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className={`btn-earth hidden items-center gap-2 rounded-full font-medium transition-all duration-300 sm:inline-flex ${
              scrolled ? "px-4 py-2 text-[0.8rem]" : "px-5 py-2.5 text-[0.84rem]"
            }`}
          >
            Request Sample
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] text-ink transition-colors hover:border-[color:var(--earth)] hover:text-[color:var(--earth)] lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[color:var(--line)] bg-[color:var(--bg-paper)]/98 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-[1320px] flex-col gap-1 px-5 py-5 md:px-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-[0.92rem] font-medium text-ink-soft transition-all hover:bg-[color:var(--bg-soft)] hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-earth mt-2 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[0.86rem] font-medium"
            >
              Request Sample
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
