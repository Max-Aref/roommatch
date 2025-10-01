"use client";

import { useState, useRef, useEffect } from "react";
import {
  UserPlus,
  Sparkles,
  MessageSquare,
  Video,
  Home,
  Check,
} from "lucide-react";

interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
}

const ProcessStep = ({
  step,
  index,
  isVisible,
}: {
  step: Step;
  index: number;
  isVisible: boolean;
}) => {
  const isEven = index % 2 === 0;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setProgress(100);
      }, index * 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, index]);

  return (
    <div
      className={`relative flex items-center gap-8 md:gap-16 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Content Side */}
      <div
        className={`flex-1 ${
          isEven ? "md:text-right" : "md:text-left"
        } text-left`}
      >
        {/* Animated Number */}
        <div
          className={`inline-block text-7xl md:text-8xl font-bold mb-4 bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent opacity-20`}
        >
          {String(step.number).padStart(2, "0")}
        </div>

        {/* Title */}
        <h3 className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3'>
          {step.title}
        </h3>

        {/* Description */}
        <p className='text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-md'>
          {step.description}
        </p>

        {/* Progress Circle */}
        <div className='mt-6 inline-flex items-center gap-3'>
          <div className='relative w-16 h-16'>
            {/* Background Circle */}
            <svg className='w-16 h-16 transform -rotate-90'>
              <circle
                cx='32'
                cy='32'
                r='28'
                stroke='currentColor'
                strokeWidth='4'
                fill='none'
                className='text-gray-200 dark:text-gray-700'
              />
              {/* Progress Circle */}
              <circle
                cx='32'
                cy='32'
                r='28'
                stroke='url(#gradient-${index})'
                strokeWidth='4'
                fill='none'
                strokeDasharray={`${2 * Math.PI * 28}`}
                strokeDashoffset={`${2 * Math.PI * 28 * (1 - progress / 100)}`}
                className='transition-all duration-1000 ease-out'
                strokeLinecap='round'
              />
              <defs>
                <linearGradient
                  id={`gradient-${index}`}
                  x1='0%'
                  y1='0%'
                  x2='100%'
                  y2='100%'
                >
                  <stop offset='0%' stopColor={step.color} />
                  <stop
                    offset='100%'
                    stopColor={step.color}
                    stopOpacity='0.6'
                  />
                </linearGradient>
              </defs>
            </svg>
            {/* Checkmark */}
            <div className='absolute inset-0 flex items-center justify-center'>
              <Check
                className={`w-6 h-6 text-${
                  step.color
                } transition-all duration-500 ${
                  progress === 100
                    ? "scale-100 opacity-100"
                    : "scale-0 opacity-0"
                }`}
                style={{ color: step.color }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Center Timeline Node */}
      <div className='relative flex flex-col items-center'>
        {/* Icon Container */}
        <div
          className={`relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-2xl transform hover:scale-110 hover:rotate-6 transition-all duration-500`}
        >
          <div className='text-white'>{step.icon}</div>

          {/* Pulse Ring */}
          <div
            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.gradient} animate-ping-slow opacity-30`}
          />
        </div>

        {/* Connecting Line (not for last step) */}
        {index < 4 && (
          <div className='absolute top-20 md:top-24 left-1/2 -translate-x-1/2 w-1 h-32 md:h-40 overflow-hidden'>
            <div
              className={`w-full bg-gradient-to-b ${step.gradient} transition-all duration-1000 ease-out origin-top`}
              style={{
                height: "100%",
                transform: `scaleY(${isVisible ? 1 : 0})`,
                transitionDelay: `${index * 150 + 300}ms`,
              }}
            />
          </div>
        )}
      </div>

      {/* Empty Space for Opposite Side */}
      <div className='flex-1 hidden md:block' />
    </div>
  );
};

export default function HowItWorksTimeline() {
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSteps((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        },
        { threshold: 0.3 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const steps: Step[] = [
    {
      number: 1,
      title: "Create Your Profile",
      description:
        "Tell us about your lifestyle, preferences, and what you're looking for in a roommate. Our AI uses this to find your perfect match.",
      icon: <UserPlus size={32} />,
      color: "#8B5CF6",
      gradient: "from-purple-500 to-violet-600",
    },
    {
      number: 2,
      title: "Get Matched",
      description:
        "Our AI analyzes 50+ compatibility factors and instantly finds roommates who match your lifestyle, budget, and personality.",
      icon: <Sparkles size={32} />,
      color: "#3B82F6",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      number: 3,
      title: "Chat & Connect",
      description:
        "Message your matches securely, share details, and get to know each other. Schedule virtual tours and video chats.",
      icon: <MessageSquare size={32} />,
      color: "#EC4899",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      number: 4,
      title: "Meet Safely",
      description:
        "Video chat or meet in person with our safety tips and guidelines. Verify compatibility before making a decision.",
      icon: <Video size={32} />,
      color: "#10B981",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      number: 5,
      title: "Move In Together",
      description:
        "Found the perfect match? Great! Start your new chapter with a compatible roommate and enjoy your new home together.",
      icon: <Home size={32} />,
      color: "#F59E0B",
      gradient: "from-orange-500 to-amber-500",
    },
  ];

  return (
    <section className='relative py-24 md:py-32 bg-gradient-to-b from-white via-purple-50/30 to-white dark:from-gray-900 dark:via-purple-900/10 dark:to-gray-900 overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0'>
        <div className='absolute top-1/4 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float-slow' />
        <div className='absolute bottom-1/4 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float-medium' />
      </div>

      {/* Dotted Pattern */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0_0_0/0.05)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255/0.05)_1px,transparent_0)] bg-[size:32px_32px]' />

      <div className='relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-20 md:mb-28'>
          {/* Badge */}
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 mb-6 animate-fade-in'>
            <Sparkles className='w-4 h-4 text-purple-600 dark:text-purple-400' />
            <span className='text-sm font-semibold text-purple-600 dark:text-purple-400'>
              Simple Process
            </span>
          </div>

          {/* Title */}
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in'>
            Your Journey to Finding
            <br />
            <span className='bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent'>
              the Perfect Roommate
            </span>
          </h2>

          {/* Subtitle */}
          <p className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in'>
            Simple steps, powerful results
          </p>
        </div>

        {/* Timeline Steps */}
        <div className='space-y-32 md:space-y-40'>
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
            >
              <ProcessStep
                step={step}
                index={index}
                isVisible={visibleSteps[index]}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className='mt-20 text-center'>
          <button className='group relative px-10 py-5 rounded-2xl font-bold text-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl'>
            <span className='relative z-10 flex items-center gap-2'>
              Start Your Journey
              <Sparkles
                className='group-hover:rotate-12 transition-transform duration-300'
                size={20}
              />
            </span>
            <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
          </button>
        </div>
      </div>
    </section>
  );
}
