"use client";

import React from "react";
import {
  Sparkles,
  ShieldCheck,
  MessageCircle,
  Video,
  Sliders,
  BadgeCheck,
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  gradientFrom,
  gradientTo,
}) => {
  return (
    <div className='group bg-white rounded-[20px] p-8 border border-[#F1F5F9] hover:border-[#2563EB] transition-all duration-300 hover:shadow-lg hover:-translate-y-1'>
      {/* Icon container with gradient background */}
      <div
        className='w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:rotate-[5deg] transition-transform duration-300'
        style={{
          background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
        }}
      >
        <div className='text-white animate-pulse-slow'>{icon}</div>
      </div>

      {/* Title */}
      <h3 className='text-xl font-semibold text-[#1F2937] mb-2'>{title}</h3>

      {/* Description */}
      <p className='text-base text-[#64748B] leading-relaxed'>{description}</p>
    </div>
  );
};

const FeatureShowcase: React.FC = () => {
  const features = [
    {
      icon: <Sparkles size={28} />,
      title: "AI Matching",
      description:
        "Advanced algorithms analyze compatibility across lifestyle, budget, and personality to find your perfect roommate match.",
      gradientFrom: "#2563EB",
      gradientTo: "#0EA5E9",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Background Checks",
      description:
        "Comprehensive verification including criminal records, rental history, and employment to ensure safety and trust.",
      gradientFrom: "#10B981",
      gradientTo: "#34D399",
    },
    {
      icon: <MessageCircle size={28} />,
      title: "Secure Messaging",
      description:
        "Encrypted in-app chat keeps your conversations private while you get to know potential roommates.",
      gradientFrom: "#3B82F6",
      gradientTo: "#60A5FA",
    },
    {
      icon: <Video size={28} />,
      title: "Video Verification",
      description:
        "Live video calls and identity verification ensure you're connecting with real, verified individuals.",
      gradientFrom: "#F97316",
      gradientTo: "#FDBA74",
    },
    {
      icon: <Sliders size={28} />,
      title: "Flexible Filters",
      description:
        "Customize your search with detailed filters for location, budget, move-in dates, lifestyle preferences, and more.",
      gradientFrom: "#8B5CF6",
      gradientTo: "#A78BFA",
    },
    {
      icon: <BadgeCheck size={28} />,
      title: "Verified Listings",
      description:
        "Every listing is verified and monitored to prevent scams and ensure legitimate housing opportunities.",
      gradientFrom: "#EC4899",
      gradientTo: "#F472B6",
    },
  ];

  return (
    <section className='relative py-20 bg-gradient-to-b from-[#FAFAFA] to-[#F8FAFC] overflow-hidden'>
      {/* Decorative background elements */}
      <div className='absolute inset-0 pointer-events-none overflow-hidden'>
        {/* Floating geometric shapes */}
        <div className='absolute top-20 left-10 w-20 h-20 border-2 border-[#2563EB]/10 rounded-lg rotate-12 animate-float-slow'></div>
        <div className='absolute top-40 right-20 w-16 h-16 bg-[#0EA5E9]/5 rounded-full animate-float-medium'></div>
        <div className='absolute bottom-32 left-1/4 w-24 h-24 border-2 border-[#10B981]/10 rounded-full animate-float-fast'></div>
        <div className='absolute bottom-20 right-1/3 w-14 h-14 bg-[#F97316]/5 rounded-lg rotate-45 animate-float-slow'></div>
        <div className='absolute top-1/3 right-10 w-12 h-12 border-2 border-[#8B5CF6]/10 rounded-lg -rotate-12 animate-float-medium'></div>
        <div className='absolute top-2/3 left-20 w-18 h-18 bg-[#EC4899]/5 rounded-full animate-float-fast'></div>
      </div>

      <div className='container mx-auto px-4 max-w-7xl relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-outfit font-bold text-[#1E3A8A] mb-4'>
            Why RoomMatch is Different
          </h2>
          <p className='text-lg text-[#64748B] max-w-2xl mx-auto'>
            Everything you need for a safe, seamless roommate search
          </p>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradientFrom={feature.gradientFrom}
              gradientTo={feature.gradientTo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
