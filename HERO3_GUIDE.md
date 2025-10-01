# Hero3 Component - 2025 Modern Design

## 🎨 Design Features

### Visual Elements

- **Dark Gradient Background**: Deep purple to navy gradient with dark mode
  support
- **Animated Gradient Orbs**: 3 large floating orbs with blur effects that
  respond to mouse movement
- **3D Floating Shapes**: 8 geometric squares with glassmorphism effects
- **Grid Pattern Overlay**: Subtle grid with radial fade for depth
- **Gradient Text**: Animated gradient on headline (purple → pink → blue)

### Interactive Elements

#### 1. **Search Bar**

- Expands and glows on focus with smooth transitions
- Voice search button (microphone icon)
- Standard search button
- Popular city quick-links below
- Glassmorphism background with gradient border glow

#### 2. **Primary CTA Button** ("Get Started Free")

- Gradient background that shifts on hover
- Outer glow effect on hover
- Scale animation (1.05x)
- Arrow icon with slide animation

#### 3. **Secondary CTA Button** ("How It Works")

- Glassmorphism style with border
- Play icon with background circle
- Hover state increases opacity and scale

#### 4. **Mouse Parallax Effect**

- Floating orbs move based on mouse position
- 3D shapes shift with cursor movement
- Creates depth and engagement

### Animations

1. **Typing Animation**: Subheadline types out character by character with
   blinking cursor
2. **Fade-in Animation**: Badge and content fade in on load
3. **Float Animations**: Orbs and shapes float at different speeds
   (slow/medium/fast)
4. **Gradient Animation**: Text gradients shift colors continuously
5. **Pulse Animation**: Trust indicator dots pulse
6. **Bounce Animation**: Scroll indicator bounces at bottom

## 🎯 Key Features

### Accessibility

- Dark mode ready (automatic color adjustments)
- Keyboard navigation support
- Focus states on interactive elements
- Semantic HTML structure

### Performance

- Client-side rendering for animations
- Optimized mouse tracking (no performance impact)
- Efficient animation loops with cleanup

### Responsive Design

- Mobile-first approach
- Headline: 60px (mobile) → 80px (desktop)
- Flexible button layout (stacks on mobile)
- Touch-friendly hit targets (44px minimum)

## 📱 Breakpoints

- **Mobile**: < 640px - Smaller text, stacked buttons
- **Tablet**: 640px - 1024px - Medium sizing
- **Desktop**: > 1024px - Full experience with all effects

## 🎨 Color Palette

```css
Purple: #A855F7 (purple-500)
Pink: #EC4899 (pink-500)
Blue: #3B82F6 (blue-500)
Cyan: #06B6D4 (cyan-500)
Dark Navy: #0F0C29
Deep Purple: #302B63
```

## 🚀 Usage

```tsx
import Hero3 from "@/components/sections/Hero3";

export default function Page() {
  return <Hero3 />;
}
```

## 🎬 Animations Added to Tailwind

In `tailwind.config.ts`:

```typescript
animation: {
  "gradient": "gradient 8s linear infinite",
}

keyframes: {
  gradient: {
    "0%, 100%": {
      "background-size": "200% 200%",
      "background-position": "left center",
    },
    "50%": {
      "background-size": "200% 200%",
      "background-position": "right center",
    },
  },
}
```

## 🎯 Trust Indicators

- 50,000+ Active Users
- 98% Match Success Rate
- Verified & Secure
- Real-time status with pulsing dots

## 💡 Pro Tips

1. **Performance**: The mouse parallax uses throttling through React state
   updates
2. **Dark Mode**: Component automatically adapts using Tailwind dark: variants
3. **Customization**: Easily adjust gradient colors in the className props
4. **Accessibility**: Includes scroll indicator for better UX

## 🔧 Customization

### Change Gradient Colors

Find the background gradient in the section:

```tsx
className = "... bg-gradient-to-br from-[#0F0C29] via-[#302B63] to-[#24243e]";
```

### Adjust Animation Speed

Modify the animation classes:

- `animate-float-slow` → 6s
- `animate-float-medium` → 5s
- `animate-float-fast` → 4s

### Typing Speed

Change the interval in useEffect:

```tsx
const typingInterval = setInterval(() => {
  // Change from 30ms to desired speed
}, 30);
```

---

**Built with:** Next.js 15 + React 19 + TypeScript + Tailwind CSS **Design
Trends:** Bold Minimalism, Glassmorphism, 3D Elements, Micro-interactions
