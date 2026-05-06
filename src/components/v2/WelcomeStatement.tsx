"use client";

/**
 * WelcomeStatement — Restoria-inspired multi-image editorial split.
 *
 * Layout: split. Left column: top eyebrow ("Our Story"), big serif headline
 * with key category words highlighted in gold + small pill badges, followed
 * by a paragraph and a CTA button. Right column: two offset photos (lifestyle
 * + plant interior).
 */

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export type WelcomeStatementProps = {
  imageA: { src: string; alt: string };
  imageB: { src: string; alt: string };
};

export default function WelcomeStatement({
  imageA,
  imageB,
}: WelcomeStatementProps) {
  return (
    <section className="relative overflow-hidden bg-[color:var(--bg)] py-20 md:py-28">
      <div className="paper-grain absolute inset-0" aria-hidden />

      <div className="relative mx-auto grid max-w-[1320px] items-center gap-10 px-5 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:px-10 lg:gap-20">
        {/* Left — copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-10 bg-[color:var(--gold)]" />
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[color:var(--gold-deep)]">
              Our Story
            </span>
          </div>
          <h2 className="font-display text-[clamp(2rem,4.4vw,3.4rem)] font-medium leading-tight tracking-tight text-ink">
            Enjoy Every Meal with{" "}
            <span className="inline-flex items-center gap-2 align-middle">
              <span className="text-ink">Crisp</span>
              <span className="inline-flex items-center rounded-full bg-[color:var(--gold)]/15 px-3 py-0.5 text-[0.7em] font-semibold uppercase tracking-[0.18em] text-[color:var(--gold-deep)]">
                Flatbreads
              </span>
            </span>
            , Hearty{" "}
            <span className="inline-flex items-center gap-2 align-middle">
              <span className="inline-flex items-center rounded-full bg-[color:var(--green)]/12 px-3 py-0.5 text-[0.7em] font-semibold uppercase tracking-[0.18em] text-[color:var(--green)]">
                Gravies
              </span>
              <span className="text-ink">&amp;</span>
              <span className="inline-flex items-center rounded-full bg-[color:var(--gold)]/15 px-3 py-0.5 text-[0.7em] font-semibold uppercase tracking-[0.18em] text-[color:var(--gold-deep)]">
                Snacks
              </span>
            </span>
            .
          </h2>
          <p className="mt-6 max-w-[32rem] text-base leading-relaxed text-ink-soft">
            Over thirty years of precision manufacturing, BRC-certified lines,
            and an R&amp;D team that builds to your menu, region and palate.
            Same spec, every shipment, every store. Across 5,000+ outlets
            served.
          </p>
          <div className="mt-8">
            <Link
              href="#products"
              className="btn-text inline-flex items-center gap-2 text-[0.92rem] font-semibold tracking-wide"
            >
              Read Our Story →
            </Link>
          </div>
        </motion.div>

        {/* Right — two offset photos */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          className="relative h-[440px] md:h-[520px]"
        >
          {/* Larger image — top right */}
          <div className="absolute right-0 top-0 h-[60%] w-[68%] overflow-hidden rounded-[20px] border border-[color:var(--line)]">
            <Image
              src={imageA.src}
              alt={imageA.alt}
              fill
              sizes="(max-width: 768px) 60vw, 380px"
              className="object-cover"
            />
          </div>
          {/* Smaller image — bottom left, overlapping */}
          <div className="absolute bottom-0 left-0 h-[58%] w-[60%] overflow-hidden rounded-[20px] border border-[color:var(--line)] shadow-[0_18px_40px_-18px_rgba(37,34,30,0.25)]">
            <Image
              src={imageB.src}
              alt={imageB.alt}
              fill
              sizes="(max-width: 768px) 60vw, 340px"
              className="object-cover"
            />
          </div>
          {/* Decorative dot ornament between photos */}
          <div className="absolute left-[55%] top-[42%] hidden md:block">
            <span className="block h-2.5 w-2.5 rotate-45 bg-[color:var(--gold)] shadow-[0_4px_12px_rgba(201,169,97,0.45)]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
