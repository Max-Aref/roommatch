import type { Metadata } from "next";
import { Inter, Nunito, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RoomMatch - Find Your Perfect Roommate",
  description:
    "Connect with compatible roommates and find your ideal living space with AI-powered matching, virtual tours, and verified safety features.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${nunito.variable} ${outfit.variable}`}
    >
      <body className='font-sans antialiased bg-gray-900 text-white'>
        {children}
      </body>
    </html>
  );
}
