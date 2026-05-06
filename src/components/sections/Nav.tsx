"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/vegetarian", label: "Vegetarian" },
  { href: "/non-vegetarian", label: "Non-Vegetarian" },
  { href: "/why-unifayre", label: "Why Unifayre" },
  { href: "/manufacturing", label: "Manufacturing" },
  { href: "/for-uae", label: "For UAE" },
];

export default function Nav() {
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
          ? "border-b border-[color:var(--border-subtle)] bg-[color:var(--bg-deep)]/92 backdrop-blur-xl"
          : "border-b border-transparent bg-[color:var(--bg-deep)]/60 backdrop-blur-md"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1320px] items-center justify-between px-5 transition-[height] duration-300 ease-out md:px-10 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className={`flex origin-left items-center gap-2.5 transition-transform duration-300 ease-out ${
            scrolled ? "scale-90" : "scale-100"
          }`}
        >
          <span className="relative inline-flex h-3 w-3 items-center justify-center rounded-full bg-[color:var(--accent-gold)]">
            <span className="absolute inset-[3px] rounded-full bg-[color:var(--bg-deep)]" />
          </span>
          <span className="font-display text-[1.7rem] font-semibold tracking-[-0.02em] text-[color:var(--text-primary)]">
            Unifayre
          </span>
          <span className="hidden rounded-full border border-[color:var(--border-subtle)] px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-gold)] sm:inline">
            Foods
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-1.5 text-[0.82rem] font-medium text-[color:var(--text-secondary)] transition-all hover:bg-white/[0.04] hover:text-[color:var(--text-primary)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className={`btn-gold hidden items-center gap-2 rounded-full font-semibold transition-all duration-300 sm:inline-flex ${
              scrolled ? "px-4 py-2 text-[0.8rem]" : "px-5 py-2.5 text-[0.84rem]"
            }`}
          >
            Partner With Us
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border-subtle)] text-[color:var(--text-primary)] transition-colors hover:border-[color:var(--accent-gold)] hover:text-[color:var(--accent-gold)] lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-[color:var(--border-subtle)] bg-[color:var(--bg-deep)]/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-[1320px] flex-col gap-1 px-5 py-5 md:px-10">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-[0.92rem] font-medium text-[color:var(--text-secondary)] transition-all hover:bg-white/[0.04] hover:text-[color:var(--text-primary)]"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-gold mt-2 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[0.86rem] font-semibold"
            >
              Partner With Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
