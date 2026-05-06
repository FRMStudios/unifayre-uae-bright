import type { Metadata } from "next";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import WhatsAppFloat from "@/components/sections/WhatsAppFloat";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CinematicHero from "@/components/ui/CinematicHero";

export const metadata: Metadata = {
  title: "Manufacturing | Unifayre Foods",
  description:
    "State-of-the-art technology, BRC-certified lines and 18,000 MT veg capacity. A look inside Unifayre's manufacturing scale.",
};

/**
 * /manufacturing — Phase 1A scaffold.
 * Phase 2 will add: per-line capability deep-dive with cinematic line photos,
 * capacity table, R&D section, cold chain & logistics imagery.
 */
export default function ManufacturingPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="flex-1">
        <CinematicHero
          imageSrc="/plant/plant-house.jpg"
          imageAlt="Unifayre manufacturing facility"
          variant="page"
          eyebrow="Manufacturing"
          headline={
            <>
              State-of-the-art technology,
              <br />
              <em className="italic font-display text-[color:var(--accent-gold)]">
                every line.
              </em>
            </>
          }
          subline="18,000 MT veg capacity. 15,500 pcs/hr flatbreads. 4,500 pcs/hr Roti Canai. 1,000 kg/hr gravies. 1,500 kg/hr spiral freezer."
          primaryCta={{ label: "Tour the plant", href: "/contact" }}
        />

        <section className="border-y border-[color:var(--border-subtle)] bg-[color:var(--bg-warm-shadow)] py-24 md:py-32">
          <div className="mx-auto max-w-[1320px] px-5 text-center md:px-10">
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--accent-gold)]">
              In progress
            </span>
            <h2 className="mt-4 font-display text-[clamp(1.8rem,3.6vw,2.8rem)] font-semibold leading-tight tracking-[-0.015em] text-[color:var(--text-primary)]">
              Plant deep-dive + capability tables{" "}
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
