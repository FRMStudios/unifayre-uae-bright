"use client";

/**
 * FeatureSignature — Range Highlights showcase (compact layout).
 *
 * One signature SKU per category, rotating through 4 highlights every
 * ~5.5s. Compact two-column layout: editorial copy on the left with a
 * single-row dot+label nav at the bottom, slowly-rotating gold ring on
 * the right with a cream plate inside that crossfades between products.
 * Pause on hover; click any nav label to jump.
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
  shortCategory: string;
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
    shortCategory: "Flatbreads",
    name: "Roti Canai",
    image: "/products/flatbreads/roti-canai.jpg",
    blurb:
      "The flaky, layered Malaysian-style flatbread. Manufactured at commercial volume — only in India by us.",
    metric: "4,500",
    metricLabel: "pcs / hour",
  },
  {
    number: "02",
    category: "Frozen-to-Fry Snacks",
    shortCategory: "Snacks",
    name: "Punjabi Samosa",
    image: "/products/snacks/samosa-punjabi-70g.jpg",
    blurb:
      "Crisp, spiced, the crowd favourite. Frozen at peak so every fry comes out golden and consistent.",
    metric: "1 lakh",
    metricLabel: "pcs / day",
  },
  {
    number: "03",
    category: "Base Gravies & Pastes",
    shortCategory: "Gravies",
    name: "Makhani Base Gravy",
    image: "/products/gravies/makhani.jpg",
    blurb:
      "The classic tomato-butter base. Backbone of any restaurant menu, ready to plate or build on.",
    metric: "1,000 kg",
    metricLabel: "per hour",
  },
  {
    number: "04",
    category: "Retort Rice",
    shortCategory: "Rice",
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
      className="relative overflow-hidden bg-[color:var(--green)] py-14 text-[color:var(--cream-on-green)] md:py-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        aria-hidden
        className="cream-blob pointer-events-none absolute -left-32 top-10 h-[360px] w-[360px] rounded-full opacity-40"
      />
      <div
        aria-hidden
        className="cream-blob pointer-events-none absolute -right-32 -bottom-20 h-[320px] w-[320px] rounded-full opacity-35"
      />

      <div className="relative mx-auto max-w-[1320px] px-5 md:px-10">
        {/* Compact header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-8 flex flex-col items-start gap-3 md:mb-10 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-2 flex items-center gap-3">
              <span className="h-px w-8 bg-[color:var(--gold)]" />
              <span className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-[color:var(--gold)]">
                Range Highlights
              </span>
            </div>
            <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.8rem)] font-medium leading-tight tracking-tight">
              Built across{" "}
              <em className="italic text-[color:var(--gold)]">
                every category.
              </em>
            </h2>
          </div>
          <p className="max-w-[24rem] text-[0.92rem] leading-relaxed text-[color:var(--cream-on-green)]/75">
            One signature SKU per line. Auto-rotating, or click any tab below
            to jump.
          </p>
        </motion.div>

        {/* Grid: copy + ring */}
        <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-14">
          {/* Left — rotating copy */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={`copy-${idx}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/45 bg-[color:var(--green-deep)]/40 px-3.5 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--gold)]">
                  <span className="h-1 w-1 rounded-full bg-[color:var(--gold)]" />
                  {active.number} · {active.category}
                </span>
                <h3 className="mt-4 font-display text-[clamp(1.7rem,3.4vw,2.4rem)] font-medium leading-[1.05] tracking-tight text-[color:var(--cream-on-green)]">
                  {active.name}.
                </h3>
                <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-[color:var(--cream-on-green)]/85">
                  {active.blurb}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-5 border-t border-[color:var(--gold)]/15 pt-4">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-[1.65rem] font-medium leading-none text-[color:var(--gold)] md:text-[1.95rem]">
                      {active.metric}
                    </span>
                    <span className="whitespace-nowrap text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--cream-on-green)]/65">
                      {active.metricLabel}
                    </span>
                  </div>
                  <Link
                    href="#contact"
                    className="group btn-gold inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.78rem] font-semibold tracking-wide shadow-[0_10px_24px_-10px_rgba(201,169,97,0.4)]"
                  >
                    Request sample
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Compact dot + label nav */}
            <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2">
              {HIGHLIGHTS.map((h, i) => {
                const isActive = i === idx;
                return (
                  <button
                    key={h.number}
                    onClick={() => setIdx(i)}
                    className="group inline-flex items-center gap-2 transition-all"
                  >
                    <span
                      className={`block h-1.5 rounded-full transition-all ${
                        isActive
                          ? "w-6 bg-[color:var(--gold)]"
                          : "w-1.5 bg-[color:var(--cream-on-green)]/35 group-hover:bg-[color:var(--gold)]/70"
                      }`}
                    />
                    <span
                      className={`text-[0.7rem] font-semibold uppercase tracking-[0.16em] transition-colors ${
                        isActive
                          ? "text-[color:var(--gold)]"
                          : "text-[color:var(--cream-on-green)]/55 group-hover:text-[color:var(--cream-on-green)]"
                      }`}
                    >
                      {h.shortCategory}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right — gold ring + rotating plate (slightly smaller) */}
          <div className="relative mx-auto aspect-square w-full max-w-[400px]">
            <div aria-hidden className="animate-slow-rotate absolute inset-0">
              <div className="absolute inset-0 rounded-full border border-[color:var(--gold)]/40" />
              <div className="absolute inset-[6%] rounded-full border border-[color:var(--gold)]/25" />
              <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--gold)]" />
              <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 translate-x-1/2 rounded-full bg-[color:var(--gold)]" />
              <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-[color:var(--gold)]" />
              <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-[color:var(--gold)]" />
            </div>

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
                    sizes="(max-width: 768px) 80vw, 360px"
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
