"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const APPLICATIONS = [
  "Wraps",
  "Curry base",
  "Stuffed murtabak",
  "Dessert format",
  "Pizza base",
  "Breakfast platter",
];

export default function Signature() {
  return (
    <section className="relative bg-white py-14 md:py-20">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="grid items-center gap-8 md:grid-cols-[0.95fr_1.05fr] md:gap-10 lg:gap-14">
          {/* Image panel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] bg-ink md:aspect-square md:rounded-[28px]"
          >
            <Image
              src="/products/flatbreads/roti-canai.jpg"
              alt="Roti Canai flaky layered flatbread"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/5 to-black/40" />

            {/* Only in India badge */}
            <div className="absolute left-5 top-5 md:left-6 md:top-6">
              <div className="rounded-full bg-white px-4 py-1.5 shadow-[0_6px_18px_-6px_rgba(0,0,0,0.25)]">
                <span className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[color:var(--orange)]">
                  Only in India
                </span>
              </div>
            </div>

            {/* Capacity pill bottom */}
            <div className="absolute bottom-5 right-5 rounded-2xl bg-white/95 px-4 py-3 backdrop-blur-md md:bottom-6 md:right-6">
              <div className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                Production
              </div>
              <div className="font-display text-[1.1rem] font-bold text-ink">
                4,500 pcs / hour
              </div>
            </div>
          </motion.div>

          {/* Copy panel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <span className="eyebrow mb-3 text-[color:var(--orange)]">
              Signature product
            </span>

            <h2 className="font-display text-[clamp(2.4rem,5vw,3.8rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-ink">
              Roti <span className="text-[color:var(--orange)]">Canai</span>.
            </h2>

            <p className="mt-3 max-w-[30rem] text-[0.98rem] leading-relaxed text-ink-soft">
              The flaky, layered Malaysian-style flatbread. Manufactured at
              commercial volume. Only in India by us.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {APPLICATIONS.map((chip, i) => (
                <motion.span
                  key={chip}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.5,
                    ease: EASE,
                    delay: 0.3 + i * 0.06,
                  }}
                  className="inline-flex items-center rounded-full border border-[color:var(--line)] bg-white px-3.5 py-1.5 text-[0.8rem] font-medium text-ink-soft transition-all hover:border-[color:var(--orange)] hover:text-ink"
                >
                  {chip}
                </motion.span>
              ))}
            </div>

            <div className="mt-6">
              <a
                href="#contact"
                className="group btn-orange inline-flex items-center gap-2 rounded-full px-6 py-3 text-[0.9rem] font-semibold shadow-[0_10px_30px_-10px_rgba(255,106,44,0.6)]"
              >
                Request Sample
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
