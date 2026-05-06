import type { Metadata } from "next";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import WhatsAppFloat from "@/components/sections/WhatsAppFloat";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CinematicHero from "@/components/ui/CinematicHero";
import LeadForm from "@/components/sections/LeadForm";

export const metadata: Metadata = {
  title: "Contact | Unifayre Foods",
  description:
    "Request your Partnership Kit. Our UAE desk responds within 1 working day.",
};

export default function ContactPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="flex-1">
        <CinematicHero
          imageSrc="/plant/plant-house.jpg"
          imageAlt="Unifayre partnership desk"
          variant="inner"
          eyebrow="Partnership desk"
          headline={
            <>
              Let&rsquo;s build your{" "}
              <em className="italic font-display text-[color:var(--accent-gold)]">
                Gulf range
              </em>{" "}
              together.
            </>
          }
          subline="Our UAE desk responds within 1 working day."
        />

        <LeadForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
