import type { Metadata } from "next";
import VegLandingNav from "@/components/v2/VegLandingNav";
import LandingFooter from "@/components/v2/LandingFooter";
import PillarsDark from "@/components/v2/PillarsDark";
import TrustedByDark from "@/components/v2/TrustedByDark";
import LeadFormDark from "@/components/v2/LeadFormDark";
import CategoryCarousel from "@/components/v2/CategoryCarousel";
import ProductPortfolioDark from "@/components/v2/ProductPortfolioDark";
import WhyUnifayreDynamic from "@/components/v2/WhyUnifayreDynamic";
import WhatsAppFloat from "@/components/sections/WhatsAppFloat";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CinematicHero from "@/components/ui/CinematicHero";
import LifestyleStrip from "@/components/ui/LifestyleStrip";
import { productsByScope } from "@/lib/products";

export const metadata: Metadata = {
  title: "Unifayre Foods | Vegetarian Range for the UAE & Gulf",
  description:
    "Vegetarian frozen food, manufactured at scale for the Gulf's best kitchens. Flatbreads, frozen-to-fry snacks, base gravies and retort rice. Halal-line ready, BRC certified, R&D-backed.",
};

export default function VegetarianLandingPage() {
  const totalSkus = productsByScope("veg").length;

  return (
    <>
      <ScrollProgress />
      <VegLandingNav />
      <main className="flex-1">
        {/* HERO */}
        <CinematicHero
          imageSrc="/images/veg/heroes/home-hero.png"
          imageAlt="Vegetarian range — chef's pass with parathas, gravy, rice, and frozen-to-fry snacks"
          variant="page"
          eyebrow="Vegetarian range · UAE & Gulf"
          headline={
            <>
              {totalSkus} vegetarian SKUs.
              <br />
              <em className="italic font-display text-[color:var(--accent-gold)]">
                Built for menus that scale.
              </em>
            </>
          }
          subline="Flatbreads, frozen-to-fry snacks, base gravies and retort rice. Engineered for the Gulf's busiest kitchens."
          primaryCta={{ label: "Request Sample", href: "#contact" }}
          secondaryCta={{ label: "Explore Range", href: "#products" }}
          objectPosition="center"
          overlayStyle="bottom-left"
          refined
        />

        {/* CAPABILITY STRIP */}
        <section className="border-y border-[color:var(--border-subtle)] bg-[color:var(--bg-warm-shadow)] py-12 md:py-14">
          <div className="mx-auto grid max-w-[1320px] grid-cols-2 gap-6 px-5 md:grid-cols-4 md:gap-10 md:px-10">
            <CapabilityStat number="18,000" suffix=" MT" label="Veg Capacity" />
            <CapabilityStat number="4" suffix="" label="Categories" />
            <CapabilityStat
              number={String(totalSkus)}
              suffix=" SKUs"
              label="Active Range"
            />
            <CapabilityStat number="100%" suffix="" label="Halal-line ready" />
          </div>
        </section>

        {/* CATEGORY CAROUSEL — single section, banners auto-rotate every 6s.
            Pause on hover, click any tab to jump. */}
        <CategoryCarousel
          anchorId="products"
          autoplayMs={6000}
          slides={[
            {
              number: "01",
              title: "Flatbreads & Tortillas",
              shortLabel: "Flatbreads",
              description:
                "Malabar Paratha, Roti Canai, stuffed parathas and 4-grain tortillas. The flatbread engine for QSR wraps, breakfast platters, curry bases and dessert formats.",
              capacity: "15,500+ pcs / hr",
              bannerSrc: "/images/veg/categories/flatbreads-banner.png",
              bannerAlt: "Malabari Paratha layers cinematic banner",
              imageObjectPosition: "right center",
            },
            {
              number: "02",
              title: "Frozen-to-Fry Snacks",
              shortLabel: "Snacks",
              description:
                "Samosas, kebabs, tikkis, kachoris, bhaji, pakoras and falafel. Frozen at peak so every fry comes out crisp, golden and consistent at scale.",
              capacity: "1 lakh pcs / day",
              bannerSrc: "/images/veg/categories/snacks-banner.png",
              bannerAlt: "Falafel mid-fry frozen-to-fry snacks banner",
              imageObjectPosition: "right center",
            },
            {
              number: "03",
              title: "Base Gravies & Pastes",
              shortLabel: "Gravies",
              description:
                "Makhani, Manchurian, Thai red and green curry, biryani pastes and base sauces. The backbone of any restaurant menu, ready to plate or build on.",
              capacity: "1,000 kg / hr",
              bannerSrc: "/images/veg/categories/gravies-banner.png",
              bannerAlt: "Makhani gravy in copper pot banner",
              imageObjectPosition: "right center",
            },
            {
              number: "04",
              title: "Retort Rice",
              shortLabel: "Rice",
              description:
                "Eight aromatic rice varieties from Basmati and Jeera to Saffron and Cilantro Lime. Shelf-stable at ambient temperature, ready in minutes.",
              capacity: "Ambient shelf stable",
              bannerSrc: "/images/veg/categories/rice-banner.png",
              bannerAlt: "Biryani in clay handi banner",
              imageObjectPosition: "right center",
            },
          ]}
        />

        {/* PRODUCT PORTFOLIO — single section housing every veg SKU with sub-tabs */}
        <ProductPortfolioDark id="portfolio" />

        {/* LIFESTYLE STRIP */}
        <LifestyleStrip
          eyebrow="Where Unifayre lands"
          title={
            <>
              From QSR pass to{" "}
              <em className="italic">five-star buffet line.</em>
            </>
          }
          subline="The same SKU, plated across every Gulf restaurant context."
          frames={[
            {
              src: "/images/veg/lifestyle/qsr-plate.png",
              alt: "QSR menu — vegetarian burger build",
              caption: "QSR Menu",
            },
            {
              src: "/images/veg/lifestyle/cloud-kitchen.png",
              alt: "Cloud kitchen plating",
              caption: "Cloud Kitchen",
            },
            {
              src: "/images/veg/lifestyle/hotel-buffet.png",
              alt: "Hotel buffet spread",
              caption: "Hotel Buffet",
            },
            {
              src: "/images/veg/lifestyle/chef-plating.png",
              alt: "Chef plating mid-action, fine-dining",
              caption: "Fine-Dining Plating",
            },
            {
              src: "/images/veg/lifestyle/sizzle-closeup.png",
              alt: "Sizzle close-up — vegetarian snack on hot iron",
              caption: "Sensory Sizzle",
            },
          ]}
        />

        {/* WHY UNIFAYRE — dynamic rotating factory imagery + animated capability pointers */}
        <WhyUnifayreDynamic id="why" />

        {/* FOUR PILLARS — every tile carries its own image now */}
        <PillarsDark id="pillars" />

        {/* QSR CLIENT MARQUEE */}
        <TrustedByDark />

        {/* LEAD FORM */}
        <LeadFormDark id="contact" />
      </main>
      <LandingFooter />
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
      <span className="whitespace-nowrap font-display text-2xl md:text-3xl lg:text-4xl font-light leading-none tracking-tight text-[color:var(--text-primary)]">
        {number}
        <span className="text-[color:var(--accent-gold)]">{suffix}</span>
      </span>
      <span className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
        {label}
      </span>
    </div>
  );
}
