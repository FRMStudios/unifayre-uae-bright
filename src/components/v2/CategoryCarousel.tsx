"use client";

/**
 * CategoryCarousel — V2 single-section auto-rotating category showcase.
 *
 * No external section header or tab strip — all controls live ON the banner:
 *   - Top-left: category indicator strip (numbers + short labels, active in gold)
 *   - Side left/right: arrow buttons for manual prev/next
 *   - Top-right: pause/play
 * Slides cycle every `autoplayMs` (default 6s) with crossfade + Ken Burns.
 */

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export type CategorySlide = {
  number: string;
  title: string;
  description: string;
  capacity: string;
  bannerSrc: string;
  bannerAlt: string;
  imageObjectPosition?: string;
  shortLabel?: string;
};

export type CategoryCarouselProps = {
  slides: CategorySlide[];
  autoplayMs?: number;
  anchorId?: string;
};

export default function CategoryCarousel({
  slides,
  autoplayMs = 6000,
  anchorId,
}: CategoryCarouselProps) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % slides.length);
    }, autoplayMs);
    return () => clearInterval(t);
  }, [paused, slides.length, autoplayMs]);

  if (slides.length === 0) return null;
  const slide = slides[idx];
  const goTo = (i: number) => setIdx((i + slides.length) % slides.length);
  const next = () => goTo(idx + 1);
  const prev = () => goTo(idx - 1);

  return (
    <section
      id={anchorId}
      className="relative border-b border-[color:var(--border-subtle)] bg-[color:var(--bg-deep)]"
    >
      <div
        className="relative aspect-[16/9] w-full overflow-hidden md:aspect-[21/8]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Image stack */}
        {slides.map((s, i) => (
          <motion.div
            key={s.bannerSrc}
            initial={false}
            animate={{
              opacity: i === idx ? 1 : 0,
              scale: i === idx ? 1.02 : 1.06,
            }}
            transition={{
              opacity: { duration: 1.1, ease: "easeInOut" },
              scale: { duration: 7, ease: "easeOut" },
            }}
            className="absolute inset-0"
          >
            <Image
              src={s.bannerSrc}
              alt={s.bannerAlt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: s.imageObjectPosition ?? "right center" }}
            />
          </motion.div>
        ))}

        {/* Mobile darken */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-[color:var(--bg-deep)] via-[color:var(--bg-deep)]/55 to-[color:var(--bg-deep)]/15 md:hidden"
        />

        {/* Desktop left sweep */}
        <div
          aria-hidden
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(10,22,40,0.85) 0%, rgba(10,22,40,0.55) 28%, rgba(10,22,40,0.15) 52%, transparent 72%)",
          }}
        />

        {/* Top fade so the indicator strip stays legible */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 z-[1] h-24 bg-gradient-to-b from-[color:var(--bg-deep)]/65 to-transparent"
        />

        {/* Bottom navy fade so banner blends into next section */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[color:var(--bg-deep)] to-transparent"
        />

        {/* Top indicator strip — numbered category list, active highlighted.
            Centred on desktop, scrollable + left-aligned on mobile so the
            strip never overlaps the right-side pause control. */}
        <div className="absolute inset-x-0 top-0 z-10 px-5 pt-5 md:px-10 md:pt-7">
          <div className="scrollbar-none flex items-center gap-3 overflow-x-auto whitespace-nowrap md:justify-center md:gap-5">
            {slides.map((s, i) => {
              const active = i === idx;
              return (
                <button
                  key={s.number}
                  onClick={() => goTo(i)}
                  className="group inline-flex shrink-0 items-baseline gap-1.5 transition-all"
                >
                  <span
                    className={`font-display text-[0.78rem] font-light tracking-tight transition-colors md:text-[0.85rem] ${
                      active
                        ? "text-[color:var(--accent-gold)]"
                        : "text-[color:var(--text-secondary)]/55 group-hover:text-[color:var(--accent-gold)]/80"
                    }`}
                  >
                    {s.number}
                  </span>
                  <span
                    className={`text-[0.74rem] font-medium tracking-wide transition-colors md:text-[0.8rem] ${
                      active
                        ? "text-[color:var(--text-primary)]"
                        : "text-[color:var(--text-secondary)]/55 group-hover:text-[color:var(--text-primary)]"
                    }`}
                  >
                    {s.shortLabel ?? s.title}
                  </span>
                  {i < slides.length - 1 && (
                    <span className="ml-3 text-[color:var(--text-secondary)]/30 md:ml-5">
                      ·
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pause / play — top right */}
        <button
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Resume autoplay" : "Pause autoplay"}
          className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border-subtle)] bg-[color:var(--bg-deep)]/65 text-[color:var(--text-primary)] backdrop-blur-md transition-all hover:border-[color:var(--accent-gold)] hover:text-[color:var(--accent-gold)] md:right-8 md:top-7 md:h-10 md:w-10"
        >
          {paused ? (
            <Play className="h-3.5 w-3.5 md:h-4 md:w-4" strokeWidth={2} />
          ) : (
            <Pause className="h-3.5 w-3.5 md:h-4 md:w-4" strokeWidth={2} />
          )}
        </button>

        {/* Prev arrow */}
        <button
          onClick={prev}
          aria-label="Previous category"
          className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[color:var(--border-subtle)] bg-[color:var(--bg-deep)]/65 text-[color:var(--text-primary)] backdrop-blur-md transition-all hover:border-[color:var(--accent-gold)] hover:text-[color:var(--accent-gold)] md:left-6 md:h-12 md:w-12"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={1.8} />
        </button>

        {/* Next arrow */}
        <button
          onClick={next}
          aria-label="Next category"
          className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[color:var(--border-subtle)] bg-[color:var(--bg-deep)]/65 text-[color:var(--text-primary)] backdrop-blur-md transition-all hover:border-[color:var(--accent-gold)] hover:text-[color:var(--accent-gold)] md:right-6 md:h-12 md:w-12"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={1.8} />
        </button>

        {/* Content panel — crossfades with idx */}
        <div className="absolute inset-0 flex items-end md:items-center">
          <div className="mx-auto w-full max-w-[1320px] px-5 pb-12 md:px-10 md:pb-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.55, ease: EASE }}
                className="max-w-[520px]"
              >
                <div className="gold-line w-16 md:w-24" />
                <div className="mt-5 font-display text-5xl md:text-6xl font-light leading-none tracking-tighter text-[color:var(--accent-gold)]">
                  {slide.number}
                </div>
                <h3 className="mt-3 font-display text-2xl md:text-3xl lg:text-4xl font-light leading-tight tracking-tight text-[color:var(--text-primary)]">
                  {slide.title}
                </h3>
                <p className="mt-3 max-w-md text-sm md:text-base lg:text-lg font-light leading-relaxed text-[color:var(--text-primary)]/85">
                  {slide.description}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[color:var(--border-gold)] bg-[color:var(--bg-warm-shadow)]/60 px-4 py-1.5 text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-gold)] backdrop-blur">
                  <span className="h-1 w-1 rounded-full bg-[color:var(--accent-gold)]" />
                  {slide.capacity}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
