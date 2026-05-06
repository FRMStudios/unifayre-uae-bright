"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Clock,
  LayoutGrid,
  FlaskConical,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Pillars() {
  return (
    <section id="why" className="bg-[color:var(--bg-soft)] py-20 md:py-28">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-12 flex flex-col items-start justify-between gap-4 md:mb-16 md:flex-row md:items-end"
        >
          <div>
            <span className="eyebrow text-[color:var(--orange)]">
              Why Unifayre
            </span>
            <h2 className="mt-3 max-w-[20ch] font-display text-[clamp(2.4rem,5vw,3.8rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-ink">
              Four{" "}
              <span className="text-[color:var(--ink-muted)]">
                non-negotiables.
              </span>
            </h2>
          </div>
          <p className="max-w-[26rem] text-[0.98rem] leading-relaxed text-ink-soft">
            Built for partners who can&rsquo;t afford inconsistency. Built for
            menus that scale.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-2 md:gap-5">
          {/* Tile 1 — Large dark featured with factory bg */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="card-hover group relative flex flex-col justify-between overflow-hidden rounded-[24px] bg-ink p-7 text-white md:col-span-3 md:row-span-2 md:p-10"
          >
            {/* Factory photo background */}
            <Image
              src="/plant/plant-house.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-[1.03]"
            />
            {/* Dark tint for readability */}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-br from-ink/95 via-ink/80 to-ink/40"
            />
            <div
              aria-hidden
              className="orange-blob pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full opacity-90"
            />
            <div className="relative">
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white">
                01 · Flagship
              </span>
              <LayoutGrid
                className="mt-6 h-6 w-6 text-[color:var(--orange)]"
                strokeWidth={1.8}
              />
              <h3 className="mt-6 font-display text-[clamp(1.8rem,3.2vw,2.6rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
                Consistency at scale.
              </h3>
              <p className="mt-3 max-w-[26rem] text-[0.95rem] leading-relaxed text-white/70">
                Same spec, every shipment, every store. Across 5,000+ outlets
                served. Repeatable down to the gram.
              </p>
            </div>
            <div className="relative mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <Stat value="5,000+" label="Stores served" />
              <Stat value="194+" label="Active SKUs" />
              <Stat value="30+" label="Years tuned" />
            </div>
          </motion.div>

          {/* Tile 2 — Reliability (top right) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
            className="card-hover group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-[color:var(--line)] bg-white p-7 md:col-span-3 md:p-8"
          >
            <div className="flex items-start justify-between">
              <Clock
                className="h-6 w-6 text-[color:var(--orange)]"
                strokeWidth={1.8}
              />
              <span className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-ink-muted">
                02
              </span>
            </div>
            <div className="mt-10">
              <h3 className="font-display text-[1.6rem] font-extrabold leading-tight tracking-[-0.025em] text-ink">
                Reliability you can forecast.
              </h3>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-ink-soft">
                Predictable lead times. On-time shipments. Built for export
                schedules, cold-chain and dry-freight.
              </p>
            </div>
          </motion.div>

          {/* Tile 3 — Customisation */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.16 }}
            className="card-hover group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-[color:var(--line)] bg-[color:var(--orange-soft)] p-7 md:col-span-2 md:p-8"
          >
            <div className="flex items-start justify-between">
              <FlaskConical
                className="h-6 w-6 text-[color:var(--orange)]"
                strokeWidth={1.8}
              />
              <span className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[color:var(--orange)]">
                03
              </span>
            </div>
            <div className="mt-10">
              <h3 className="font-display text-[1.4rem] font-extrabold leading-tight tracking-[-0.025em] text-ink">
                Customisation, built-in.
              </h3>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-ink-soft">
                Science-backed R&amp;D. Built to your menu, region, and palate.
              </p>
            </div>
          </motion.div>

          {/* Tile 4 — Compliance */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.24 }}
            className="card-hover group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-[color:var(--line)] bg-white p-7 md:col-span-1 md:p-7"
          >
            <div className="flex items-start justify-between">
              <ShieldCheck
                className="h-6 w-6 text-[color:var(--orange)]"
                strokeWidth={1.8}
              />
              <ArrowUpRight
                className="h-4 w-4 text-ink-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[color:var(--orange)]"
                strokeWidth={2}
              />
            </div>
            <div className="mt-10">
              <span className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-ink-muted">
                04
              </span>
              <h3 className="mt-2 font-display text-[1.15rem] font-extrabold leading-tight tracking-[-0.02em] text-ink">
                Compliance &amp; safety.
              </h3>
              <p className="mt-2 text-[0.82rem] leading-snug text-ink-soft">
                BRC · FSSC 22000 · Halal · FDA.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="font-display text-[1.3rem] font-extrabold leading-none tracking-[-0.02em] text-white">
        {value}
      </span>
      <span className="text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-white/55">
        {label}
      </span>
    </div>
  );
}
