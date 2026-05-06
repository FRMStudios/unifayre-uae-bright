"use client";

/**
 * SpecialDishes — Restoria-inspired special-dishes grid on dark green.
 *
 * Header: "Popular this week" eyebrow + "Special Dishes" headline + arrow nav.
 * Grid: 3 cards. Each card: circular plate background, product image, name,
 * small capacity tag. Cards are clickable → ProductLightbox.
 */

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { PRODUCTS, type Product } from "@/lib/products";
import ProductLightbox from "@/components/ui/ProductLightbox";

const EASE = [0.22, 1, 0.36, 1] as const;

const FEATURED_NAMES = [
  "Roti Canai",
  "Falafel",
  "Makhani Base Gravy",
  "Tandoori Kebab",
  "Saffron Rice",
  "Bombay Vada",
];

export default function SpecialDishes() {
  const [page, setPage] = useState(0);
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  const featured = FEATURED_NAMES.map((n) =>
    PRODUCTS.find((p) => p.name === n)
  ).filter((p): p is Product => Boolean(p));

  const PER_PAGE = 3;
  const pages = Math.ceil(featured.length / PER_PAGE);
  const visible = featured.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section className="relative overflow-hidden bg-[color:var(--green)] py-20 text-[color:var(--cream-on-green)] md:py-28">
      <div
        aria-hidden
        className="cream-blob pointer-events-none absolute -right-32 top-32 h-[420px] w-[420px] rounded-full opacity-50"
      />

      <div className="relative mx-auto max-w-[1320px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-12 flex flex-col items-start justify-between gap-5 md:mb-16 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-10 bg-[color:var(--gold)]" />
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[color:var(--gold)]">
                Popular this week
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.2rem,4.6vw,3.6rem)] font-medium leading-tight tracking-tight">
              Special{" "}
              <em className="italic text-[color:var(--gold)]">Dishes</em>.
            </h2>
          </div>
          {pages > 1 && (
            <div className="flex items-center gap-2">
              <NavButton
                onClick={() => setPage((p) => (p - 1 + pages) % pages)}
                ariaLabel="Previous page"
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={1.8} />
              </NavButton>
              <NavButton
                onClick={() => setPage((p) => (p + 1) % pages)}
                ariaLabel="Next page"
              >
                <ChevronRight className="h-5 w-5" strokeWidth={1.8} />
              </NavButton>
            </div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {visible.map((product, i) => (
            <motion.button
              key={product.name}
              type="button"
              onClick={() => setActiveProduct(product)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col items-center gap-5 rounded-[28px] border border-[color:var(--gold)]/15 bg-[color:var(--green-deep)]/40 p-7 backdrop-blur-sm transition-all hover:border-[color:var(--gold)]/45 hover:bg-[color:var(--green-deep)]/60 md:p-8"
              aria-label={`View ${product.name}`}
            >
              <div className="relative aspect-square w-full max-w-[280px]">
                {/* Outer faint gold ring */}
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-full border border-[color:var(--gold)]/35"
                />
                {/* Inner cream plate with image */}
                <div className="absolute inset-[7%] overflow-hidden rounded-full bg-[color:var(--bg-warm)] shadow-[0_18px_36px_-12px_rgba(0,0,0,0.45)]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 280px, 240px"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-display text-[1.3rem] font-medium leading-tight tracking-tight text-[color:var(--cream-on-green)]">
                  {product.name}
                </h3>
                {product.tag && (
                  <span className="mt-2 inline-block rounded-full bg-[color:var(--gold)]/15 px-3 py-0.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[color:var(--gold)]">
                    {product.tag}
                  </span>
                )}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <ProductLightbox
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
      />
    </section>
  );
}

function NavButton({
  onClick,
  ariaLabel,
  children,
}: {
  onClick: () => void;
  ariaLabel: string;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--gold)]/45 bg-[color:var(--green-deep)]/40 text-[color:var(--cream-on-green)] backdrop-blur transition-all hover:border-[color:var(--gold)] hover:bg-[color:var(--gold)] hover:text-[color:var(--green)]"
    >
      {children}
    </button>
  );
}
