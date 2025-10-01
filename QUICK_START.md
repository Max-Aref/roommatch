# 🚀 Quick Start Guide - RoomMatch Modern Design

## Running the Project

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit: http://localhost:3000

---

## 📂 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (dark theme)
│   ├── page.tsx            # Main page (all sections)
│   └── globals.css         # Global styles (dark scrollbar, selection)
│
├── components/
│   ├── sections/           # ⭐ NEW Modern Components
│   │   ├── NavigationModern.tsx
│   │   ├── Hero3.tsx
│   │   ├── FeaturesInteractive.tsx
│   │   ├── HowItWorksTimeline.tsx
│   │   ├── CompatibilityAI.tsx
│   │   ├── TestimonialsModern.tsx
│   │   ├── PricingModern.tsx
│   │   ├── SafetyModern.tsx
│   │   ├── CTAModern.tsx
│   │   └── FooterModern.tsx
│   │
│   └── FAQSection.tsx      # Existing component (kept)
│
└── data/
    └── data.ts             # App data
```

---

## 🎨 Hero3 Design DNA

### Colors

```typescript
// Dark Backgrounds
bg-gray-900          // #111827
bg-purple-900/20     // Purple tint

// Gradients
from-[#0F0C29] via-[#302B63] to-[#24243e]  // Hero background
from-purple-500 to-pink-500                 // Primary accent
from-blue-500 to-cyan-500                   // Cool accent
from-green-500 to-emerald-500               // Success
```

### Effects

```tsx
// Glassmorphism
className="backdrop-blur-xl bg-gray-900/80 border border-white/10"

// Neon Glow
<div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 blur-lg opacity-50" />

// Floating Orb
<div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-slow" />
```

### Animations

```typescript
animate-float-slow      // 6s float
animate-float-medium    // 5s float
animate-float-fast      // 4s float
animate-pulse-slow      // 3s pulse
animate-ping-slow       // 3s ping
animate-fade-in         // 0.6s fade in
```

---

## 🔧 Common Patterns

### 1. Glassmorphic Card with Glow

```tsx
<div className='relative group'>
  {/* Hover Glow */}
  <div className='absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 blur-lg opacity-0 group-hover:opacity-50 transition-opacity' />

  {/* Card */}
  <div className='relative backdrop-blur-xl bg-gray-900/80 border border-white/10 rounded-2xl p-6'>
    <h3 className='text-xl font-bold'>Card Title</h3>
    <p className='text-gray-300'>Card content</p>
  </div>
</div>
```

### 2. Neon Gradient Button

```tsx
<button className='relative group'>
  {/* Glow */}
  <div className='absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-50 group-hover:opacity-100 transition-opacity' />

  {/* Button */}
  <div className='relative px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-white'>
    Click Me
  </div>
</button>
```

### 3. Gradient Text

```tsx
<h1 className='text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent'>
  Gradient Headline
</h1>
```

### 4. Floating Background Orbs

```tsx
<div className='absolute inset-0 pointer-events-none overflow-hidden'>
  <div className='absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-slow' />
  <div className='absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float-medium' />
  <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl animate-float-fast' />
</div>
```

### 5. Tech Grid Pattern

```tsx
<div className='absolute inset-0 bg-[linear-gradient(to_right,#8B5CF620_1px,transparent_1px),linear-gradient(to_bottom,#8B5CF620_1px,transparent_1px)] bg-[size:4rem_4rem]' />
```

---

## 🎬 Animation Utilities

### Scroll-Triggered Animation

```tsx
import { useState, useEffect, useRef } from "react";

const [isVisible, setIsVisible] = useState(false);
const sectionRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    },
    { threshold: 0.1 }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => observer.disconnect();
}, []);

// Use in JSX
<div
  ref={sectionRef}
  className={`transition-all duration-700 ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`}
>
  Content
</div>;
```

### Mouse Parallax

```tsx
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

useEffect(() => {
  const handleMouseMove = (e: MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    setMousePosition({ x, y });
  };

  window.addEventListener("mousemove", handleMouseMove);
  return () => window.removeEventListener("mousemove", handleMouseMove);
}, []);

// Use in JSX
<div
  style={{
    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
  }}
>
  Parallax Element
</div>;
```

---

## 🎨 Icon Usage (Lucide React)

```tsx
import { Heart, Shield, Sparkles, Users, Zap } from "lucide-react";

// Simple icon
<Heart className="w-5 h-5 text-purple-400" />

// Icon with gradient container
<div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
  <Heart className="w-6 h-6 text-white" />
</div>

// Icon with glow
<div className="relative">
  <Shield className="w-8 h-8 text-purple-400" />
  <div className="absolute -inset-2 bg-purple-500/50 rounded-full blur-lg" />
</div>
```

---

## 📱 Responsive Design

### Breakpoint Strategy

```tsx
// Mobile First
className = "text-lg md:text-xl lg:text-2xl";

// Grid Layouts
className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";

// Spacing
className = "px-4 sm:px-6 lg:px-8";
className = "py-12 md:py-16 lg:py-20";

// Hide/Show
className = "hidden md:block"; // Show on desktop only
className = "md:hidden"; // Show on mobile only
```

---

## ✅ Component Checklist

When creating new Hero3-style components:

- [ ] Dark background (gray-900 or gradient)
- [ ] Glassmorphic cards (backdrop-blur-xl)
- [ ] Neon gradient borders (purple → pink)
- [ ] Hover glow effects
- [ ] Floating orbs or particles
- [ ] Tech grid pattern (optional)
- [ ] Scroll-triggered animations
- [ ] Responsive (mobile, tablet, desktop)
- [ ] Accessible (ARIA labels, keyboard nav)
- [ ] Performance optimized

---

## 🐛 Troubleshooting

### Issue: Animations not working

**Fix**: Check if `prefers-reduced-motion` is enabled in system settings

### Issue: Blur effects not visible

**Fix**: Ensure browser supports `backdrop-filter` CSS property

### Issue: Canvas not rendering

**Fix**: Check if `useRef` is properly attached to canvas element

### Issue: TypeScript errors with Lucide icons

**Fix**: Import icons individually: `import { Heart } from "lucide-react"`

### Issue: Gradient text not showing

**Fix**: Ensure you have both `bg-clip-text` and `text-transparent`

---

## 🎯 Key Files to Modify

### Adding a new section:

1. Create component in `src/components/sections/YourSection.tsx`
2. Import in `src/app/page.tsx`
3. Add to page structure with spacing divs

### Changing colors:

1. Update gradient values in component files
2. Update `tailwind.config.ts` for theme colors
3. Update `globals.css` for scrollbar/selection

### Modifying animations:

1. Edit `tailwind.config.ts` → `extend.animation`
2. Add keyframes in `tailwind.config.ts` → `extend.keyframes`

---

## 📊 Performance Tips

1. **Canvas**: Use `requestAnimationFrame` for smooth animations
2. **Images**: Always use Next.js `<Image>` component
3. **Fonts**: Preload with `display: swap`
4. **Heavy Effects**: Disable on mobile if needed
5. **Lazy Loading**: Use Intersection Observer

---

## 🎨 Design System Tokens

```typescript
// Spacing
const spacing = {
  section: "py-20 md:py-32",
  container: "px-4 sm:px-6 lg:px-8",
  gap: "gap-6 md:gap-8 lg:gap-12",
};

// Colors
const colors = {
  background: "bg-gray-900",
  card: "bg-gray-900/80",
  border: "border-white/10",
  text: "text-gray-300",
  heading: "text-white",
};

// Effects
const effects = {
  glass: "backdrop-blur-xl bg-gray-900/80 border border-white/10",
  glow: "absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 blur-lg opacity-50",
  gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
};
```

---

## 🚀 Deployment

```bash
# Build
npm run build

# Test production build locally
npm start

# Deploy to Vercel (recommended)
vercel deploy

# Or other platforms
# - Netlify
# - AWS Amplify
# - DigitalOcean App Platform
```

---

## 📚 Resources

- **Tailwind CSS**: https://tailwindcss.com/docs
- **Next.js**: https://nextjs.org/docs
- **Lucide Icons**: https://lucide.dev/icons
- **TypeScript**: https://www.typescriptlang.org/docs

---

## ✨ Credits

Design inspired by:

- Cyberpunk aesthetics
- Apple's glassmorphism
- Modern SaaS landing pages
- 2025 design trends (dark mode, neon accents, 3D depth)

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
