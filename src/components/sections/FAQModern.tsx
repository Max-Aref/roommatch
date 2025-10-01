"use client";

import { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  MessageCircle,
  HelpCircle,
  Sparkles,
  Shield,
  Clock,
  Globe,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: "general" | "security" | "payment" | "technical";
  icon: React.ReactNode;
}

const FAQAccordionItem = ({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className={`relative group transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Glow Effect */}
      <div className='absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500' />

      <div className='relative backdrop-blur-xl bg-gray-900/80 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300'>
        {/* Question Button */}
        <button
          onClick={onToggle}
          className='w-full px-6 py-6 flex items-start justify-between gap-4 text-left group/btn transition-all duration-300'
          aria-expanded={isOpen}
        >
          <div className='flex items-start gap-4 flex-1'>
            {/* Icon */}
            <div className='relative mt-1'>
              <div className='w-10 h-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center border border-purple-500/30'>
                {item.icon}
              </div>
              {isOpen && (
                <div className='absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur-md opacity-50' />
              )}
            </div>

            {/* Question Text */}
            <div className='flex-1'>
              <h3 className='text-lg font-semibold text-white group-hover/btn:text-transparent group-hover/btn:bg-gradient-to-r group-hover/btn:from-purple-200 group-hover/btn:to-pink-200 group-hover/btn:bg-clip-text transition-all duration-300'>
                {item.question}
              </h3>
              <span className='text-xs text-purple-400 font-medium mt-1 inline-block capitalize'>
                {item.category}
              </span>
            </div>
          </div>

          {/* Chevron */}
          <div className='relative mt-2'>
            <ChevronDown
              className={`w-5 h-5 text-purple-400 transition-all duration-500 ${
                isOpen ? "rotate-180 text-pink-400" : ""
              }`}
            />
          </div>
        </button>

        {/* Answer - Expandable */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className='px-6 pb-6 pt-2 border-t border-white/5'>
            <div className='pl-14'>
              <p className='text-base text-gray-300 leading-relaxed'>
                {item.answer}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Line (when open) */}
        {isOpen && (
          <div className='absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse-slow' />
        )}
      </div>
    </div>
  );
};

export default function FAQModern() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const faqItems: FAQItem[] = [
    {
      question: "How does the matching algorithm work?",
      answer:
        "Our AI-powered matching algorithm analyzes over 50 data points including lifestyle preferences, budget, location, move-in dates, cleanliness habits, and personality traits. It uses machine learning to identify compatibility patterns and suggests matches with the highest likelihood of success. The more you interact with the platform, the smarter it becomes at finding your perfect match.",
      category: "general",
      icon: <Sparkles className='w-5 h-5 text-purple-400' />,
    },
    {
      question: "Is my personal information safe?",
      answer:
        "Absolutely. We use bank-level encryption (256-bit SSL) to protect all your data. Your personal information is never shared without your explicit consent. We're fully compliant with GDPR and CCPA regulations. Payment information is processed through PCI-compliant payment gateways, and we never store your credit card details on our servers.",
      category: "security",
      icon: <Shield className='w-5 h-5 text-green-400' />,
    },
    {
      question: "How do I verify my identity?",
      answer:
        "Identity verification is a simple 3-step process: First, upload a government-issued ID (driver's license, passport, or national ID). Second, take a live selfie video for facial recognition matching. Third, verify your phone number via SMS. The entire process takes about 5 minutes and is reviewed within 24 hours by our verification team.",
      category: "security",
      icon: <Shield className='w-5 h-5 text-green-400' />,
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express, Discover), debit cards, PayPal, Apple Pay, Google Pay, and bank transfers (ACH). For annual plans, we also offer invoice payments for corporate accounts. All payments are processed securely through Stripe and PayPal.",
      category: "payment",
      icon: <HelpCircle className='w-5 h-5 text-blue-400' />,
    },
    {
      question: "Can I list multiple rooms?",
      answer:
        "Yes! With our Premium plan, you can list up to 3 rooms simultaneously. The Pro plan offers unlimited listings, perfect for property managers and landlords with multiple properties. Each listing can have its own photos, description, pricing, and availability calendar. You can manage all your listings from a single dashboard.",
      category: "general",
      icon: <Sparkles className='w-5 h-5 text-purple-400' />,
    },
    {
      question: "How do background checks work?",
      answer:
        "Background checks are optional and can be requested by either party. Premium members get 1 free background check per month, while Pro members get unlimited checks. The screening includes criminal records, eviction history, credit report, and employment verification. Results are typically available within 24-48 hours and are shared only with authorized parties.",
      category: "security",
      icon: <Shield className='w-5 h-5 text-green-400' />,
    },
    {
      question: "What if I have a dispute with a roommate?",
      answer:
        "We offer multiple support channels for dispute resolution. Start with our in-app mediation service where our trained mediators facilitate conversations. Premium and Pro members have access to priority support with faster response times. For serious issues, we can connect you with legal resources. We also maintain a detailed guide on resolving common roommate conflicts.",
      category: "general",
      icon: <HelpCircle className='w-5 h-5 text-blue-400' />,
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel anytime with no penalties or hidden fees. Your subscription remains active until the end of your current billing period. If you cancel within the first 30 days, you're eligible for a full refund under our money-back guarantee. You can downgrade to our free Basic plan if you want to maintain your profile without premium features.",
      category: "payment",
      icon: <HelpCircle className='w-5 h-5 text-blue-400' />,
    },
    {
      question: "How long does verification take?",
      answer:
        "Most verifications are completed within 24 hours during business days. ID verification typically takes 2-4 hours. Video verification is usually instant if done during peak hours (9 AM - 9 PM EST), or within 12 hours otherwise. Background checks take 24-48 hours depending on the depth of screening requested. You'll receive email and push notifications at each stage.",
      category: "technical",
      icon: <Clock className='w-5 h-5 text-orange-400' />,
    },
    {
      question: "Do you support international users?",
      answer:
        "Yes! RoomMatch is available in over 50 countries across North America, Europe, Asia, and Australia. We support multiple currencies and languages. International ID verification is available for passports and national IDs from all supported countries. However, background check availability varies by country due to local regulations. Contact our support team for country-specific details.",
      category: "technical",
      icon: <Globe className='w-5 h-5 text-cyan-400' />,
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className='relative py-20 md:py-32 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 overflow-hidden'
    >
      {/* Animated Background Elements */}
      <div className='absolute inset-0 pointer-events-none'>
        {/* Grid Pattern */}
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#8B5CF620_1px,transparent_1px),linear-gradient(to_bottom,#8B5CF620_1px,transparent_1px)] bg-[size:4rem_4rem]' />

        {/* Gradient Orbs */}
        <div className='absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-slow' />
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float-medium' />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl animate-float-fast' />
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10'>
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className='inline-block mb-4'>
            <div className='relative'>
              <HelpCircle className='w-16 h-16 text-purple-400' />
              <div className='absolute -inset-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-50 animate-pulse-slow' />
            </div>
          </div>

          <h2 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent'>
            Frequently Asked Questions
          </h2>
          <p className='text-lg text-gray-300 max-w-2xl mx-auto'>
            Everything you need to know about finding your perfect roommate
          </p>

          {/* Category Pills */}
          <div className='flex flex-wrap justify-center gap-3 mt-8'>
            {["general", "security", "payment", "technical"].map(
              (category, index) => (
                <div
                  key={category}
                  className='relative group'
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className='absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity' />
                  <div className='relative px-4 py-2 backdrop-blur-xl bg-gray-900/50 border border-white/10 rounded-full'>
                    <span className='text-sm font-medium text-gray-300 capitalize'>
                      {category}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className='space-y-4 mb-16'>
          {faqItems.map((item, index) => (
            <FAQAccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`relative group transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          {/* Glow Effect */}
          <div className='absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-3xl blur-lg opacity-25 group-hover:opacity-50 transition-opacity' />

          <div className='relative backdrop-blur-xl bg-gray-900/80 border border-white/10 rounded-3xl p-8 md:p-12 text-center'>
            {/* Decorative Elements */}
            <div className='absolute top-4 left-4 w-20 h-20 bg-purple-500/10 rounded-full blur-2xl' />
            <div className='absolute bottom-4 right-4 w-20 h-20 bg-pink-500/10 rounded-full blur-2xl' />

            <div className='relative'>
              <h3 className='text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent'>
                Still have questions?
              </h3>
              <p className='text-base md:text-lg text-gray-300 mb-6 max-w-md mx-auto'>
                Our support team is here to help you 24/7
              </p>

              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                {/* Primary CTA */}
                <a
                  href='#contact'
                  className='relative group/btn inline-flex items-center justify-center gap-3'
                >
                  <div className='absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-50 group-hover/btn:opacity-100 transition-opacity' />
                  <div className='relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-3'>
                    <MessageCircle className='w-5 h-5' />
                    Contact Support
                  </div>
                </a>

                {/* Secondary CTA */}
                <a
                  href='#help'
                  className='relative group/btn inline-flex items-center justify-center gap-3'
                >
                  <div className='absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-0 group-hover/btn:opacity-50 transition-opacity' />
                  <div className='relative px-8 py-4 backdrop-blur-xl bg-gray-900/50 border border-white/20 rounded-full font-semibold text-white hover:border-blue-500/50 transition-all flex items-center gap-3'>
                    <HelpCircle className='w-5 h-5' />
                    Help Center
                  </div>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className='flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-400'>
                <div className='flex items-center gap-2'>
                  <Clock className='w-4 h-4 text-purple-400' />
                  <span>24/7 Support</span>
                </div>
                <div className='flex items-center gap-2'>
                  <MessageCircle className='w-4 h-4 text-pink-400' />
                  <span>Avg Response: 2 hours</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Sparkles className='w-4 h-4 text-blue-400' />
                  <span>98% Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scan Line */}
      <div className='absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse-slow' />
    </section>
  );
}
