"use client";

import React, { useState, useEffect } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
  Globe,
  DollarSign,
} from "lucide-react";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Handle scroll for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setShowSuccess(true);
      setEmail("");
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const companyLinks = [
    "About Us",
    "How It Works",
    "Safety & Trust",
    "Careers",
    "Press",
    "Blog",
  ];

  const resourceLinks = [
    "Help Center",
    "Contact Support",
    "Safety Tips",
    "Trust Guidelines",
    "Community Forums",
    "API Documentation",
  ];

  const legalLinks = [
    "Terms of Service",
    "Privacy Policy",
    "Cookie Policy",
    "Acceptable Use",
    "Accessibility",
  ];

  return (
    <>
      <footer className='bg-[#1F2937] text-white'>
        {/* TOP SECTION - 4 Columns */}
        <div className='border-b border-white/10'>
          <div className='container mx-auto px-4 md:px-10 py-20 max-w-7xl'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
              {/* Column 1 - Brand */}
              <div>
                <div className='mb-4'>
                  <h3 className='text-2xl font-bold text-white'>RoomMatch</h3>
                </div>
                <p className='text-[#9CA3AF] mb-6 text-sm leading-relaxed'>
                  Find your perfect roommate match
                </p>

                {/* Social Media Icons */}
                <div className='flex gap-3'>
                  {[
                    { icon: Facebook, label: "Facebook" },
                    { icon: Twitter, label: "Twitter" },
                    { icon: Instagram, label: "Instagram" },
                    { icon: Linkedin, label: "LinkedIn" },
                  ].map((social, index) => (
                    <button
                      key={index}
                      aria-label={social.label}
                      className='w-10 h-10 rounded-full bg-[#374151] flex items-center justify-center text-[#9CA3AF] hover:bg-[#2563EB] hover:text-white transition-all duration-300 hover:scale-110'
                    >
                      <social.icon size={20} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Column 2 - Company */}
              <div>
                <h4 className='text-white font-semibold mb-4 text-base'>
                  Company
                </h4>
                <ul className='space-y-3'>
                  {companyLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href='#'
                        className='text-[#9CA3AF] hover:text-white transition-colors duration-300 text-sm'
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3 - Resources */}
              <div>
                <h4 className='text-white font-semibold mb-4 text-base'>
                  Resources
                </h4>
                <ul className='space-y-3'>
                  {resourceLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href='#'
                        className='text-[#9CA3AF] hover:text-white transition-colors duration-300 text-sm'
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 4 - Legal */}
              <div>
                <h4 className='text-white font-semibold mb-4 text-base'>
                  Legal
                </h4>
                <ul className='space-y-3'>
                  {legalLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href='#'
                        className='text-[#9CA3AF] hover:text-white transition-colors duration-300 text-sm'
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION - Newsletter */}
        <div className='bg-[#111827] border-b border-white/10'>
          <div className='container mx-auto px-4 md:px-10 py-16 max-w-3xl text-center'>
            <h3 className='text-2xl font-bold text-white mb-2'>Stay Updated</h3>
            <p className='text-[#9CA3AF] mb-6'>
              Get roommate tips and updates delivered to your inbox
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubscribe} className='max-w-md mx-auto'>
              <div className='flex flex-col sm:flex-row gap-3'>
                <div className='flex-grow'>
                  <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your email'
                    className='w-full px-5 py-3 bg-[#1F2937] border border-[#374151] rounded-full text-white placeholder-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent'
                    required
                  />
                </div>
                <button
                  type='submit'
                  className='px-8 py-3 bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap'
                >
                  Subscribe
                </button>
              </div>

              {/* Success Message */}
              {showSuccess && (
                <p className='mt-4 text-[#10B981] text-sm animate-fade-in'>
                  ✓ Successfully subscribed! Check your inbox.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* BOTTOM SECTION - Copyright & Links */}
        <div className='bg-[#111827]'>
          <div className='container mx-auto px-4 md:px-10 py-6 max-w-7xl'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
              {/* Left - Copyright */}
              <div className='text-[#9CA3AF] text-sm'>
                © 2025 RoomMatch. All rights reserved.
              </div>

              {/* Right - Language & Links */}
              <div className='flex items-center gap-6 text-sm'>
                {/* Language Selector */}
                <button className='flex items-center gap-2 text-[#9CA3AF] hover:text-white transition-colors'>
                  <Globe size={16} />
                  <span>English</span>
                </button>

                {/* Currency Selector */}
                <button className='flex items-center gap-2 text-[#9CA3AF] hover:text-white transition-colors'>
                  <DollarSign size={16} />
                  <span>USD</span>
                </button>

                {/* Quick Links */}
                <div className='hidden md:flex items-center gap-2'>
                  <span className='text-[#4B5563]'>•</span>
                  <a
                    href='#'
                    className='text-[#9CA3AF] hover:text-white transition-colors'
                  >
                    Sitemap
                  </a>
                  <span className='text-[#4B5563]'>•</span>
                  <a
                    href='#'
                    className='text-[#9CA3AF] hover:text-white transition-colors'
                  >
                    Status
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* BACK TO TOP BUTTON */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white rounded-full shadow-2xl hover:shadow-[#F97316]/50 hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center group'
          aria-label='Back to top'
        >
          <ArrowUp
            size={24}
            className='group-hover:-translate-y-1 transition-transform'
          />
        </button>
      )}
    </>
  );
};

export default Footer;
