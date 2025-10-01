import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Hero3 from "@/components/sections/Hero3";
import NavigationModern from "@/components/sections/NavigationModern";
import HowItWorks from "@/components/HowItWorksSimple";
import FeatureShowcase from "@/components/FeatureShowcase";
import StatsBanner from "@/components/StatsBanner";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import SafetySection from "@/components/SafetySection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Modern Navigation with Hero3 Design DNA */}
      <NavigationModern />

      {/* Skip to content link for accessibility */}
      <a href='#main-content' className='skip-to-content'>
        Skip to main content
      </a>

      <main id='main-content' className='page-enter'>
        <Hero3 />

        {/* Spacer with consistent spacing */}
        <div className='h-20 md:h-32' aria-hidden='true'></div>

        <Hero />

        {/* Section spacing - mobile: 80px, desktop: 120px */}
        <div className='h-20 md:h-30' aria-hidden='true'></div>

        <Hero2 />

        <div className='h-20 md:h-30' aria-hidden='true'></div>

        <HowItWorks />

        <div className='h-20 md:h-30' aria-hidden='true'></div>

        <FeatureShowcase />

        <div className='h-20 md:h-30' aria-hidden='true'></div>

        <StatsBanner />

        <div className='h-20 md:h-30' aria-hidden='true'></div>

        <TestimonialsCarousel />

        <div className='h-20 md:h-30' aria-hidden='true'></div>

        <SafetySection />

        <div className='h-20 md:h-30' aria-hidden='true'></div>

        <PricingSection />

        <div className='h-20 md:h-30' aria-hidden='true'></div>

        <FAQSection />

        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
