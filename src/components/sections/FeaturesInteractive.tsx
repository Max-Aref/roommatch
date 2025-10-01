"use client";

import { useState, useRef, useEffect } from "react";
import {
  Sparkles,
  Mic,
  Video,
  MessageCircle,
  Shield,
  HeadphonesIcon,
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  delay: number;
}

const FeatureCard = ({
  icon,
  title,
  description,
  gradient,
  delay,
}: FeatureCardProps) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * -10;
    const tiltY = ((x - centerX) / centerX) * 10;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className='group relative animate-fade-in'
      style={{
        animationDelay: `${delay}ms`,
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${
          tilt.y
        }deg) translateZ(${isHovered ? "20px" : "0px"})`,
        transition: "transform 0.3s ease-out",
      }}
    >
      {/* Gradient Glow Border */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-3xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-500`}
      />

      {/* Glass Card */}
      <div className='relative h-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500'>
        {/* Animated Icon Container */}
        <div
          className={`relative w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
        >
          <div className='text-white transform group-hover:rotate-12 transition-transform duration-500'>
            {icon}
          </div>

          {/* Pulse Ring on Hover */}
          <div
            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} animate-ping-slow opacity-0 group-hover:opacity-30`}
          />
        </div>

        {/* Title */}
        <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300'>
          {title}
        </h3>

        {/* Description */}
        <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
          {description}
        </p>

        {/* Progress Bar (animates on hover) */}
        <div className='mt-6 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden'>
          <div
            className={`h-full bg-gradient-to-r ${gradient} transform origin-left transition-transform duration-700 ${
              isHovered ? "scale-x-100" : "scale-x-0"
            }`}
          />
        </div>

        {/* Decorative Corner Element */}
        <div
          className={`absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-br ${gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
        />
      </div>
    </div>
  );
};

export default function FeaturesInteractive() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Sparkles size={32} />,
      title: "AI-Powered Matching",
      description:
        "Smart algorithms analyze 50+ compatibility factors to find your perfect match. Our AI learns from your preferences to deliver better results over time.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Mic size={32} />,
      title: "Voice Search",
      description:
        "Find roommates hands-free with voice commands. Just speak naturally and our AI understands your requirements instantly.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Video size={32} />,
      title: "Virtual Tours",
      description:
        "Explore rooms in immersive 3D before visiting. Save time with virtual walkthroughs and AR room visualization.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <MessageCircle size={32} />,
      title: "Real-Time Chat",
      description:
        "Instant messaging with potential roommates. End-to-end encrypted conversations with voice and video call options.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: <Shield size={32} />,
      title: "Safety First",
      description:
        "Verified profiles and background checks. Industry-leading security measures protect you at every step of your journey.",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: <HeadphonesIcon size={32} />,
      title: "24/7 Support",
      description:
        "AI chatbot assistance anytime you need it. Get instant answers to questions or connect with our human support team.",
      gradient: "from-orange-500 to-amber-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className='relative py-24 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden'
    >
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]' />

      {/* Decorative Blobs */}
      <div className='absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl' />
      <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl' />

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16 md:mb-20'>
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 mb-6 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <Sparkles className='w-4 h-4 text-purple-600 dark:text-purple-400' />
            <span className='text-sm font-semibold text-purple-600 dark:text-purple-400'>
              Advanced Technology
            </span>
          </div>

          {/* Title */}
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <span className='bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent'>
              Smart Matching,
            </span>
            <br />
            Made Simple
          </h2>

          {/* Subtitle */}
          <p
            className={`text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Advanced technology meets intuitive design
          </p>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} delay={index * 100} />
          ))}
        </div>

        {/* Stats Counter */}
        <div
          className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {[
            { value: "50K+", label: "Active Users" },
            { value: "15K+", label: "Listings" },
            { value: "98%", label: "Match Rate" },
            { value: "4.9★", label: "Rating" },
          ].map((stat, index) => (
            <div key={index} className='group'>
              <div className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300'>
                {stat.value}
              </div>
              <div className='text-gray-600 dark:text-gray-400 font-medium'>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
