import type { Metadata } from "next";
import VegLandingNav from "@/components/v2/VegLandingNav";
import LandingFooter from "@/components/v2/LandingFooter";
import EditorialHero from "@/components/v2/EditorialHero";
import WelcomeStatement from "@/components/v2/WelcomeStatement";
import FeatureSignature from "@/components/v2/FeatureSignature";
import MenuStyleRange from "@/components/v2/MenuStyleRange";
import MasterManufacturer from "@/components/v2/MasterManufacturer";
import TrustedByDark from "@/components/v2/TrustedByDark";
import LeadFormDark from "@/components/v2/LeadFormDark";
import WhatsAppFloat from "@/components/sections/WhatsAppFloat";
import ScrollProgress from "@/components/ui/ScrollProgress";

export const metadata: Metadata = {
  title: "Unifayre Foods | Vegetarian Range for the UAE & Gulf",
  description:
    "Vegetarian frozen food, manufactured at scale for the Gulf's best kitchens. Flatbreads, frozen-to-fry snacks, base gravies and retort rice. Halal-line ready, BRC certified, R&D-backed.",
};

export default function VegetarianLandingPage() {
  return (
    <>
      <ScrollProgress />
      <VegLandingNav />
      <main className="flex-1">
        {/* HERO */}
        <EditorialHero
          imageSrc="/images/veg/heroes/home-hero.png"
          imageAlt="Unifayre vegetarian range — chef's pass with parathas, gravy, rice, and frozen-to-fry snacks"
          eyebrow="Welcome to Unifayre · UAE & Gulf"
          headline={
            <>
              Frozen food,
              <br />
              <em className="italic text-[color:var(--gold-deep)]">
                served fresh.
              </em>
            </>
          }
          subline="Restaurant-grade flatbreads, snacks, base gravies and retort rice. Engineered for the Gulf's busiest kitchens."
          primaryCta={{ label: "Request Sample", href: "#contact" }}
          secondaryCta={{ label: "View Range", href: "#products" }}
          imageObjectPosition="center"
        />

        {/* WELCOME STATEMENT — multi-image editorial split */}
        <WelcomeStatement
          imageA={{
            src: "/images/veg/lifestyle/hotel-buffet.png",
            alt: "Five-star hotel buffet line plated with Unifayre flatbreads and gravies",
          }}
          imageB={{
            src: "/images/veg/plant/plant-hero.png",
            alt: "Mohali manufacturing plant exterior at golden hour",
          }}
        />

        {/* RANGE HIGHLIGHTS — rotating signature SKU per category on dark green */}
        <FeatureSignature />

        {/* MENU-STYLE RANGE — editorial menu of all 4 categories */}
        <MenuStyleRange id="products" />

        {/* MASTER MANUFACTURER — chef-style profile, rotating factory imagery */}
        <MasterManufacturer id="why" />

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
