"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Heart,
  Search,
  Bell,
  User,
  ChevronDown,
  Home,
  Users,
  Shield,
  Sparkles,
  HelpCircle,
  LogIn,
  UserPlus,
} from "lucide-react";

interface NavLink {
  name: string;
  href: string;
  icon?: React.ReactNode;
  badge?: string;
}

const mainLinks: NavLink[] = [
  { name: "Home", href: "#", icon: <Home className='w-4 h-4' /> },
  {
    name: "Find Roommates",
    href: "#find",
    icon: <Users className='w-4 h-4' />,
  },
  {
    name: "How It Works",
    href: "#how",
    icon: <Sparkles className='w-4 h-4' />,
  },
  {
    name: "Safety",
    href: "#safety",
    icon: <Shield className='w-4 h-4' />,
    badge: "Verified",
  },
  { name: "Help", href: "#help", icon: <HelpCircle className='w-4 h-4' /> },
];

export default function NavigationModern() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hasNotifications, setHasNotifications] = useState(true);

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 backdrop-blur-xl bg-gray-900/80 shadow-lg shadow-purple-500/10"
            : "py-5 bg-transparent"
        }`}
      >
        {/* Gradient Top Border */}
        <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50' />

        {/* Glow Effect on Scroll */}
        {isScrolled && (
          <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent blur-sm animate-pulse-slow' />
        )}

        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between'>
            {/* Logo */}
            <a
              href='#'
              className='group relative flex items-center gap-3 z-10'
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <div className='relative'>
                <div className='w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform'>
                  <Heart className='w-6 h-6 text-white fill-white' />
                </div>
                <div className='absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity' />
              </div>
              <span className='text-xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent'>
                RoomMatch
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center gap-1'>
              {mainLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className='group relative px-4 py-2 rounded-lg hover:bg-white/5 transition-all'
                >
                  <div className='flex items-center gap-2 text-gray-300 group-hover:text-white transition-colors'>
                    {link.icon}
                    <span className='text-sm font-medium'>{link.name}</span>
                    {link.badge && (
                      <span className='px-2 py-0.5 text-xs font-bold bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full'>
                        {link.badge}
                      </span>
                    )}
                  </div>
                  <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-3/4 transition-all duration-300' />
                </a>
              ))}
            </div>

            {/* Right Actions */}
            <div className='flex items-center gap-3'>
              {/* Search Button - Desktop */}
              <button
                className='hidden md:flex items-center gap-2 px-4 py-2 backdrop-blur-xl bg-gray-900/50 border border-white/10 rounded-full hover:border-purple-500/50 transition-all group'
                aria-label='Search'
              >
                <Search className='w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors' />
                <span className='text-sm text-gray-400'>Search...</span>
                <kbd className='hidden lg:inline-flex px-2 py-0.5 text-xs bg-white/10 rounded border border-white/10'>
                  ⌘K
                </kbd>
              </button>

              {/* Notifications - Desktop */}
              <button
                className='hidden md:block relative p-2 backdrop-blur-xl bg-gray-900/50 border border-white/10 rounded-full hover:border-purple-500/50 transition-all group'
                aria-label='Notifications'
                onClick={() => setHasNotifications(false)}
              >
                <Bell className='w-5 h-5 text-gray-300 group-hover:text-white transition-colors' />
                {hasNotifications && (
                  <>
                    <div className='absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-ping' />
                    <div className='absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full' />
                  </>
                )}
              </button>

              {/* User Menu - Desktop */}
              <div className='hidden md:block relative'>
                <button
                  onClick={() =>
                    setActiveDropdown(activeDropdown === "user" ? null : "user")
                  }
                  className='flex items-center gap-2 px-4 py-2 backdrop-blur-xl bg-gray-900/50 border border-white/10 rounded-full hover:border-purple-500/50 transition-all group'
                >
                  <User className='w-4 h-4 text-gray-300 group-hover:text-white transition-colors' />
                  <span className='text-sm text-gray-300 group-hover:text-white transition-colors'>
                    Account
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform ${
                      activeDropdown === "user" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === "user" && (
                  <div className='absolute right-0 mt-2 w-64 backdrop-blur-xl bg-gray-900/95 border border-white/10 rounded-2xl overflow-hidden shadow-xl shadow-purple-500/10'>
                    <div className='p-4 border-b border-white/10'>
                      <p className='text-sm font-semibold text-white'>
                        Not signed in
                      </p>
                      <p className='text-xs text-gray-400 mt-1'>
                        Join RoomMatch to find your perfect roommate
                      </p>
                    </div>
                    <div className='p-2'>
                      <a
                        href='#login'
                        className='flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors'
                      >
                        <LogIn className='w-4 h-4 text-purple-400' />
                        <span className='text-sm text-gray-300'>Sign In</span>
                      </a>
                      <a
                        href='#signup'
                        className='flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors'
                      >
                        <UserPlus className='w-4 h-4 text-pink-400' />
                        <span className='text-sm text-gray-300'>
                          Create Account
                        </span>
                      </a>
                    </div>
                    <div className='p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-t border-white/10'>
                      <p className='text-xs text-gray-400 text-center'>
                        Join 50,000+ happy roommates
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* CTA Button - Desktop */}
              <a href='#signup' className='hidden lg:block relative group'>
                <div className='absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-50 group-hover:opacity-100 transition-opacity' />
                <div className='relative px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-white text-sm hover:shadow-lg hover:shadow-purple-500/50 transition-shadow'>
                  Get Started Free
                </div>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className='md:hidden p-2 backdrop-blur-xl bg-gray-900/50 border border-white/10 rounded-lg hover:border-purple-500/50 transition-all'
                aria-label='Toggle menu'
              >
                {isMobileMenuOpen ? (
                  <X className='w-6 h-6 text-white' />
                ) : (
                  <Menu className='w-6 h-6 text-white' />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='fixed inset-0 z-40 md:hidden'>
          {/* Backdrop */}
          <div
            className='absolute inset-0 bg-black/80 backdrop-blur-xl'
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className='absolute top-20 left-0 right-0 bottom-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 overflow-y-auto'>
            {/* Gradient Orbs */}
            <div className='absolute top-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl' />
            <div className='absolute bottom-0 right-0 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl' />

            <div className='relative p-6 space-y-6'>
              {/* Search Bar */}
              <div className='relative group'>
                <div className='absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-25 group-focus-within:opacity-50 transition-opacity' />
                <div className='relative flex items-center gap-3 px-4 py-3 backdrop-blur-xl bg-gray-900/80 rounded-full border border-white/10'>
                  <Search className='w-5 h-5 text-gray-400' />
                  <input
                    type='text'
                    placeholder='Search...'
                    className='flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none'
                  />
                </div>
              </div>

              {/* Navigation Links */}
              <div className='space-y-2'>
                {mainLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className='group relative block'
                  >
                    <div className='absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-0 group-hover:opacity-25 transition-opacity' />
                    <div className='relative flex items-center gap-3 px-4 py-4 backdrop-blur-xl bg-gray-900/50 rounded-xl border border-white/10 group-hover:border-white/30 transition-all'>
                      {link.icon}
                      <span className='flex-1 text-gray-300 group-hover:text-white transition-colors'>
                        {link.name}
                      </span>
                      {link.badge && (
                        <span className='px-2 py-1 text-xs font-bold bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full'>
                          {link.badge}
                        </span>
                      )}
                    </div>
                  </a>
                ))}
              </div>

              {/* Notifications */}
              <div className='relative group'>
                <div className='absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-25' />
                <div className='relative flex items-center gap-3 px-4 py-4 backdrop-blur-xl bg-gray-900/50 rounded-xl border border-white/10'>
                  <Bell className='w-5 h-5 text-purple-400' />
                  <span className='flex-1 text-gray-300'>Notifications</span>
                  {hasNotifications && (
                    <div className='w-2 h-2 bg-red-500 rounded-full animate-pulse-slow' />
                  )}
                </div>
              </div>

              {/* Auth Buttons */}
              <div className='space-y-3 pt-6 border-t border-white/10'>
                <a
                  href='#login'
                  className='block px-6 py-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-full text-center font-semibold text-white hover:bg-white/10 transition-all'
                >
                  Sign In
                </a>
                <a href='#signup' className='relative block group'>
                  <div className='absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-50 group-hover:opacity-100 transition-opacity' />
                  <div className='relative px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-center font-semibold text-white'>
                    Get Started Free
                  </div>
                </a>
              </div>

              {/* Trust Badge */}
              <div className='mt-8 p-4 backdrop-blur-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-white/10 text-center'>
                <p className='text-sm text-gray-300 mb-2'>
                  <Sparkles className='inline w-4 h-4 text-yellow-400 mr-1' />
                  Join 50,000+ Happy Roommates
                </p>
                <div className='flex justify-center gap-2 text-xs text-gray-400'>
                  <span>⭐⭐⭐⭐⭐</span>
                  <span>4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Click outside to close dropdown */}
      {activeDropdown && (
        <div
          className='fixed inset-0 z-30'
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </>
  );
}
