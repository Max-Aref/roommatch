"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  photo: string;
  rating: number;
  quote: string;
  verified: boolean;
}

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => {
  return (
    <div className='group bg-white rounded-[20px] p-10 shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 max-w-[380px] mx-auto h-full flex flex-col'>
      {/* Star Rating */}
      <div className='flex gap-1 mb-6'>
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={20} fill='#F59E0B' className='text-[#F59E0B]' />
        ))}
      </div>

      {/* Quote with decorative marks */}
      <div className='relative flex-grow mb-6'>
        <div className='absolute -top-2 -left-2 text-6xl text-[#2563EB]/10 font-serif leading-none'>
          &ldquo;
        </div>
        <p className='relative text-lg text-[#1F2937] italic leading-[1.7] z-10'>
          {testimonial.quote}
        </p>
        <div className='absolute -bottom-6 -right-2 text-6xl text-[#2563EB]/10 font-serif leading-none'>
          &rdquo;
        </div>
      </div>

      {/* Profile Section */}
      <div className='flex items-center gap-4 mt-8 pt-6 border-t border-gray-100'>
        <Image
          src={testimonial.photo}
          alt={testimonial.name}
          width={56}
          height={56}
          className='w-14 h-14 rounded-full object-cover border-2 border-[#2563EB]/20'
        />
        <div className='flex-grow'>
          <div className='flex items-center gap-2'>
            <h4 className='text-base font-semibold text-[#1F2937]'>
              {testimonial.name}
            </h4>
            {testimonial.verified && (
              <BadgeCheck size={16} className='text-[#2563EB]' />
            )}
          </div>
          <p className='text-sm text-[#64748B]'>{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsCarousel: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Homeowner",
      photo: "https://i.pravatar.cc/150?img=1",
      rating: 5,
      quote:
        "I was nervous about renting out my spare room, but RoomMatch made it so easy! The background checks gave me peace of mind, and I found the perfect tenant within a week. Couldn't be happier!",
      verified: true,
    },
    {
      id: 2,
      name: "David Chen",
      role: "Student",
      photo: "https://i.pravatar.cc/150?img=12",
      rating: 5,
      quote:
        "As an international student, finding housing was my biggest worry. RoomMatch's AI matching connected me with roommates who share my lifestyle and budget. The video verification feature was a game-changer!",
      verified: true,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Professional Renter",
      photo: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      quote:
        "After trying multiple platforms, RoomMatch stands out. The verified listings mean no more scams, and the detailed filters helped me find exactly what I needed. Worth every penny!",
      verified: true,
    },
    {
      id: 4,
      name: "Raj Patel",
      role: "International Student",
      photo: "https://i.pravatar.cc/150?img=13",
      rating: 5,
      quote:
        "Moving to a new country is challenging, but RoomMatch made finding accommodation stress-free. I connected with amazing roommates before even arriving. The secure messaging was incredibly helpful!",
      verified: true,
    },
    {
      id: 5,
      name: "Margaret Thompson",
      role: "Senior Homeowner",
      photo: "https://i.pravatar.cc/150?img=9",
      rating: 5,
      quote:
        "At 68, I wasn't sure about using technology to find a tenant. The platform is so user-friendly! I found a wonderful young professional who's become like family. Thank you, RoomMatch!",
      verified: true,
    },
    {
      id: 6,
      name: "Alex Johnson",
      role: "Young Professional",
      photo: "https://i.pravatar.cc/150?img=14",
      rating: 5,
      quote:
        "Just relocated for work and needed a place fast. RoomMatch's AI matching is incredible - found compatible roommates instantly. The whole process took less than 48 hours. Highly recommended!",
      verified: true,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(3);

  // Handle responsive slides per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev + slidesPerView >= testimonials.length ? 0 : prev + 1
    );
  }, [slidesPerView, testimonials.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - slidesPerView : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isHovered, nextSlide]);

  // Calculate visible testimonials
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < slidesPerView; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className='relative py-20 bg-gradient-to-b from-[#FAFAFA] to-white overflow-hidden'>
      <div className='container mx-auto px-4 max-w-7xl'>
        {/* Section Header */}
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-outfit font-bold text-[#1E3A8A] mb-4'>
            What Our Users Say
          </h2>
          <p className='text-lg text-[#64748B] max-w-2xl mx-auto'>
            Real stories from people who found their perfect match
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className='relative'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white rounded-full p-3 shadow-lg hover:bg-[#2563EB] hover:text-white transition-all duration-300 group'
            aria-label='Previous testimonial'
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white rounded-full p-3 shadow-lg hover:bg-[#2563EB] hover:text-white transition-all duration-300 group'
            aria-label='Next testimonial'
          >
            <ChevronRight size={24} />
          </button>

          {/* Cards Container */}
          <div className='overflow-hidden px-4'>
            <div className='transition-all duration-700 ease-in-out'>
              <div
                className={`grid gap-8 ${
                  slidesPerView === 1
                    ? "grid-cols-1"
                    : slidesPerView === 2
                    ? "grid-cols-2"
                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {getVisibleTestimonials().map((testimonial) => (
                  <div key={testimonial.id} className='animate-fade-in'>
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dot Indicators */}
          <div className='flex justify-center gap-2 mt-12'>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 h-3 bg-[#2563EB]"
                    : "w-3 h-3 bg-[#CBD5E1] hover:bg-[#94A3B8]"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
