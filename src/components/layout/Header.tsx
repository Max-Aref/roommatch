"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  User,
  Home,
  Search,
  PlusCircle,
  ChevronDown,
  LogIn,
  Settings,
  CreditCard,
  HelpCircle,
  LogOut,
  Building2,
  Users,
  BarChart3,
  Zap,
} from "lucide-react";

// Types for better type safety
interface NavLink {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
}

interface UserMenuProps {
  isLoggedIn: boolean;
  onSignIn: () => void;
  onSignOut: () => void;
  userRole?: "landlord" | "tenant" | "manager";
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
  currentPath: string;
  isLoggedIn: boolean;
  onSignIn: () => void;
  userRole?: "landlord" | "tenant" | "manager";
}

// Navigation configuration based on user role
const getNavLinks = (
  userRole?: "landlord" | "tenant" | "manager"
): NavLink[] => {
  const baseLinks = [
    {
      href: "/",
      label: "Dashboard",
      icon: Home,
      description: "Overview & Analytics",
    },
  ];

  if (userRole === "tenant") {
    return [
      ...baseLinks,
      {
        href: "/search",
        label: "Find Property",
        icon: Search,
        description: "Search rentals",
      },
      {
        href: "/applications",
        label: "My Applications",
        icon: Users,
        description: "Track applications",
      },
    ];
  }

  // Landlord/Manager navigation
  return [
    ...baseLinks,
    {
      href: "/properties",
      label: "Properties",
      icon: Building2,
      description: "Manage listings",
    },
    {
      href: "/tenants",
      label: "Tenants",
      icon: Users,
      description: "Tenant management",
    },
    {
      href: "/analytics",
      label: "Analytics",
      icon: BarChart3,
      description: "Performance insights",
    },
    {
      href: "/list-property",
      label: "List Property",
      icon: PlusCircle,
      description: "Add new listing",
    },
  ];
};

// Enhanced User Menu Component
const UserMenu: React.FC<UserMenuProps> = ({
  isLoggedIn,
  onSignIn,
  onSignOut,
  userRole = "landlord",
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, []);

  const closeDropdown = useCallback(() => {
    setIsDropdownOpen(false);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest("[data-user-menu]")) {
        closeDropdown();
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [isDropdownOpen, closeDropdown]);

  if (!isLoggedIn) {
    return (
      <div className='flex items-center gap-3'>
        <Link
          href='/help'
          className='hidden sm:inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-neutral-600 hover:text-brand transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 rounded-lg'
        >
          <HelpCircle className='w-4 h-4' />
          Help
        </Link>
        <button
          onClick={onSignIn}
          className='inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-brand to-brand-dark hover:from-brand-dark hover:to-brand shadow-lg hover:shadow-xl rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2'
        >
          <LogIn className='w-4 h-4' />
          Sign In
        </button>
      </div>
    );
  }

  const roleDisplayName = {
    landlord: "Property Owner",
    tenant: "Tenant",
    manager: "Property Manager",
  }[userRole];

  return (
    <div className='relative' data-user-menu>
      <button
        onClick={toggleDropdown}
        className='flex items-center gap-3 p-2 text-neutral-700 hover:text-brand rounded-xl hover:bg-neutral-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2'
        aria-expanded={isDropdownOpen}
        aria-haspopup='true'
        aria-label='User menu'
      >
        <div className='relative'>
          <div className='w-9 h-9 bg-gradient-to-br from-brand to-brand-dark text-white rounded-xl flex items-center justify-center shadow-md'>
            <User className='w-5 h-5' />
          </div>
          <div className='absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-white'></div>
        </div>
        <div className='hidden sm:block text-left'>
          <div className='text-sm font-medium text-neutral-900'>John Doe</div>
          <div className='text-xs text-neutral-500'>{roleDisplayName}</div>
        </div>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isDropdownOpen && (
        <div className='absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-neutral-200 py-2 z-50 backdrop-blur-sm'>
          <div className='px-4 py-3 border-b border-neutral-100'>
            <div className='text-sm font-medium text-neutral-900'>John Doe</div>
            <div className='text-xs text-neutral-500'>{roleDisplayName}</div>
            <div className='text-xs text-brand mt-1'>Premium Plan</div>
          </div>

          <div className='py-2'>
            <Link
              href='/profile'
              className='flex items-center gap-3 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors duration-200'
              onClick={closeDropdown}
            >
              <User className='w-4 h-4' />
              My Profile
            </Link>
            <Link
              href='/settings'
              className='flex items-center gap-3 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors duration-200'
              onClick={closeDropdown}
            >
              <Settings className='w-4 h-4' />
              Settings
            </Link>
            <Link
              href='/billing'
              className='flex items-center gap-3 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors duration-200'
              onClick={closeDropdown}
            >
              <CreditCard className='w-4 h-4' />
              Billing & Plans
            </Link>
            <Link
              href='/help'
              className='flex items-center gap-3 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors duration-200'
              onClick={closeDropdown}
            >
              <HelpCircle className='w-4 h-4' />
              Help & Support
            </Link>
          </div>

          <div className='border-t border-neutral-100 pt-2'>
            <button
              onClick={() => {
                onSignOut();
                closeDropdown();
              }}
              className='flex items-center gap-3 w-full px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors duration-200'
            >
              <LogOut className='w-4 h-4' />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Enhanced Mobile Menu Component
const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navLinks,
  currentPath,
  isLoggedIn,
  onSignIn,
  userRole = "landlord",
}) => {
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 lg:hidden'>
      {/* Backdrop with blur */}
      <div
        className='fixed inset-0 bg-black/50 backdrop-blur-sm'
        onClick={onClose}
        aria-hidden='true'
      />

      {/* Menu Panel */}
      <div className='fixed right-0 top-0 h-full w-80 bg-white/95 backdrop-blur-md shadow-2xl border-l border-neutral-200'>
        {/* Header */}
        <div className='flex items-center justify-between p-6 border-b border-neutral-200'>
          <div className='flex items-center gap-3'>
            <div className='w-8 h-8 bg-gradient-to-br from-brand to-brand-dark rounded-lg flex items-center justify-center'>
              <Zap className='w-5 h-5 text-white' />
            </div>
            <span className='text-lg font-heading font-bold text-neutral-900'>
              Rently
            </span>
          </div>
          <button
            onClick={onClose}
            className='p-2 text-neutral-500 hover:text-neutral-700 rounded-lg hover:bg-neutral-100 transition-colors duration-200'
            aria-label='Close menu'
          >
            <X className='w-6 h-6' />
          </button>
        </div>

        {/* User Info (if logged in) */}
        {isLoggedIn && (
          <div className='p-6 border-b border-neutral-100 bg-gradient-to-r from-brand/5 to-brand-light/5'>
            <div className='flex items-center gap-3'>
              <div className='w-12 h-12 bg-gradient-to-br from-brand to-brand-dark text-white rounded-xl flex items-center justify-center'>
                <User className='w-6 h-6' />
              </div>
              <div>
                <div className='font-medium text-neutral-900'>John Doe</div>
                <div className='text-sm text-neutral-600'>
                  {userRole === "landlord"
                    ? "Property Owner"
                    : userRole === "tenant"
                    ? "Tenant"
                    : "Property Manager"}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className='px-6 py-4 space-y-2'>
          {navLinks.map(({ href, label, icon: Icon, description }) => {
            const isActive = currentPath === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-brand to-brand-light text-white shadow-lg"
                    : "text-neutral-700 hover:bg-neutral-50 hover:text-brand"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon className='w-5 h-5 flex-shrink-0' />
                <div>
                  <div className='font-medium'>{label}</div>
                  {description && (
                    <div
                      className={`text-xs ${
                        isActive ? "text-white/80" : "text-neutral-500"
                      }`}
                    >
                      {description}
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className='absolute bottom-0 left-0 right-0 p-6 border-t border-neutral-200 bg-neutral-50/50'>
          {!isLoggedIn ? (
            <button
              onClick={() => {
                onSignIn();
                onClose();
              }}
              className='flex items-center justify-center gap-3 w-full px-4 py-3 text-white bg-gradient-to-r from-brand to-brand-dark hover:from-brand-dark hover:to-brand rounded-xl shadow-lg transition-all duration-200'
            >
              <LogIn className='w-5 h-5' />
              Sign In to Rently
            </button>
          ) : (
            <div className='space-y-2'>
              <Link
                href='/help'
                onClick={onClose}
                className='flex items-center gap-3 w-full px-4 py-2 text-neutral-600 hover:text-brand rounded-lg transition-colors duration-200'
              >
                <HelpCircle className='w-4 h-4' />
                Help & Support
              </Link>
              <Link
                href='/settings'
                onClick={onClose}
                className='flex items-center gap-3 w-full px-4 py-2 text-neutral-600 hover:text-brand rounded-lg transition-colors duration-200'
              >
                <Settings className='w-4 h-4' />
                Settings
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Main Header Component
const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // TODO: Replace with actual auth state
  const [userRole] = useState<"landlord" | "tenant" | "manager">("landlord"); // TODO: Get from auth
  const pathname = usePathname();

  const navLinks = getNavLinks(userRole);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const handleSignIn = useCallback(() => {
    // TODO: Implement actual sign in logic
    console.log("Navigate to sign in");
  }, []);

  const handleSignOut = useCallback(() => {
    // TODO: Implement actual sign out logic
    setIsLoggedIn(false);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    closeMobileMenu();
  }, [pathname, closeMobileMenu]);

  return (
    <header className='sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-neutral-200/50 shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link
              href='/'
              className='flex items-center gap-3 text-xl font-heading font-bold text-neutral-900 hover:text-brand transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 rounded-xl px-3 py-2'
              aria-label='Rently home'
            >
              <div className='w-10 h-10 bg-gradient-to-br from-brand to-brand-dark rounded-xl flex items-center justify-center shadow-lg'>
                <Zap className='w-6 h-6 text-white' />
              </div>
              <span className='bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent'>
                Rently
              </span>
              <span className='hidden sm:inline-block px-2 py-1 text-xs font-medium bg-accent/10 text-accent-dark rounded-full'>
                AI-Powered
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav
            className='hidden lg:flex items-center space-x-2'
            role='navigation'
          >
            {navLinks.map(({ href, label, icon: Icon, description }) => {
              const isActive = pathname === href;
              return (
                <div key={href} className='relative group'>
                  <Link
                    href={href}
                    className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 ${
                      isActive
                        ? "text-brand bg-brand/10 shadow-sm"
                        : "text-neutral-700 hover:text-brand hover:bg-neutral-50"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <Icon className='w-4 h-4' />
                    {label}
                  </Link>
                  {description && (
                    <div className='hidden group-hover:block absolute top-full mt-2 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-neutral-800 text-white text-xs rounded-lg shadow-lg whitespace-nowrap z-50'>
                      {description}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop User Menu */}
          <div className='hidden lg:flex items-center'>
            <UserMenu
              isLoggedIn={isLoggedIn}
              onSignIn={handleSignIn}
              onSignOut={handleSignOut}
              userRole={userRole}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className='lg:hidden p-2 text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2'
            aria-expanded={isMobileMenuOpen}
            aria-label='Toggle navigation menu'
          >
            {isMobileMenuOpen ? (
              <X className='w-6 h-6' />
            ) : (
              <Menu className='w-6 h-6' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        navLinks={navLinks}
        currentPath={pathname}
        isLoggedIn={isLoggedIn}
        onSignIn={handleSignIn}
        userRole={userRole}
      />
    </header>
  );
};

export default Header;
