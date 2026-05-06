"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";

const EASE = [0.22, 1, 0.36, 1] as const;

type Stat = {
  value: number;
  suffix: string;
  label: string;
};

const STATS: Stat[] = [
  { value: 30, suffix: "+", label: "Years Heritage" },
  { value: 30800, suffix: " MT", label: "Annual Capacity" },
  { value: 194, suffix: "+", label: "Active SKUs" },
  { value: 5000, suffix: "+", label: "Stores Served" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-[color:var(--line)] bg-white">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="grid grid-cols-2 divide-[color:var(--line-soft)] md:grid-cols-4 md:divide-x">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
              className={`flex flex-col items-start gap-1.5 px-5 py-10 md:px-10 md:py-12 ${
                i % 2 !== 0
                  ? "border-l border-[color:var(--line-soft)] md:border-l-0"
                  : ""
              } ${i < 2 ? "border-b border-[color:var(--line-soft)] md:border-b-0" : ""}`}
            >
              <span className="whitespace-nowrap font-display text-[clamp(2rem,3.6vw,3rem)] font-extrabold leading-none tracking-[-0.03em] text-ink tabular-nums">
                <CountUp value={s.value} duration={1.5} />
                <span className="text-[color:var(--orange)]">{s.suffix}</span>
              </span>
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
