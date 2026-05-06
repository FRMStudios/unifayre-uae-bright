"use client";

/**
 * CategoryBanner — V2 cinematic category banner without a product grid.
 *
 * Replaces the old CategorySection on the /vegetarian one-pager. Banner only.
 * The full product portfolio lives in a single ProductPortfolioDark section
 * lower on the page.
 *
 * Interactions:
 * - Parallax on the background image (drifts ±10% as the section scrolls).
 * - Subtle Ken Burns scale on the hero image while in view.
 * - Content panel fades and lifts in on intersection.
 */

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export type CategoryBannerProps = {
  number: string;
  title: string;
  description: string;
  capacity: string;
  bannerSrc: string;
  bannerAlt: string;
  imageObjectPosition?: string;
  anchorId?: string;
};

export default function CategoryBanner({
  number,
  title,
  description,
  capacity,
  bannerSrc,
  bannerAlt,
  imageObjectPosition = "right center",
  anchorId,
}: CategoryBannerProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax: image drifts ±10% as section passes through viewport
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  // Ken-Burns-like scale tied to scroll for subtle motion at all scroll positions
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.04, 1.08, 1.04]);
  // Content opacity nudge — clearer at the centre of the section
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0.55, 1, 1, 0.7]
  );

  return (
    <section
      ref={ref}
      id={anchorId}
      className="relative overflow-hidden border-b border-[color:var(--border-subtle)] bg-[color:var(--bg-deep)]"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden md:aspect-[21/8]">
        {/* Parallax-translated image layer (oversized to avoid edge gaps) */}
        <motion.div
          style={{ y, scale }}
          className="absolute -inset-y-[12%] inset-x-0"
        >
          <Image
            src={bannerSrc}
            alt={bannerAlt}
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: imageObjectPosition }}
          />
        </motion.div>

        {/* Mobile overlay — full darken so left content reads */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-[color:var(--bg-deep)] via-[color:var(--bg-deep)]/55 to-[color:var(--bg-deep)]/15 md:hidden"
        />

        {/* Desktop overlay — left sweep so headline reads against image */}
        <div
          aria-hidden
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(10,22,40,0.85) 0%, rgba(10,22,40,0.55) 28%, rgba(10,22,40,0.15) 52%, transparent 72%)",
          }}
        />

        {/* Bottom navy fade so banner blends into next section */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[color:var(--bg-deep)] to-transparent"
        />

        {/* Content panel — bottom-aligned mobile, left-centered desktop */}
        <div className="absolute inset-0 flex items-end md:items-center">
          <motion.div
            style={{ opacity: contentOpacity }}
            className="mx-auto w-full max-w-[1320px] px-5 pb-12 md:px-10 md:pb-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.85, ease: EASE }}
              className="max-w-[520px]"
            >
              <div className="gold-line w-16 md:w-24" />
              <div className="mt-5 font-display text-5xl md:text-6xl font-light leading-none tracking-tighter text-[color:var(--accent-gold)]">
                {number}
              </div>
              <h2 className="mt-3 font-display text-2xl md:text-3xl lg:text-4xl font-light leading-tight tracking-tight text-[color:var(--text-primary)]">
                {title}
              </h2>
              <p className="mt-3 max-w-md text-sm md:text-base lg:text-lg font-light leading-relaxed text-[color:var(--text-primary)]/85">
                {description}
              </p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[color:var(--border-gold)] bg-[color:var(--bg-warm-shadow)]/60 px-4 py-1.5 text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-gold)] backdrop-blur">
                <span className="h-1 w-1 rounded-full bg-[color:var(--accent-gold)]" />
                {capacity}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
