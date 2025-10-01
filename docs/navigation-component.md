# Navigation Component Documentation

## Overview

The Navigation component is a modern, responsive navbar with glassmorphism
effect designed for the RoomMatch roommate finding application. It follows a
sleek, professional design with subtle animations and responsive behavior.

## Design Specifications

### Visual Design

- **Height:** 72px fixed height
- **Background:** Semi-transparent white (`rgba(255, 255, 255, 0.8)`) with
  `backdrop-blur-lg`
- **Border:** 1px solid `rgba(37, 99, 235, 0.1)` on scroll
- **Shadow:** Subtle shadow appears on scroll
- **Positioning:** Sticky to top of viewport

### Color Scheme

- **Logo Gradient:** `#2563EB` (Ocean Blue) to `#0EA5E9` (Sky Blue)
- **Primary Text:** `#1F2937` (Charcoal)
- **Active/Hover State:** `#2563EB` (Ocean Blue)
- **Primary Button:** `#F97316` (Coral) with hover state `#EA580C`

## Component Structure

### Main Components

1. **Navigation (main component)**

   - Container for all navigation elements
   - Handles scroll effects and state management

2. **Logo**

   - Custom gradient icon + "RoomMatch" text
   - Uses Outfit font with 600 weight

3. **NavLink**

   - Intelligent link component with hover animations
   - Sliding underline effect from left to right
   - Active state handling

4. **MobileNav**
   - Slide-in panel from right side
   - Full-height overlay with backdrop blur
   - Animated transitions

## Features

### Desktop Navigation

- Logo on the left
- Centered navigation links with custom hover effects
- "Sign In" (text) and "Get Started" (button) on the right
- Smooth animations on hover and scroll
- Active link state with underline

### Mobile Navigation

- Hamburger menu in top right
- Full-screen overlay with semi-transparent backdrop
- Slide-in animation from right side
- Vertically stacked navigation links
- Full-width action buttons
- Close button (X) in the top right

### Interactive Elements

- **Nav Links:** Underline animation slides in from left on hover
- **Primary Button:** Scale effect (1.05) with shadow increase on hover
- **Mobile Menu:** Smooth slide-in animation with backdrop blur
- **Body Lock:** Prevents scrolling when mobile menu is open

## Usage

```jsx
// In your layout or page component
import Navigation from "@/components/Navigation";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  );
}
```

## Customization

### Adding New Navigation Links

Edit the `navigationLinks` array in the component:

```jsx
const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/safety", label: "Safety" },
  { href: "/pricing", label: "Pricing" },
  // Add new links here
  { href: "/blog", label: "Blog" },
];
```

### Changing Colors

The component uses direct color references in Tailwind classes. To modify
colors:

1. For Ocean Blue (`#2563EB`): Replace all instances of `[#2563EB]`
2. For Coral (`#F97316`): Replace all instances of `[#F97316]` and `[#EA580C]`
   (hover)
3. For Text (`#1F2937`): Replace all instances of `[#1F2937]`

## Accessibility Features

- Semantic HTML structure
- Keyboard navigation support
- ARIA attributes for mobile menu
- Focus management for mobile menu
- Color contrast meets WCAG standards

## Responsive Behavior

- **Desktop (1024px+):** Full navigation with centered links
- **Tablet (768px - 1024px):** Full navigation with reduced spacing
- **Mobile (<768px):** Hamburger menu with slide-in panel

## Dependencies

- **Next.js:** For routing and navigation
- **React:** Core library
- **Tailwind CSS:** For styling
- **Lucide React:** For icons (Menu, X)
- **Google Fonts:** Outfit font family

## Performance Considerations

- Minimal state usage
- Efficient event listeners (scroll)
- Proper cleanup of event listeners and body styles
- Conditional rendering for mobile menu

## Future Enhancements

- User authentication integration
- Dropdown menus for complex navigation
- Localization support
- Dark mode toggle
- Search functionality
