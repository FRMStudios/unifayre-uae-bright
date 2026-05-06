"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CountUp from "@/components/ui/CountUp";

const EASE = [0.22, 1, 0.36, 1] as const;

const ITEMS = [
  "Halal across every SKU",
  "Cold-chain & dry-freight ready",
  "White-label for private brands",
  "R&D for regional menus",
];

export default function BuiltForUAE() {
  return (
    <section
      id="uae"
      className="relative bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="relative overflow-hidden rounded-[28px] bg-ink text-white md:rounded-[32px]">
          <div className="absolute inset-0">
            <Image
              src="/hero/b2.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-40"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/85 to-ink/40" />
          <div
            aria-hidden
            className="orange-blob pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full"
          />

          <div className="relative grid gap-10 p-7 md:grid-cols-2 md:gap-16 md:p-14 lg:p-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="flex flex-col justify-center"
            >
              <span className="eyebrow text-[color:var(--orange-bright)]">
                Built for the Gulf
              </span>
              <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,3.8rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-white">
                Ready for{" "}
                <span className="text-[color:var(--orange-bright)]">your</span>{" "}
                market.
              </h2>
              <p className="mt-5 max-w-[30rem] text-[1rem] leading-relaxed text-white/70">
                Manufacturing, packaging, and compliance calibrated for UAE and
                Gulf distribution, HoReCa, and modern trade.
              </p>
              <div className="mt-8">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[0.92rem] font-semibold text-ink transition-all hover:bg-[color:var(--orange)] hover:text-white"
                >
                  Talk to the UAE desk
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.12 }}
              className="flex flex-col gap-3"
            >
              {ITEMS.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    ease: EASE,
                    delay: 0.2 + i * 0.08,
                  }}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm transition-colors hover:border-white/25 hover:bg-white/10 md:p-5"
                >
                  <CountUp
                    value={i + 1}
                    padTo={2}
                    duration={0.9}
                    className="font-display text-[1.1rem] font-extrabold text-[color:var(--orange-bright)] tabular-nums"
                  />
                  <span className="font-display text-[1.05rem] font-semibold tracking-[-0.01em] text-white md:text-[1.15rem]">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
