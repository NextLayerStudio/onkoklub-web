import { HeroSection } from "@/components/HeroSection";
import { NieSiVTomSamSection } from "@/components/NieSiVTomSamSection";
import { FeatureSection } from "@/components/FeatureSection";
import { VideokniznicaSection } from "@/components/VideokniznicaSection";
import { EventsSection } from "@/components/EventsSection";
import { OnkorumkySection } from "@/components/OnkorumkySection";
import { LektoriSection } from "@/components/LektoriSection";
import { OKkartaSection } from "@/components/OKkartaSection";
import { SocialnyKompassSection } from "@/components/SocialnyKompassSection";
import { CennikSection } from "@/components/CennikSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF3F9] font-sans">
      <Navbar />
      <HeroSection />
      <NieSiVTomSamSection />
      <FeatureSection />
      <VideokniznicaSection />
      <EventsSection />
      <OnkorumkySection />
      <LektoriSection />
      <OKkartaSection />
      <SocialnyKompassSection />
      <CennikSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
