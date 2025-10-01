"use client";

import React, { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQAccordionItem: React.FC<{
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ item, isOpen, onToggle }) => {
  return (
    <div
      className={`bg-white border border-[#E5E7EB] rounded-2xl transition-all duration-300 ${
        isOpen ? "shadow-md" : "shadow-sm hover:shadow-md"
      }`}
    >
      <button
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
          }
        }}
        className='w-full px-6 py-6 flex items-center justify-between gap-4 text-left hover:bg-[#F9FAFB] rounded-2xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2'
        aria-expanded={isOpen}
      >
        <span className='text-lg font-semibold text-[#1F2937] pr-4'>
          {item.question}
        </span>
        <ChevronDown
          size={24}
          className={`flex-shrink-0 text-[#2563EB] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Answer - Expandable */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className='px-6 pb-6 pt-4 border-t border-[#F1F5F9]'>
          <p className='text-base text-[#64748B] leading-relaxed'>
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems: FAQItem[] = [
    {
      question: "How does the matching algorithm work?",
      answer:
        "Our AI-powered matching algorithm analyzes over 50 data points including lifestyle preferences, budget, location, move-in dates, cleanliness habits, and personality traits. It uses machine learning to identify compatibility patterns and suggests matches with the highest likelihood of success. The more you interact with the platform, the smarter it becomes at finding your perfect match.",
    },
    {
      question: "Is my personal information safe?",
      answer:
        "Absolutely. We use bank-level encryption (256-bit SSL) to protect all your data. Your personal information is never shared without your explicit consent. We're fully compliant with GDPR and CCPA regulations. Payment information is processed through PCI-compliant payment gateways, and we never store your credit card details on our servers.",
    },
    {
      question: "How do I verify my identity?",
      answer:
        "Identity verification is a simple 3-step process: First, upload a government-issued ID (driver's license, passport, or national ID). Second, take a live selfie video for facial recognition matching. Third, verify your phone number via SMS. The entire process takes about 5 minutes and is reviewed within 24 hours by our verification team.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express, Discover), debit cards, PayPal, Apple Pay, Google Pay, and bank transfers (ACH). For annual plans, we also offer invoice payments for corporate accounts. All payments are processed securely through Stripe and PayPal.",
    },
    {
      question: "Can I list multiple rooms?",
      answer:
        "Yes! With our Premium plan, you can list up to 3 rooms simultaneously. The Pro plan offers unlimited listings, perfect for property managers and landlords with multiple properties. Each listing can have its own photos, description, pricing, and availability calendar. You can manage all your listings from a single dashboard.",
    },
    {
      question: "How do background checks work?",
      answer:
        "Background checks are optional and can be requested by either party. Premium members get 1 free background check per month, while Pro members get unlimited checks. The screening includes criminal records, eviction history, credit report, and employment verification. Results are typically available within 24-48 hours and are shared only with authorized parties.",
    },
    {
      question: "What if I have a dispute with a roommate?",
      answer:
        "We offer multiple support channels for dispute resolution. Start with our in-app mediation service where our trained mediators facilitate conversations. Premium and Pro members have access to priority support with faster response times. For serious issues, we can connect you with legal resources. We also maintain a detailed guide on resolving common roommate conflicts.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel anytime with no penalties or hidden fees. Your subscription remains active until the end of your current billing period. If you cancel within the first 30 days, you're eligible for a full refund under our money-back guarantee. You can downgrade to our free Basic plan if you want to maintain your profile without premium features.",
    },
    {
      question: "How long does verification take?",
      answer:
        "Most verifications are completed within 24 hours during business days. ID verification typically takes 2-4 hours. Video verification is usually instant if done during peak hours (9 AM - 9 PM EST), or within 12 hours otherwise. Background checks take 24-48 hours depending on the depth of screening requested. You'll receive email and push notifications at each stage.",
    },
    {
      question: "Do you support international users?",
      answer:
        "Yes! RoomMatch is available in over 50 countries across North America, Europe, Asia, and Australia. We support multiple currencies and languages. International ID verification is available for passports and national IDs from all supported countries. However, background check availability varies by country due to local regulations. Contact our support team for country-specific details.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='relative py-24 bg-gradient-to-b from-[#F8FAFC] to-white overflow-hidden'>
      {/* Decorative background elements */}
      <div className='absolute top-10 left-10 w-64 h-64 bg-[#2563EB]/5 rounded-full blur-3xl'></div>
      <div className='absolute bottom-10 right-10 w-64 h-64 bg-[#0EA5E9]/5 rounded-full blur-3xl'></div>

      <div className='container mx-auto px-4 max-w-4xl relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-outfit font-bold text-[#1E3A8A] mb-4'>
            Frequently Asked Questions
          </h2>
          <p className='text-lg text-[#64748B] max-w-2xl mx-auto'>
            Everything you need to know about RoomMatch
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className='space-y-4 mb-16'>
          {faqItems.map((item, index) => (
            <FAQAccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className='text-center bg-gradient-to-br from-[#EFF6FF] to-[#F0FDF4] rounded-3xl p-12 border border-[#2563EB]/10'>
          <h3 className='text-2xl font-bold text-[#1F2937] mb-3'>
            Still have questions?
          </h3>
          <p className='text-base text-[#64748B] mb-6'>
            Our support team is here to help you 24/7
          </p>
          <button className='inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-[#2563EB] text-[#2563EB] rounded-full font-bold text-base hover:bg-[#2563EB] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105'>
            <MessageCircle size={20} />
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
