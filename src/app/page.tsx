import HeroSection from "@/components/home/HeroSection";
import TrustLogos from "@/components/home/TrustLogos";
import OrangeBanner from "@/components/home/OrangeBanner";
import UniversitesSection from "@/components/home/UniversitesSection";
import ServicesSection from "@/components/home/ServicesSection";
import TarifsComparatif from "@/components/home/TarifsComparatif";
import TestimonialsCarousel from "@/components/shared/TestimonialsCarousel";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustLogos />
      <OrangeBanner />
      <UniversitesSection />
      <ServicesSection />
      <TarifsComparatif />
      <TestimonialsCarousel />
      <CTASection />
    </main>
  );
}
