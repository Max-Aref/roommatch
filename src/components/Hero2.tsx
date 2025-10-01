"use client";

import React, { useState, useEffect } from "react";
import {
  MapPin,
  DollarSign,
  Calendar,
  ChevronDown,
  Search,
  Users,
  Shield,
  CheckCircle,
} from "lucide-react";

// Card interfaces
interface ProfilePreviewCard {
  name: string;
  age: number;
  occupation: string;
  image: string;
  compatibilityScore: number;
  location: string;
}

const Hero2: React.FC = () => {
  // State for search inputs
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [moveInDate, setMoveInDate] = useState("");

  // Sample data for profile cards (used directly in JSX)
  const profileData: ProfilePreviewCard[] = [
    {
      name: "Alexandra",
      age: 26,
      occupation: "Designer",
      image: "/assets/profile-1.jpg",
      compatibilityScore: 98,
      location: "Downtown",
    },
    {
      name: "Michael",
      age: 29,
      occupation: "Developer",
      image: "/assets/profile-2.jpg",
      compatibilityScore: 94,
      location: "Midtown",
    },
    {
      name: "Sophia",
      age: 24,
      occupation: "Marketer",
      image: "/assets/profile-3.jpg",
      compatibilityScore: 92,
      location: "North Side",
    },
  ];

  // Animation effect for floating cards
  useEffect(() => {
    // This would typically contain additional animation logic
    // For demo purposes, we're using CSS animations via Tailwind

    // We could use profileData here if we wanted to dynamically generate cards
    console.log(`Loaded ${profileData.length} profile cards for animations`);
  }, [profileData.length]);

  return (
    <section className='relative min-h-screen bg-gradient-to-br from-background to-neutral-50 overflow-hidden py-20 lg:py-0'>
      {/* Background shapes */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-br from-[#2563EB]/10 via-[#0EA5E9]/5 to-[#34D399]/10 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4'></div>
        <div className='absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-[#2563EB]/5 via-[#0EA5E9]/5 to-[#34D399]/5 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3'></div>
      </div>

      <div className='container mx-auto px-4 lg:px-6 h-full'>
        <div className='grid lg:grid-cols-5 gap-8 lg:gap-12 h-full items-center'>
          {/* Left column (content) - 3/5 width */}
          <div className='lg:col-span-3 space-y-8 z-10 pt-12 lg:pt-0'>
            <div className='space-y-6'>
              {/* Main headline */}
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-outfit font-bold text-[#1E3A8A] leading-tight'>
                Find Your Perfect <br className='hidden md:block' />
                Roommate Match
              </h1>

              {/* Subtitle */}
              <p className='text-lg md:text-xl text-[#64748B] max-w-2xl'>
                AI-powered matching connects you with compatible roommates based
                on lifestyle, budget, and preferences
              </p>
            </div>

            {/* Search component */}
            <div className='bg-white rounded-2xl shadow-lg p-2 max-w-4xl'>
              <div className='grid md:grid-cols-3 gap-2'>
                {/* Location field */}
                <div className='relative'>
                  <label
                    htmlFor='location'
                    className='text-xs font-medium text-[#64748B] px-4 pt-2 block'
                  >
                    Location
                  </label>
                  <div className='flex items-center px-4 pb-3'>
                    <MapPin className='w-5 h-5 text-[#64748B] mr-2' />
                    <input
                      type='text'
                      id='location'
                      placeholder='Any city or neighborhood'
                      className='w-full bg-transparent border-none focus:ring-0 text-[#1F2937] placeholder-[#9CA3AF] p-0'
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </div>

                {/* Divider */}
                <div className='hidden md:block h-full w-px bg-[#E5E7EB]'></div>

                {/* Budget range */}
                <div className='relative'>
                  <label
                    htmlFor='budget'
                    className='text-xs font-medium text-[#64748B] px-4 pt-2 block'
                  >
                    Budget Range
                  </label>
                  <div className='flex items-center px-4 pb-3'>
                    <DollarSign className='w-5 h-5 text-[#64748B] mr-2' />
                    <input
                      type='text'
                      id='budget'
                      placeholder='$500 - $1,500'
                      className='w-full bg-transparent border-none focus:ring-0 text-[#1F2937] placeholder-[#9CA3AF] p-0'
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                    />
                    <ChevronDown className='w-4 h-4 text-[#64748B]' />
                  </div>
                </div>

                {/* Divider */}
                <div className='hidden md:block h-full w-px bg-[#E5E7EB]'></div>

                {/* Move-in date */}
                <div className='relative'>
                  <label
                    htmlFor='moveInDate'
                    className='text-xs font-medium text-[#64748B] px-4 pt-2 block'
                  >
                    Move-in Date
                  </label>
                  <div className='flex items-center px-4 pb-3'>
                    <Calendar className='w-5 h-5 text-[#64748B] mr-2' />
                    <input
                      type='text'
                      id='moveInDate'
                      placeholder='Select date'
                      className='w-full bg-transparent border-none focus:ring-0 text-[#1F2937] placeholder-[#9CA3AF] p-0'
                      value={moveInDate}
                      onChange={(e) => setMoveInDate(e.target.value)}
                    />
                    <ChevronDown className='w-4 h-4 text-[#64748B]' />
                  </div>
                </div>
              </div>

              {/* Search button */}
              <div className='px-2 pb-2'>
                <button className='w-full bg-[#F97316] hover:bg-[#EA580C] transition-colors duration-200 text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2'>
                  <Search className='w-5 h-5' />
                  Search Rooms
                </button>
              </div>
            </div>

            {/* Trust indicators */}
            <div className='flex flex-col md:flex-row md:items-center gap-6 md:gap-12 pt-4'>
              <div className='flex flex-col items-center'>
                <Users className='h-8 w-8 text-[#2563EB] mb-2' />
                <p className='font-semibold text-[#2563EB]'>50,000+</p>
                <p className='text-sm text-[#64748B]'>Verified Users</p>
              </div>

              <div className='flex flex-col items-center'>
                <CheckCircle className='h-8 w-8 text-[#2563EB] mb-2' />
                <p className='font-semibold text-[#2563EB]'>98%</p>
                <p className='text-sm text-[#64748B]'>Match Success Rate</p>
              </div>

              <div className='flex flex-col items-center'>
                <Shield className='h-8 w-8 text-[#2563EB] mb-2' />
                <p className='font-semibold text-[#2563EB]'>Safe & Secure</p>
                <p className='text-sm text-[#64748B]'>Platform</p>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className='flex flex-wrap gap-4'>
              <button className='inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-[#2563EB]/5 border border-[#E5E7EB] rounded-xl text-[#1F2937] font-medium transition-all duration-200 shadow-sm hover:shadow'>
                <div className='w-5 h-5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] flex items-center justify-center'>
                  <svg
                    width='12'
                    height='12'
                    viewBox='0 0 12 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M10 5H7V2C7 1.73478 6.89464 1.48043 6.70711 1.29289C6.51957 1.10536 6.26522 1 6 1C5.73478 1 5.48043 1.10536 5.29289 1.29289C5.10536 1.48043 5 1.73478 5 2V5H2C1.73478 5 1.48043 5.10536 1.29289 5.29289C1.10536 5.48043 1 5.73478 1 6C1 6.26522 1.10536 6.51957 1.29289 6.70711C1.48043 6.89464 1.73478 7 2 7H5V10C5 10.2652 5.10536 10.5196 5.29289 10.7071C5.48043 10.8946 5.73478 11 6 11C6.26522 11 6.51957 10.8946 6.70711 10.7071C6.89464 10.5196 7 10.2652 7 10V7H10C10.2652 7 10.5196 6.89464 10.7071 6.70711C10.8946 6.51957 11 6.26522 11 6C11 5.73478 10.8946 5.48043 10.7071 5.29289C10.5196 5.10536 10.2652 5 10 5Z'
                      fill='white'
                    />
                  </svg>
                </div>
                I have a room
              </button>

              <button className='inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-[#2563EB]/5 border border-[#E5E7EB] rounded-xl text-[#1F2937] font-medium transition-all duration-200 shadow-sm hover:shadow'>
                <div className='w-5 h-5 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#34D399] flex items-center justify-center'>
                  <svg
                    width='12'
                    height='12'
                    viewBox='0 0 12 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M11 5.5H1C0.723858 5.5 0.5 5.72386 0.5 6C0.5 6.27614 0.723858 6.5 1 6.5H11C11.2761 6.5 11.5 6.27614 11.5 6C11.5 5.72386 11.2761 5.5 11 5.5Z'
                      fill='white'
                    />
                  </svg>
                </div>
                I need a room
              </button>

              <button className='inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-[#2563EB]/5 border border-[#E5E7EB] rounded-xl text-[#1F2937] font-medium transition-all duration-200 shadow-sm hover:shadow'>
                <div className='w-5 h-5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#F97316] flex items-center justify-center'>
                  <Users className='w-3 h-3 text-white' />
                </div>
                Find roommate
              </button>
            </div>
          </div>

          {/* Right column (illustration) - 2/5 width */}
          <div className='lg:col-span-2 flex justify-center lg:justify-end items-center z-10 pt-12 lg:pt-0'>
            <div className='relative h-[500px] w-full max-w-md'>
              {/* Main gradient background */}
              <div className='absolute inset-0 bg-gradient-to-br from-[#2563EB] via-[#0EA5E9] to-[#34D399] rounded-3xl overflow-hidden'>
                <div className='absolute inset-0 opacity-20'>
                  <div className="absolute top-0 right-0 w-full h-full bg-[url('/assets/mesh-pattern.png')] bg-cover"></div>
                </div>
              </div>

              {/* Floating profile cards */}
              <div className='absolute top-10 left-0 transform -translate-x-1/4 w-64 h-auto'>
                <div className='bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-float-slow'>
                  <div className='flex items-start gap-3'>
                    <div className='w-14 h-14 bg-[#2563EB]/20 rounded-full flex-shrink-0'></div>
                    <div>
                      <div className='flex items-center gap-2'>
                        <p className='font-medium text-[#1E3A8A]'>
                          Alexandra, 26
                        </p>
                        <div className='flex items-center bg-[#2563EB]/10 text-[#2563EB] text-xs font-medium rounded-full px-2 py-0.5'>
                          98% match
                        </div>
                      </div>
                      <p className='text-sm text-[#64748B]'>
                        Designer • Downtown
                      </p>
                      <div className='flex gap-1 mt-1'>
                        <div className='w-1.5 h-1.5 rounded-full bg-[#2563EB]'></div>
                        <div className='w-1.5 h-1.5 rounded-full bg-[#2563EB]'></div>
                        <div className='w-1.5 h-1.5 rounded-full bg-[#2563EB]'></div>
                        <div className='w-1.5 h-1.5 rounded-full bg-[#2563EB]/30'></div>
                        <div className='w-1.5 h-1.5 rounded-full bg-[#2563EB]/30'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='absolute top-1/3 right-0 transform translate-x-1/4 w-64 h-auto'>
                <div className='bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-float-medium'>
                  <div className='flex items-start gap-3'>
                    <div className='w-14 h-14 bg-[#0EA5E9]/20 rounded-full flex-shrink-0'></div>
                    <div>
                      <div className='flex items-center gap-2'>
                        <p className='font-medium text-[#1E3A8A]'>
                          Michael, 29
                        </p>
                        <div className='flex items-center bg-[#2563EB]/10 text-[#2563EB] text-xs font-medium rounded-full px-2 py-0.5'>
                          94% match
                        </div>
                      </div>
                      <p className='text-sm text-[#64748B]'>
                        Developer • Midtown
                      </p>
                      <div className='flex gap-1 mt-1'>
                        <div className='w-1.5 h-1.5 rounded-full bg-[#2563EB]'></div>
                        <div className='w-1.5 h-1.5 rounded-full bg-[#2563EB]'></div>
                        <div className='w-1.5 h-1.5 rounded-full bg-[#2563EB]'></div>
                        <div className='w-1.5 h-1.5 rounded-full bg-[#2563EB]'></div>
                        <div className='w-1.5 h-1.5 rounded-full bg-[#2563EB]/30'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='absolute bottom-10 left-1/4 w-64 h-auto'>
                <div className='bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-float-fast'>
                  <div className='flex items-start gap-3'>
                    <div className='w-14 h-14 bg-[#34D399]/20 rounded-full flex-shrink-0'></div>
                    <div>
                      <div className='flex items-center gap-2'>
                        <p className='font-medium text-[#1E3A8A]'>Sophia, 24</p>
                        <div className='flex items-center bg-[#2563EB]/10 text-[#2563EB] text-xs font-medium rounded-full px-2 py-0.5'>
                          92% match
                        </div>
                      </div>
                      <p className='text-sm text-[#64748B]'>
                        Marketer • North Side
                      </p>
                      <div className='flex gap-1 mt-1'>
                        <div className='w-1.5 h-1.5 rounded-full bg-[#2563EB]'></div>
                        <div className='w-1.5 h-1.5 rounded-full bg-[#2563EB]'></div>
                        <div className='w-1.5 h-1.5 rounded-full bg-[#2563EB]'></div>
                        <div className='w-1.5 h-1.5 rounded-full bg-[#2563EB]/30'></div>
                        <div className='w-1.5 h-1.5 rounded-full bg-[#2563EB]/30'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional decorative elements */}
              <div className='absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm animate-ping-slow'></div>
              <div className='absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-white/30 backdrop-blur-sm animate-ping-medium'></div>
              <div className='absolute top-2/3 right-1/3 w-4 h-4 rounded-full bg-white/40 backdrop-blur-sm animate-ping-fast'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
