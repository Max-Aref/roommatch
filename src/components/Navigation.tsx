"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

// Navigation links configuration
const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/safety", label: "Safety" },
  { href: "/pricing", label: "Pricing" },
];

// Logo component
const Logo: React.FC = () => {
  return (
    <div className='flex items-center gap-2'>
      <div className='h-8 w-8 rounded-full bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] flex items-center justify-center shadow-lg'>
        <div className='h-3 w-3 bg-white rounded-full'></div>
      </div>
      <span className='font-outfit font-semibold text-lg text-[#1F2937]'>
        RoomMatch
      </span>
    </div>
  );
};

// NavLink component with hover effects
const NavLink: React.FC<{ href: string; label: string; isActive: boolean }> = ({
  href,
  label,
  isActive,
}) => {
  return (
    <Link
      href={href}
      className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 
      ${isActive ? "text-[#2563EB]" : "text-[#1F2937] hover:text-[#2563EB]"}
      group`}
    >
      {label}
      <span
        className={`absolute bottom-0 left-0 h-0.5 bg-[#2563EB] transform origin-left
        transition-all duration-300 ease-out
        ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
      ></span>
    </Link>
  );
};

// MobileNav component
const MobileNav: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  useEffect(() => {
    // Prevent scrolling when menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 transform transition-all duration-300 ease-in-out ${
        isOpen
          ? "translate-x-0 opacity-100"
          : "translate-x-full opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className='absolute inset-0 bg-black/20 backdrop-blur-sm'
        onClick={onClose}
      />

      {/* Menu content */}
      <div className='absolute right-0 top-0 h-full w-72 bg-white/90 backdrop-blur-lg shadow-xl p-6 flex flex-col'>
        <div className='flex justify-between items-center mb-8'>
          <Logo />
          <button
            onClick={onClose}
            className='p-2 rounded-full hover:bg-neutral-100 transition-colors'
          >
            <X className='h-5 w-5 text-[#1F2937]' />
          </button>
        </div>

        <div className='flex flex-col space-y-4'>
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-base font-medium rounded-lg transition-all duration-200
              ${
                pathname === link.href
                  ? "text-[#2563EB] bg-blue-50"
                  : "text-[#1F2937] hover:text-[#2563EB] hover:bg-neutral-50"
              }`}
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className='mt-8 space-y-4'>
          <button className='w-full text-center py-2 font-medium text-[#1F2937] hover:text-[#2563EB] transition-colors'>
            Sign In
          </button>
          <button className='w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02]'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Navigation component
const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation is ready for smooth scroll implementation when needed

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 h-[72px] flex items-center transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-lg shadow-sm border-b border-[rgba(37,99,235,0.1)]"
            : "bg-transparent"
        }`}
      >
        <div className='container mx-auto px-4 md:px-6 flex items-center justify-between'>
          {/* Logo */}
          <Link href='/' className='flex-shrink-0'>
            <Logo />
          </Link>

          {/* Desktop Nav Links */}
          <div className='hidden md:flex items-center justify-center space-x-1 lg:space-x-2'>
            {navigationLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={pathname === link.href}
              />
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className='hidden md:flex items-center space-x-4'>
            <button className='text-sm font-medium text-[#1F2937] hover:text-[#2563EB] transition-colors'>
              Sign In
            </button>
            <button className='text-sm bg-[#F97316] hover:bg-[#EA580C] text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105'>
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden p-2 rounded-lg hover:bg-neutral-100/80 transition-colors'
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className='h-6 w-6 text-[#1F2937]' />
          </button>
        </div>
      </header>

      {/* Spacing to compensate for fixed header */}
      <div className='h-[72px]'></div>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};

export default Navigation;
