"use client";

/**
 * FeatureSignature — dark-green section, gold-circle ornament, signature dish.
 *
 * The "wow" moment: a single hero product (Roti Canai by default) sits
 * inside a slowly-rotating gold ring on a dark-green backdrop. Editorial
 * eyebrow + serif headline + capacity + CTA on the left.
 */

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export type FeatureSignatureProps = {
  imageSrc: string;
  imageAlt: string;
  badge?: string;
  headline: React.ReactNode;
  subline?: React.ReactNode;
  metric?: { value: string; label: string };
  cta?: { label: string; href: string };
};

export default function FeatureSignature({
  imageSrc,
  imageAlt,
  badge = "Signature · Only in India",
  headline,
  subline,
  metric,
  cta,
}: FeatureSignatureProps) {
  return (
    <section className="relative overflow-hidden bg-[color:var(--green)] py-20 text-[color:var(--cream-on-green)] md:py-28">
      {/* Subtle cream blob accents */}
      <div
        aria-hidden
        className="cream-blob pointer-events-none absolute -left-32 top-10 h-[420px] w-[420px] rounded-full opacity-50"
      />
      <div
        aria-hidden
        className="cream-blob pointer-events-none absolute -right-32 -bottom-20 h-[380px] w-[380px] rounded-full opacity-40"
      />

      <div className="relative mx-auto grid max-w-[1320px] items-center gap-12 px-5 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:px-10">
        {/* Left — copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/45 bg-[color:var(--green-deep)]/40 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--gold)]">
            <span className="h-1 w-1 rounded-full bg-[color:var(--gold)]" />
            {badge}
          </div>
          <h2 className="font-display text-[clamp(2.4rem,5vw,4rem)] font-medium leading-[1.04] tracking-tight text-[color:var(--cream-on-green)]">
            {headline}
          </h2>
          {subline && (
            <p className="mt-5 max-w-md text-base leading-relaxed text-[color:var(--cream-on-green)]/85 md:text-lg">
              {subline}
            </p>
          )}
          <div className="mt-8 flex flex-wrap items-center gap-6">
            {metric && (
              <div className="flex items-baseline gap-2">
                <span className="font-display text-[2rem] font-medium leading-none text-[color:var(--gold)] md:text-[2.4rem]">
                  {metric.value}
                </span>
                <span className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--cream-on-green)]/65">
                  {metric.label}
                </span>
              </div>
            )}
            {cta && (
              <Link
                href={cta.href}
                className="group btn-gold inline-flex items-center gap-2 rounded-full px-6 py-3 text-[0.86rem] font-semibold tracking-wide shadow-[0_14px_36px_-12px_rgba(201,169,97,0.4)]"
              >
                {cta.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            )}
          </div>
        </motion.div>

        {/* Right — feature dish on rotating gold ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: EASE, delay: 0.15 }}
          className="relative mx-auto aspect-square w-full max-w-[460px]"
        >
          {/* Outer slow-rotating gold ring */}
          <div
            aria-hidden
            className="animate-slow-rotate absolute inset-0"
          >
            <div className="absolute inset-0 rounded-full border border-[color:var(--gold)]/40" />
            <div className="absolute inset-[6%] rounded-full border border-[color:var(--gold)]/25" />
            {/* Gold dot decorations on the outer ring */}
            <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--gold)]" />
            <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 translate-x-1/2 rounded-full bg-[color:var(--gold)]" />
            <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-[color:var(--gold)]" />
            <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-[color:var(--gold)]" />
          </div>
          {/* Inner cream plate */}
          <div className="absolute inset-[14%] overflow-hidden rounded-full bg-[color:var(--bg-warm)] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.55)]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 80vw, 400px"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
