"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Sparkles, Star, Users } from "lucide-react";

export default function CTAModern() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number; delay: number }[]
  >([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Mouse parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 30;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Generate particles
  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section
      ref={sectionRef}
      className='relative py-32 md:py-40 overflow-hidden bg-gradient-to-br from-[#0F0C29] via-[#302B63] to-[#24243e]'
    >
      {/* Animated Gradient Meshes */}
      <div className='absolute inset-0'>
        <div
          className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-orange-500/30 blur-3xl opacity-50 animate-float-slow'
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        />
        <div
          className='absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-blue-500/30 via-cyan-500/30 to-purple-500/30 blur-3xl opacity-50 animate-float-medium'
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className='absolute inset-0 overflow-hidden'>
        {particles.map((particle) => (
          <div
            key={particle.id}
            className='absolute w-1 h-1 rounded-full bg-white animate-float-slow'
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
              opacity: 0.3 + Math.random() * 0.4,
            }}
          />
        ))}
      </div>

      {/* Floating Geometric Shapes */}
      <div className='absolute inset-0 pointer-events-none'>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-32 h-32 border-2 border-white/10 rounded-3xl rotate-45 animate-float-${
              i % 3 === 0 ? "slow" : i % 3 === 1 ? "medium" : "fast"
            }`}
            style={{
              left: `${(i * 18) % 100}%`,
              top: `${(i * 25) % 100}%`,
              transform: `translate(${mousePosition.x * (i % 3)}px, ${
                mousePosition.y * (i % 3)
              }px) rotate(45deg)`,
              animationDelay: `${i * 0.4}s`,
            }}
          >
            <div className='absolute inset-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl' />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className='relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        {/* Animated Badge */}
        <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-fade-in'>
          <Sparkles className='w-5 h-5 text-yellow-400 animate-pulse' />
          <span className='text-sm font-semibold text-white'>
            Limited Early Access Available
          </span>
        </div>

        {/* Main Headline */}
        <h2 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight animate-fade-in'>
          Your Perfect{" "}
          <span className='relative'>
            <span className='bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]'>
              Roommate
            </span>
            {/* Underline Effect */}
            <div className='absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 blur-sm opacity-70' />
          </span>
          <br />
          is Waiting
        </h2>

        {/* Subheadline */}
        <p className='text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in'>
          Join{" "}
          <span className='font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent'>
            50,000+ users
          </span>{" "}
          who found their match.
          <br className='hidden sm:block' />
          Start free today—no credit card required.
        </p>

        {/* CTA Buttons */}
        <div className='flex flex-col sm:flex-row items-center justify-center gap-6 mb-12'>
          {/* Primary CTA */}
          <button className='group relative px-12 py-6 rounded-2xl font-bold text-xl overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl animate-fade-in'>
            {/* Animated Background */}
            <div className='absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 transition-all duration-500' />
            <div className='absolute inset-0 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

            {/* Content */}
            <span className='relative z-10 flex items-center gap-3 text-white'>
              Create Free Account
              <ArrowRight
                size={24}
                className='group-hover:translate-x-2 transition-transform duration-300'
              />
            </span>

            {/* Glow Effect */}
            <div className='absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600' />

            {/* Ripple Effect */}
            <div className='absolute inset-0 rounded-2xl bg-white/20 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-10 transition-all duration-700' />
          </button>

          {/* Secondary CTA - Quiz */}
          <button className='group px-12 py-6 rounded-2xl font-bold text-xl border-2 border-white/30 text-white backdrop-blur-md bg-white/10 hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 animate-fade-in'>
            <span className='flex items-center gap-2'>
              <Sparkles
                size={20}
                className='group-hover:rotate-12 transition-transform'
              />
              Take Compatibility Quiz
            </span>
          </button>
        </div>

        {/* Trust Indicators */}
        <div className='flex flex-wrap items-center justify-center gap-8 text-white/70 text-sm animate-fade-in'>
          <div className='flex items-center gap-2'>
            <div className='flex -space-x-2'>
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className='w-8 h-8 rounded-full border-2 border-white/20 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xs font-bold'
                >
                  {i === 1 && "👤"}
                  {i === 2 && "👥"}
                  {i === 3 && "👨"}
                  {i === 4 && "👩"}
                </div>
              ))}
            </div>
            <span className='font-semibold'>50,000+ active users</span>
          </div>

          <div className='w-px h-6 bg-white/20' />

          <div className='flex items-center gap-2'>
            <div className='flex gap-0.5'>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className='text-yellow-400 fill-yellow-400'
                />
              ))}
            </div>
            <span className='font-semibold'>4.9 from 10,000 reviews</span>
          </div>

          <div className='w-px h-6 bg-white/20' />

          <div className='flex items-center gap-2'>
            <Users size={18} className='text-green-400' />
            <span className='font-semibold'>New match every 3 minutes</span>
          </div>
        </div>

        {/* No Credit Card Required */}
        <div className='mt-8 animate-fade-in'>
          <div className='inline-flex items-center gap-6 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10'>
            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 rounded-full bg-green-400 animate-pulse' />
              <span className='text-sm text-white/70'>
                No credit card required
              </span>
            </div>
            <div className='w-px h-4 bg-white/20' />
            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 rounded-full bg-blue-400 animate-pulse' />
              <span className='text-sm text-white/70'>Cancel anytime</span>
            </div>
            <div className='w-px h-4 bg-white/20' />
            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 rounded-full bg-purple-400 animate-pulse' />
              <span className='text-sm text-white/70'>Free forever plan</span>
            </div>
          </div>
        </div>

        {/* Floating User Avatars */}
        <div className='absolute top-1/4 left-8 md:left-16 animate-float-slow'>
          <div className='relative w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-white/30 flex items-center justify-center text-2xl shadow-xl'>
            😊
            <div className='absolute inset-0 rounded-full bg-purple-500 blur-xl opacity-50 animate-pulse-slow' />
          </div>
        </div>

        <div className='absolute top-1/3 right-8 md:right-16 animate-float-medium'>
          <div className='relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-2 border-white/30 flex items-center justify-center text-2xl shadow-xl'>
            🎉
            <div className='absolute inset-0 rounded-full bg-blue-500 blur-xl opacity-50 animate-pulse-slow' />
          </div>
        </div>

        <div className='absolute bottom-1/4 left-1/4 animate-float-fast hidden lg:block'>
          <div className='relative w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 border-2 border-white/30 flex items-center justify-center text-2xl shadow-xl'>
            ⭐
            <div className='absolute inset-0 rounded-full bg-orange-500 blur-xl opacity-50 animate-pulse-slow' />
          </div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className='absolute bottom-0 left-0 right-0'>
        <svg
          viewBox='0 0 1440 120'
          className='w-full h-auto'
          preserveAspectRatio='none'
        >
          <path
            d='M0,64 C480,120 960,0 1440,64 L1440,120 L0,120 Z'
            className='fill-gray-900'
          />
        </svg>
      </div>
    </section>
  );
}
