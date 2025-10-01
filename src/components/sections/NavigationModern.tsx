"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Search,
  Bell,
  User,
  Moon,
  Sun,
  ChevronDown,
  Home,
  Shield,
  DollarSign,
  BookOpen,
  Star,
  Newspaper,
  Zap,
} from "lucide-react";

// Navigation links with icons
const navigationLinks = [
  { href: "/how-it-works", label: "How It Works", icon: Zap },
  { href: "/features", label: "Features", icon: Star },
  { href: "/pricing", label: "Pricing", icon: DollarSign },
  { href: "/safety", label: "Safety", icon: Shield },
  { href: "/success-stories", label: "Success Stories", icon: BookOpen },
  { href: "/blog", label: "Blog", icon: Newspaper },
];

// Logo component with Hero3 styling
const Logo: React.FC<{ isScrolled: boolean }> = ({ isScrolled }) => {
  return (
    <Link href="/" className="group relative flex-shrink-0">
      <div className="relative flex items-center gap-3">
        {/* Animated glow behind logo */}
        <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500" />
        
        {/* Logo circle */}
        <div className={`relative transition-all duration-300 ${
          isScrolled ? "w-10 h-10" : "w-12 h-12"
        }`}>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full animate-spin-slow" />
          <div className="absolute inset-[2px] bg-gray-900 rounded-full flex items-center justify-center">
            <Home className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Logo text */}
        <span className={`relative font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent transition-all duration-300 ${
          isScrolled ? "text-xl" : "text-2xl"
        }`}>
          RoomMatch
        </span>
      </div>
    </Link>
  );
};

// Desktop navigation link with gradient underline
const NavLink: React.FC<{
  href: string;
  label: string;
  icon: React.ElementType;
  isActive: boolean;
}> = ({ href, label, icon: Icon, isActive }) => {
  return (
    <Link
      href={href}
      className="group relative px-4 py-2 text-white/80 hover:text-white transition-all duration-300"
    >
      <div className="flex items-center gap-2">
        <Icon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -ml-6 group-hover:ml-0" />
        <span className="font-medium">{label}</span>
      </div>
      
      {/* Animated gradient underline */}
      <span
        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 transform origin-left transition-all duration-300 ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
      
      {/* Hover glow */}
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-lg blur-md -z-10" />
      )}
    </Link>
  );
};

// Search component that expands
const SearchBar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      <div
        className={`flex items-center gap-2 transition-all duration-300 ${
          isExpanded ? "w-64" : "w-10"
        }`}
      >
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 group"
        >
          <Search className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
        </button>
        
        {isExpanded && (
          <input
            type="text"
            placeholder="Search..."
            autoFocus
            onBlur={() => setIsExpanded(false)}
            className="flex-1 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-all duration-300"
          />
        )}
      </div>
    </div>
  );
};

// Dark mode toggle
const DarkModeToggle: React.FC<{ isDark: boolean; onToggle: () => void }> = ({
  isDark,
  onToggle,
}) => {
  return (
    <button
      onClick={onToggle}
      className="relative p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 group overflow-hidden"
    >
      <div className="relative z-10">
        {isDark ? (
          <Moon className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
        ) : (
          <Sun className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
        )}
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
    </button>
  );
};

// Notification bell with badge
const NotificationBell: React.FC = () => {
  return (
    <button className="relative p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 group">
      <Bell className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
      
      {/* Badge */}
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
        <span className="text-[10px] font-bold text-white">3</span>
      </div>
      
      {/* Pulse animation */}
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 rounded-full animate-ping" />
    </button>
  );
};

// User profile dropdown
const UserProfile: React.FC<{ isLoggedIn: boolean }> = ({ isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isLoggedIn) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 pr-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 group"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
          <User className="w-4 h-4 text-white" />
        </div>
        <ChevronDown
          className={`w-4 h-4 text-white transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 rounded-xl bg-gray-900/95 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden animate-fade-in">
          <div className="p-2 space-y-1">
            <Link
              href="/profile"
              className="block px-4 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              Profile
            </Link>
            <Link
              href="/settings"
              className="block px-4 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              Settings
            </Link>
            <button className="w-full text-left px-4 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200">
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Mobile menu
const MobileMenu: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
  isDark: boolean;
  onToggleDark: () => void;
}> = ({ isOpen, onClose, pathname, isDark, onToggleDark }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 transform transition-all duration-500 ease-out ${
        isOpen
          ? "translate-x-0 opacity-100"
          : "translate-x-full opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop with gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-purple-900/95 to-gray-900/95 backdrop-blur-2xl"
        onClick={onClose}
      />

      {/* Menu content */}
      <div className="absolute right-0 top-0 h-full w-full sm:w-96 bg-gradient-to-br from-gray-900 via-purple-900/50 to-gray-900 backdrop-blur-2xl border-l border-white/10 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <Logo isScrolled={false} />
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 hover:rotate-90 transition-all duration-300"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Navigation links */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-2">
            {navigationLinks.map((link, index) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`group flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/50"
                      : "hover:bg-white/10 border border-transparent"
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isOpen
                      ? "slideInRight 0.5s ease-out forwards"
                      : "none",
                  }}
                >
                  <div
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-purple-500 to-pink-500"
                        : "bg-white/10 group-hover:bg-white/20"
                    }`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium">{link.label}</span>
                  {isActive && (
                    <div className="ml-auto w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Dark mode toggle in mobile */}
          <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-between">
              <span className="text-white/80 font-medium">Dark Mode</span>
              <DarkModeToggle isDark={isDark} onToggle={onToggleDark} />
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-6 border-t border-white/10 space-y-3">
          <button className="w-full px-6 py-3 rounded-xl border-2 border-white/30 text-white font-medium hover:bg-white/10 hover:border-white/50 transition-all duration-300">
            Log In
          </button>
          <button className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white font-bold hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 relative overflow-hidden group">
            <span className="relative z-10">Sign Up Free</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Main NavigationModern component
const NavigationModern: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoggedIn] = useState(false); // Set to true to show user profile
  const pathname = usePathname();

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "h-16 bg-gray-900/90 backdrop-blur-xl shadow-lg shadow-purple-500/10"
            : "h-20 bg-gray-900/50 backdrop-blur-md"
        }`}
      >
        {/* Animated gradient top border */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-gradient" />

        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo */}
          <Logo isScrolled={isScrolled} />

          {/* Desktop Center Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                icon={link.icon}
                isActive={pathname === link.href}
              />
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <SearchBar />
            <DarkModeToggle
              isDark={isDarkMode}
              onToggle={() => setIsDarkMode(!isDarkMode)}
            />
            {isLoggedIn && <NotificationBell />}
            <UserProfile isLoggedIn={isLoggedIn} />
            
            {!isLoggedIn && (
              <>
                <button className="px-4 py-2 text-white/80 hover:text-white font-medium transition-all duration-300">
                  Log In
                </button>
                <button className="group relative px-6 py-2.5 rounded-xl font-bold overflow-hidden transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative text-white">Sign Up</span>
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg bg-gradient-to-r from-purple-500 to-pink-500" />
                </button>
              </>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>
      </header>

      {/* Spacing compensator */}
      <div className={isScrolled ? "h-16" : "h-20"} />

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        pathname={pathname}
        isDark={isDarkMode}
        onToggleDark={() => setIsDarkMode(!isDarkMode)}
      />
    </>
  );
};

export default NavigationModern;
