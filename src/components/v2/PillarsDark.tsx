"use client";

/**
 * Pillars — bright variant.
 * (File name retains "Dark" for git-diff readability across the bright fork.)
 *
 * Four uniform tiles in a horizontal scroller, image-led with a paper-cream
 * label band at the bottom for the title + body. Earth accent throughout.
 */

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Clock,
  LayoutGrid,
  FlaskConical,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type IconType = React.ComponentType<{
  className?: string;
  strokeWidth?: number;
}>;

type Pillar = {
  number: string;
  title: string;
  body: string;
  icon: IconType;
  image: string;
};

const PILLARS: Pillar[] = [
  {
    number: "01",
    title: "Reliability you can forecast.",
    body: "Predictable lead times. On-time shipments. Built for export schedules, cold-chain and dry-freight.",
    icon: Clock,
    image: "/images/veg/lifestyle/cloud-kitchen.png",
  },
  {
    number: "02",
    title: "Consistency at scale.",
    body: "Same spec, every shipment, every store. Across 5,000+ outlets served. Repeatable down to the gram.",
    icon: LayoutGrid,
    image: "/images/veg/plant/plant-hero.png",
  },
  {
    number: "03",
    title: "Customisation, built-in.",
    body: "Science-backed R&D. Built to your menu, region, and palate.",
    icon: FlaskConical,
    image: "/images/veg/lifestyle/chef-plating.png",
  },
  {
    number: "04",
    title: "Compliance & safety.",
    body: "BRC · FSSC 22000 · Halal · FDA. Audited, certified, documented.",
    icon: ShieldCheck,
    image: "/images/veg/lifestyle/hotel-buffet.png",
  },
];

export default function PillarsDark({ id = "pillars" }: { id?: string }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const update = () => {
      setCanPrev(el.scrollLeft > 4);
      setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollByDir = (dir: "prev" | "next") => {
    const el = scrollerRef.current;
    if (!el) return;
    const firstTile = el.firstElementChild as HTMLElement | null;
    const tileWidth = firstTile?.offsetWidth ?? 320;
    const gap = 20;
    const distance = tileWidth + gap;
    el.scrollBy({
      left: dir === "prev" ? -distance : distance,
      behavior: "smooth",
    });
  };

  return (
    <section
      id={id}
      className="relative bg-[color:var(--bg-soft)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-12 flex flex-col items-start justify-between gap-5 md:mb-16 md:flex-row md:items-end"
        >
          <div>
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--earth)]">
              Why Unifayre
            </span>
            <h2 className="mt-3 max-w-[20ch] font-display text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight text-ink">
              Four{" "}
              <em className="italic text-[color:var(--earth)]">
                non-negotiables.
              </em>
            </h2>
          </div>
          <div className="flex items-end gap-5">
            <p className="max-w-[26rem] text-base leading-relaxed text-ink-soft">
              Built for partners who can&rsquo;t afford inconsistency. Built
              for menus that scale.
            </p>
            <div className="hidden shrink-0 items-center gap-2 md:flex">
              <ScrollButton
                onClick={() => scrollByDir("prev")}
                disabled={!canPrev}
                ariaLabel="Previous pillar"
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={1.8} />
              </ScrollButton>
              <ScrollButton
                onClick={() => scrollByDir("next")}
                disabled={!canNext}
                ariaLabel="Next pillar"
              >
                <ChevronRight className="h-5 w-5" strokeWidth={1.8} />
              </ScrollButton>
            </div>
          </div>
        </motion.div>

        <div
          ref={scrollerRef}
          className="scrollbar-none -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 md:-mx-10 md:gap-5 md:px-10"
        >
          {PILLARS.map((p, i) => (
            <div
              key={p.number}
              className="w-[78%] shrink-0 snap-start sm:w-[48%] md:w-[40%] lg:w-[32%] xl:w-[28%]"
            >
              <PillarTile pillar={p} delay={i * 0.08} />
            </div>
          ))}
        </div>
        <p className="mt-4 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-ink-muted/70 md:hidden">
          Swipe to see more →
        </p>
      </div>
    </section>
  );
}

function ScrollButton({
  onClick,
  disabled,
  ariaLabel,
  children,
}: {
  onClick: () => void;
  disabled: boolean;
  ariaLabel: string;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--bg-paper)]/80 text-ink backdrop-blur-md transition-all hover:border-[color:var(--earth)] hover:text-[color:var(--earth)] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-[color:var(--line)] disabled:hover:text-ink"
    >
      {children}
    </button>
  );
}

function PillarTile({ pillar, delay }: { pillar: Pillar; delay: number }) {
  const Icon = pillar.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease: EASE, delay }}
      whileHover={{ y: -4 }}
      className="group relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-[24px] border border-[color:var(--line)] bg-[color:var(--bg-paper)] p-7 text-ink transition-all hover:border-[color:var(--earth)] hover:shadow-[0_24px_48px_-24px_rgba(124,92,61,0.3)] sm:aspect-[5/4] md:p-8"
    >
      {/* Image fills the upper part of the tile */}
      <div className="absolute inset-x-0 top-0 h-[58%] overflow-hidden">
        <Image
          src={pillar.image}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        />
        {/* Subtle bottom fade so image transitions into the cream label band */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[color:var(--bg-paper)] to-transparent"
        />
      </div>

      {/* Top row: number badge + icon */}
      <div className="relative flex items-start justify-between">
        <span className="inline-flex items-center rounded-full border border-[color:var(--earth)]/40 bg-[color:var(--bg-paper)]/85 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[color:var(--earth)] backdrop-blur">
          {pillar.number}
        </span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--bg-paper)]/85 text-[color:var(--earth)] shadow-[0_4px_12px_rgba(42,37,32,0.08)] backdrop-blur transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-4 w-4" strokeWidth={1.6} />
        </span>
      </div>

      {/* Bottom: title + body on cream */}
      <div className="relative">
        <h3 className="font-display text-[1.4rem] md:text-[1.6rem] font-medium leading-tight tracking-tight text-ink">
          {pillar.title}
        </h3>
        <p className="mt-3 text-[0.92rem] leading-relaxed text-ink-soft">
          {pillar.body}
        </p>
      </div>
    </motion.div>
  );
}
