# Hero2 Component Documentation

## Overview

The Hero2 component is a visually stunning, feature-rich landing section
designed for a roommate matching app. It follows modern design principles with a
clean two-column layout, interactive search functionality, and engaging visual
elements.

## Design Specifications

### Layout Structure

- **Height:** Full viewport height (100vh minimum)
- **Grid Layout:** 60/40 split on desktop (3/5 for content, 2/5 for visuals)
- **Responsive Behavior:** Stacks vertically on mobile with content first
- **Background:** Subtle gradient mesh with floating abstract shapes

### Content Elements

1. **Hero Title:**

   - Text: "Find Your Perfect Roommate Match"
   - Font: Outfit, 700 weight, 56px (responsive)
   - Color: Deep Navy (#1E3A8A)

2. **Subtitle:**

   - Text: AI-powered matching description
   - Font: Inter, 400 weight, 20px
   - Color: Slate Gray (#64748B)
   - Max width: 2xl (42rem)

3. **Search Bar:**

   - Structure: Three-field integrated search with button
   - Fields: Location, Budget Range, Move-in Date
   - Height: 64px combined height
   - Visual: Icons for each field, white background with subtle shadow

4. **Trust Indicators:**

   - Layout: Three statistics in a row (vertical on mobile)
   - Design: Icon + Number + Label format
   - Data Points: 50,000+ Users, 98% Match Rate, Security

5. **Quick Action Buttons:**
   - Design: Ghost buttons with colorful icon accents
   - Options: "I have a room", "I need a room", "Find roommate"
   - Interactions: Subtle hover state with background change

### Visual Elements

1. **Main Illustration:**

   - Type: Gradient mesh background with floating cards
   - Colors: From Ocean Blue (#2563EB) to Sky Blue (#0EA5E9) to Mint (#34D399)
   - Position: Right side of screen (2/5 width on desktop)

2. **Floating Profile Cards:**

   - Design: Glassmorphic cards with user previews
   - Content: Name, age, occupation, location, compatibility score
   - Animation: Subtle floating motion at different speeds
   - Position: Strategically placed around the illustration area

3. **Decorative Elements:**
   - Floating dots with subtle ping animation
   - Gradient overlays with blur effects
   - Abstract shapes in the background

## Component Features

### Search Functionality

- Three interconnected input fields
- Clear visual hierarchy with labels and icons
- Form state management with React hooks
- Mobile-responsive layout

### Interactive Elements

- Micro-interactions on button hover
- Floating animations for profile cards
- Visual feedback on form interactions
- Smooth transitions between states

### Visual Design

- Glassmorphism effects for cards
- Gradient backgrounds with mesh patterns
- Soft shadows for depth
- Custom animations for visual interest

## Accessibility Considerations

- Proper input labeling
- Sufficient color contrast
- Keyboard navigation support
- Semantic HTML structure

## Responsive Behavior

- **Desktop (1024px+):** Full two-column layout
- **Tablet (768px - 1024px):** Maintained two-column with reduced spacing
- **Mobile (<768px):** Stacked layout with content first, full-width search

## Usage

```tsx
// In your page component
import Hero2 from "@/components/Hero2";

export default function LandingPage() {
  return (
    <main>
      <Hero2 />
      {/* Other components */}
    </main>
  );
}
```

## Customization Options

### Changing Profile Data

The component uses a sample data array that can be modified:

```tsx
const profileData: ProfilePreviewCard[] = [
  {
    name: "Alexandra",
    age: 26,
    occupation: "Designer",
    image: "/assets/profile-1.jpg",
    compatibilityScore: 98,
    location: "Downtown",
  },
  // Add or modify profiles
];
```

### Modifying Search Fields

The search functionality can be customized by:

1. Updating the input fields and their labels
2. Adding new fields or removing existing ones
3. Customizing the placeholder text
4. Changing the icons used for each field

## Dependencies

- **React:** Core library for component functionality
- **Tailwind CSS:** For styling and responsive design
- **Lucide React:** Icon library for UI elements

## Animation Details

The component uses several custom animations:

1. **Floating Cards:**

   - Three different speeds (4s, 5s, 6s)
   - Gentle vertical movement
   - Infinite loop with ease-in-out timing

2. **Ping Elements:**
   - Subtle scale and opacity changes
   - Different timing for visual variety
   - Creates a dynamic, living background

## Performance Considerations

- Optimized render cycles with proper state management
- CSS animations instead of JavaScript for better performance
- Responsive image handling for different device sizes
- Efficient use of Tailwind utilities to minimize CSS bundle
