"use client";

import { useState, useEffect } from "react";
import { Search, Mic, ArrowRight, Sparkles, Play } from "lucide-react";
import Link from "next/link";

export default function Hero3() {
  const [searchFocused, setSearchFocused] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const fullText =
    "AI-powered matching that understands your lifestyle, habits, and preferences";

  // Typing animation effect
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, []);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0F0C29] via-[#302B63] to-[#24243e] dark:from-[#000000] dark:via-[#1a1a2e] dark:to-[#16213e]'>
      {/* Animated Gradient Orbs */}
      <div className='absolute inset-0 overflow-hidden'>
        <div
          className='absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-slow'
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        />
        <div
          className='absolute top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-medium'
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          }}
        />
        <div
          className='absolute -bottom-40 left-1/2 w-80 h-80 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-fast'
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${
              mousePosition.y * 0.5
            }px)`,
          }}
        />
      </div>

      {/* Floating 3D Shapes */}
      <div className='absolute inset-0 pointer-events-none'>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-20 h-20 border-2 border-white/10 backdrop-blur-sm rounded-2xl rotate-45 animate-float-${
              i % 3 === 0 ? "slow" : i % 3 === 1 ? "medium" : "fast"
            }`}
            style={{
              left: `${(i * 15) % 100}%`,
              top: `${(i * 20) % 100}%`,
              transform: `translate(${mousePosition.x * (i % 3)}px, ${
                mousePosition.y * (i % 3)
              }px) rotate(45deg)`,
              animationDelay: `${i * 0.3}s`,
            }}
          >
            <div className='absolute inset-2 bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-md rounded-xl' />
          </div>
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]' />

      {/* Main Content */}
      <div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        {/* Badge */}
        <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-fade-in'>
          <Sparkles className='w-4 h-4 text-yellow-400' />
          <span className='text-sm text-white font-medium'>
            AI-Powered Matching Technology
          </span>
        </div>

        {/* Headline with Gradient Text */}
        <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in leading-tight'>
          <span className='bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient'>
            Find Your Perfect
          </span>
          <br />
          <span className='bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient'>
            Roommate Match
          </span>
        </h1>

        {/* Typing Animation Subheadline */}
        <p className='text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto h-16 flex items-center justify-center'>
          {typedText}
          <span className='inline-block w-0.5 h-6 bg-purple-400 ml-1 animate-pulse' />
        </p>

        {/* Search Bar */}
        <div className='max-w-3xl mx-auto mb-10'>
          <div
            className={`relative group transition-all duration-500 ${
              searchFocused ? "scale-105" : "scale-100"
            }`}
          >
            <div className='absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500' />
            <div className='relative'>
              <input
                type='text'
                placeholder='Enter your city or zipcode...'
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className={`w-full px-8 py-6 pl-16 pr-32 rounded-2xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-2 border-white/20 text-gray-900 dark:text-white placeholder-gray-500 text-lg font-medium focus:outline-none focus:border-purple-400 transition-all duration-300 ${
                  searchFocused ? "shadow-2xl" : "shadow-xl"
                }`}
              />
              <Search
                className={`absolute left-6 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                  searchFocused ? "text-purple-500 scale-110" : "text-gray-400"
                }`}
                size={24}
              />
              <div className='absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2'>
                <button className='p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:scale-110 transition-all duration-300'>
                  <Mic size={20} />
                </button>
                <button className='p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:scale-110 transition-all duration-300'>
                  <Search size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Popular Searches */}
          <div className='flex flex-wrap items-center justify-center gap-3 mt-6'>
            <span className='text-sm text-white/60'>Popular:</span>
            {["New York", "Los Angeles", "Chicago", "San Francisco"].map(
              (city) => (
                <button
                  key={city}
                  className='px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm text-white hover:bg-white/20 hover:scale-105 transition-all duration-300'
                >
                  {city}
                </button>
              )
            )}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className='flex flex-col sm:flex-row items-center justify-center gap-6 mb-12'>
          {/* Primary CTA */}
          <button className='group relative px-10 py-5 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105'>
            <div className='absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transition-all duration-300' />
            <div className='absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-500' />
            <span className='relative flex items-center gap-2 text-white'>
              Get Started Free
              <ArrowRight
                className='group-hover:translate-x-1 transition-transform duration-300'
                size={20}
              />
            </span>
            {/* Glow Effect */}
            <div className='absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-gradient-to-r from-purple-500 to-pink-500' />
          </button>

          {/* Secondary CTA */}
          <Link
            href='#how-it-works'
            className='group px-10 py-5 rounded-2xl font-bold text-lg border-2 border-white/30 text-white backdrop-blur-md bg-white/10 hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 flex items-center gap-2'
          >
            <div className='p-1.5 rounded-full bg-white/20 group-hover:bg-white/30 transition-all duration-300'>
              <Play size={16} fill='currentColor' />
            </div>
            How It Works
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className='flex flex-wrap items-center justify-center gap-8 text-white/60 text-sm'>
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 rounded-full bg-green-400 animate-pulse' />
            <span>50,000+ Active Users</span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 rounded-full bg-blue-400 animate-pulse' />
            <span>98% Match Success Rate</span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 rounded-full bg-purple-400 animate-pulse' />
            <span>Verified & Secure</span>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent' />

      {/* Scroll Indicator */}
      <div className='absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce'>
        <div className='w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2'>
          <div className='w-1.5 h-3 rounded-full bg-white/50 animate-pulse' />
        </div>
      </div>
    </section>
  );
}
