"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  Shield,
  Zap,
  Users,
  Star,
  CheckCircle,
  Building2,
  Search,
  Clock,
} from "lucide-react";

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      parameters?: Record<string, string | number | boolean>
    ) => void;
  }
}

// Persona-specific interfaces
interface PersonaFeatures {
  persona: "manager" | "landlord" | "tenant";
  primaryCTA: string;
  secondaryCTA: string;
  valueProps: string[];
  trustSignals: string[];
}

interface HeroProps {
  userRole?: "manager" | "landlord" | "tenant";
  isLoggedIn?: boolean;
}

// Persona-driven content configuration
const getPersonaContent = (
  persona: "manager" | "landlord" | "tenant"
): PersonaFeatures => {
  const contentMap = {
    manager: {
      persona: "manager" as const,
      primaryCTA: "Start Managing Properties",
      secondaryCTA: "Book Enterprise Demo",
      valueProps: [
        "Manage 100+ properties with AI automation",
        "Reduce admin time by 75% with bulk operations",
        "Ensure compliance across all portfolios",
      ],
      trustSignals: [
        "Trusted by 10,000+ property managers",
        "Enterprise-grade security & compliance",
        "24/7 dedicated account management",
      ],
    },
    landlord: {
      persona: "landlord" as const,
      primaryCTA: "List Your Property",
      secondaryCTA: "See Pricing Plans",
      valueProps: [
        "Fill vacancies 3x faster with AI matching",
        "Automate rent collection & maintenance",
        "Maximize revenue with smart pricing",
      ],
      trustSignals: [
        "800,000+ landlords trust Rently",
        "Average 95% rent collection rate",
        "Plans starting at just $12/month",
      ],
    },
    tenant: {
      persona: "tenant" as const,
      primaryCTA: "Find Your Perfect Home",
      secondaryCTA: "Download Mobile App",
      valueProps: [
        "Search verified listings with virtual tours",
        "Apply instantly with digital documents",
        "Build credit with on-time rent payments",
      ],
      trustSignals: [
        "2M+ happy tenants nationwide",
        "Fraud protection & verified listings",
        "Free for all renters - no hidden fees",
      ],
    },
  };

  return contentMap[persona];
};

// Trust indicators component
const TrustIndicators: React.FC<{ signals: string[] }> = ({ signals }) => (
  <div className='flex flex-col sm:flex-row items-center gap-4 text-sm text-neutral-600'>
    {signals.map((signal, index) => (
      <div key={index} className='flex items-center gap-2'>
        <CheckCircle className='w-4 h-4 text-success' />
        {signal}
      </div>
    ))}
  </div>
);

// Value proposition component
const ValuePropositions: React.FC<{ valueProps: string[] }> = ({
  valueProps,
}) => (
  <div className='space-y-3'>
    {valueProps.map((prop, index) => (
      <div key={index} className='flex items-start gap-3'>
        <div className='flex-shrink-0 w-6 h-6 bg-brand/10 rounded-full flex items-center justify-center mt-0.5'>
          <Zap className='w-3 h-3 text-brand' />
        </div>
        <span className='text-neutral-700'>{prop}</span>
      </div>
    ))}
  </div>
);

// Social proof component
const SocialProof: React.FC = () => (
  <div className='flex items-center gap-6 text-sm'>
    <div className='flex items-center gap-2'>
      <div className='flex -space-x-2'>
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className='w-8 h-8 bg-gradient-to-br from-brand to-brand-dark rounded-full border-2 border-white flex items-center justify-center'
          >
            <Users className='w-4 h-4 text-white' />
          </div>
        ))}
      </div>
      <span className='text-neutral-600'>10,000+ property managers</span>
    </div>
    <div className='flex items-center gap-2'>
      <div className='flex'>
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} className='w-4 h-4 text-yellow-400 fill-current' />
        ))}
      </div>
      <span className='text-neutral-600'>4.9/5 rating</span>
    </div>
  </div>
);

// Stats component for different personas
const PersonaStats: React.FC<{
  persona: "manager" | "landlord" | "tenant";
}> = ({ persona }) => {
  const statsMap = {
    manager: [
      { value: "75%", label: "Admin Time Saved", icon: Clock },
      { value: "99.9%", label: "Uptime SLA", icon: Shield },
      { value: "10K+", label: "Properties Managed", icon: Building2 },
    ],
    landlord: [
      { value: "3x", label: "Faster Tenant Placement", icon: Search },
      { value: "95%", label: "Rent Collection Rate", icon: CheckCircle },
      { value: "$12", label: "Starting Price/Month", icon: Zap },
    ],
    tenant: [
      { value: "2M+", label: "Happy Tenants", icon: Users },
      { value: "100%", label: "Verified Listings", icon: Shield },
      { value: "Free", label: "For Renters", icon: CheckCircle },
    ],
  };

  const stats = statsMap[persona];

  return (
    <div className='grid grid-cols-3 gap-6'>
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <div key={index} className='text-center'>
            <div className='w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mx-auto mb-2'>
              <IconComponent className='w-6 h-6 text-brand' />
            </div>
            <div className='text-2xl font-bold text-neutral-900'>
              {stat.value}
            </div>
            <div className='text-sm text-neutral-600'>{stat.label}</div>
          </div>
        );
      })}
    </div>
  );
};

// Main Hero Component
const Hero: React.FC<HeroProps> = ({
  userRole = "landlord",
  isLoggedIn = false,
}) => {
  const [currentPersona, setCurrentPersona] = useState<
    "manager" | "landlord" | "tenant"
  >(userRole);
  const personaContent = getPersonaContent(currentPersona);

  // Persona-specific tracking
  useEffect(() => {
    // Analytics tracking for persona interactions
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "hero_view", {
        persona: currentPersona,
        logged_in: isLoggedIn,
        timestamp: Date.now(),
      });
    }
  }, [currentPersona, isLoggedIn]);

  const handlePersonaSwitch = (persona: "manager" | "landlord" | "tenant") => {
    setCurrentPersona(persona);
    // Track persona switching for A/B testing
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "persona_switch", {
        from_persona: currentPersona,
        to_persona: persona,
      });
    }
  };

  const trackCTAClick = (ctaType: "primary" | "secondary") => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "cta_click", {
        persona: currentPersona,
        cta_type: ctaType,
        cta_text:
          ctaType === "primary"
            ? personaContent.primaryCTA
            : personaContent.secondaryCTA,
      });
    }
  };

  return (
    <section className='relative py-20 lg:py-28 bg-gradient-to-br from-background via-neutral-50 to-brand/5 overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0'>
        <div className='absolute top-20 left-10 w-72 h-72 bg-brand/10 rounded-full blur-3xl opacity-20'></div>
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20'></div>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Persona Switcher (for demo/testing purposes) */}
        {!isLoggedIn && (
          <div className='flex justify-center mb-8'>
            <div className='inline-flex bg-white rounded-xl p-1 shadow-sm border border-neutral-200'>
              {(["landlord", "manager", "tenant"] as const).map((persona) => (
                <button
                  key={persona}
                  onClick={() => handlePersonaSwitch(persona)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    currentPersona === persona
                      ? "bg-brand text-white shadow-sm"
                      : "text-neutral-600 hover:text-brand hover:bg-neutral-50"
                  }`}
                >
                  {persona.charAt(0).toUpperCase() + persona.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
          {/* Left Column - Content */}
          <div className='space-y-8'>
            {/* Main Headline - Persona Specific */}
            <div className='space-y-4'>
              <div className='inline-flex items-center gap-2 px-3 py-1 bg-brand/10 text-brand text-sm font-medium rounded-full'>
                <Zap className='w-4 h-4' />
                AI-Powered Property Management
              </div>

              <h1 className='text-4xl lg:text-6xl font-heading font-bold text-neutral-900 leading-tight'>
                {currentPersona === "manager" && (
                  <>
                    Scale Your{" "}
                    <span className='text-brand'>Property Empire</span> with AI
                    Intelligence
                  </>
                )}
                {currentPersona === "landlord" && (
                  <>
                    Maximize Your{" "}
                    <span className='text-brand'>Rental Income</span> on
                    Autopilot
                  </>
                )}
                {currentPersona === "tenant" && (
                  <>
                    Find Your <span className='text-brand'>Perfect Home</span>{" "}
                    with Confidence
                  </>
                )}
              </h1>

              <p className='text-xl text-neutral-600 leading-relaxed'>
                {currentPersona === "manager" &&
                  "Enterprise-grade property management platform trusted by 10,000+ property managers to automate operations, ensure compliance, and maximize portfolio performance."}
                {currentPersona === "landlord" &&
                  "Join 800,000+ landlords using AI-powered tools to fill vacancies faster, automate rent collection, and boost property ROI. Plans start at just $12/month."}
                {currentPersona === "tenant" &&
                  "Search 2M+ verified listings, apply instantly with digital documents, and find your perfect home with virtual tours. 100% free for renters."}
              </p>
            </div>

            {/* Value Propositions */}
            <ValuePropositions valueProps={personaContent.valueProps} />

            {/* CTAs */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <Link
                href={currentPersona === "tenant" ? "/search" : "/signup"}
                onClick={() => trackCTAClick("primary")}
                className='inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-brand to-brand-dark text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2'
              >
                {personaContent.primaryCTA}
                <ArrowRight className='w-5 h-5' />
              </Link>

              <button
                onClick={() => trackCTAClick("secondary")}
                className='inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-neutral-300 text-neutral-700 font-semibold rounded-xl hover:border-brand hover:text-brand transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2'
              >
                <Play className='w-5 h-5' />
                {personaContent.secondaryCTA}
              </button>
            </div>

            {/* Trust Indicators */}
            <TrustIndicators signals={personaContent.trustSignals} />
          </div>

          {/* Right Column - Visual/Stats */}
          <div className='space-y-8'>
            {/* Persona-specific stats */}
            <div className='bg-white rounded-2xl p-8 shadow-xl border border-neutral-200'>
              <h3 className='text-lg font-semibold text-neutral-900 mb-6 text-center'>
                Why{" "}
                {currentPersona === "manager"
                  ? "Property Managers"
                  : currentPersona === "landlord"
                  ? "Landlords"
                  : "Tenants"}{" "}
                Choose Rently
              </h3>
              <PersonaStats persona={currentPersona} />
            </div>

            {/* Social Proof */}
            <div className='text-center'>
              <SocialProof />
            </div>

            {/* Visual placeholder for property/dashboard mockup */}
            <div className='relative'>
              <div className='bg-gradient-to-br from-brand to-brand-dark rounded-2xl p-8 text-white'>
                <div className='space-y-4'>
                  <div className='flex items-center gap-3'>
                    <div className='w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center'>
                      {currentPersona === "manager" && (
                        <Building2 className='w-6 h-6' />
                      )}
                      {currentPersona === "landlord" && (
                        <Zap className='w-6 h-6' />
                      )}
                      {currentPersona === "tenant" && (
                        <Search className='w-6 h-6' />
                      )}
                    </div>
                    <div>
                      <div className='font-semibold'>
                        {currentPersona === "manager" && "Portfolio Dashboard"}
                        {currentPersona === "landlord" && "AI Property Manager"}
                        {currentPersona === "tenant" && "Smart Property Search"}
                      </div>
                      <div className='text-white/80 text-sm'>
                        See it in action
                      </div>
                    </div>
                  </div>
                  <div className='bg-white/10 rounded-lg p-4 backdrop-blur-sm'>
                    <div className='text-sm text-white/90'>
                      {currentPersona === "manager" &&
                        "Manage 500+ properties across 12 markets with AI-powered insights and automated workflows."}
                      {currentPersona === "landlord" &&
                        "Your rental income optimized with AI tenant matching, smart pricing, and automated operations."}
                      {currentPersona === "tenant" &&
                        "Find verified rentals with virtual tours, instant applications, and personalized recommendations."}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
