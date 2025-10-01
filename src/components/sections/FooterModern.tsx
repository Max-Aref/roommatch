"use client";

import { useState, useEffect } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  MapPin,
  Phone,
  Heart,
  ArrowRight,
  Shield,
  Award,
  Zap,
} from "lucide-react";

interface FooterLink {
  name: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const footerColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { name: "Find Roommates", href: "#find" },
      { name: "List Your Room", href: "#list" },
      { name: "AI Matching", href: "#ai" },
      { name: "Virtual Tours", href: "#tours" },
      { name: "Pricing", href: "#pricing" },
      { name: "Mobile App", href: "#app" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Press Kit", href: "#press" },
      { name: "Blog", href: "#blog" },
      { name: "Contact", href: "#contact" },
      { name: "Partners", href: "#partners" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help Center", href: "#help" },
      { name: "Safety Tips", href: "#safety" },
      { name: "Community Guide", href: "#guide" },
      { name: "FAQs", href: "#faq" },
      { name: "Video Tutorials", href: "#tutorials" },
      { name: "API Docs", href: "#api" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "GDPR", href: "#gdpr" },
      { name: "Accessibility", href: "#accessibility" },
      { name: "Licenses", href: "#licenses" },
    ],
  },
];

const socialLinks = [
  {
    icon: Facebook,
    href: "#facebook",
    label: "Facebook",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Twitter,
    href: "#twitter",
    label: "Twitter",
    color: "from-sky-400 to-sky-500",
  },
  {
    icon: Instagram,
    href: "#instagram",
    label: "Instagram",
    color: "from-pink-500 to-purple-600",
  },
  {
    icon: Linkedin,
    href: "#linkedin",
    label: "LinkedIn",
    color: "from-blue-600 to-blue-700",
  },
  {
    icon: Youtube,
    href: "#youtube",
    label: "YouTube",
    color: "from-red-500 to-red-600",
  },
];

const trustBadges = [
  { icon: Shield, text: "SSL Secured", color: "from-green-500 to-emerald-600" },
  {
    icon: Award,
    text: "Award Winning",
    color: "from-yellow-500 to-orange-600",
  },
  { icon: Zap, text: "Fast Support", color: "from-purple-500 to-pink-600" },
];

export default function FooterModern() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className='relative bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 text-white overflow-hidden'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0 pointer-events-none'>
        {/* Grid Pattern */}
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#8B5CF620_1px,transparent_1px),linear-gradient(to_bottom,#8B5CF620_1px,transparent_1px)] bg-[size:4rem_4rem]' />

        {/* Gradient Orbs */}
        <div className='absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-slow' />
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float-medium' />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl animate-float-fast' />
      </div>

      {/* Gradient Top Border */}
      <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent' />
      <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent blur-md' />

      <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Newsletter Section */}
        <div className='py-16 border-b border-white/10'>
          <div
            className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className='inline-block mb-4'>
              <div className='relative'>
                <Mail className='w-12 h-12 text-purple-400' />
                <div className='absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-50 animate-pulse-slow' />
              </div>
            </div>
            <h3 className='text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent'>
              Stay in the Loop
            </h3>
            <p className='text-gray-300 mb-8 text-lg'>
              Get the latest roommate matches, safety tips, and exclusive offers
              delivered to your inbox.
            </p>

            <form
              onSubmit={handleSubscribe}
              className='relative max-w-md mx-auto'
            >
              <div className='relative group'>
                {/* Glow Effect */}
                <div className='absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full blur-lg opacity-25 group-hover:opacity-50 transition-opacity' />

                <div className='relative flex gap-2 backdrop-blur-xl bg-gray-900/80 rounded-full border border-white/10 p-2'>
                  <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your email'
                    className='flex-1 bg-transparent px-4 py-2 text-white placeholder-gray-400 focus:outline-none'
                    disabled={isSubscribed}
                  />
                  <button
                    type='submit'
                    disabled={isSubscribed}
                    className='relative group/btn px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed'
                  >
                    <span className='relative z-10 flex items-center gap-2'>
                      {isSubscribed ? (
                        <>
                          <Heart className='w-4 h-4 fill-current' />
                          Subscribed!
                        </>
                      ) : (
                        <>
                          Subscribe
                          <ArrowRight className='w-4 h-4 group-hover/btn:translate-x-1 transition-transform' />
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </div>
              <p className='mt-3 text-xs text-gray-400'>
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className='py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12'>
          {/* Brand Column */}
          <div className='lg:col-span-2'>
            <div className='mb-6'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='relative'>
                  <div className='w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center'>
                    <Heart className='w-6 h-6 text-white fill-white' />
                  </div>
                  <div className='absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-md opacity-50' />
                </div>
                <h2 className='text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent'>
                  RoomMatch
                </h2>
              </div>
              <p className='text-gray-300 leading-relaxed mb-6'>
                The most trusted platform for finding compatible roommates. Join
                over 50,000+ users who found their perfect living situation.
              </p>

              {/* Trust Badges */}
              <div className='flex flex-wrap gap-3 mb-6'>
                {trustBadges.map((badge, index) => (
                  <div
                    key={index}
                    className='group relative'
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div
                      className={`relative flex items-center gap-2 px-3 py-2 bg-gradient-to-r ${badge.color} bg-opacity-10 backdrop-blur-sm rounded-lg border border-white/10`}
                    >
                      <badge.icon className='w-4 h-4' />
                      <span className='text-xs font-semibold'>
                        {badge.text}
                      </span>
                    </div>
                    <div
                      className={`absolute -inset-0.5 bg-gradient-to-r ${badge.color} rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity`}
                    />
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className='flex gap-3'>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className='group relative'
                  >
                    <div className='relative w-10 h-10 backdrop-blur-xl bg-gray-900/50 rounded-lg border border-white/10 flex items-center justify-center hover:border-white/30 transition-all'>
                      <social.icon className='w-5 h-5 text-gray-300 group-hover:text-white transition-colors' />
                    </div>
                    <div
                      className={`absolute -inset-0.5 bg-gradient-to-r ${social.color} rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity`}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {footerColumns.map((column, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <h3 className='text-lg font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent'>
                {column.title}
              </h3>
              <ul className='space-y-3'>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className='group relative inline-flex items-center text-gray-300 hover:text-white transition-colors'
                    >
                      <span className='relative'>
                        {link.name}
                        <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300' />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className='py-8 border-t border-white/10'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            {/* Copyright */}
            <div className='text-sm text-gray-400 text-center md:text-left'>
              <p>
                © {new Date().getFullYear()} RoomMatch. Made with{" "}
                <Heart className='inline w-4 h-4 text-red-500 fill-current animate-pulse-slow' />{" "}
                for better living.
              </p>
            </div>

            {/* Contact Info */}
            <div className='flex flex-wrap justify-center gap-6 text-sm text-gray-400'>
              <a
                href='tel:+1234567890'
                className='flex items-center gap-2 hover:text-white transition-colors'
              >
                <Phone className='w-4 h-4' />
                <span>+1 (234) 567-890</span>
              </a>
              <a
                href='mailto:support@roommatch.com'
                className='flex items-center gap-2 hover:text-white transition-colors'
              >
                <Mail className='w-4 h-4' />
                <span>support@roommatch.com</span>
              </a>
              <div className='flex items-center gap-2'>
                <MapPin className='w-4 h-4' />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scan Line */}
      <div className='absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse-slow' />
    </footer>
  );
}
