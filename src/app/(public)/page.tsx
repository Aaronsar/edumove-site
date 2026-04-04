import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";
import UniversitesSection from "@/components/home/UniversitesSection";
import StatsSection from "@/components/home/StatsSection";

// Lazy load below-fold components
const ServicesSection = dynamic(() => import("@/components/home/ServicesSection"));
const TestimonialsCarousel = dynamic(() => import("@/components/shared/TestimonialsCarousel"));
const CityGuidesSection = dynamic(() => import("@/components/home/CityGuidesSection"));
const FAQSection = dynamic(() => import("@/components/home/FAQSection"));
const ArticlesSection = dynamic(() => import("@/components/home/ArticlesSection"));
const CTASection = dynamic(() => import("@/components/home/CTASection"));

export default function Home() {
  return (
    <main>
      <HeroSection />
      <UniversitesSection />
      <StatsSection />
      <ServicesSection />
      <TestimonialsCarousel />
      <CityGuidesSection />
      <FAQSection />
      <ArticlesSection />
      <CTASection />
    </main>
  );
}
