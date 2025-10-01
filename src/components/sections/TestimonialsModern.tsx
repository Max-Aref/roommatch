"use client";

import { useState, useEffect, useRef } from "react";
import {
  Star,
  Quote,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  quote: string;
  duration: string;
  verified: boolean;
  rotation: number;
  color: string;
  gradient: string;
}

const TestimonialCard = ({
  testimonial,
  isActive,
}: {
  testimonial: Testimonial;
  isActive: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative transition-all duration-700 ${
        isActive ? "opacity-100 scale-100" : "opacity-40 scale-95"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isActive
          ? `rotate(${testimonial.rotation}deg)`
          : `rotate(0deg) scale(0.95)`,
      }}
    >
      {/* Neon Glow Border */}
      <div
        className={`absolute -inset-1 bg-gradient-to-r ${
          testimonial.gradient
        } rounded-3xl blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-500 ${
          isHovered ? "opacity-60" : ""
        }`}
      />

      {/* Card Background with Glassmorphism */}
      <div className='relative bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500'>
        {/* Decorative Corner Tape Effect */}
        <div
          className='absolute -top-3 -left-3 w-16 h-8 bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm border border-white/20 rounded transform -rotate-12'
          style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)" }}
        />

        {/* Quote Icon with Neon Glow */}
        <div className='absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg'>
          <Quote className='w-8 h-8 text-white' fill='currentColor' />
          <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 blur-xl opacity-50 animate-pulse-slow' />
        </div>

        {/* Profile Section */}
        <div className='flex items-center gap-4 mb-6'>
          {/* Profile Image with Gradient Border */}
          <div className='relative'>
            <div
              className={`absolute -inset-1 bg-gradient-to-r ${testimonial.gradient} rounded-full blur opacity-75 animate-pulse-slow`}
            />
            <div className='relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/20'>
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className='object-cover'
              />
            </div>
            {/* Verified Badge */}
            {testimonial.verified && (
              <div className='absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center border-2 border-gray-900'>
                <CheckCircle
                  className='w-4 h-4 text-white'
                  fill='currentColor'
                />
              </div>
            )}
          </div>

          {/* Name and Location */}
          <div className='flex-1'>
            <h4 className='text-lg font-bold text-white mb-1'>
              {testimonial.name}
            </h4>
            <p className='text-sm text-gray-400'>{testimonial.location}</p>
          </div>

          {/* Duration Badge */}
          <div className='px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm'>
            <span className='text-xs font-semibold text-purple-300'>
              {testimonial.duration}
            </span>
          </div>
        </div>

        {/* Star Rating */}
        <div className='flex gap-1 mb-4'>
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className={`${
                i < testimonial.rating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-600"
              } transition-all duration-300`}
              style={{
                transitionDelay: isHovered ? `${i * 50}ms` : "0ms",
                transform: isHovered ? "scale(1.2) rotate(72deg)" : "scale(1)",
              }}
            />
          ))}
        </div>

        {/* Quote Text */}
        <p className='text-gray-300 leading-relaxed italic'>
          &ldquo;{testimonial.quote}&rdquo;
        </p>

        {/* Decorative Pattern */}
        <div
          className='absolute bottom-4 right-4 w-20 h-20 rounded-full opacity-5'
          style={{
            background: `radial-gradient(circle, ${testimonial.color} 0%, transparent 70%)`,
          }}
        />
      </div>
    </div>
  );
};

export default function TestimonialsModern() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Mitchell",
      location: "New York, NY",
      image: "https://i.pravatar.cc/150?img=1",
      rating: 5,
      quote:
        "The AI matching was spot-on! Found my perfect roommate in just 2 days. We've been living together for a year now and it's been amazing.",
      duration: "1 year together",
      verified: true,
      rotation: -2,
      color: "#8B5CF6",
      gradient: "from-purple-500 to-violet-600",
    },
    {
      id: 2,
      name: "Marcus Johnson",
      location: "Los Angeles, CA",
      image: "https://i.pravatar.cc/150?img=12",
      rating: 5,
      quote:
        "Background checks and verified profiles gave me peace of mind. The video chat feature was crucial for getting to know potential roommates.",
      duration: "8 months together",
      verified: true,
      rotation: 1.5,
      color: "#3B82F6",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      name: "Emily Chen",
      location: "San Francisco, CA",
      image: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      quote:
        "Best roommate matching platform! The compatibility score was 94% and we match perfectly in real life. Highly recommend!",
      duration: "6 months together",
      verified: true,
      rotation: -1,
      color: "#EC4899",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      id: 4,
      name: "David Rodriguez",
      location: "Chicago, IL",
      image: "https://i.pravatar.cc/150?img=14",
      rating: 5,
      quote:
        "The virtual tours saved me so much time. I could view 10 places in one day without leaving my couch. Found my dream apartment!",
      duration: "1.5 years together",
      verified: true,
      rotation: 2,
      color: "#10B981",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: 5,
      name: "Jessica Park",
      location: "Seattle, WA",
      image: "https://i.pravatar.cc/150?img=9",
      rating: 5,
      quote:
        "As someone who's picky about cleanliness, the detailed preference matching was a game-changer. My roommate and I are perfectly aligned!",
      duration: "10 months together",
      verified: true,
      rotation: -1.5,
      color: "#F59E0B",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      id: 6,
      name: "Alex Thompson",
      location: "Austin, TX",
      image: "https://i.pravatar.cc/150?img=7",
      rating: 5,
      quote:
        "The 24/7 support team was incredibly helpful. They guided me through every step and made the process stress-free. Five stars!",
      duration: "4 months together",
      verified: true,
      rotation: 1,
      color: "#8B5CF6",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  return (
    <section
      ref={sectionRef}
      className='relative py-24 md:py-32 bg-gradient-to-b from-gray-900 via-purple-900/10 to-gray-900 overflow-hidden'
    >
      {/* Animated Background Orbs */}
      <div className='absolute top-1/4 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-slow' />
      <div className='absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-medium' />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-float-fast' />

      {/* Tech Grid Pattern */}
      <div className='absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]' />

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16 md:mb-20'>
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <Star className='w-4 h-4 text-purple-400 fill-purple-400' />
            <span className='text-sm font-semibold text-purple-400'>
              Success Stories
            </span>
          </div>

          {/* Title */}
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Real People,{" "}
            <span className='bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent'>
              Real Matches
            </span>
          </h2>

          {/* Subtitle */}
          <p
            className={`text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Join thousands who found their perfect roommate
          </p>
        </div>

        {/* Carousel Container */}
        <div className='relative max-w-4xl mx-auto'>
          {/* Main Card Display */}
          <div className='relative min-h-[400px] flex items-center justify-center'>
            {testimonials.map((testimonial, index) => {
              const offset = index - activeIndex;
              const isActive = offset === 0;

              return (
                <div
                  key={testimonial.id}
                  className={`absolute w-full max-w-2xl transition-all duration-700 ${
                    isActive ? "z-20" : "z-10"
                  }`}
                  style={{
                    transform: `translateX(${offset * 100}%) scale(${
                      isActive ? 1 : 0.9
                    })`,
                    opacity: Math.abs(offset) > 1 ? 0 : 1,
                  }}
                >
                  <TestimonialCard
                    testimonial={testimonial}
                    isActive={isActive}
                  />
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-14 h-14 rounded-full bg-gray-800/80 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/60 hover:scale-110 transition-all duration-300 group'
            aria-label='Previous testimonial'
          >
            <ChevronLeft className='w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors' />
            <div className='absolute inset-0 rounded-full bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity' />
          </button>

          <button
            onClick={nextSlide}
            className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-14 h-14 rounded-full bg-gray-800/80 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/60 hover:scale-110 transition-all duration-300 group'
            aria-label='Next testimonial'
          >
            <ChevronRight className='w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors' />
            <div className='absolute inset-0 rounded-full bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity' />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className='flex justify-center gap-3 mt-12'>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-12 bg-gradient-to-r from-purple-500 to-pink-500"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            >
              {index === activeIndex && (
                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-md opacity-50 animate-pulse' />
              )}
            </button>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className='mt-20 text-center'>
          <div className='inline-flex items-center gap-8 px-8 py-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-purple-500/20'>
            <div>
              <div className='text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1'>
                4.9/5
              </div>
              <div className='text-sm text-gray-400'>Average Rating</div>
            </div>
            <div className='w-px h-12 bg-gradient-to-b from-transparent via-purple-500/50 to-transparent' />
            <div>
              <div className='text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1'>
                10,000+
              </div>
              <div className='text-sm text-gray-400'>Reviews</div>
            </div>
            <div className='w-px h-12 bg-gradient-to-b from-transparent via-purple-500/50 to-transparent' />
            <div>
              <div className='text-3xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent mb-1'>
                98%
              </div>
              <div className='text-sm text-gray-400'>Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
