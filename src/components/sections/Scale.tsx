"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";

const EASE = [0.22, 1, 0.36, 1] as const;

const SCALE_STATS: {
  value: number;
  suffix: string;
  label: string;
}[] = [
  { value: 18000, suffix: " MT", label: "Veg Plant Capacity" },
  { value: 8000, suffix: " / hr", label: "Tortillas" },
  { value: 4500, suffix: " / hr", label: "Roti Canai" },
  { value: 1500, suffix: " kg / hr", label: "Spiral Freezer" },
];

export default function Scale() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-12 max-w-2xl"
        >
          <span className="eyebrow text-[color:var(--orange)]">
            Manufacturing Scale
          </span>
          <h2 className="mt-3 font-display text-[clamp(2.2rem,4.5vw,3.4rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-ink">
            State-of-the-art technology,{" "}
            <span className="text-[color:var(--ink-muted)]">every line.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-0 overflow-hidden rounded-[24px] border border-[color:var(--line)] bg-white md:grid-cols-4">
          {SCALE_STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
              className={`flex flex-col gap-2 bg-white p-8 md:p-10 ${
                i > 0
                  ? "md:border-l md:border-[color:var(--line-soft)]"
                  : ""
              } ${
                i % 2 !== 0
                  ? "border-l border-[color:var(--line-soft)] md:border-l"
                  : ""
              } ${i < 2 ? "border-b border-[color:var(--line-soft)] md:border-b-0" : ""}`}
            >
              <span className="whitespace-nowrap font-display text-[clamp(1.5rem,2.4vw,2.1rem)] font-extrabold leading-none tracking-[-0.03em] text-ink tabular-nums">
                <CountUp value={s.value} duration={1.5} />
                <span className="text-[color:var(--orange)]">{s.suffix}</span>
              </span>
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
