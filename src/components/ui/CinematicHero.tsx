"use client";

/**
 * CinematicHero — bright variant.
 *
 * Editorial light-theme hero. Image is the centrepiece against a cream
 * background; gentle warm gradient grounds the bottom-left content panel.
 *
 * Heights:
 *   "home"   → 90vh
 *   "page"   → 80vh
 *   "inner"  → 60vh
 *
 * `objectPosition` and `overlayStyle` mirror the v2 dark API for drop-in
 * compatibility with the existing /vegetarian page.
 */

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

type CTA = { label: string; href: string };

export type CinematicHeroProps = {
  imageSrc: string;
  imageAlt: string;
  priority?: boolean;
  variant?: "home" | "page" | "inner";
  eyebrow?: string;
  headline: React.ReactNode;
  subline?: React.ReactNode;
  primaryCta?: CTA;
  secondaryCta?: CTA;
  ticker?: string[];
  objectPosition?: string;
  overlayStyle?: "bottom-left" | "left";
  refined?: boolean;
};

const HEIGHT_BY_VARIANT: Record<NonNullable<CinematicHeroProps["variant"]>, string> = {
  home: "min-h-[90svh]",
  page: "min-h-[80svh]",
  inner: "min-h-[60svh]",
};

export default function CinematicHero({
  imageSrc,
  imageAlt,
  priority = true,
  variant = "home",
  eyebrow,
  headline,
  subline,
  primaryCta,
  secondaryCta,
  ticker,
  objectPosition = "center",
  overlayStyle = "bottom-left",
  refined = false,
}: CinematicHeroProps) {
  const headlineClass = refined
    ? "mt-5 font-display text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight text-ink text-balance"
    : "mt-5 font-display text-[clamp(2.4rem,5.6vw,5rem)] font-medium leading-[1.05] tracking-[-0.01em] text-ink text-balance";

  const sublineClass = refined
    ? "mt-5 max-w-xl text-base md:text-lg lg:text-xl font-normal leading-relaxed text-ink-soft"
    : "mt-5 max-w-[34rem] text-[1rem] leading-relaxed text-ink-soft";

  return (
    <section
      className={`relative isolate overflow-hidden bg-[color:var(--bg)] text-ink ${HEIGHT_BY_VARIANT[variant]}`}
    >
      <div className="absolute inset-0">
        <div className="animate-ken-burns absolute inset-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority={priority}
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition }}
          />
        </div>

        {/* Cream warm gradient overlays — softer than v2 dark */}
        {overlayStyle === "left" ? (
          <>
            {/* Mobile bottom darken — warm cream-to-translucent */}
            <div
              aria-hidden
              className="absolute inset-0 md:hidden"
              style={{
                background:
                  "linear-gradient(to top, rgba(250,246,238,0.92) 0%, rgba(250,246,238,0.55) 35%, rgba(250,246,238,0.15) 65%, transparent 100%)",
              }}
            />
            {/* Desktop left sweep — cream */}
            <div
              aria-hidden
              className="absolute inset-0 hidden md:block"
              style={{
                background:
                  "linear-gradient(90deg, rgba(250,246,238,0.92) 0%, rgba(250,246,238,0.7) 30%, rgba(250,246,238,0.25) 55%, transparent 75%)",
              }}
            />
          </>
        ) : (
          <>
            {/* Bottom-left rising cream gradient */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 0%, rgba(250,246,238,0.25) 50%, rgba(250,246,238,0.85) 100%)",
              }}
            />
            <div
              aria-hidden
              className="absolute inset-0 hidden md:block"
              style={{
                background:
                  "linear-gradient(45deg, rgba(250,246,238,0.85) 0%, rgba(250,246,238,0.4) 35%, transparent 65%)",
              }}
            />
          </>
        )}
      </div>

      {/* Top ticker */}
      {ticker && ticker.length > 0 && (
        <div className="absolute inset-x-0 top-0 z-10 hidden border-b border-[color:var(--line)] bg-[color:var(--bg-paper)]/85 backdrop-blur-md md:block">
          <div className="mx-auto flex max-w-[1320px] items-center gap-6 overflow-hidden px-10 py-2.5 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-ink-soft">
            <span className="text-[color:var(--earth)]">●</span>
            <div className="flex w-max animate-marquee items-center gap-10">
              {[...ticker, ...ticker].map((t, i) => (
                <span key={`${t}-${i}`} className="whitespace-nowrap">
                  {t}
                  <span className="ml-10 text-[color:var(--earth)]/50">/</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Content — bottom-left aligned */}
      <div className="relative z-10 mx-auto flex h-full min-h-[inherit] max-w-[1320px] items-end px-5 pb-14 pt-28 md:px-10 md:pb-20 md:pt-32">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
          className="max-w-[680px]"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, scaleX: 0.4 },
              show: {
                opacity: 1,
                scaleX: 1,
                transition: { duration: 0.9, ease: EASE },
              },
            }}
            style={{ transformOrigin: "0 50%" }}
            className="earth-line w-24 md:w-32"
          />

          {eyebrow && (
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
              }}
              className="mt-6 block text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--earth)]"
            >
              {eyebrow}
            </motion.span>
          )}

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.95, ease: EASE } },
            }}
            className={headlineClass}
          >
            {headline}
          </motion.h1>

          {subline && (
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
              }}
              className={sublineClass}
            >
              {subline}
            </motion.p>
          )}

          {(primaryCta || secondaryCta) && (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
              }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="group btn-earth inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[0.88rem] font-semibold shadow-[0_14px_36px_-12px_rgba(124,92,61,0.45)]"
                >
                  {primaryCta.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="btn-earth-outline inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[0.88rem] font-semibold backdrop-blur"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
