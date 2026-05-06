"use client";

import CinematicHero from "@/components/ui/CinematicHero";

/**
 * Home cinematic hero (V2).
 *
 * Image placeholder: /products/flatbreads/roti-canai.jpg used as a temporary
 * hero shot. The brief calls for a true cinematic close-up — Roti Canai pulled
 * apart with steam rising on dark slate. See public/images/v2/hero/home-hero-BRIEF.md
 * (to be written) for the photographer brief.
 */

export default function Hero() {
  return (
    <CinematicHero
      imageSrc="/products/flatbreads/roti-canai.jpg"
      imageAlt="Roti Canai signature flatbread"
      variant="home"
      eyebrow="Now serving the UAE & Gulf"
      headline={
        <>
          The frozen food <em className="italic font-display text-[color:var(--accent-gold)]">partner</em>
          <br />
          for the Gulf&rsquo;s best kitchens.
        </>
      }
      subline="Over 30 years of precision manufacturing. State-of-the-art technology, BRC-certified lines, and a Roti Canai capability available only in India."
      primaryCta={{ label: "Request Partnership Kit", href: "/contact" }}
      secondaryCta={{ label: "Explore Range", href: "/vegetarian" }}
      ticker={[
        "Flatbreads",
        "Tortillas",
        "Roti Canai",
        "Frozen-to-Fry Snacks",
        "Base Gravies",
        "Retort Rice",
        "Halal Chicken & Meat",
      ]}
    />
  );
}
