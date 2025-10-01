import NavigationModern from "@/components/sections/NavigationModern";
import Hero3 from "@/components/sections/Hero3";
import FeaturesInteractive from "@/components/sections/FeaturesInteractive";
import HowItWorksTimeline from "@/components/sections/HowItWorksTimeline";
import CompatibilityAI from "@/components/sections/CompatibilityAI";
import TestimonialsModern from "@/components/sections/TestimonialsModern";
import PricingModern from "@/components/sections/PricingModern";
import SafetyModern from "@/components/sections/SafetyModern";
import CTAModern from "@/components/sections/CTAModern";
import FAQModern from "@/components/sections/FAQModern";
import SectionTransition from "@/components/sections/SectionTransition";
import FooterModern from "@/components/sections/FooterModern";

export default function Home() {
  return (
    <>
      {/* Modern Navigation */}
      <NavigationModern />

      {/* Skip to content link for accessibility */}
      <a href='#main-content' className='skip-to-content'>
        Skip to main content
      </a>

      <main id='main-content' className='page-enter'>
        {/* New Modern Hero */}
        <Hero3 />

        <div className='h-20 md:h-32' aria-hidden='true'></div>

        {/* New Interactive Features Section */}
        <FeaturesInteractive />

        <div className='h-20 md:h-32' aria-hidden='true'></div>

        {/* New Timeline How It Works */}
        <HowItWorksTimeline />

        <div className='h-20 md:h-32' aria-hidden='true'></div>

        {/* New AI Compatibility Section */}
        <CompatibilityAI />

        <div className='h-20 md:h-32' aria-hidden='true'></div>

        {/* Modern Testimonials Section */}
        <TestimonialsModern />

        <div className='h-20 md:h-32' aria-hidden='true'></div>

        {/* Modern Pricing Section */}
        <PricingModern />

        <div className='h-20 md:h-32' aria-hidden='true'></div>

        {/* Modern Safety Section */}
        <SafetyModern />

        <div className='h-20 md:h-32' aria-hidden='true'></div>

        {/* Modern FAQ Section */}
        <FAQModern />

        {/* Gradient Transition between FAQ and CTA */}
        <SectionTransition />

        {/* Modern CTA Section */}
        <CTAModern />
      </main>

      {/* Modern Footer */}
      <FooterModern />
    </>
  );
}
