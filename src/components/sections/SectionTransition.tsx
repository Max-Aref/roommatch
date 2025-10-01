"use client";

import { useEffect, useState, useRef } from "react";

type TransitionProps = {
  topColor?: string;
  bottomColor?: string;
  height?: string;
  className?: string;
};

export default function SectionTransition({
  topColor = "from-gray-900 via-purple-900/20 to-gray-900",
  bottomColor = "from-[#0F0C29] via-[#302B63] to-[#24243e]",
  height = "h-36",
  className = "",
}: TransitionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const transitionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (transitionRef.current) {
      observer.observe(transitionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={transitionRef}
      className={`relative w-full ${height} overflow-hidden ${className} ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-1000`}
    >
      {/* Decorative floating particles */}
      <div className='absolute inset-0 overflow-hidden'>
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-purple-500/20 animate-float-${
              i % 2 === 0 ? "slow" : "medium"
            }`}
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.4 + Math.random() * 0.6,
            }}
          />
        ))}
      </div>

      {/* Top gradient (matching FAQ section) */}
      <div
        className={`absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b ${topColor} z-10`}
      />

      {/* Bottom gradient (matching CTA section) */}
      <div
        className={`absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t ${bottomColor} z-10`}
      />

      {/* Middle blending layer */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/30 to-transparent z-20' />

      {/* Subtle horizontal line */}
      <div className='absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-pulse-slow z-30' />
    </div>
  );
}
