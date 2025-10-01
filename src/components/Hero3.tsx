"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, Mic, MapPin, Users, Shield, ArrowRight } from "lucide-react";

const Hero3: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const heroRef = useRef<HTMLDivElement>(null);

  const fullText =
    "AI-powered matching that understands your lifestyle, habits, and preferences";

  // Typing animation effect
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePosition({ x: x * 20, y: y * 20 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const popularCities = ["New York", "Los Angeles", "Chicago", "Austin"];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#1E3A8A] overflow-hidden flex items-center justify-center py-20"
    >
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float-slow"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/30 rounded-full blur-3xl animate-float-medium"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-400/30 rounded-full blur-3xl animate-float-fast"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          }}
        ></div>
      </div>

      {/* Floating 3D geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Shape 1 - Top Left */}
        <div
          className="absolute top-20 left-20 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 animate-float-slow"
          style={{
            transform: `translate(${mousePosition.x * 1.5}px, ${mousePosition.y * 1.5}px) rotate(45deg)`,
          }}
        ></div>

        {/* Shape 2 - Top Right */}
        <div
          className="absolute top-40 right-32 w-20 h-20 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 backdrop-blur-sm border border-white/20 animate-float-medium"
          style={{
            transform: `translate(${-mousePosition.x * 1.2}px, ${mousePosition.y * 1.2}px)`,
          }}
        ></div>

        {/* Shape 3 - Middle Left */}
        <div
          className="absolute top-1/2 left-10 w-12 h-12 rounded-lg bg-blue-400/20 backdrop-blur-sm border border-white/20 animate-float-fast"
          style={{
            transform: `translate(${mousePosition.x * 0.8}px, ${-mousePosition.y * 0.8}px) rotate(-15deg)`,
          }}
        ></div>

        {/* Shape 4 - Bottom Right */}
        <div
          className="absolute bottom-32 right-20 w-24 h-24 rounded-2xl bg-gradient-to-tr from-pink-400/20 to-purple-400/20 backdrop-blur-sm border border-white/20 animate-float-slow"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px) rotate(30deg)`,
          }}
        ></div>

        {/* Shape 5 - Bottom Left */}
        <div
          className="absolute bottom-20 left-1/4 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 animate-float-medium"
          style={{
            transform: `translate(${mousePosition.x * 1.3}px, ${mousePosition.y * 1.3}px)`,
          }}
        ></div>

        {/* Shape 6 - Top Center */}
        <div
          className="absolute top-32 left-1/2 w-18 h-18 rounded-xl bg-gradient-to-bl from-blue-400/20 to-purple-400/20 backdrop-blur-sm border border-white/20 animate-float-fast"
          style={{
            transform: `translate(${-mousePosition.x * 0.7}px, ${mousePosition.y * 0.7}px) rotate(-45deg)`,
          }}
        ></div>

        {/* Shape 7 - Middle Right */}
        <div
          className="absolute top-1/3 right-16 w-16 h-16 rounded-lg bg-pink-400/20 backdrop-blur-sm border border-white/20 animate-float-slow"
          style={{
            transform: `translate(${mousePosition.x * 0.9}px, ${-mousePosition.y * 0.9}px) rotate(60deg)`,
          }}
        ></div>

        {/* Shape 8 - Bottom Center */}
        <div
          className="absolute bottom-40 left-1/3 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 animate-float-medium"
          style={{
            transform: `translate(${-mousePosition.x * 1.1}px, ${-mousePosition.y * 1.1}px)`,
          }}
        ></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Headline with gradient text */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span
              className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient"
              style={{ backgroundSize: "200% 200%" }}
            >
              Find Your Perfect
            </span>
            <br />
            <span
              className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient"
              style={{ backgroundSize: "200% 200%" }}
            >
              Roommate Match
            </span>
          </h1>

          {/* Subheadline with typing animation */}
          <div className="max-w-3xl mx-auto h-16 flex items-center justify-center">
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light">
              {typedText}
              <span className="inline-block w-0.5 h-6 bg-white/90 ml-1 animate-pulse"></span>
            </p>
          </div>

          {/* Search bar with glassmorphism */}
          <div className="max-w-3xl mx-auto mt-12">
            <div
              className={`bg-white/10 backdrop-blur-md rounded-2xl p-2 border-2 transition-all duration-300 ${
                isFocused
                  ? "border-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                  : "border-white/20 shadow-lg"
              }`}
            >
              <div className="flex items-center gap-3 bg-white rounded-xl px-6 py-4">
                <MapPin className="w-6 h-6 text-purple-500 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Enter location (e.g., New York, NY)"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className="flex-1 outline-none text-gray-900 text-lg placeholder:text-gray-400"
                />
                <button
                  className="p-2 hover:bg-purple-50 rounded-lg transition-colors"
                  aria-label="Voice search"
                >
                  <Mic className="w-5 h-5 text-purple-500" />
                </button>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all duration-300">
                  <Search className="w-5 h-5" />
                  Search
                </button>
              </div>
            </div>

            {/* Popular searches */}
            <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
              <span className="text-white/70 text-sm">Popular:</span>
              {popularCities.map((city, index) => (
                <button
                  key={index}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
                >
                  {city}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <button className="group bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] transition-all duration-300">
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-white/30 rounded-xl font-semibold text-lg text-white backdrop-blur-sm hover:bg-white hover:text-purple-600 transition-all duration-300 hover:scale-105">
              How It Works
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-16">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse-slow"></div>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-sm text-white/70">Active Users</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse-slow"></div>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-sm text-white/70">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 flex justify-center">
            <div className="flex flex-col items-center gap-2 animate-bounce-slow">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
                <div className="w-1.5 h-2 bg-white/60 rounded-full mx-auto animate-bounce"></div>
              </div>
              <span className="text-white/50 text-xs">Scroll to explore</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3;
