// tailwind.config.ts
import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#3B82F6", // main blue (trustworthy, modern)
          light: "#60A5FA",
          dark: "#1D4ED8",
        },
        accent: {
          DEFAULT: "#F59E0B", // warm amber (friendly, highlight)
          light: "#FBBF24",
          dark: "#B45309",
        },
        success: {
          DEFAULT: "#10B981", // green (positive, growth)
          light: "#34D399",
          dark: "#047857",
        },
        danger: {
          DEFAULT: "#EF4444", // red (alerts, warnings)
          light: "#F87171",
          dark: "#B91C1C",
        },
        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
        background: {
          DEFAULT: "#FFFFFF",
          subtle: "#F9FAFB",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        heading: ["Nunito", "ui-sans-serif", "system-ui"],
        outfit: ["Outfit", "ui-sans-serif", "system-ui"],
      },
      borderRadius: {
        sm: "0.375rem",
        DEFAULT: "0.75rem", // rounded-xl for softer look
        lg: "1rem",
        full: "9999px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
        DEFAULT: "0 2px 6px rgba(0, 0, 0, 0.08)",
        md: "0 4px 12px rgba(0, 0, 0, 0.12)",
        lg: "0 8px 20px rgba(0, 0, 0, 0.15)",
      },
      typography: ({ theme }: { theme: (path: string) => string }) => ({
        DEFAULT: {
          css: {
            color: theme("colors.neutral.800"),
            a: { color: theme("colors.brand.DEFAULT"), textDecoration: "none" },
            h1: { fontFamily: theme("fontFamily.heading") },
            h2: { fontFamily: theme("fontFamily.heading") },
            h3: { fontFamily: theme("fontFamily.heading") },
          },
        },
      }),
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-medium": "float 5s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
        "ping-medium": "ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite",
        "ping-fast": "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "dot-travel": "dotTravel 3s linear infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient": "gradient 8s linear infinite",
        "typing": "typing 3.5s steps(60, end), blink 0.75s step-end infinite",
        "bounce-slow": "bounce 3s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        dotTravel: {
          "0%": {
            opacity: "0",
            transform: "translateX(0) translateY(-50%)",
          },
          "10%": {
            opacity: "1",
            transform: "translateX(10%) translateY(-50%)",
          },
          "90%": {
            opacity: "1",
            transform: "translateX(90%) translateY(-50%)",
          },
          "100%": {
            opacity: "0",
            transform: "translateX(100%) translateY(-50%)",
          },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "currentColor" },
        },
      },
    },
  },
  plugins: [forms, typography, aspectRatio],
};

export default config;
