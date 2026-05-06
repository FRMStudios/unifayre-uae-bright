"use client";

/**
 * EditorialHero — Restoria-inspired hero.
 * Centred eyebrow + serif headline + subtitle + dual CTAs above a wide
 * featured food banner with rounded corners and gold ornaments. Off-white
 * backdrop, dark-green and gold accents.
 */

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

type CTA = { label: string; href: string };

export type EditorialHeroProps = {
  imageSrc: string;
  imageAlt: string;
  eyebrow?: string;
  headline: React.ReactNode;
  subline?: React.ReactNode;
  primaryCta?: CTA;
  secondaryCta?: CTA;
  imageObjectPosition?: string;
};

export default function EditorialHero({
  imageSrc,
  imageAlt,
  eyebrow,
  headline,
  subline,
  primaryCta,
  secondaryCta,
  imageObjectPosition = "center",
}: EditorialHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[color:var(--bg)] pb-16 pt-12 md:pb-24 md:pt-16">
      {/* Subtle gold blob accents */}
      <div
        aria-hidden
        className="gold-blob pointer-events-none absolute -left-32 top-32 h-[420px] w-[420px] rounded-full opacity-60"
      />
      <div
        aria-hidden
        className="gold-blob pointer-events-none absolute -right-32 -bottom-20 h-[420px] w-[420px] rounded-full opacity-50"
      />

      <div className="relative mx-auto max-w-[1320px] px-5 md:px-10">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
          className="mx-auto max-w-[820px] text-center"
        >
          {/* Top gold ornament */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scaleX: 0.4 },
              show: {
                opacity: 1,
                scaleX: 1,
                transition: { duration: 0.9, ease: EASE },
              },
            }}
            style={{ transformOrigin: "50% 50%" }}
            className="mx-auto mb-6 flex items-center justify-center gap-3"
          >
            <span className="h-px w-12 bg-[color:var(--gold)]" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[color:var(--gold)]" />
            <span className="h-px w-12 bg-[color:var(--gold)]" />
          </motion.div>

          {eyebrow && (
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: EASE },
                },
              }}
              className="block text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[color:var(--gold-deep)]"
            >
              {eyebrow}
            </motion.span>
          )}

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.95, ease: EASE },
              },
            }}
            className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.04] tracking-tight text-ink text-balance"
          >
            {headline}
          </motion.h1>

          {subline && (
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: EASE },
                },
              }}
              className="mx-auto mt-5 max-w-[34rem] text-base leading-relaxed text-ink-soft md:text-lg"
            >
              {subline}
            </motion.p>
          )}

          {(primaryCta || secondaryCta) && (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: EASE },
                },
              }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3"
            >
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="group btn-gold inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[0.86rem] font-semibold tracking-wide shadow-[0_14px_36px_-12px_rgba(201,169,97,0.45)]"
                >
                  {primaryCta.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="btn-gold-outline inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[0.86rem] font-semibold tracking-wide"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </motion.div>
          )}
        </motion.div>

        {/* Featured banner image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.55 }}
          className="relative mx-auto mt-12 aspect-[16/8] w-full overflow-hidden rounded-[20px] border border-[color:var(--line)] md:mt-16 md:aspect-[21/9] md:rounded-[28px]"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            sizes="(max-width: 1320px) 95vw, 1280px"
            className="object-cover"
            style={{ objectPosition: imageObjectPosition }}
          />
          {/* Gold dot ornaments at the corners */}
          <div className="absolute left-6 top-6 hidden md:block">
            <span className="block h-2 w-2 rounded-full bg-[color:var(--gold)]" />
          </div>
          <div className="absolute right-6 top-6 hidden md:block">
            <span className="block h-2 w-2 rounded-full bg-[color:var(--gold)]" />
          </div>
          <div className="absolute bottom-6 left-6 hidden md:block">
            <span className="block h-2 w-2 rounded-full bg-[color:var(--gold)]" />
          </div>
          <div className="absolute bottom-6 right-6 hidden md:block">
            <span className="block h-2 w-2 rounded-full bg-[color:var(--gold)]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
