import Link from "next/link";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-[#F8FAFC] via-white to-[#EFF6FF] flex items-center justify-center px-4'>
      <div className='max-w-2xl w-full text-center'>
        {/* 404 Large Number */}
        <div className='mb-8'>
          <h1 className='text-[150px] md:text-[200px] font-outfit font-bold bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] bg-clip-text text-transparent leading-none'>
            404
          </h1>
        </div>

        {/* Error Message */}
        <h2 className='text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-4'>
          Page Not Found
        </h2>
        <p className='text-lg text-[#64748B] mb-12 max-w-md mx-auto'>
          Oops! The page you&apos;re looking for seems to have found a different
          roommate. Let&apos;s get you back home.
        </p>

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-16'>
          <Link
            href='/'
            className='group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300'
          >
            <Home size={20} />
            Back to Home
          </Link>

          <Link
            href='/search'
            className='group inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-[#E5E7EB] text-[#1F2937] rounded-full font-semibold hover:border-[#2563EB] hover:text-[#2563EB] transition-all duration-300'
          >
            <Search size={20} />
            Search Listings
          </Link>
        </div>

        {/* Helpful Links */}
        <div className='bg-white rounded-2xl p-8 shadow-sm border border-[#E5E7EB]'>
          <h3 className='text-lg font-semibold text-[#1F2937] mb-4'>
            Popular Pages
          </h3>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {[
              { name: "How It Works", href: "/#how-it-works" },
              { name: "Pricing", href: "/#pricing" },
              { name: "Safety", href: "/#safety" },
              { name: "FAQ", href: "/#faq" },
            ].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className='text-[#2563EB] hover:text-[#0EA5E9] font-medium transition-colors flex items-center gap-1'
              >
                <ArrowLeft size={16} className='rotate-180' />
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className='absolute top-20 left-10 w-32 h-32 bg-[#2563EB]/5 rounded-full blur-3xl -z-10'></div>
        <div className='absolute bottom-20 right-10 w-32 h-32 bg-[#0EA5E9]/5 rounded-full blur-3xl -z-10'></div>
      </div>
    </div>
  );
}
