"use client";

import React from "react";
import { ArrowRight, Play, Check } from "lucide-react";

const FinalCTA: React.FC = () => {
  return (
    <section className='relative h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#0EA5E9]'>
      {/* Mesh pattern overlay */}
      <div
        className='absolute inset-0 opacity-10'
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Floating decorative shapes */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {/* Gradient orbs */}
        <div className='absolute top-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float-slow'></div>
        <div className='absolute bottom-20 right-10 w-80 h-80 bg-[#0EA5E9]/20 rounded-full blur-3xl animate-float-medium'></div>
        <div className='absolute top-1/2 left-1/3 w-64 h-64 bg-[#F97316]/10 rounded-full blur-3xl animate-float-fast'></div>

        {/* Floating geometric shapes */}
        <div className='absolute top-32 right-1/4 w-20 h-20 border-2 border-white/20 rounded-lg rotate-12 animate-float-slow'></div>
        <div className='absolute bottom-32 left-1/4 w-16 h-16 border-2 border-white/20 rounded-full animate-float-medium'></div>
        <div className='absolute top-1/3 right-20 w-12 h-12 bg-white/10 rounded-lg -rotate-12 animate-float-fast'></div>
        <div className='absolute bottom-1/3 left-16 w-14 h-14 border-2 border-white/20 rounded-lg rotate-45 animate-float-slow'></div>

        {/* Particle stars effect */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className='absolute w-1 h-1 bg-white rounded-full animate-pulse-slow'
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className='container mx-auto px-4 max-w-4xl relative z-10 text-center'>
        {/* Title */}
        <h2 className='text-4xl md:text-5xl lg:text-6xl font-outfit font-bold text-white mb-6 leading-tight'>
          Ready to Find Your Perfect Match?
        </h2>

        {/* Subtitle */}
        <p className='text-xl md:text-2xl text-white/90 mb-12 font-inter'>
          Join thousands of happy roommates today
        </p>

        {/* CTA Buttons */}
        <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-10'>
          {/* Primary Button - Get Started */}
          <button className='group relative w-full sm:w-auto min-w-[180px] h-14 bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white rounded-full font-semibold text-lg px-8 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#F97316]/50'>
            {/* Animated shine effect */}
            <div className='absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent'></div>

            <span className='relative z-10 flex items-center justify-center gap-2'>
              Get Started Free
              <ArrowRight
                size={20}
                className='group-hover:translate-x-1 transition-transform'
              />
            </span>
          </button>

          {/* Secondary Button - Watch Demo */}
          <button className='group w-full sm:w-auto min-w-[180px] h-14 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg px-8 hover:bg-white hover:text-[#2563EB] transition-all duration-300 hover:scale-105'>
            <span className='flex items-center justify-center gap-2'>
              <Play
                size={20}
                className='group-hover:scale-110 transition-transform'
              />
              Watch Demo
            </span>
          </button>
        </div>

        {/* Trust Badges */}
        <div className='flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80'>
          {/* Badge 1 */}
          <div className='flex items-center gap-2'>
            <div className='w-5 h-5 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm'>
              <Check size={14} className='text-white' strokeWidth={3} />
            </div>
            <span className='text-sm font-medium'>No credit card required</span>
          </div>

          {/* Divider */}
          <div className='hidden sm:block w-px h-4 bg-white/30'></div>

          {/* Badge 2 */}
          <div className='flex items-center gap-2'>
            <div className='w-5 h-5 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm'>
              <Check size={14} className='text-white' strokeWidth={3} />
            </div>
            <span className='text-sm font-medium'>Free 14-day trial</span>
          </div>

          {/* Divider */}
          <div className='hidden sm:block w-px h-4 bg-white/30'></div>

          {/* Badge 3 */}
          <div className='flex items-center gap-2'>
            <div className='w-5 h-5 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm'>
              <Check size={14} className='text-white' strokeWidth={3} />
            </div>
            <span className='text-sm font-medium'>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
