"use client";

import React, { useEffect, useRef, useState } from "react";
import { Users, Home, Heart, Star } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label, delay }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = itemRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Extract numeric value from the string
      const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = numericValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  // Format the display value
  const getDisplayValue = () => {
    if (value.includes(".")) {
      // For decimal values like "4.8"
      return value;
    }
    if (value.includes("+")) {
      return count.toLocaleString() + "+";
    }
    if (value.includes("%")) {
      return count + "%";
    }
    if (value.includes("★")) {
      return value;
    }
    return count.toLocaleString();
  };

  return (
    <div
      ref={itemRef}
      className={`flex flex-col items-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Icon with glow effect */}
      <div className='mb-4 animate-float-slow'>
        <div className='text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]'>
          {icon}
        </div>
      </div>

      {/* Number with counter animation */}
      <div className='text-6xl md:text-7xl font-bold text-white mb-2 font-outfit tracking-tight'>
        {isVisible ? getDisplayValue() : "0"}
      </div>

      {/* Label */}
      <div className='text-lg text-white/90 font-medium'>{label}</div>
    </div>
  );
};

const StatsBanner: React.FC = () => {
  const stats = [
    {
      icon: <Users size={40} />,
      value: "50000+",
      label: "Active Users",
      delay: 0,
    },
    {
      icon: <Home size={40} />,
      value: "15000+",
      label: "Verified Listings",
      delay: 100,
    },
    {
      icon: <Heart size={40} />,
      value: "98%",
      label: "Match Success Rate",
      delay: 200,
    },
    {
      icon: <Star size={40} />,
      value: "4.8★",
      label: "Average Rating",
      delay: 300,
    },
  ];

  return (
    <section className='relative overflow-hidden'>
      {/* Main gradient background */}
      <div className='relative bg-gradient-to-br from-[#2563EB] via-[#0EA5E9] to-[#34D399] min-h-[300px] py-16 md:py-20'>
        {/* Dot pattern overlay */}
        <div
          className='absolute inset-0 opacity-20'
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        ></div>

        {/* Grain texture overlay */}
        <div
          className='absolute inset-0 opacity-[0.03]'
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Decorative circles */}
        <div className='absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl'></div>
        <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl'></div>

        {/* Content */}
        <div className='container mx-auto px-4 max-w-6xl relative z-10'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12'>
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                delay={stat.delay}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className='relative -mt-1'>
        <svg
          className='w-full h-16 md:h-24'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z'
            fill='#FFFFFF'
            opacity='1'
          />
          <path
            d='M0,20 C300,100 600,100 900,60 C1050,40 1150,20 1200,20 L1200,120 L0,120 Z'
            fill='#FAFAFA'
            opacity='0.5'
          />
        </svg>
      </div>
    </section>
  );
};

export default StatsBanner;
