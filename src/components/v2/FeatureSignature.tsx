"use client";

/**
 * FeatureSignature — Range Highlights showcase.
 *
 * One signature product per category, rotating through 4 highlights every
 * ~5.5s. Visual: dark green section, slowly-rotating gold ring on the right
 * with a cream plate inside (image crossfades with the active highlight),
 * editorial copy on the left (badge → name → blurb → metric). Cycle is
 * paused on hover; manual nav via the 4 labels below the copy.
 */

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type Highlight = {
  number: string;
  category: string;
  name: string;
  image: string;
  blurb: string;
  metric: string;
  metricLabel: string;
};

const HIGHLIGHTS: Highlight[] = [
  {
    number: "01",
    category: "Flatbreads & Tortillas",
    name: "Roti Canai",
    image: "/products/flatbreads/roti-canai.jpg",
    blurb:
      "The flaky, layered Malaysian-style flatbread. Manufactured at commercial volume. Only in India by us.",
    metric: "4,500",
    metricLabel: "pcs / hour",
  },
  {
    number: "02",
    category: "Frozen-to-Fry Snacks",
    name: "Punjabi Samosa",
    image: "/products/snacks/samosa-punjabi-70g.jpg",
    blurb:
      "Crisp, spiced, the crowd favourite at every QSR pass. Frozen at peak for golden consistency every fry.",
    metric: "1 lakh",
    metricLabel: "pcs / day",
  },
  {
    number: "03",
    category: "Base Gravies & Pastes",
    name: "Makhani Base Gravy",
    image: "/products/gravies/makhani.jpg",
    blurb:
      "The classic tomato-butter base, the backbone of any restaurant menu. Ready to plate or build on.",
    metric: "1,000 kg",
    metricLabel: "per hour",
  },
  {
    number: "04",
    category: "Retort Rice",
    name: "Saffron Rice",
    image: "/products/rice/saffron.jpg",
    blurb:
      "Aromatic basmati infused with saffron and gentle spice. Shelf-stable at ambient, ready in minutes.",
    metric: "Ambient",
    metricLabel: "Shelf stable",
  },
];

export default function FeatureSignature() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % HIGHLIGHTS.length);
    }, 5500);
    return () => clearInterval(t);
  }, [paused]);

  const active = HIGHLIGHTS[idx];

  return (
    <section
      className="relative overflow-hidden bg-[color:var(--green)] py-20 text-[color:var(--cream-on-green)] md:py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        aria-hidden
        className="cream-blob pointer-events-none absolute -left-32 top-10 h-[420px] w-[420px] rounded-full opacity-50"
      />
      <div
        aria-hidden
        className="cream-blob pointer-events-none absolute -right-32 -bottom-20 h-[380px] w-[380px] rounded-full opacity-40"
      />

      <div className="relative mx-auto max-w-[1320px] px-5 md:px-10">
        {/* Centered header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-12 text-center md:mb-16"
        >
          <div className="mx-auto mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[color:var(--gold)]" />
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[color:var(--gold)]">
              Range Highlights
            </span>
            <span className="h-px w-10 bg-[color:var(--gold)]" />
          </div>
          <h2 className="font-display text-[clamp(2.2rem,4.6vw,3.6rem)] font-medium leading-tight tracking-tight">
            Built across{" "}
            <em className="italic text-[color:var(--gold)]">every category.</em>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[color:var(--cream-on-green)]/80">
            One signature SKU per line. Auto-rotating, or click any category
            below to jump.
          </p>
        </motion.div>

        {/* Grid: copy + ring */}
        <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
          {/* Left — rotating copy */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={`copy-${idx}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.55, ease: EASE }}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/45 bg-[color:var(--green-deep)]/40 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--gold)]">
                  <span className="h-1 w-1 rounded-full bg-[color:var(--gold)]" />
                  {active.number} · {active.category}
                </span>
                <h3 className="mt-5 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.05] tracking-tight text-[color:var(--cream-on-green)]">
                  {active.name}.
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-[color:var(--cream-on-green)]/85 md:text-lg">
                  {active.blurb}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-6 border-t border-[color:var(--gold)]/15 pt-6">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-[2rem] font-medium leading-none text-[color:var(--gold)] md:text-[2.4rem]">
                      {active.metric}
                    </span>
                    <span className="whitespace-nowrap text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--cream-on-green)]/65">
                      {active.metricLabel}
                    </span>
                  </div>
                  <Link
                    href="#contact"
                    className="group btn-gold inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[0.84rem] font-semibold tracking-wide shadow-[0_14px_36px_-12px_rgba(201,169,97,0.4)]"
                  >
                    Request sample
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Tab navigation */}
            <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
              {HIGHLIGHTS.map((h, i) => {
                const isActive = i === idx;
                return (
                  <button
                    key={h.number}
                    onClick={() => setIdx(i)}
                    className={`group flex flex-col items-start gap-1 rounded-xl border px-3 py-2.5 text-left transition-all ${
                      isActive
                        ? "border-[color:var(--gold)]/55 bg-[color:var(--gold)]/10"
                        : "border-[color:var(--gold)]/15 bg-[color:var(--green-deep)]/30 hover:border-[color:var(--gold)]/40"
                    }`}
                  >
                    <span
                      className={`text-[0.62rem] font-semibold uppercase tracking-[0.18em] transition-colors ${
                        isActive
                          ? "text-[color:var(--gold)]"
                          : "text-[color:var(--cream-on-green)]/55 group-hover:text-[color:var(--gold)]/80"
                      }`}
                    >
                      {h.number}
                    </span>
                    <span
                      className={`font-display text-[0.92rem] font-medium tracking-tight transition-colors ${
                        isActive
                          ? "text-[color:var(--cream-on-green)]"
                          : "text-[color:var(--cream-on-green)]/70 group-hover:text-[color:var(--cream-on-green)]"
                      }`}
                    >
                      {h.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right — gold ring + rotating plate image */}
          <div className="relative mx-auto aspect-square w-full max-w-[460px]">
            {/* Outer slow-rotating gold ring */}
            <div aria-hidden className="animate-slow-rotate absolute inset-0">
              <div className="absolute inset-0 rounded-full border border-[color:var(--gold)]/40" />
              <div className="absolute inset-[6%] rounded-full border border-[color:var(--gold)]/25" />
              <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--gold)]" />
              <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 translate-x-1/2 rounded-full bg-[color:var(--gold)]" />
              <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-[color:var(--gold)]" />
              <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-[color:var(--gold)]" />
            </div>

            {/* Inner plate — image crossfades with idx */}
            <div className="absolute inset-[14%] overflow-hidden rounded-full bg-[color:var(--bg-warm)] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.55)]">
              {HIGHLIGHTS.map((h, i) => (
                <motion.div
                  key={h.image}
                  initial={false}
                  animate={{
                    opacity: i === idx ? 1 : 0,
                    scale: i === idx ? 1.02 : 1.06,
                  }}
                  transition={{
                    opacity: { duration: 0.9, ease: "easeInOut" },
                    scale: { duration: 6, ease: "easeOut" },
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={h.image}
                    alt={h.name}
                    fill
                    sizes="(max-width: 768px) 80vw, 400px"
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
