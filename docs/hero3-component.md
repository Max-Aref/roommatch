# Hero3 Component Documentation

## Overview
Hero3 is a modern, visually stunning hero section built with cutting-edge 2025 design trends. It features bold minimalism, interactive 3D elements, gradient animations, and micro-interactions.

## Features

### 🎨 Design Trends (2025)

1. **Bold Minimalism**
   - Clean, centered layout with generous white space
   - Striking oversized typography (60-80px on desktop)
   - Focus on essential elements only

2. **Micro-interactions**
   - Button hover animations with scale (1.05x) & glow effects
   - Search bar expansion and glow on focus
   - Smooth transitions (300ms duration)

3. **Interactive 3D Elements**
   - 8 floating geometric shapes (squares, circles, rounded rectangles)
   - Glassmorphism effects with backdrop blur
   - Mouse parallax effect - shapes move with cursor position

4. **Dark Mode Ready**
   - Deep gradient background: Navy (#1E1B4B) → Purple (#312E81) → Blue (#1E3A8A)
   - High contrast white text
   - Works in both light and dark environments

5. **Gradient Backgrounds**
   - Animated gradient text (purple → pink → blue)
   - 3 gradient orbs with blur effects
   - 8-second animation loop

## Component Structure

### Header Section
- **Headline**: "Find Your Perfect Roommate Match"
  - Font size: 60-80px (responsive)
  - Gradient: Purple (#A78BFA) → Pink (#F472B6) → Blue (#60A5FA)
  - Animated background position (8s loop)

- **Subheadline**: AI-powered matching description
  - Typing animation effect (3.5s duration)
  - Blinking cursor with pulse animation
  - Font size: 20-24px (responsive)

### Search Section
- **Glassmorphic Search Bar**
  - White background with semi-transparent wrapper
  - Backdrop blur effect
  - 2px border (white/20% default, purple on focus)
  - Shadow glow on focus (purple tint)

- **Search Components**:
  - Location icon (MapPin)
  - Text input with placeholder
  - Voice search button (Mic icon)
  - Search button with gradient (purple → pink)

- **Popular Cities**: 4 quick-access buttons
  - New York, Los Angeles, Chicago, Austin
  - Glassmorphic style with hover effects

### CTA Buttons
1. **Primary (Get Started Free)**
   - Coral gradient (#F97316 → #FB923C)
   - Arrow icon with slide animation on hover
   - Glow effect on hover

2. **Secondary (How It Works)**
   - White outlined border
   - Hover: fills with white, text turns purple

### Trust Badges
- **50K+ Active Users**
  - Purple to pink gradient circle
  - Users icon
  - Pulsing green indicator dot

- **98% Success Rate**
  - Blue to purple gradient circle
  - Shield icon
  - Pulsing green indicator dot

### Scroll Indicator
- Mouse icon with animated dot
- "Scroll to explore" text
- Slow bounce animation (3s duration)

## Background Effects

### Gradient Orbs (3 layers)
1. **Top-left**: Purple (opacity 30%, slow float)
2. **Bottom-right**: Blue (opacity 30%, medium float)
3. **Center-right**: Pink (opacity 30%, fast float)

### Floating Shapes (8 shapes)
All with glassmorphism effect (white/10% background, white/20% border):
1. Top-left: 16px rounded square
2. Top-right: 20px circle
3. Middle-left: 12px rounded square
4. Bottom-right: 24px rounded square
5. Bottom-left: 14px circle
6. Top-center: 18px rounded square
7. Middle-right: 16px rounded square
8. Bottom-center: 10px circle

## Animations

### Keyframes (Tailwind Config)
```typescript
gradient: {
  "0%, 100%": { backgroundPosition: "0% 50%" },
  "50%": { backgroundPosition: "100% 50%" },
}

typing: {
  "0%": { width: "0" },
  "100%": { width: "100%" },
}

blink: {
  "0%, 100%": { borderColor: "transparent" },
  "50%": { borderColor: "currentColor" },
}
```

### Animation Classes
- `animate-gradient`: 8s linear infinite
- `animate-typing`: 3.5s steps(60, end)
- `animate-float-slow`: 6s ease-in-out infinite
- `animate-float-medium`: 5s ease-in-out infinite
- `animate-float-fast`: 4s ease-in-out infinite
- `animate-bounce-slow`: 3s infinite
- `animate-pulse-slow`: 3s cubic-bezier infinite

## Interactive Features

### Mouse Parallax
- Tracks mouse position relative to hero section
- Shapes move at different speeds (0.5x to 1.5x)
- Creates depth and 3D effect
- Gradient orbs also respond to mouse movement

### Typing Animation
- Simulates typing character by character
- 50ms delay between characters
- Runs once on component mount
- Blinking cursor effect continues indefinitely

### Search Bar Focus
- `isFocused` state tracks focus
- Border changes to purple (#A78BFA)
- Adds purple glow shadow: `shadow-[0_0_30px_rgba(168,85,247,0.4)]`
- Smooth 300ms transition

## Usage

```tsx
import Hero3 from "@/components/Hero3";

export default function Page() {
  return (
    <main>
      <Hero3 />
    </main>
  );
}
```

## Customization

### Change Colors
```tsx
// Background gradient
className="bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#1E3A8A]"

// Text gradient
className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400"

// Primary CTA
className="bg-gradient-to-r from-[#F97316] to-[#FB923C]"
```

### Modify Popular Cities
```tsx
const popularCities = ["San Francisco", "Seattle", "Boston", "Miami"];
```

### Adjust Animation Speeds
```tsx
// In component
className="animate-float-slow" // Change to animate-float-fast

// In Tailwind config
animation: {
  "float-slow": "float 6s ease-in-out infinite", // Change duration
}
```

## Responsive Behavior

### Desktop (lg: 1024px+)
- Full-size 80px headline
- Side-by-side CTA buttons
- All floating shapes visible

### Tablet (md: 768px)
- 60px headline
- Side-by-side CTAs maintained
- Reduced shape sizes

### Mobile (< 768px)
- 40px headline
- Stacked CTA buttons
- Fewer/smaller floating shapes
- Popular cities wrap to multiple rows

## Performance Considerations

- Uses CSS transforms for animations (GPU-accelerated)
- Mouse parallax uses `useEffect` with cleanup
- Typing animation clears interval on unmount
- Minimal re-renders with controlled state
- Glassmorphism uses `backdrop-blur` (modern browsers)

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (iOS 9+)
- Backdrop-blur may need fallback for older browsers

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy (h1)
- ARIA label on voice search button
- Keyboard accessible (all buttons/inputs)
- Sufficient color contrast (WCAG AA compliant)
- Focus states clearly visible

## Dependencies

- React (hooks: useState, useEffect, useRef)
- lucide-react (icons: Search, Mic, MapPin, Users, Shield, ArrowRight)
- Tailwind CSS (styling and animations)

## Screenshots

### Full Hero3 Section
![Hero3 Full View](https://github.com/user-attachments/assets/4cff9a5f-9a14-4d49-9df2-8adac9f0ebec)

### Search Bar Focus State
![Hero3 Search Focused](https://github.com/user-attachments/assets/e38b76fc-a9dd-440e-9242-402e37da50c4)

### Bottom Section with Trust Badges
![Hero3 Bottom View](https://github.com/user-attachments/assets/e9a149f5-d741-40cb-a064-7361566dfe4d)

## Design Philosophy

Hero3 embraces modern web design trends while maintaining usability:
- **Bold typography** grabs attention immediately
- **Gradient animations** create visual interest without distraction
- **Glassmorphism** adds depth and premium feel
- **Micro-interactions** provide delightful user feedback
- **Dark background** makes colors pop and content stand out
- **3D floating shapes** add dimension and playfulness
- **Minimalism** ensures focus stays on the core message

The result is a hero section that feels both cutting-edge and trustworthy, perfect for a modern roommate matching platform.
