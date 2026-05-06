"use client";

/**
 * CinematicHero
 *
 * Full-bleed cinematic hero used across pages. Image fills the section with a
 * Ken Burns slow zoom, dark gradient overlay grounds the bottom for content,
 * gold accent line + headline + sub-line + dual CTAs sit bottom-left.
 *
 * Heights:
 *   "home"   → 90vh
 *   "page"   → 80vh   (Veg / Non-Veg landing)
 *   "inner"  → 60vh   (Why / Manufacturing / For UAE / Contact)
 *
 * Refined mode (`refined` prop) drops the headline one Tailwind step,
 * switches to font-light + tracking-tight, and reduces sub-line size.
 * Used on /vegetarian per the v2 final image integration brief.
 *
 * `objectPosition` controls how the image is anchored when cropped.
 * `overlayStyle` switches the gradient direction:
 *   "bottom-left" — gradient rises from bottom-left (default; chef's pass / multi-food shots)
 *   "left"        — gradient sweeps from left (food-on-right shots)
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
  /** "center" (default) | "right" | "left" | any next/image objectPosition value */
  objectPosition?: string;
  /** "bottom-left" (default) | "left" — direction the dark gradient sweeps from */
  overlayStyle?: "bottom-left" | "left";
  /** When true, use refined sizing/weight per the V2 elegant typography brief. */
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
    ? "mt-5 font-display text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight text-[color:var(--text-primary)] text-balance"
    : "mt-5 font-display text-[clamp(2.4rem,5.6vw,5rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-[color:var(--text-primary)] text-balance";

  const sublineClass = refined
    ? "mt-5 max-w-xl text-base md:text-lg lg:text-xl font-light leading-relaxed tracking-wide text-[color:var(--text-primary)]/85"
    : "mt-5 max-w-[34rem] text-[1rem] leading-relaxed text-[color:var(--text-secondary)]";

  return (
    <section
      className={`relative isolate overflow-hidden bg-[color:var(--bg-deep)] text-[color:var(--text-primary)] ${HEIGHT_BY_VARIANT[variant]}`}
    >
      {/* Ken Burns image */}
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

        {/* Gradient overlays — direction depends on overlayStyle */}
        {overlayStyle === "left" ? (
          <>
            {/* Mobile — heavy bottom darken so bottom-anchored content reads */}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-[color:var(--bg-deep)] via-[color:var(--bg-deep)]/55 to-[color:var(--bg-deep)]/15 md:hidden"
            />
            {/* Desktop — left sweep gradient */}
            <div
              aria-hidden
              className="absolute inset-0 hidden md:block"
              style={{
                background:
                  "linear-gradient(90deg, rgba(10,22,40,0.85) 0%, rgba(10,22,40,0.55) 30%, rgba(10,22,40,0.15) 55%, transparent 75%)",
              }}
            />
          </>
        ) : (
          <>
            {/* Bottom-left rising gradient (default) */}
            <div aria-hidden className="absolute inset-0 cinematic-overlay" />
            <div aria-hidden className="absolute inset-0 cinematic-side md:hidden" />
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-[color:var(--bg-deep)] via-[color:var(--bg-deep)]/70 to-transparent"
            />
            <div
              aria-hidden
              className="absolute inset-0 hidden md:block"
              style={{
                background:
                  "linear-gradient(45deg, rgba(10,22,40,0.85) 0%, rgba(10,22,40,0.4) 35%, transparent 65%)",
              }}
            />
          </>
        )}
      </div>

      {/* Top ticker (rotating category names) */}
      {ticker && ticker.length > 0 && (
        <div className="absolute inset-x-0 top-0 z-10 hidden border-b border-white/10 bg-black/20 backdrop-blur-md md:block">
          <div className="mx-auto flex max-w-[1320px] items-center gap-6 overflow-hidden px-10 py-2.5 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-white/65">
            <span className="animate-gold-pulse text-[color:var(--accent-gold)]">●</span>
            <div className="flex w-max animate-marquee items-center gap-10">
              {[...ticker, ...ticker].map((t, i) => (
                <span key={`${t}-${i}`} className="whitespace-nowrap">
                  {t}
                  <span className="ml-10 text-[color:var(--accent-gold)]/60">/</span>
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
          {/* Gold accent line */}
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
            className="gold-line w-24 md:w-32"
          />

          {eyebrow && (
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
              }}
              className="mt-6 block text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--accent-gold)]"
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
                  className="group btn-gold inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[0.88rem] font-semibold shadow-[0_14px_36px_-12px_rgba(201,169,97,0.5)]"
                >
                  {primaryCta.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="btn-gold-outline inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[0.88rem] font-semibold backdrop-blur"
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
