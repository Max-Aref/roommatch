"use client";

import React from "react";
import { User, Sparkles, Home, Check } from "lucide-react";

const HowItWorks: React.FC = () => {
  return (
    <section className='py-20 bg-gradient-to-b from-[#FAFAFA] to-white overflow-hidden'>
      <div className='container mx-auto px-4 max-w-7xl'>
        {/* Section header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-outfit font-bold text-[#1E3A8A] mb-4'>
            Find Your Match in 3 Simple Steps
          </h2>
          <p className='text-lg text-[#64748B] max-w-2xl mx-auto'>
            Our AI-powered platform makes roommate matching effortless
          </p>
        </div>

        {/* Steps row */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto'>
          {/* Step 1 */}
          <div className='bg-white rounded-[24px] p-10 shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300'>
            {/* Step Number */}
            <div className='text-4xl font-bold bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] bg-clip-text text-transparent mb-6'>
              01
            </div>

            {/* Icon */}
            <div className='mb-6'>
              <div className='text-[#2563EB] w-12 h-12'>
                <User size={48} />
              </div>
            </div>

            {/* Content */}
            <h3 className='text-2xl font-semibold text-[#1F2937] mb-3'>
              Create Your Profile
            </h3>
            <p className='text-[#64748B] mb-4'>
              Tell us about yourself, preferences, and what you&apos;re looking
              for
            </p>

            {/* Bullet points */}
            <ul className='space-y-2'>
              <li className='flex items-start gap-2'>
                <Check className='h-5 w-5 text-success mt-0.5 flex-shrink-0' />
                <span className='text-sm text-[#64748B]'>
                  Lifestyle preferences & habits
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <Check className='h-5 w-5 text-success mt-0.5 flex-shrink-0' />
                <span className='text-sm text-[#64748B]'>
                  Budget range & move-in date
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <Check className='h-5 w-5 text-success mt-0.5 flex-shrink-0' />
                <span className='text-sm text-[#64748B]'>
                  Location preferences & commute
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <Check className='h-5 w-5 text-success mt-0.5 flex-shrink-0' />
                <span className='text-sm text-[#64748B]'>
                  Upload verified ID for safety
                </span>
              </li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className='bg-white rounded-[24px] p-10 shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300'>
            {/* Step Number */}
            <div className='text-4xl font-bold bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] bg-clip-text text-transparent mb-6'>
              02
            </div>

            {/* Icon */}
            <div className='mb-6'>
              <div className='text-[#2563EB] w-12 h-12'>
                <Sparkles size={48} />
              </div>
            </div>

            {/* Content */}
            <h3 className='text-2xl font-semibold text-[#1F2937] mb-3'>
              Get Matched
            </h3>
            <p className='text-[#64748B] mb-4'>
              Our algorithm finds compatible roommates based on 20+ factors
            </p>

            {/* Bullet points */}
            <ul className='space-y-2'>
              <li className='flex items-start gap-2'>
                <Check className='h-5 w-5 text-success mt-0.5 flex-shrink-0' />
                <span className='text-sm text-[#64748B]'>
                  Lifestyle compatibility score
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <Check className='h-5 w-5 text-success mt-0.5 flex-shrink-0' />
                <span className='text-sm text-[#64748B]'>
                  Budget & location alignment
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <Check className='h-5 w-5 text-success mt-0.5 flex-shrink-0' />
                <span className='text-sm text-[#64748B]'>
                  Personality trait matching
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <Check className='h-5 w-5 text-success mt-0.5 flex-shrink-0' />
                <span className='text-sm text-[#64748B]'>
                  Communication style analysis
                </span>
              </li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className='bg-white rounded-[24px] p-10 shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300'>
            {/* Step Number */}
            <div className='text-4xl font-bold bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] bg-clip-text text-transparent mb-6'>
              03
            </div>

            {/* Icon */}
            <div className='mb-6'>
              <div className='relative text-[#2563EB] w-12 h-12'>
                <Home size={48} />
                <div className='absolute right-1 bottom-1 w-3 h-3 bg-[#F97316] rounded-full'></div>
              </div>
            </div>

            {/* Content */}
            <h3 className='text-2xl font-semibold text-[#1F2937] mb-3'>
              Connect & Move In
            </h3>
            <p className='text-[#64748B] mb-4'>
              Chat securely, schedule viewings, and sign your lease digitally
            </p>

            {/* Bullet points */}
            <ul className='space-y-2'>
              <li className='flex items-start gap-2'>
                <Check className='h-5 w-5 text-success mt-0.5 flex-shrink-0' />
                <span className='text-sm text-[#64748B]'>
                  In-app secure messaging
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <Check className='h-5 w-5 text-success mt-0.5 flex-shrink-0' />
                <span className='text-sm text-[#64748B]'>
                  Verified background checks
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <Check className='h-5 w-5 text-success mt-0.5 flex-shrink-0' />
                <span className='text-sm text-[#64748B]'>
                  Digital lease signing
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <Check className='h-5 w-5 text-success mt-0.5 flex-shrink-0' />
                <span className='text-sm text-[#64748B]'>
                  Move-in coordination tools
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
