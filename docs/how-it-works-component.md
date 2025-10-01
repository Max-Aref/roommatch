# How It Works Component Documentation

## Overview

The "How It Works" component is an elegant, visually engaging section that
explains the RoomMatch platform's three-step process to users. It features a
responsive design with animated cards, connecting lines with moving dots, and a
clean, modern aesthetic.

## Design Specifications

### Section Layout

- **Structure:** Three-card horizontal layout on desktop, stacked on mobile
- **Spacing:** Equal spacing between cards with connecting lines
- **Container:** Max-width 1200px, centered with responsive padding
- **Background:** Subtle gradient from #FAFAFA to white

### Section Header

- **Title:** "Find Your Match in 3 Simple Steps"
  - Font: Outfit, 700 weight, 40px
  - Color: Deep Navy (#1E3A8A)
- **Subtitle:** "Our AI-powered platform makes roommate matching effortless"
  - Font: Inter, 18px
  - Color: Slate Gray (#64748B)
- **Alignment:** Center aligned with 64px margin below

### Card Design

- **Dimensions:** 380px width (flexible on mobile)
- **Background:** White with soft shadow (0 4px 20px rgba(0,0,0,0.08))
- **Border Radius:** 24px
- **Padding:** 40px
- **Hover Effect:** Scale(1.03) with increased shadow depth
- **Animation:** Fade-in and slide-up on scroll

### Card Content Structure

Each card includes:

1. **Step Number:** Large gradient text (01, 02, 03)
2. **Icon:** Custom icon for each step with subtle pulse animation
3. **Title:** 24px, 600 weight, Charcoal (#1F2937)
4. **Description:** Concise text explaining the step
5. **Bullet Points:** Check-marked list of features

### Connecting Elements

- **Lines:** Dashed horizontal lines connecting each card
- **Animation:** Dots traveling along the lines with a continuous loop
- **Responsiveness:** Lines hide on mobile layout

## Card Details

### Step 1: Create Your Profile

- **Icon:** User icon (lucide-react)
- **Description:** "Tell us about yourself, preferences, and what you're looking
  for"
- **Bullets:**
  - Lifestyle preferences & habits
  - Budget range & move-in date
  - Location preferences & commute
  - Upload verified ID for safety

### Step 2: Get Matched

- **Icon:** Sparkles icon (AI symbol)
- **Description:** "Our algorithm finds compatible roommates based on 20+
  factors"
- **Bullets:**
  - Lifestyle compatibility score
  - Budget & location alignment
  - Personality trait matching
  - Communication style analysis

### Step 3: Connect & Move In

- **Icon:** Home with heart accent
- **Description:** "Chat securely, schedule viewings, and sign your lease
  digitally"
- **Bullets:**
  - In-app secure messaging
  - Verified background checks
  - Digital lease signing
  - Move-in coordination tools

## Technical Implementation

### Animations

1. **Card Entrance:** Staggered fade-in animation as cards enter viewport
2. **Connecting Dots:** Continuous animation of dots moving along connector
   lines
3. **Icon Pulse:** Subtle pulsing effect on each step's icon
4. **Hover Interactions:** Smooth scale and shadow changes on hover

### Responsive Behavior

- **Desktop (1024px+):** Three cards in a row with connector lines
- **Tablet (768px - 1024px):** Cards may wrap to two rows depending on screen
  width
- **Mobile (<768px):** Stacked cards with no connector lines

### Accessibility

- **Semantic HTML:** Proper heading hierarchy and semantic structure
- **Animation Considerations:** Subtle animations that don't distract
- **Color Contrast:** Text meets WCAG AA standards for readability
- **Focus States:** Proper focus indicators for interactive elements

### Performance

- **Intersection Observer:** Used to trigger animations only when elements are
  in viewport
- **CSS Animations:** Hardware-accelerated CSS transitions for smooth
  performance
- **Image Optimization:** SVG icons for crisp rendering at all sizes

## Code Structure

### Key Components

1. **HowItWorks:** Main container component
2. **StepCard:** Reusable card component for each step
3. **ConnectorLine:** Visual connector between cards
4. **useInViewport:** Custom hook for scroll-based animations

### Props Interface

```typescript
interface StepCardProps {
  number: string; // Step number (01, 02, 03)
  title: string; // Card title
  description: string; // Main description
  icon: React.ReactNode; // Custom icon element
  bullets?: string[]; // Optional bullet points
  delay: number; // Animation delay in ms
}
```

## Usage

```tsx
// Import the component
import HowItWorks from "@/components/HowItWorks";

// Use within a page
export default function Page() {
  return (
    <main>
      {/* Other components */}
      <HowItWorks />
      {/* Other components */}
    </main>
  );
}
```

## Customization Options

### Adding or Modifying Steps

The component can be extended to include more steps by adding additional
`StepCard` components and `ConnectorLine` elements:

```tsx
<StepCard
  number='04'
  title='Custom Step'
  description='Description text'
  icon={<CustomIcon size={48} />}
  bullets={["Feature 1", "Feature 2"]}
  delay={1000}
/>
```

### Styling Variations

- Colors can be customized through Tailwind classes
- Animation timings can be adjusted through the `delay` prop
- Icon size and style can be modified
- Bullet points can be omitted if not needed

## Dependencies

- **React:** Core library
- **Lucide React:** For step icons
- **Tailwind CSS:** For styling
- **Intersection Observer API:** For scroll-based animations
