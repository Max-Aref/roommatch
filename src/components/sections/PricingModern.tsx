"use client";

import { useState, useRef, useEffect } from "react";
import { Check, X, Sparkles, Zap, Crown, ArrowRight } from "lucide-react";

interface PricingTier {
  name: string;
  tagline: string;
  monthlyPrice: number;
  yearlyPrice: number;
  badge?: string;
  badgeColor: string;
  gradient: string;
  glowColor: string;
  features: { name: string; included: boolean }[];
  popular?: boolean;
}

const PricingCard = ({
  tier,
  isYearly,
  isPopular,
  delay,
}: {
  tier: PricingTier;
  isYearly: boolean;
  isPopular: boolean;
  delay: number;
}) => {
  const price = isYearly ? tier.yearlyPrice : tier.monthlyPrice;
  const savings = isYearly
    ? Math.round(
        ((tier.monthlyPrice * 12 - tier.yearlyPrice) /
          (tier.monthlyPrice * 12)) *
          100
      )
    : 0;

  return (
    <div
      className={`relative group animate-fade-in ${
        isPopular ? "lg:scale-110 z-10" : "z-0"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Neon Glow */}
      <div
        className={`absolute -inset-1 bg-gradient-to-r ${
          tier.gradient
        } rounded-3xl blur-xl transition-opacity duration-500 ${
          isPopular ? "opacity-60" : "opacity-0 group-hover:opacity-40"
        }`}
      />

      {/* Card */}
      <div
        className={`relative h-full bg-gray-900/90 backdrop-blur-xl border rounded-3xl p-8 transition-all duration-500 ${
          isPopular
            ? "border-purple-500/50 shadow-2xl shadow-purple-500/20"
            : "border-white/10 hover:border-purple-500/30"
        }`}
      >
        {/* Popular Badge */}
        {tier.badge && (
          <div className='absolute -top-4 left-1/2 -translate-x-1/2'>
            <div
              className={`relative px-6 py-2 rounded-full bg-gradient-to-r ${tier.gradient}`}
            >
              <span className='text-sm font-bold text-white'>{tier.badge}</span>
              <div
                className={`absolute inset-0 rounded-full bg-gradient-to-r ${tier.gradient} blur-lg opacity-50 animate-pulse-slow`}
              />
            </div>
          </div>
        )}

        {/* Icon */}
        <div className='flex justify-center mb-6'>
          <div
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tier.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
          >
            {tier.name === "Basic Match" && (
              <Sparkles className='w-8 h-8 text-white' />
            )}
            {tier.name === "Premium Match" && (
              <Zap className='w-8 h-8 text-white' />
            )}
            {tier.name === "Elite Match" && (
              <Crown className='w-8 h-8 text-white' />
            )}
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tier.gradient} blur-xl opacity-30 group-hover:opacity-50 transition-opacity`}
            />
          </div>
        </div>

        {/* Name & Tagline */}
        <h3 className='text-2xl font-bold text-white text-center mb-2'>
          {tier.name}
        </h3>
        <p className='text-gray-400 text-center mb-6'>{tier.tagline}</p>

        {/* Price */}
        <div className='text-center mb-8'>
          <div className='flex items-baseline justify-center gap-2'>
            <span className='text-gray-500 text-2xl'>$</span>
            <span
              className={`text-6xl font-bold bg-gradient-to-r ${tier.gradient} bg-clip-text text-transparent`}
            >
              {price}
            </span>
            <span className='text-gray-400 text-lg'>
              /{isYearly ? "year" : "month"}
            </span>
          </div>
          {isYearly && savings > 0 && (
            <div className='mt-2'>
              <span className='inline-block px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-semibold animate-pulse'>
                Save {savings}%
              </span>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <button
          className={`group/btn relative w-full py-4 rounded-xl font-bold text-lg mb-8 overflow-hidden transition-all duration-300 ${
            isPopular
              ? `bg-gradient-to-r ${tier.gradient} text-white hover:scale-105`
              : "bg-gray-800 border border-gray-700 text-white hover:border-purple-500/50"
          }`}
        >
          <span className='relative z-10 flex items-center justify-center gap-2'>
            Get Started
            <ArrowRight
              size={20}
              className='group-hover/btn:translate-x-1 transition-transform'
            />
          </span>
          {isPopular && (
            <div
              className={`absolute inset-0 bg-gradient-to-r ${tier.gradient} opacity-0 group-hover/btn:opacity-100 transition-opacity blur-xl`}
            />
          )}
        </button>

        {/* Features List */}
        <div className='space-y-4'>
          {tier.features.map((feature, index) => (
            <div
              key={index}
              className='flex items-start gap-3 transition-all duration-300 hover:translate-x-1'
            >
              {feature.included ? (
                <div
                  className={`w-5 h-5 rounded-full bg-gradient-to-r ${tier.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}
                >
                  <Check size={14} className='text-white' />
                </div>
              ) : (
                <div className='w-5 h-5 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center flex-shrink-0 mt-0.5'>
                  <X size={14} className='text-gray-600' />
                </div>
              )}
              <span
                className={`text-sm ${
                  feature.included
                    ? "text-gray-300"
                    : "text-gray-600 line-through"
                }`}
              >
                {feature.name}
              </span>
            </div>
          ))}
        </div>

        {/* Decorative Glow */}
        <div
          className='absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity'
          style={{
            background: `linear-gradient(90deg, transparent, ${tier.glowColor}, transparent)`,
          }}
        />
      </div>
    </div>
  );
};

export default function PricingModern() {
  const [isYearly, setIsYearly] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const pricingTiers: PricingTier[] = [
    {
      name: "Basic Match",
      tagline: "Perfect to Start",
      monthlyPrice: 0,
      yearlyPrice: 0,
      badge: undefined,
      badgeColor: "from-gray-500 to-gray-600",
      gradient: "from-gray-500 to-gray-600",
      glowColor: "#6B7280",
      features: [
        { name: "Basic profile creation", included: true },
        { name: "5 matches per week", included: true },
        { name: "Text chat only", included: true },
        { name: "Community support", included: true },
        { name: "AI-powered compatibility scoring", included: false },
        { name: "Voice/video chat", included: false },
        { name: "Virtual room tours", included: false },
        { name: "Background check integration", included: false },
      ],
    },
    {
      name: "Premium Match",
      tagline: "Most Popular Choice",
      monthlyPrice: 14.99,
      yearlyPrice: 149,
      badge: "Most Popular",
      badgeColor: "from-purple-500 to-pink-500",
      gradient: "from-purple-500 to-pink-500",
      glowColor: "#A855F6",
      popular: true,
      features: [
        { name: "Unlimited matches", included: true },
        { name: "AI-powered compatibility scoring", included: true },
        { name: "Voice/video chat", included: true },
        { name: "Virtual room tours", included: true },
        { name: "Priority support", included: true },
        { name: "Advanced filters", included: true },
        { name: "Background check integration", included: false },
        { name: "Dedicated account manager", included: false },
      ],
    },
    {
      name: "Elite Match",
      tagline: "Best Value",
      monthlyPrice: 29.99,
      yearlyPrice: 299,
      badge: "Best Value",
      badgeColor: "from-orange-500 to-amber-500",
      gradient: "from-orange-500 to-amber-500",
      glowColor: "#F59E0B",
      features: [
        { name: "Everything in Premium", included: true },
        { name: "Background check integration", included: true },
        { name: "Dedicated account manager", included: true },
        { name: "Early access to new features", included: true },
        { name: "AR room visualization", included: true },
        { name: "Priority matching algorithm", included: true },
        { name: "Personalized roommate recommendations", included: true },
        { name: "White-glove concierge service", included: true },
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className='relative py-24 md:py-32 bg-gradient-to-b from-gray-900 via-purple-900/10 to-gray-900 overflow-hidden'
    >
      {/* Animated Background */}
      <div className='absolute inset-0'>
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-slow' />
        <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float-medium' />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-fast' />
      </div>

      {/* Tech Grid */}
      <div className='absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]' />

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <Sparkles className='w-4 h-4 text-purple-400' />
            <span className='text-sm font-semibold text-purple-400'>
              Simple Pricing
            </span>
          </div>

          {/* Title */}
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Find Your{" "}
            <span className='bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent'>
              Perfect Plan
            </span>
          </h2>

          {/* Subtitle */}
          <p
            className={`text-xl text-gray-300 mb-8 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Start free, upgrade anytime
          </p>

          {/* Toggle */}
          <div
            className={`inline-flex items-center gap-4 p-2 rounded-full bg-gray-800/80 backdrop-blur-sm border border-purple-500/20 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <span
              className={`px-4 text-sm font-medium transition-colors ${
                !isYearly ? "text-white" : "text-gray-500"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className='relative w-14 h-7 rounded-full bg-gray-700 transition-all duration-300'
              aria-label='Toggle pricing period'
            >
              <div
                className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-transform duration-300 ${
                  isYearly ? "translate-x-7" : "translate-x-0"
                }`}
              >
                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-md opacity-50' />
              </div>
            </button>
            <span
              className={`px-4 text-sm font-medium transition-colors ${
                isYearly ? "text-white" : "text-gray-500"
              }`}
            >
              Yearly
            </span>
            {isYearly && (
              <span className='px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-semibold animate-fade-in'>
                Save 17%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6 max-w-6xl mx-auto mb-16'>
          {pricingTiers.map((tier, index) => (
            <PricingCard
              key={tier.name}
              tier={tier}
              isYearly={isYearly}
              isPopular={tier.popular || false}
              delay={index * 150}
            />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className='text-center'>
          <div className='inline-flex flex-wrap justify-center items-center gap-8 px-8 py-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-purple-500/20'>
            <div className='flex items-center gap-2 text-gray-300'>
              <Check className='w-5 h-5 text-green-400' />
              <span className='text-sm'>Cancel anytime</span>
            </div>
            <div className='w-px h-6 bg-gray-700' />
            <div className='flex items-center gap-2 text-gray-300'>
              <Check className='w-5 h-5 text-green-400' />
              <span className='text-sm'>30-day money-back guarantee</span>
            </div>
            <div className='w-px h-6 bg-gray-700' />
            <div className='flex items-center gap-2 text-gray-300'>
              <Check className='w-5 h-5 text-green-400' />
              <span className='text-sm'>No credit card required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
