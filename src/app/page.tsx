import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import UniversitesSection from "@/components/home/UniversitesSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsCarousel from "@/components/shared/TestimonialsCarousel";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <UniversitesSection />
      <ServicesSection />
      <TestimonialsCarousel />
      <CTASection />
    </main>
  );
}
