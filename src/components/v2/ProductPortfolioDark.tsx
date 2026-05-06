"use client";

/**
 * ProductPortfolioDark — V2 dark-theme product gallery for the veg one-pager.
 *
 * Single section housing all veg SKUs with sub-category filter tabs.
 * Click a card → ProductLightbox.
 *
 * Interactions:
 * - Sticky sub-tab bar — stays in view while you scan
 * - Tab switch animates the grid in/out
 * - Each card hover: gold border glow, image zoom, expand-icon overlay
 */

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Maximize2 } from "lucide-react";
import { useMemo, useState } from "react";
import {
  PRODUCTS,
  VEG_SUB_CATEGORIES,
  productsByScope,
  type CategoryId,
  type Product,
} from "@/lib/products";
import ProductLightbox from "@/components/ui/ProductLightbox";

const EASE = [0.22, 1, 0.36, 1] as const;

type Tab = CategoryId | "all";

const VISIBLE_CAP = 12;

export default function ProductPortfolioDark({
  id = "portfolio",
}: {
  id?: string;
}) {
  const [tab, setTab] = useState<Tab>("all");
  const [showAll, setShowAll] = useState(false);
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  const allVeg = useMemo(() => productsByScope("veg"), []);
  const filtered = useMemo(() => {
    if (tab === "all") return allVeg;
    return allVeg.filter((p) => p.category === tab);
  }, [allVeg, tab]);

  const visible = showAll ? filtered : filtered.slice(0, VISIBLE_CAP);
  const hasMore = filtered.length > VISIBLE_CAP;

  return (
    <section
      id={id}
      className="relative bg-[color:var(--bg-warm-shadow)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-10 flex flex-col items-start justify-between gap-4 md:mb-14 md:flex-row md:items-end"
        >
          <div>
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--accent-gold)]">
              The full portfolio
            </span>
            <h2 className="mt-3 max-w-[22ch] font-display text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight text-[color:var(--text-primary)]">
              {allVeg.length} vegetarian SKUs.{" "}
              <em className="italic text-[color:var(--accent-gold)]">
                Every one customisable.
              </em>
            </h2>
          </div>
          <p className="max-w-[24rem] text-base font-light leading-relaxed text-[color:var(--text-primary)]/80">
            Filter by category. Click any product to see it up close. Briefs to
            our R&amp;D team welcome on every line.
          </p>
        </motion.div>

        {/* Sticky sub-category tabs */}
        <div className="sticky top-20 z-20 -mx-5 mb-8 md:mb-10">
          <div className="scrollbar-none flex gap-2 overflow-x-auto bg-gradient-to-r from-[color:var(--bg-warm-shadow)] via-[color:var(--bg-warm-shadow)] to-transparent px-5 py-2 md:flex-wrap md:overflow-visible md:px-0 md:py-0">
            <TabButton
              active={tab === "all"}
              onClick={() => {
                setTab("all");
                setShowAll(false);
              }}
              label="All"
              count={allVeg.length}
            />
            {VEG_SUB_CATEGORIES.map((sub) => {
              const subCount = allVeg.filter(
                (p) => p.category === sub.id
              ).length;
              return (
                <TabButton
                  key={sub.id}
                  active={tab === sub.id}
                  onClick={() => {
                    setTab(sub.id);
                    setShowAll(false);
                  }}
                  label={sub.label}
                  count={subCount}
                />
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div
            key={tab + ":" + String(showAll)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-6"
          >
            {visible.map((product, i) => (
              <motion.button
                key={`${product.category}-${product.name}`}
                type="button"
                onClick={() => setActiveProduct(product)}
                aria-label={`View ${product.name}`}
                layout
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: EASE,
                  delay: Math.min(i * 0.035, 0.4),
                }}
                whileHover={{ y: -4 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--bg-deep)] text-left transition-all hover:border-[color:var(--accent-gold)] hover:shadow-[0_18px_36px_-18px_rgba(201,169,97,0.4)] focus:outline-none focus-visible:border-[color:var(--accent-gold)]"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-[color:var(--bg-slate)]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                  />
                  {product.tag && (
                    <div className="absolute left-2.5 top-2.5">
                      <span className="inline-flex items-center rounded-full bg-[color:var(--accent-gold)] px-2 py-0.5 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[color:var(--bg-deep)]">
                        {product.tag}
                      </span>
                    </div>
                  )}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--accent-gold)] text-[color:var(--bg-deep)] shadow-lg">
                      <Maximize2 className="h-4 w-4" strokeWidth={2.4} />
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-1 p-3 md:p-4">
                  <span className="text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--accent-gold)]">
                    {VEG_SUB_CATEGORIES.find((s) => s.id === product.category)
                      ?.label ?? product.category}
                  </span>
                  <h3 className="font-display text-[0.95rem] font-light leading-tight tracking-tight text-[color:var(--text-primary)] md:text-[1rem]">
                    {product.name}
                  </h3>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex flex-col items-center gap-5 md:mt-14">
          {hasMore && !showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="group inline-flex items-center gap-2 rounded-full border border-[color:var(--border-subtle)] bg-[color:var(--bg-deep)] px-6 py-3 text-[0.86rem] font-semibold text-[color:var(--text-primary)] transition-all hover:border-[color:var(--accent-gold)] hover:text-[color:var(--accent-gold)]"
            >
              Show all {filtered.length} products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          )}
          <a
            href="#contact"
            className="group btn-gold inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[0.88rem] font-semibold shadow-[0_14px_36px_-12px_rgba(201,169,97,0.5)]"
          >
            Get the full catalogue
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>

      <ProductLightbox
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
      />
    </section>
  );
}

function TabButton({
  active,
  onClick,
  label,
  count,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  count: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 rounded-full border px-5 py-2.5 text-[0.85rem] font-semibold transition-all ${
        active
          ? "border-[color:var(--accent-gold)] bg-[color:var(--accent-gold)] text-[color:var(--bg-deep)] shadow-[0_8px_20px_-8px_rgba(201,169,97,0.55)]"
          : "border-[color:var(--border-subtle)] bg-[color:var(--bg-deep)] text-[color:var(--text-primary)]/80 hover:border-[color:var(--accent-gold)] hover:text-[color:var(--text-primary)]"
      }`}
    >
      {label}
      <span
        className={`ml-1.5 text-[0.72rem] ${active ? "opacity-75" : "opacity-60"}`}
      >
        ({count})
      </span>
    </button>
  );
}
