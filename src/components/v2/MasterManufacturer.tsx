"use client";

/**
 * MasterManufacturer — Restoria-inspired "Master Chef" profile,
 * adapted for a B2B manufacturer.
 *
 * Off-white section. Left: portrait of the plant on a circular plate
 * background, ringed with a gold border. Right: editorial copy about
 * heritage, R&D, certifications, and a CTA. Decorative gold ornaments
 * frame the column.
 */

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function MasterManufacturer({
  id = "why",
}: {
  id?: string;
}) {
  return (
    <section
      id={id}
      className="relative overflow-hidden bg-[color:var(--bg)] py-20 md:py-28"
    >
      <div className="paper-grain absolute inset-0" aria-hidden />
      <div
        aria-hidden
        className="gold-blob pointer-events-none absolute -right-40 -bottom-20 h-[420px] w-[420px] rounded-full opacity-45"
      />

      <div className="relative mx-auto grid max-w-[1320px] items-center gap-12 px-5 md:grid-cols-[0.95fr_1.05fr] md:gap-16 md:px-10 lg:gap-20">
        {/* Left — circular plant portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.95, ease: EASE }}
          className="relative mx-auto aspect-square w-full max-w-[480px]"
        >
          {/* Decorative arch + dots above */}
          <div className="absolute left-1/2 top-0 hidden -translate-x-1/2 -translate-y-12 md:block">
            <span className="block h-2 w-2 rotate-45 bg-[color:var(--gold)]" />
          </div>

          {/* Outer faint gold ring */}
          <div
            aria-hidden
            className="absolute inset-0 rounded-full border border-[color:var(--gold)]/35"
          />
          {/* Inner cream plate */}
          <div className="absolute inset-[6%] overflow-hidden rounded-full border border-[color:var(--gold)]/45 shadow-[0_30px_70px_-30px_rgba(37,34,30,0.35)]">
            <Image
              src="/images/veg/plant/plant-hero.png"
              alt="Mohali manufacturing plant at golden hour"
              fill
              sizes="(max-width: 768px) 80vw, 460px"
              className="object-cover"
            />
          </div>
          {/* Heritage badge — bottom centre */}
          <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full border border-[color:var(--gold)]/45 bg-[color:var(--bg-paper)] px-4 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--gold-deep)] shadow-[0_8px_24px_-8px_rgba(37,34,30,0.25)]">
            Est · Mohali, India
          </div>
        </motion.div>

        {/* Right — copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: EASE, delay: 0.1 }}
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-10 bg-[color:var(--gold)]" />
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[color:var(--gold-deep)]">
              Master Manufacturer
            </span>
          </div>
          <h2 className="font-display text-[clamp(2.2rem,4.6vw,3.4rem)] font-medium leading-tight tracking-tight text-ink">
            Built To Deliver,
            <br />
            <em className="italic text-[color:var(--gold-deep)]">Always.</em>
          </h2>
          <p className="mt-5 max-w-[34rem] text-base leading-relaxed text-ink-soft md:text-lg">
            Over thirty years of precision manufacturing from Mohali, India.
            BRC-certified lines, state-of-the-art technology, and a science-backed
            R&amp;D team that builds to your menu, region and palate.
          </p>

          {/* Capability pointers — minimal, no boxes */}
          <ul className="mt-7 space-y-3.5">
            {[
              { metric: "18,000 MT", label: "Annual veg capacity" },
              { metric: "BRC + FSSC 22000", label: "Certified lines" },
              { metric: "5,000+", label: "Outlets served across India" },
              { metric: "Halal-line", label: "Ready, every SKU" },
            ].map((p) => (
              <li
                key={p.label}
                className="flex items-baseline gap-3 border-b border-dotted border-[color:var(--line)] pb-3 last:border-b-0"
              >
                <span className="font-display text-[1.05rem] font-medium tracking-tight text-[color:var(--gold-deep)]">
                  {p.metric}
                </span>
                <span className="flex-1 text-[0.92rem] text-ink-soft">
                  {p.label}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#contact"
              className="group btn-green inline-flex items-center gap-2 rounded-full px-6 py-3 text-[0.86rem] font-semibold tracking-wide shadow-[0_14px_36px_-12px_rgba(31,61,47,0.4)]"
            >
              Talk to the UAE desk
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
