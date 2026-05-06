"use client";

/**
 * TrustedBy — bright variant.
 * Logos sit on uniform paper-cream chips against a slightly warmer cream
 * section background. Brand colours preserved (no inversion).
 */

import Image from "next/image";
import { motion } from "framer-motion";
import { QSR_LOGOS } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

type Logo = (typeof QSR_LOGOS)[number];

function LogoChip({
  logo,
  hideAria = false,
}: {
  logo: Logo;
  hideAria?: boolean;
}) {
  return (
    <div
      className="group relative flex h-16 w-32 shrink-0 items-center justify-center rounded-2xl border border-[color:var(--line)] bg-[color:var(--bg-paper)] px-4 py-3 shadow-[0_6px_20px_-12px_rgba(42,37,32,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--earth)] hover:shadow-[0_18px_32px_-14px_rgba(124,92,61,0.3)] md:h-20 md:w-40"
      title={logo.name}
      aria-hidden={hideAria}
    >
      <Image
        src={logo.src}
        alt={hideAria ? "" : logo.name}
        fill
        sizes="(max-width: 768px) 128px, 160px"
        className="object-contain p-3"
      />
    </div>
  );
}

function Row({ logos, reverse = false }: { logos: Logo[]; reverse?: boolean }) {
  const doubled = [...logos, ...logos];
  return (
    <div
      className={`flex w-max items-center gap-5 md:gap-6 ${
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      }`}
    >
      {doubled.map((logo, i) => (
        <LogoChip
          key={`${logo.name}-${i}`}
          logo={logo}
          hideAria={i >= logos.length}
        />
      ))}
    </div>
  );
}

export default function TrustedByDark() {
  const firstRow = QSR_LOGOS;
  const secondRow = [...QSR_LOGOS].reverse();

  return (
    <section className="bg-[color:var(--bg-warm)] py-16 md:py-20">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-12 flex flex-col items-center gap-2 text-center"
        >
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--earth)]">
            Trusted by 30+ QSR brands globally
          </span>
          <p className="max-w-xl font-display text-2xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-tight text-ink">
            Chosen for{" "}
            <em className="italic text-[color:var(--earth)]">
              consistency at scale.
            </em>
          </p>
        </motion.div>
      </div>

      <div className="marquee-pause relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[color:var(--bg-warm)] via-[color:var(--bg-warm)]/95 to-transparent md:w-48" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[color:var(--bg-warm)] via-[color:var(--bg-warm)]/95 to-transparent md:w-48" />

        <div className="flex flex-col gap-5 py-2 md:gap-6">
          <Row logos={firstRow} />
          <Row logos={secondRow} reverse />
        </div>
      </div>
    </section>
  );
}
