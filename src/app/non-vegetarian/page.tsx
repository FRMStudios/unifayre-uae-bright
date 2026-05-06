import type { Metadata } from "next";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import WhatsAppFloat from "@/components/sections/WhatsAppFloat";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CinematicHero from "@/components/ui/CinematicHero";
import CategorySection from "@/components/ui/CategorySection";
import { PRODUCTS, productsByScope } from "@/lib/products";

export const metadata: Metadata = {
  title: "Non-Vegetarian Range | Unifayre Foods",
  description:
    "Halal-certified non-vegetarian SKUs. Chicken, meat and frozen-to-fry snacks engineered for repeatable consistency at scale.",
};

export default function NonVegetarianPage() {
  // The non-veg range is split into "Chicken & Meat" (everything except
  // frozen-to-fry kebabs) and "Frozen-to-Fry Snacks Non-Veg".
  // Until non-veg snacks become their own catalog group, we treat patties as
  // chicken & meat and route the showcase accordingly.
  const allNonVeg = productsByScope("non-veg");

  // Frozen-to-Fry non-veg = patties + a representative subset (Tenders,
  // Schnitzel) that fry from frozen. Everything else lives in Chicken & Meat.
  const frozenToFryNames = new Set([
    "Chicken Patty",
    "Paprika Patty",
    "Tikka Patty",
    "Burger Patty",
    "Spicy Chicken Tenders",
    "Chicken Schnitzel",
    "Shami Kebab", // hero/banner reference; absent from non-veg pool, gracefully ignored
  ]);

  const snacksNonVeg = PRODUCTS.filter(
    (p) => p.scope === "non-veg" && frozenToFryNames.has(p.name)
  );
  const chickenAndMeat = allNonVeg.filter(
    (p) => !frozenToFryNames.has(p.name)
  );

  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="flex-1">
        <CinematicHero
          imageSrc="/images/v2/hero/nonveg-hero.png"
          imageAlt="Non-Vegetarian range — Tandoori Kebab on grill"
          variant="page"
          eyebrow="Non-Vegetarian range"
          headline={
            <>
              {allNonVeg.length} non-vegetarian SKUs.
              <br />
              <em className="italic font-display text-[color:var(--accent-gold)]">
                Halal. Ready for the Gulf.
              </em>
            </>
          }
          subline="Chicken, meat and frozen-to-fry snacks engineered for repeatable consistency at scale. Halal-certified across every SKU."
          primaryCta={{ label: "Request Sample", href: "/contact" }}
          secondaryCta={{ label: "View Vegetarian", href: "/vegetarian" }}
        />

        <section className="border-y border-[color:var(--border-subtle)] bg-[color:var(--bg-warm-shadow)] py-12 md:py-14">
          <div className="mx-auto grid max-w-[1320px] grid-cols-2 gap-6 px-5 md:grid-cols-4 md:gap-10 md:px-10">
            <CapabilityStat number="100%" suffix="" label="Halal certified" />
            <CapabilityStat
              number={String(allNonVeg.length)}
              suffix=" SKUs"
              label="Active Range"
            />
            <CapabilityStat number="2" suffix="" label="Categories" />
            <CapabilityStat number="−40°C" suffix="" label="Spiral Freezer" />
          </div>
        </section>

        <CategorySection
          anchorId="chicken"
          number="01"
          title="Chicken & Meat"
          description="Wings, kebabs, nuggets, sausages, salami and cold cuts. Halal across every SKU. Built for QSR menus, hotel buffets and modern trade retail."
          capacity="Multiple lines"
          bannerSrc="/images/v2/categories/chicken-banner.png"
          bannerAlt="Chicken & Meat sliced Tandoori banner"
          products={chickenAndMeat}
        />

        <CategorySection
          anchorId="snacks-nonveg"
          number="02"
          title="Frozen-to-Fry Snacks"
          description="Patties, tenders, schnitzel — non-veg formats that fry from frozen for crisp, consistent results across every shift."
          capacity="Spiral freezer −40°C"
          bannerSrc="/images/v2/categories/snacks-nonveg-banner.png"
          bannerAlt="Frozen-to-Fry Snacks Non-Veg Shami Kebab banner"
          products={snacksNonVeg}
        />

        {/* Halal & Compliance band */}
        <section className="bg-[color:var(--bg-warm-shadow)] py-20 md:py-24">
          <div className="mx-auto max-w-[1320px] px-5 text-center md:px-10">
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--accent-gold)]">
              Halal &amp; Compliance
            </span>
            <h3 className="mx-auto mt-4 max-w-[30ch] font-display text-[clamp(1.8rem,3.6vw,2.6rem)] font-semibold leading-tight tracking-[-0.015em] text-[color:var(--text-primary)]">
              Halal-first lines, audited and{" "}
              <em className="italic">certified for every shelf.</em>
            </h3>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:gap-4">
              {["BRC", "FSSC 22000", "Halal", "US FDA", "ISO"].map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-gold)] bg-[color:var(--bg-deep)] px-4 py-2 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-gold)]"
                >
                  <span className="h-1 w-1 rounded-full bg-[color:var(--accent-gold)]" />
                  {cert}
                </span>
              ))}
            </div>
            <a
              href="/contact"
              className="btn-gold mt-9 inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[0.88rem] font-semibold shadow-[0_14px_36px_-12px_rgba(201,169,97,0.5)]"
            >
              Talk to the UAE desk
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

function CapabilityStat({
  number,
  suffix,
  label,
}: {
  number: string;
  suffix: string;
  label: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="whitespace-nowrap font-display text-[clamp(1.6rem,2.8vw,2.2rem)] font-semibold leading-none tracking-[-0.02em] text-[color:var(--text-primary)]">
        {number}
        <span className="text-[color:var(--accent-gold)]">{suffix}</span>
      </span>
      <span className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
        {label}
      </span>
    </div>
  );
}
