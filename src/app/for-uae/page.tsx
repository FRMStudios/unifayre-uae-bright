import type { Metadata } from "next";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import WhatsAppFloat from "@/components/sections/WhatsAppFloat";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CinematicHero from "@/components/ui/CinematicHero";

export const metadata: Metadata = {
  title: "For the UAE & Gulf | Unifayre Foods",
  description:
    "Halal-first compliance, cold-chain ready, white-label capable. Manufacturing calibrated for UAE & Gulf distribution, HoReCa, and modern trade.",
};

/**
 * /for-uae — Phase 1A scaffold.
 * Phase 2 will add: Halal-first compliance story, logistics + port imagery,
 * white-label capability with packaging mockups.
 */
export default function ForUAEPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="flex-1">
        <CinematicHero
          imageSrc="/products/meat/kebab-tandoori.jpg"
          imageAlt="Unifayre serving the UAE & Gulf"
          variant="page"
          eyebrow="For the UAE & Gulf"
          headline={
            <>
              Ready for{" "}
              <em className="italic font-display text-[color:var(--accent-gold)]">
                your
              </em>{" "}
              market.
            </>
          }
          subline="Manufacturing, packaging and compliance calibrated for UAE and Gulf distribution. Halal across every SKU. Cold-chain and dry-freight ready. White-label for private brands."
          primaryCta={{ label: "Talk to the UAE desk", href: "/contact" }}
        />

        <section className="border-y border-[color:var(--border-subtle)] bg-[color:var(--bg-warm-shadow)] py-24 md:py-32">
          <div className="mx-auto max-w-[1320px] px-5 text-center md:px-10">
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--accent-gold)]">
              In progress
            </span>
            <h2 className="mt-4 font-display text-[clamp(1.8rem,3.6vw,2.8rem)] font-semibold leading-tight tracking-[-0.015em] text-[color:var(--text-primary)]">
              Compliance + logistics deep-dive{" "}
              <em className="italic">coming in Phase 2.</em>
            </h2>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
