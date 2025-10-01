"use client";

import React, { useEffect, useRef } from "react";
import { User, Sparkles, Home, Check } from "lucide-react";

// Custom hook for detecting if element is in viewport
const useInViewport = <T extends HTMLElement>(
  ref: React.RefObject<T | null>
) => {
  const [isIntersecting, setIntersecting] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  return isIntersecting;
};

// Step card component
interface StepCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  bullets?: string[];
  delay: number;
}

const StepCard: React.FC<StepCardProps> = ({
  number,
  title,
  description,
  icon,
  bullets,
  delay,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isVisible = useInViewport(cardRef);

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-[24px] p-10 shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300 opacity-0 translate-y-4 max-w-[380px] mx-auto w-full ${
        isVisible ? "animate-fade-in" : ""
      }`}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards",
      }}
    >
      {/* Step Number */}
      <div className='text-4xl font-bold bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] bg-clip-text text-transparent mb-6'>
        {number}
      </div>

      {/* Icon with pulse animation */}
      <div className='mb-6 relative'>
        <div className='animate-pulse-slow absolute -inset-1 rounded-full bg-gradient-to-r from-[#2563EB]/20 to-[#0EA5E9]/20 opacity-70 blur-sm'></div>
        <div className='relative text-[#2563EB] w-12 h-12'>{icon}</div>
      </div>

      {/* Content */}
      <h3 className='text-2xl font-semibold text-[#1F2937] mb-3'>{title}</h3>
      <p className='text-[#64748B] mb-4'>{description}</p>

      {/* Bullet points if provided */}
      {bullets && bullets.length > 0 && (
        <ul className='space-y-2'>
          {bullets.map((bullet, index) => (
            <li key={index} className='flex items-start gap-2'>
              <Check className='h-5 w-5 text-success mt-0.5' />
              <span className='text-sm text-[#64748B]'>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Connector line with moving dots
const ConnectorLine: React.FC<{
  isVisible: boolean;
  direction?: "left" | "right";
}> = ({ isVisible, direction = "right" }) => {
  return (
    <div className='hidden lg:flex items-center justify-center flex-grow h-24 px-6 relative'>
      <div className='w-full border-t-2 border-dashed border-[#E5E7EB] relative'>
        {/* Animated dot */}
        <div
          className={`absolute top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] opacity-0 ${
            isVisible ? "animate-dot-travel" : ""
          }`}
          style={{
            left: direction === "right" ? "0" : "auto",
            right: direction === "left" ? "0" : "auto",
            animationDirection: direction === "left" ? "reverse" : "normal",
          }}
        ></div>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useInViewport(sectionRef);

  return (
    <section
      ref={sectionRef}
      className='py-20 bg-gradient-to-b from-[#FAFAFA] to-white overflow-hidden'
    >
      <div className='container mx-auto px-4 max-w-7xl'>
        {/* Section header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-outfit font-bold text-[#1E3A8A] mb-4'>
            Find Your Match in 3 Simple Steps
          </h2>
          <p className='text-lg text-[#64748B] max-w-2xl mx-auto'>
            Our AI-powered platform makes roommate matching effortless
          </p>
        </div>

        {/* Steps row */}
        <div className='flex flex-col lg:flex-row items-stretch gap-8 lg:gap-0'>
          {/* Step 1 */}
          <StepCard
            number='01'
            title='Create Your Profile'
            description="Tell us about yourself, preferences, and what you're looking for"
            icon={<User size={48} />}
            bullets={[
              "Lifestyle preferences & habits",
              "Budget range & move-in date",
              "Location preferences & commute",
              "Upload verified ID for safety",
            ]}
            delay={100}
          />

          {/* Connector */}
          <ConnectorLine isVisible={isVisible} direction='right' />

          {/* Step 2 */}
          <StepCard
            number='02'
            title='Get Matched'
            description='Our algorithm finds compatible roommates based on 20+ factors'
            icon={<Sparkles size={48} />}
            bullets={[
              "Lifestyle compatibility score",
              "Budget & location alignment",
              "Personality trait matching",
              "Communication style analysis",
            ]}
            delay={400}
          />

          {/* Connector */}
          <ConnectorLine isVisible={isVisible} direction='right' />

          {/* Step 3 */}
          <StepCard
            number='03'
            title='Connect & Move In'
            description='Chat securely, schedule viewings, and sign your lease digitally'
            icon={
              <div className='relative'>
                <Home size={48} />
                <div className='absolute right-1 bottom-1 w-3 h-3 bg-[#F97316] rounded-full'></div>
              </div>
            }
            bullets={[
              "In-app secure messaging",
              "Verified background checks",
              "Digital lease signing",
              "Move-in coordination tools",
            ]}
            delay={700}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
