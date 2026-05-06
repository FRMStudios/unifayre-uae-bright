"use client";

/**
 * LifestyleStrip
 *
 * Horizontal strip of cinematic 16:9 lifestyle frames (QSR plate, cloud
 * kitchen, hotel buffet, fine-dine plating, sizzle, etc.). Each frame has a
 * gold uppercase caption beneath. On desktop the row sits side-by-side; on
 * mobile it becomes a swipeable horizontal scroller.
 */

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export type LifestyleFrame = {
  src: string;
  alt: string;
  caption: string;
};

export type LifestyleStripProps = {
  eyebrow?: string;
  title?: React.ReactNode;
  subline?: React.ReactNode;
  frames: LifestyleFrame[];
};

export default function LifestyleStrip({
  eyebrow,
  title,
  subline,
  frames,
}: LifestyleStripProps) {
  return (
    <section className="relative overflow-hidden bg-[color:var(--bg-deep)] py-20 md:py-24">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mb-10 flex flex-col items-start gap-3 md:mb-14"
          >
            {eyebrow && (
              <>
                <div className="gold-line w-16 md:w-24" />
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--accent-gold)]">
                  {eyebrow}
                </span>
              </>
            )}
            {title && (
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-light leading-tight tracking-tight text-[color:var(--text-primary)]">
                {title}
              </h2>
            )}
            {subline && (
              <p className="max-w-xl text-sm md:text-base font-light leading-relaxed text-[color:var(--text-primary)]/85">
                {subline}
              </p>
            )}
          </motion.div>
        )}
      </div>

      {/* Horizontal frames — scrollable on mobile, grid on desktop */}
      <div className="scrollbar-none overflow-x-auto md:overflow-visible">
        <div className="mx-auto flex w-max max-w-[1320px] gap-4 px-5 md:w-full md:grid md:grid-cols-5 md:gap-4 md:px-10">
          {frames.map((frame, i) => (
            <motion.figure
              key={frame.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                ease: EASE,
                delay: i * 0.08,
              }}
              className="group flex w-[78vw] shrink-0 flex-col gap-3 sm:w-[55vw] md:w-auto"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--bg-warm-shadow)] transition-all hover:border-[color:var(--accent-gold)]">
                <Image
                  src={frame.src}
                  alt={frame.alt}
                  fill
                  sizes="(max-width: 768px) 78vw, (max-width: 1024px) 55vw, 18vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[color:var(--bg-deep)]/55 via-transparent to-transparent"
                />
              </div>
              <figcaption className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-gold)]">
                {frame.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
