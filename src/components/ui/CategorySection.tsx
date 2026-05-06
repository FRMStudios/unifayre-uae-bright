"use client";

/**
 * CategorySection — V2 Phase 1B (refined sizing pass)
 *
 * Full-bleed cinematic banner (16:9) with diagonal navy overlay panel on left.
 * Banner content: gold accent line, large gold section number, title,
 * description, capacity badge.
 * Below: dark-theme product grid that opens ProductLightbox on click.
 *
 * Refined typography (per /vegetarian brief):
 *   - Section number: text-5xl md:text-6xl, font-light, tracking-tighter
 *   - Category title: text-2xl md:text-3xl lg:text-4xl, font-light, tracking-tight
 *   - Sub-line: text-sm md:text-base lg:text-lg, font-light, opacity-85
 */

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, Maximize2 } from "lucide-react";
import { useState } from "react";
import ProductLightbox from "@/components/ui/ProductLightbox";
import type { Product } from "@/lib/products";

const EASE = [0.22, 1, 0.36, 1] as const;

export type CategorySectionProps = {
  number: string;
  title: string;
  description: string;
  capacity: string;
  bannerSrc: string;
  bannerAlt: string;
  products: Product[];
  productsToShow?: number;
  anchorId?: string;
  /** Image position for the banner. Defaults to "right" since most banners are food-on-right. */
  imageObjectPosition?: string;
  /** Refined typography per /vegetarian brief. Default true. */
  refined?: boolean;
};

export default function CategorySection({
  number,
  title,
  description,
  capacity,
  bannerSrc,
  bannerAlt,
  products,
  productsToShow = 4,
  anchorId,
  imageObjectPosition = "right center",
  refined = true,
}: CategorySectionProps) {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? products : products.slice(0, productsToShow);
  const hasMore = products.length > productsToShow;

  const numberClass = refined
    ? "mt-5 font-display text-5xl md:text-6xl font-light leading-none tracking-tighter text-[color:var(--accent-gold)]"
    : "mt-5 font-display text-[clamp(3.5rem,7vw,6rem)] font-semibold leading-none tracking-[-0.02em] text-[color:var(--accent-gold)]";

  const titleClass = refined
    ? "mt-3 font-display text-2xl md:text-3xl lg:text-4xl font-light leading-tight tracking-tight text-[color:var(--text-primary)]"
    : "mt-3 font-display text-[clamp(1.8rem,3.6vw,2.8rem)] font-semibold leading-[1.05] tracking-[-0.015em] text-[color:var(--text-primary)]";

  const descClass = refined
    ? "mt-3 max-w-md text-sm md:text-base lg:text-lg font-light leading-relaxed text-[color:var(--text-primary)]/85"
    : "mt-3 max-w-[28rem] text-[0.94rem] leading-relaxed text-[color:var(--text-secondary)]";

  return (
    <section
      id={anchorId}
      className="relative overflow-hidden border-b border-[color:var(--border-subtle)] bg-[color:var(--bg-deep)]"
    >
      {/* Banner with diagonal overlay */}
      <div className="relative aspect-[16/9] w-full overflow-hidden md:aspect-[21/8]">
        <Image
          src={bannerSrc}
          alt={bannerAlt}
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: imageObjectPosition }}
        />

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

        {/* Bottom navy fade so banner blends into product grid */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[color:var(--bg-deep)] to-transparent"
        />

        {/* Content panel — bottom-aligned mobile, left-centered desktop */}
        <div className="absolute inset-0 flex items-end md:items-center">
          <div className="mx-auto w-full max-w-[1320px] px-5 pb-12 md:px-10 md:pb-0">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.85, ease: EASE }}
              className="max-w-[520px]"
            >
              <div className="gold-line w-16 md:w-24" />
              <div className={numberClass}>{number}</div>
              <h2 className={titleClass}>{title}</h2>
              <p className={descClass}>{description}</p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[color:var(--border-gold)] bg-[color:var(--bg-warm-shadow)]/60 px-4 py-1.5 text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-gold)] backdrop-blur">
                <span className="h-1 w-1 rounded-full bg-[color:var(--accent-gold)]" />
                {capacity}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Product grid */}
      <div className="mx-auto max-w-[1320px] px-5 py-14 md:px-10 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-8 flex items-end justify-between md:mb-10"
        >
          <div>
            <span className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-gold)]">
              The Range
            </span>
            <h3 className="mt-2 font-display text-[clamp(1.3rem,2vw,1.6rem)] font-semibold tracking-[-0.01em] text-[color:var(--text-primary)]">
              {products.length} {products.length === 1 ? "SKU" : "SKUs"} in this category
            </h3>
          </div>
          {hasMore && !showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="group inline-flex items-center gap-1.5 text-[0.82rem] font-semibold text-[color:var(--accent-gold)] transition-all hover:text-[color:var(--accent-gold-soft)]"
            >
              View all {products.length}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          )}
        </motion.div>

        <AnimatePresence mode="popLayout">
          <motion.div
            key={String(showAll)}
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4"
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
                  delay: Math.min(i * 0.04, 0.4),
                }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--bg-warm-shadow)] text-left transition-all hover:border-[color:var(--accent-gold)] hover:shadow-[0_18px_36px_-18px_rgba(201,169,97,0.4)] focus:outline-none focus-visible:border-[color:var(--accent-gold)]"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-[color:var(--bg-slate)]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 24vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
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
                  <h4 className="font-display text-[0.95rem] font-semibold leading-tight tracking-[-0.01em] text-[color:var(--text-primary)] md:text-[1rem]">
                    {product.name}
                  </h4>
                  <span className="inline-flex items-center gap-1 text-[0.7rem] font-medium text-[color:var(--text-secondary)]">
                    View
                    <ArrowUpRight
                      className="h-3 w-3 text-[color:var(--accent-gold)]"
                      strokeWidth={2.4}
                    />
                  </span>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <ProductLightbox
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
      />
    </section>
  );
}
