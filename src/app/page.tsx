import Nav from "@/components/sections/Nav";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Categories from "@/components/sections/Categories";
import Range from "@/components/sections/Range";
import TrustedBy from "@/components/sections/TrustedBy";
import Certifications from "@/components/sections/Certifications";
import Signature from "@/components/sections/Signature";
import Scale from "@/components/sections/Scale";
import Pillars from "@/components/sections/Pillars";
import BuiltForUAE from "@/components/sections/BuiltForUAE";
import LeadForm from "@/components/sections/LeadForm";
import Footer from "@/components/sections/Footer";
import WhatsAppFloat from "@/components/sections/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Categories />
        <Range />
        <TrustedBy />
        <Certifications />
        <Signature />
        <Scale />
        <Pillars />
        <BuiltForUAE />
        <LeadForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
