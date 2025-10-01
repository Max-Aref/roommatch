"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  CreditCard,
  ShieldCheck,
  Video,
  Lock,
  Headphones,
  ArrowRight,
  CheckCircle,
  Shield,
} from "lucide-react";

interface SafetyFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SafetyFeatureItem: React.FC<{
  feature: SafetyFeature;
  index: number;
  isVisible: boolean;
}> = ({ feature, index, isVisible }) => {
  return (
    <div
      className={`group flex items-start gap-5 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Icon Container with gradient and glow */}
      <div className='relative flex-shrink-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-[#2563EB] to-[#0EA5E9] rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity'></div>
        <div className='relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#0EA5E9] flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300'>
          <div className='text-white'>{feature.icon}</div>
        </div>
      </div>

      {/* Text Content with enhanced styling */}
      <div className='flex-grow pt-1'>
        <div className='flex items-center gap-2 mb-2'>
          <h3 className='text-xl font-bold text-[#1E3A8A] group-hover:text-[#2563EB] transition-colors'>
            {feature.title}
          </h3>
          <div className='bg-gradient-to-r from-[#10B981] to-[#34D399] rounded-full p-0.5'>
            <CheckCircle size={18} className='text-white' fill='currentColor' />
          </div>
        </div>
        <p className='text-base text-[#64748B] leading-relaxed'>
          {feature.description}
        </p>
      </div>
    </div>
  );
};

const SafetySection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const safetyFeatures: SafetyFeature[] = [
    {
      icon: <CreditCard size={24} />,
      title: "Government ID Verification",
      description: "Verify identity with government-issued documents",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Background Checks",
      description: "Optional criminal and credit background screening",
    },
    {
      icon: <Video size={24} />,
      title: "Video Verification",
      description: "Confirm identity through live video verification",
    },
    {
      icon: <Lock size={24} />,
      title: "Secure Messaging",
      description: "Keep personal info private until you're ready",
    },
    {
      icon: <Headphones size={24} />,
      title: "24/7 Support",
      description: "Our team is always here to help",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className='relative py-32 bg-gradient-to-br from-[#F8FAFC] via-white to-[#EFF6FF] overflow-hidden'
    >
      {/* Animated gradient orbs */}
      <div className='absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#2563EB]/20 to-[#0EA5E9]/20 rounded-full blur-3xl animate-float-slow'></div>
      <div className='absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#10B981]/20 to-[#34D399]/20 rounded-full blur-3xl animate-float-medium'></div>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-[#8B5CF6]/10 to-[#EC4899]/10 rounded-full blur-3xl animate-pulse-slow'></div>

      {/* Enhanced dot pattern background */}
      <div
        className='absolute inset-0 opacity-[0.05]'
        style={{
          backgroundImage: `radial-gradient(circle, #2563EB 1.5px, transparent 1.5px)`,
          backgroundSize: "32px 32px",
        }}
      ></div>

      <div className='container mx-auto px-4 max-w-6xl relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-20'>
          <div className='inline-block mb-4'>
            <div className='flex items-center gap-2 bg-gradient-to-r from-[#2563EB]/10 to-[#0EA5E9]/10 px-4 py-2 rounded-full border border-[#2563EB]/20'>
              <Shield size={20} className='text-[#2563EB]' />
              <span className='text-sm font-semibold text-[#2563EB]'>
                TRUSTED BY 50,000+ USERS
              </span>
            </div>
          </div>
          <h2 className='text-5xl md:text-6xl font-outfit font-bold bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#0EA5E9] bg-clip-text text-transparent mb-6 leading-tight'>
            Your Safety is Our Priority
          </h2>
          <p className='text-xl text-[#64748B] max-w-2xl mx-auto font-medium'>
            Multiple layers of verification keep you protected every step of the
            way
          </p>
        </div>

        {/* Split Layout */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center'>
          {/* LEFT SIDE - Illustration */}
          <div className='relative order-2 lg:order-1'>
            {/* Multi-layer gradient background with animation */}
            <div className='absolute -inset-4 bg-gradient-to-br from-[#2563EB]/30 via-[#0EA5E9]/30 to-[#10B981]/30 rounded-[40px] blur-2xl animate-pulse-slow'></div>
            <div className='absolute inset-0 bg-gradient-to-tr from-[#8B5CF6]/20 to-[#EC4899]/20 rounded-[40px] blur-3xl'></div>

            {/* Central illustration container with vibrant gradient */}
            <div className='relative bg-gradient-to-br from-[#DBEAFE] via-[#E0F2FE] to-[#D1FAE5] rounded-[32px] p-12 shadow-2xl border border-white/50 backdrop-blur-sm overflow-hidden'>
              {/* Animated background pattern */}
              <div className='absolute inset-0 opacity-10'>
                <div className='absolute top-0 left-0 w-40 h-40 bg-[#2563EB] rounded-full blur-3xl animate-float-slow'></div>
                <div className='absolute bottom-0 right-0 w-40 h-40 bg-[#10B981] rounded-full blur-3xl animate-float-medium'></div>
              </div>

              {/* Large central shield with enhanced styling */}
              <div className='relative flex items-center justify-center mb-10'>
                <div className='relative'>
                  {/* Outer glow rings */}
                  <div className='absolute inset-0 w-56 h-56 -m-4 bg-gradient-to-br from-[#2563EB]/30 to-[#0EA5E9]/30 rounded-[40px] animate-ping-slow'></div>
                  <div className='absolute inset-0 w-56 h-56 -m-4 bg-gradient-to-br from-[#2563EB]/20 to-[#10B981]/20 rounded-[40px] blur-2xl'></div>

                  {/* Main shield container */}
                  <div className='relative w-48 h-48 bg-gradient-to-br from-[#2563EB] via-[#0EA5E9] to-[#10B981] rounded-[32px] flex items-center justify-center shadow-2xl transform hover:scale-110 hover:rotate-3 transition-all duration-500 group cursor-pointer'>
                    <Shield
                      size={90}
                      className='text-white drop-shadow-2xl group-hover:scale-110 transition-transform'
                      strokeWidth={1.5}
                    />

                    {/* Shine effect */}
                    <div className='absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity'></div>
                  </div>
                </div>
              </div>

              {/* Verification screens mockup - Enhanced */}
              <div className='relative grid grid-cols-3 gap-4'>
                {[
                  { icon: CreditCard, color: "from-[#2563EB] to-[#0EA5E9]" },
                  { icon: Video, color: "from-[#8B5CF6] to-[#EC4899]" },
                  { icon: ShieldCheck, color: "from-[#10B981] to-[#34D399]" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className='group/card bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100'
                  >
                    <div className='flex flex-col items-center gap-3'>
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-md group-hover/card:scale-110 transition-transform`}
                      >
                        <item.icon size={24} className='text-white' />
                      </div>
                      <div className='w-full h-1.5 bg-gradient-to-r from-[#10B981] to-[#34D399] rounded-full shadow-sm'></div>
                      <div className='bg-gradient-to-br from-[#10B981] to-[#34D399] rounded-full p-1'>
                        <CheckCircle
                          size={18}
                          className='text-white'
                          fill='currentColor'
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Floating verification badges */}
            <div className='absolute -top-6 -right-6 bg-gradient-to-br from-white to-[#F0FDF4] rounded-2xl px-5 py-3 shadow-2xl animate-float-slow border-2 border-[#10B981]/20 hover:scale-110 transition-transform cursor-pointer'>
              <div className='flex items-center gap-3'>
                <div className='bg-gradient-to-br from-[#10B981] to-[#34D399] rounded-full p-1.5'>
                  <CheckCircle
                    size={22}
                    className='text-white'
                    fill='currentColor'
                  />
                </div>
                <span className='text-base font-bold bg-gradient-to-r from-[#10B981] to-[#059669] bg-clip-text text-transparent'>
                  Verified
                </span>
              </div>
            </div>

            <div className='absolute -bottom-6 -left-6 bg-gradient-to-br from-white to-[#EFF6FF] rounded-2xl px-5 py-3 shadow-2xl animate-float-medium border-2 border-[#2563EB]/20 hover:scale-110 transition-transform cursor-pointer'>
              <div className='flex items-center gap-3'>
                <div className='bg-gradient-to-br from-[#2563EB] to-[#0EA5E9] rounded-full p-1.5'>
                  <Shield size={22} className='text-white' />
                </div>
                <span className='text-base font-bold bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] bg-clip-text text-transparent'>
                  100% Secure
                </span>
              </div>
            </div>

            <div className='absolute top-1/2 -right-8 bg-gradient-to-br from-white to-[#FEF3C7] rounded-2xl px-5 py-3 shadow-2xl animate-float-fast border-2 border-[#F59E0B]/20 hover:scale-110 transition-transform cursor-pointer'>
              <div className='flex items-center gap-3'>
                <div className='bg-gradient-to-br from-[#F59E0B] to-[#FBBF24] rounded-full p-1.5'>
                  <Lock size={22} className='text-white' />
                </div>
                <span className='text-base font-bold bg-gradient-to-r from-[#F59E0B] to-[#D97706] bg-clip-text text-transparent'>
                  Encrypted
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Safety Features List */}
          <div className='order-1 lg:order-2'>
            <div className='space-y-8'>
              {safetyFeatures.map((feature, index) => (
                <SafetyFeatureItem
                  key={index}
                  feature={feature}
                  index={index}
                  isVisible={isVisible}
                />
              ))}
            </div>

            {/* Enhanced CTA Button */}
            <div className='mt-12'>
              <button className='group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105'>
                {/* Animated background */}
                <div className='absolute inset-0 bg-gradient-to-r from-[#0EA5E9] to-[#10B981] opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                {/* Shine effect */}
                <div className='absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent'></div>

                <span className='relative z-10'>Learn More About Safety</span>
                <ArrowRight
                  size={22}
                  className='relative z-10 group-hover:translate-x-2 transition-transform duration-300'
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
