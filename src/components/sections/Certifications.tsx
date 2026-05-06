"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const CERTS = [
  { code: "BRC", label: "Food Safety" },
  { code: "FSSC\u00A022000", label: "Global Safety" },
  { code: "Halal", label: "Halal Certified" },
  { code: "US FDA", label: "FDA Compliant" },
  { code: "ISO", label: "ISO Certified" },
];

export default function Certifications() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-8 flex flex-col items-center gap-1.5 text-center md:mb-10"
        >
          <span className="eyebrow text-[color:var(--orange)]">
            Compliance-Ready
          </span>
          <p className="font-display text-[1.5rem] font-extrabold leading-tight tracking-[-0.02em] text-ink md:text-[1.85rem]">
            Certified for every shelf.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-7">
          {CERTS.map((cert, i) => (
            <motion.div
              key={cert.code}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                ease: EASE,
                delay: i * 0.07,
              }}
              className="group flex flex-col items-center gap-2"
            >
              <div
                className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-[color:var(--line)] bg-white shadow-[0_2px_6px_rgba(15,15,16,0.06)] transition-all duration-300 group-hover:border-[color:var(--orange)] group-hover:shadow-[0_10px_24px_-8px_rgba(255,106,44,0.35)] md:h-28 md:w-28"
              >
                <span className="text-center font-display text-[0.95rem] font-extrabold tracking-[-0.01em] text-ink transition-colors duration-300 group-hover:text-[color:var(--orange)] md:text-[1.05rem]">
                  {cert.code}
                </span>
                <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-[color:var(--orange)] text-white shadow-[0_4px_10px_-2px_rgba(255,106,44,0.55)]">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
              </div>
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                {cert.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
