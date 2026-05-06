"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { TILES, productsByTile, type Tile } from "@/lib/products";

const EASE = [0.22, 1, 0.36, 1] as const;

export type RangeSelectDetail = {
  scope: "veg" | "non-veg";
  sub: Tile["subTab"];
};

function handleTileClick(e: React.MouseEvent, tile: Tile) {
  e.preventDefault();
  const detail: RangeSelectDetail = {
    scope: tile.scope,
    sub: tile.subTab,
  };
  window.dispatchEvent(new CustomEvent("range:select", { detail }));
  const target = document.getElementById("products");
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Categories() {
  const sized = TILES.map((tile) => ({
    ...tile,
    count: productsByTile(tile).length,
  }));

  return (
    <section id="categories" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-10 flex flex-col items-start justify-between gap-3 md:mb-12 md:flex-row md:items-end"
        >
          <div>
            <span className="eyebrow text-[color:var(--orange)]">
              Our product range
            </span>
            <h2 className="mt-3 max-w-[22ch] font-display text-[clamp(2.2rem,4.4vw,3.2rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-ink">
              Five categories.{" "}
              <span className="text-[color:var(--ink-muted)]">
                70+ active SKUs.
              </span>
            </h2>
          </div>
          <p className="max-w-[24rem] text-[0.94rem] leading-relaxed text-ink-soft">
            Pick a category to jump straight to its product gallery below.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-5">
          {sized.map((tile, i) => (
            <motion.a
              key={tile.id}
              href="#products"
              onClick={(e) => handleTileClick(e, tile)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                ease: EASE,
                delay: i * 0.07,
              }}
              className="card-hover group relative flex aspect-[3/4] overflow-hidden rounded-[20px] bg-ink text-white md:rounded-[22px]"
            >
              <Image
                src={tile.banner}
                alt={tile.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5" />

              <div className="absolute right-3 top-3 md:right-4 md:top-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-ink transition-all group-hover:bg-[color:var(--orange)] group-hover:text-white">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                </span>
              </div>

              <div className="absolute left-3 top-3 flex flex-wrap gap-1.5 md:left-4 md:top-4">
                <span className="inline-flex items-center rounded-full bg-white/20 px-2.5 py-0.5 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md">
                  {tile.count}
                </span>
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[0.58rem] font-bold uppercase tracking-[0.14em] backdrop-blur-md ${
                    tile.scope === "veg"
                      ? "bg-emerald-500/90 text-white"
                      : "bg-[color:var(--orange)] text-white"
                  }`}
                >
                  {tile.scope === "veg" ? "Veg" : "Non-Veg"}
                </span>
              </div>

              <div className="relative z-10 mt-auto flex flex-col gap-1.5 p-4 md:p-5">
                <h3 className="font-display text-[1.15rem] font-extrabold leading-tight tracking-[-0.02em] text-white md:text-[1.25rem]">
                  {tile.title}
                </h3>
                <div className="flex items-center gap-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--orange-bright)]">
                  <span className="h-1 w-1 rounded-full bg-[color:var(--orange-bright)]" />
                  {tile.capacity}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
