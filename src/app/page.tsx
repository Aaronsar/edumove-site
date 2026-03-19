import HeroSection from "@/components/home/HeroSection";
import UniversitesSection from "@/components/home/UniversitesSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsCarousel from "@/components/shared/TestimonialsCarousel";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <UniversitesSection />
      <StatsSection />
      <ServicesSection />
      <TestimonialsCarousel />
      <CTASection />
    </main>
  );
}
