import type { Metadata } from "next";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import WhatsAppFloat from "@/components/sections/WhatsAppFloat";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CinematicHero from "@/components/ui/CinematicHero";

export const metadata: Metadata = {
  title: "Why Unifayre | Unifayre Foods",
  description:
    "Reliability. Consistency at scale. Customisation. Compliance. Four non-negotiables tuned over 30+ years of frozen food manufacturing.",
};

/**
 * /why-unifayre — Phase 1A scaffold.
 * Phase 2 will add: 4 expanded pillars with cinematic supporting imagery,
 * 30+ year timeline, Allana Group context.
 */
export default function WhyUnifayrePage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="flex-1">
        <CinematicHero
          imageSrc="/plant/plant-house.jpg"
          imageAlt="Unifayre manufacturing plant"
          variant="page"
          eyebrow="Why Unifayre"
          headline={
            <>
              <em className="italic font-display text-[color:var(--accent-gold)]">
                Four
              </em>{" "}
              non-negotiables.
              <br />
              Tuned over 30 years.
            </>
          }
          subline="Reliability. Consistency at scale. Customisation. Compliance & safety. The four standards every Unifayre line is built against."
          primaryCta={{ label: "Partner with us", href: "/contact" }}
        />

        <section className="border-y border-[color:var(--border-subtle)] bg-[color:var(--bg-warm-shadow)] py-24 md:py-32">
          <div className="mx-auto max-w-[1320px] px-5 text-center md:px-10">
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--accent-gold)]">
              In progress
            </span>
            <h2 className="mt-4 font-display text-[clamp(1.8rem,3.6vw,2.8rem)] font-semibold leading-tight tracking-[-0.015em] text-[color:var(--text-primary)]">
              The full pillars + timeline build is{" "}
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
