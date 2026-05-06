"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Leaf, Drumstick, Maximize2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  PRODUCTS,
  VEG_SUB_CATEGORIES,
  NONVEG_SUB_CATEGORIES,
  productsByScope,
  type CategoryId,
  type Product,
  type Scope,
} from "@/lib/products";
import ProductLightbox from "@/components/ui/ProductLightbox";

const EASE = [0.22, 1, 0.36, 1] as const;

type SubTab = CategoryId | "all";

const VISIBLE_CAP = 18;

export default function Range() {
  const [scope, setScope] = useState<Scope>("veg");
  const [tab, setTab] = useState<SubTab>("all");
  const [showAll, setShowAll] = useState(false);
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  // Listen for category-tile clicks from the Categories section.
  useEffect(() => {
    function onSelect(e: Event) {
      const detail = (e as CustomEvent).detail as {
        scope: Scope;
        sub: SubTab;
      };
      if (!detail) return;
      setScope(detail.scope);
      setTab(detail.sub);
      setShowAll(false);
    }
    window.addEventListener("range:select", onSelect);
    return () => window.removeEventListener("range:select", onSelect);
  }, []);

  const subCategories =
    scope === "veg" ? VEG_SUB_CATEGORIES : NONVEG_SUB_CATEGORIES;

  const filtered = useMemo(() => {
    const base = productsByScope(scope);
    if (tab === "all") return base;
    return base.filter((p) => p.category === tab);
  }, [scope, tab]);

  const visible = showAll ? filtered : filtered.slice(0, VISIBLE_CAP);
  const hasMore = filtered.length > VISIBLE_CAP;

  const setScopeAndReset = (s: Scope) => {
    setScope(s);
    setTab("all");
    setShowAll(false);
  };

  return (
    <section id="products" className="bg-[color:var(--bg-soft)] py-20 md:py-28">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-10 flex flex-col items-start gap-5 md:mb-14"
        >
          <span className="eyebrow text-[color:var(--orange)]">
            Featured products
          </span>
          <h2 className="max-w-[22ch] font-display text-[clamp(2.4rem,5vw,3.8rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-ink">
            {PRODUCTS.length} products.{" "}
            <span className="text-[color:var(--ink-muted)]">
              Every one customisable.
            </span>
          </h2>
        </motion.div>

        {/* Veg / Non-Veg scope toggle */}
        <div className="mb-6 flex justify-center md:mb-8">
          <div className="inline-flex items-center gap-1 rounded-full border border-[color:var(--line)] bg-white p-1.5 shadow-[0_1px_3px_rgba(15,15,16,0.04)]">
            <ScopeButton
              active={scope === "veg"}
              onClick={() => setScopeAndReset("veg")}
              icon={<Leaf className="h-4 w-4" strokeWidth={2} />}
              label="Vegetarian"
              count={productsByScope("veg").length}
              color="emerald"
            />
            <ScopeButton
              active={scope === "non-veg"}
              onClick={() => setScopeAndReset("non-veg")}
              icon={<Drumstick className="h-4 w-4" strokeWidth={2} />}
              label="Non-Vegetarian"
              count={productsByScope("non-veg").length}
              color="orange"
            />
          </div>
        </div>

        {/* Sub-category tabs */}
        <div className="sticky top-20 z-20 -mx-5 mb-8 md:mb-10">
          <div className="scrollbar-none flex gap-2 overflow-x-auto px-5 md:flex-wrap md:justify-center md:overflow-visible md:px-0">
            <TabButton
              active={tab === "all"}
              onClick={() => {
                setTab("all");
                setShowAll(false);
              }}
              label="All"
              count={filtered.length === PRODUCTS.filter((p) => p.scope === scope).length ? filtered.length : productsByScope(scope).length}
              showCount
            />
            {subCategories.map((sub) => {
              const subCount = PRODUCTS.filter(
                (p) => p.scope === scope && p.category === sub.id
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
                  showCount
                />
              );
            })}
          </div>
        </div>

        {/* Product grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={scope + ":" + tab + ":" + String(showAll)}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.45, ease: EASE }}
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
                className="card-hover group flex flex-col overflow-hidden rounded-2xl border border-[color:var(--line)] bg-white text-left transition-all focus:outline-none focus-visible:border-[color:var(--orange)] focus-visible:ring-2 focus-visible:ring-[color:var(--orange)]/30"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-[color:var(--bg-muted)]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  {product.tag && (
                    <div className="absolute left-2.5 top-2.5">
                      <span className="inline-flex items-center rounded-full bg-[color:var(--orange)] px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-white">
                        {product.tag}
                      </span>
                    </div>
                  )}
                  {/* Hover overlay with expand icon */}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100 group-focus-visible:bg-black/30 group-focus-visible:opacity-100">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-ink shadow-lg">
                      <Maximize2 className="h-4 w-4" strokeWidth={2.2} />
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-1 p-3 md:p-4">
                  <span className="text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                    {subCategories.find((s) => s.id === product.category)?.label ??
                      product.category}
                  </span>
                  <h3 className="font-display text-[0.9rem] font-bold leading-tight tracking-[-0.015em] text-ink md:text-[0.95rem]">
                    {product.name}
                  </h3>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex flex-col items-center gap-6 md:mt-14">
          {hasMore && !showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-white px-6 py-3 text-[0.88rem] font-semibold text-ink transition-all hover:border-ink hover:bg-ink hover:text-white"
            >
              Show all {filtered.length} products
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
          <a
            href="#contact"
            className="group btn-orange inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[0.92rem] font-semibold shadow-[0_10px_30px_-10px_rgba(255,106,44,0.6)]"
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

function ScopeButton({
  active,
  onClick,
  icon,
  label,
  count,
  color,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  count: number;
  color: "emerald" | "orange";
}) {
  const activeBg =
    color === "emerald"
      ? "bg-emerald-500 text-white shadow-[0_8px_18px_-8px_rgba(16,185,129,0.55)]"
      : "bg-[color:var(--orange)] text-white shadow-[0_8px_18px_-8px_rgba(255,106,44,0.55)]";
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[0.88rem] font-semibold transition-all ${
        active ? activeBg : "bg-white text-ink-soft hover:text-ink"
      }`}
    >
      {icon}
      {label}
      <span
        className={`ml-1 rounded-full px-2 py-0.5 text-[0.68rem] font-bold ${
          active ? "bg-white/25 text-white" : "bg-[color:var(--bg-muted)] text-ink-muted"
        }`}
      >
        {count}
      </span>
    </button>
  );
}

function TabButton({
  active,
  onClick,
  label,
  count,
  showCount,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  count: number;
  showCount?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 rounded-full border px-5 py-2.5 text-[0.85rem] font-semibold transition-all ${
        active
          ? "border-ink bg-ink text-white"
          : "border-[color:var(--line)] bg-white text-ink-soft hover:border-ink/40 hover:text-ink"
      }`}
    >
      {label}
      {showCount && (
        <span className="ml-1.5 text-[0.72rem] opacity-75">({count})</span>
      )}
    </button>
  );
}
