"use client";

import React, { useState } from "react";
import { Check, X, Sparkles } from "lucide-react";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingTier {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  buttonStyle: "primary-coral" | "primary-blue" | "secondary";
  popular?: boolean;
  trialText?: string;
}

const PricingCard: React.FC<{
  tier: PricingTier;
  isYearly: boolean;
  isPopular?: boolean;
}> = ({ tier, isYearly, isPopular = false }) => {
  const price = isYearly ? tier.yearlyPrice : tier.monthlyPrice;
  const savings = isYearly
    ? Math.round((tier.monthlyPrice * 12 - tier.yearlyPrice) * 100) / 100
    : 0;

  return (
    <div
      className={`relative bg-white rounded-[24px] p-10 transition-all duration-300 hover:-translate-y-2 ${
        isPopular
          ? "border-2 border-[#2563EB] shadow-2xl scale-105 z-10"
          : "border border-[#E5E7EB] shadow-lg hover:shadow-xl"
      }`}
    >
      {/* Most Popular Badge */}
      {isPopular && (
        <div className='absolute -top-4 left-1/2 -translate-x-1/2'>
          <div className='bg-gradient-to-r from-[#F97316] to-[#FDBA74] text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2'>
            <Sparkles size={16} />
            Most Popular
          </div>
        </div>
      )}

      {/* Tier Name */}
      <h3 className='text-2xl font-semibold text-[#1F2937] mb-2'>
        {tier.name}
      </h3>

      {/* Description */}
      <p className='text-sm text-[#64748B] mb-6'>{tier.description}</p>

      {/* Price */}
      <div className='mb-6'>
        <div className='flex items-baseline gap-1'>
          <span className='text-5xl font-bold text-[#1F2937]'>${price}</span>
          <span className='text-lg text-[#64748B]'>/month</span>
        </div>
        {isYearly && savings > 0 && (
          <p className='text-sm text-[#10B981] font-semibold mt-2'>
            Save ${savings}/year
          </p>
        )}
      </div>

      {/* Features List */}
      <ul className='space-y-4 mb-8'>
        {tier.features.map((feature, index) => (
          <li key={index} className='flex items-start gap-3'>
            {feature.included ? (
              <div className='flex-shrink-0 w-5 h-5 rounded-full bg-[#10B981]/10 flex items-center justify-center mt-0.5'>
                <Check size={14} className='text-[#10B981]' strokeWidth={3} />
              </div>
            ) : (
              <div className='flex-shrink-0 w-5 h-5 rounded-full bg-[#EF4444]/10 flex items-center justify-center mt-0.5'>
                <X size={14} className='text-[#EF4444]' strokeWidth={3} />
              </div>
            )}
            <span
              className={`text-base ${
                feature.included
                  ? "text-[#64748B]"
                  : "text-[#9CA3AF] line-through"
              }`}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        className={`w-full py-4 rounded-full font-bold text-base transition-all duration-300 ${
          tier.buttonStyle === "primary-coral"
            ? "bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white hover:shadow-lg hover:scale-105"
            : tier.buttonStyle === "primary-blue"
            ? "bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] text-white hover:shadow-lg hover:scale-105"
            : "bg-white border-2 border-[#E5E7EB] text-[#1F2937] hover:border-[#2563EB] hover:text-[#2563EB]"
        }`}
      >
        {tier.buttonText}
      </button>

      {/* Trial Text */}
      {tier.trialText && (
        <p className='text-center text-sm text-[#64748B] mt-3'>
          {tier.trialText}
        </p>
      )}
    </div>
  );
};

const PricingSection: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const pricingTiers: PricingTier[] = [
    {
      name: "Basic",
      monthlyPrice: 0,
      yearlyPrice: 0,
      description: "Perfect for casual browsing",
      buttonText: "Get Started",
      buttonStyle: "secondary",
      features: [
        { text: "Browse listings", included: true },
        { text: "Basic filters", included: true },
        { text: "5 messages per month", included: true },
        { text: "Standard support", included: true },
        { text: "Unlimited messages", included: false },
        { text: "Advanced AI matching", included: false },
        { text: "Video verification", included: false },
      ],
    },
    {
      name: "Premium",
      monthlyPrice: 19.99,
      yearlyPrice: 191.9, // 20% discount
      description: "Best for active searchers",
      buttonText: "Start Free Trial",
      buttonStyle: "primary-coral",
      popular: true,
      trialText: "14-day free trial",
      features: [
        { text: "Everything in Basic", included: true },
        { text: "Unlimited messages", included: true },
        { text: "Advanced AI matching", included: true },
        { text: "Video verification", included: true },
        { text: "Priority listings", included: true },
        { text: "Background checks (1 free)", included: true },
        { text: "Priority support", included: true },
        { text: "Unlimited listings", included: false },
        { text: "Featured placement", included: false },
      ],
    },
    {
      name: "Pro",
      monthlyPrice: 39.99,
      yearlyPrice: 383.9, // 20% discount
      description: "For property owners",
      buttonText: "Get Started",
      buttonStyle: "primary-blue",
      features: [
        { text: "Everything in Premium", included: true },
        { text: "Unlimited listings", included: true },
        { text: "Featured placement", included: true },
        { text: "Tenant screening tools", included: true },
        { text: "Digital lease signing", included: true },
        { text: "Analytics dashboard", included: true },
        { text: "Dedicated account manager", included: true },
      ],
    },
  ];

  return (
    <section className='relative py-24 bg-gradient-to-b from-[#FAFAFA] to-white overflow-hidden'>
      {/* Decorative background elements */}
      <div className='absolute top-20 left-10 w-72 h-72 bg-[#2563EB]/5 rounded-full blur-3xl'></div>
      <div className='absolute bottom-20 right-10 w-72 h-72 bg-[#F97316]/5 rounded-full blur-3xl'></div>

      <div className='container mx-auto px-4 max-w-7xl relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-outfit font-bold text-[#1E3A8A] mb-4'>
            Simple, Transparent Pricing
          </h2>
          <p className='text-lg text-[#64748B] mb-8'>
            Choose the plan that works for you
          </p>

          {/* Pricing Toggle */}
          <div className='inline-flex items-center gap-4 bg-white rounded-full p-2 shadow-md border border-[#E5E7EB]'>
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                !isYearly
                  ? "bg-[#2563EB] text-white"
                  : "text-[#64748B] hover:text-[#1F2937]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                isYearly
                  ? "bg-[#2563EB] text-white"
                  : "text-[#64748B] hover:text-[#1F2937]"
              }`}
            >
              Yearly
              <span className='bg-[#10B981] text-white text-xs px-2 py-1 rounded-full'>
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 items-center'>
          {pricingTiers.map((tier, index) => (
            <PricingCard
              key={index}
              tier={tier}
              isYearly={isYearly}
              isPopular={tier.popular}
            />
          ))}
        </div>

        {/* Money-back Guarantee Badge */}
        <div className='flex justify-center'>
          <div className='inline-flex items-center gap-3 bg-gradient-to-r from-[#EFF6FF] to-[#F0FDF4] px-8 py-4 rounded-full border border-[#2563EB]/20 shadow-sm'>
            <div className='w-10 h-10 bg-gradient-to-br from-[#10B981] to-[#34D399] rounded-full flex items-center justify-center'>
              <Check size={20} className='text-white' strokeWidth={3} />
            </div>
            <div className='text-left'>
              <p className='font-bold text-[#1F2937] text-base'>
                30-Day Money-Back Guarantee
              </p>
              <p className='text-sm text-[#64748B]'>
                No questions asked, full refund
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
