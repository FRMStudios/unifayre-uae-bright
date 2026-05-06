"use client";

/**
 * CertificationsDark — V2 5 circular cert badges on dark navy.
 * Gold border, dark fill, gold check chip at bottom-right.
 */

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const CERTS = [
  { code: "BRC", label: "Food Safety" },
  { code: "FSSC 22000", label: "Global Safety" },
  { code: "Halal", label: "Halal Certified" },
  { code: "US FDA", label: "FDA Compliant" },
  { code: "ISO", label: "ISO Certified" },
];

export default function CertificationsDark({
  id = "certifications",
}: {
  id?: string;
}) {
  return (
    <section
      id={id}
      className="bg-[color:var(--bg-deep)] py-14 md:py-20"
    >
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-10 flex flex-col items-center gap-2 text-center md:mb-12"
        >
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--accent-gold)]">
            Compliance-Ready
          </span>
          <p className="font-display text-2xl md:text-3xl lg:text-4xl font-light leading-tight tracking-tight text-[color:var(--text-primary)]">
            Certified for{" "}
            <em className="italic text-[color:var(--accent-gold)]">
              every shelf.
            </em>
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-5 md:gap-8">
          {CERTS.map((cert, i) => (
            <motion.div
              key={cert.code}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.07 }}
              className="group flex flex-col items-center gap-2"
            >
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-[color:var(--border-gold)] bg-[color:var(--bg-warm-shadow)] transition-all duration-300 group-hover:border-[color:var(--accent-gold)] group-hover:shadow-[0_10px_30px_-8px_rgba(201,169,97,0.45)] md:h-28 md:w-28">
                <span className="text-center font-display text-[0.95rem] font-light tracking-tight text-[color:var(--text-primary)] transition-colors duration-300 group-hover:text-[color:var(--accent-gold)] md:text-[1.05rem]">
                  {cert.code}
                </span>
                <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-[color:var(--accent-gold)] text-[color:var(--bg-deep)] shadow-[0_4px_10px_-2px_rgba(201,169,97,0.55)]">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
              </div>
              <span className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                {cert.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
