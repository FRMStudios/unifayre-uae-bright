"use client";

/**
 * WhyUnifayreDynamic — bright variant.
 * Cream backdrop with paper accents, rotating plant/operations imagery
 * (clearly visible against cream), animated capability pointer cards.
 */

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Factory,
  Award,
  History,
  Store,
  FlaskConical,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { useEffect, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type Slide = {
  src: string;
  alt: string;
  caption: string;
};

const SLIDES: Slide[] = [
  {
    src: "/images/veg/plant/plant-hero.png",
    alt: "Mohali plant exterior at golden hour",
    caption: "Mohali · Manufacturing",
  },
  {
    src: "/plant/plant-house.jpg",
    alt: "Plant interior with production line",
    caption: "Production line",
  },
  {
    src: "/images/veg/lifestyle/cloud-kitchen.png",
    alt: "Cloud kitchen plating operations",
    caption: "Operations · Cloud kitchen pass",
  },
  {
    src: "/images/veg/lifestyle/sizzle-closeup.png",
    alt: "R&D test kitchen sizzle close-up",
    caption: "R&D · Test kitchen",
  },
];

type Pointer = {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  metric: string;
  label: string;
};

const POINTERS: Pointer[] = [
  { icon: Factory, metric: "18,000 MT", label: "Annual veg capacity" },
  { icon: Award, metric: "BRC + FSSC", label: "Certified lines" },
  { icon: History, metric: "30+ years", label: "Manufacturing heritage" },
  { icon: Store, metric: "5,000+", label: "Outlets served" },
  { icon: FlaskConical, metric: "R&D-led", label: "Custom builds, your menu" },
  { icon: ShieldCheck, metric: "Halal-line", label: "Ready, every SKU" },
];

export default function WhyUnifayreDynamic({ id = "why" }: { id?: string }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const slide = SLIDES[idx];

  return (
    <section
      id={id}
      className="relative isolate overflow-hidden bg-[color:var(--bg)] text-ink"
    >
      {/* Rotating background images — visible against cream */}
      <div className="absolute inset-0">
        {SLIDES.map((s, i) => (
          <motion.div
            key={s.src}
            initial={false}
            animate={{
              opacity: i === idx ? 0.55 : 0,
              scale: i === idx ? 1 : 1.06,
            }}
            transition={{
              opacity: { duration: 1.4, ease: "easeInOut" },
              scale: { duration: 7, ease: "easeOut" },
            }}
            className="absolute inset-0"
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        ))}

        {/* Cream wash so left content reads */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(95deg, rgba(250,246,238,0.92) 0%, rgba(250,246,238,0.7) 22%, rgba(250,246,238,0.35) 42%, rgba(250,246,238,0.15) 58%, rgba(250,246,238,0.4) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[color:var(--bg)] to-transparent"
        />
      </div>

      {/* Cream/earth blob accent */}
      <div
        aria-hidden
        className="cream-blob pointer-events-none absolute -bottom-20 left-10 h-[420px] w-[420px] rounded-full opacity-50"
      />

      <div className="relative mx-auto grid min-h-[88svh] max-w-[1320px] items-center gap-12 px-5 py-24 md:grid-cols-[1fr_1.05fr] md:gap-14 md:px-10 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="flex flex-col"
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
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
            }}
            className="mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--earth)]"
          >
            Why Unifayre
          </motion.span>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.95, ease: EASE } },
            }}
            className="mt-5 font-display text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight text-ink"
          >
            Built To Deliver,
            <br />
            <em className="italic text-[color:var(--earth)]">Always.</em>
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
            }}
            className="mt-5 max-w-[34rem] text-base md:text-lg leading-relaxed text-ink-soft"
          >
            Over 30 years of precision manufacturing, BRC-certified lines, and
            an R&amp;D team that builds to your menu, region, and palate.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: EASE, delay: 0.2 },
              },
            }}
            className="mt-8 flex items-center gap-4"
          >
            <div className="flex items-center gap-1.5">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Show slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === idx
                      ? "w-6 bg-[color:var(--earth)]"
                      : "w-1.5 bg-ink-muted/40 hover:bg-ink-muted/70"
                  }`}
                />
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.span
                key={`cap-${idx}`}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -6 }}
                transition={{ duration: 0.4 }}
                className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--earth)]"
              >
                {slide.caption}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: EASE, delay: 0.3 },
              },
            }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="group btn-earth inline-flex items-center gap-2 rounded-full px-6 py-3 text-[0.86rem] font-semibold shadow-[0_14px_36px_-12px_rgba(124,92,61,0.45)]"
            >
              Request Sample
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#pillars"
              className="btn-earth-outline inline-flex items-center gap-2 rounded-full px-6 py-3 text-[0.86rem] font-semibold backdrop-blur"
            >
              See our pillars
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
          }}
          className="grid grid-cols-2 gap-3 md:gap-4"
        >
          {POINTERS.map((p) => (
            <motion.div
              key={p.label}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: EASE },
                },
              }}
              whileHover={{ y: -3 }}
              className="group flex flex-col gap-2 rounded-2xl border border-[color:var(--line)] bg-[color:var(--bg-paper)]/85 p-4 backdrop-blur-md transition-all hover:border-[color:var(--earth)] md:p-5"
            >
              <p.icon
                className="h-5 w-5 text-[color:var(--earth)] transition-transform duration-300 group-hover:scale-110"
                strokeWidth={1.6}
              />
              <span className="font-display text-xl md:text-2xl font-medium leading-none tracking-tight text-ink">
                {p.metric}
              </span>
              <span className="text-[0.72rem] font-medium leading-snug text-ink-soft">
                {p.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
