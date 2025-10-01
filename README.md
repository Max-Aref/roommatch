# Roommate Matching App - Complete Design System

## 🎯 User Personas

- **Homeowners**: Looking to rent spare rooms for income
- **Renters**: Seeking affordable housing with compatible roommates
- **Room Seekers**: Students/professionals searching for available rooms

---

## 🎨 Color Palette

### Primary Colors

- **Ocean Blue** `#2563EB` - Trust, reliability, primary actions
- **Sky Blue** `#0EA5E9` - Secondary actions, links, highlights
- **Deep Navy** `#1E3A8A` - Headers, premium features

### Secondary Colors

- **Coral Accent** `#F97316` - CTAs, important notifications, matches
- **Warm Peach** `#FDBA74` - Success states, highlights
- **Soft Mint** `#34D399` - Verification badges, success messages

### Neutral Colors

- **Charcoal** `#1F2937` - Primary text
- **Slate Gray** `#64748B` - Secondary text
- **Cool Gray** `#F1F5F9` - Backgrounds, cards
- **Off White** `#FAFAFA` - Page backgrounds
- **Pure White** `#FFFFFF` - Card backgrounds, input fields

### Status Colors

- **Success Green** `#10B981`
- **Warning Amber** `#F59E0B`
- **Error Red** `#EF4444`
- **Info Blue** `#3B82F6`

---

## ✍️ Typography

### Font Families

**Primary Font**: Inter (Sans-serif)

- Clean, modern, highly legible
- Excellent for UI elements and body text
- Weights: 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)

**Secondary Font**: Outfit (Sans-serif)

- Friendly, approachable for headers
- Perfect for hero sections and feature titles
- Weights: 500 (Medium), 600 (Semi-Bold), 700 (Bold)

**Accent Font**: DM Sans (Sans-serif)

- For labels, tags, and small UI elements
- Weights: 400 (Regular), 500 (Medium)

### Type Scale

- **Hero Title**: 56px / 700 / Outfit
- **H1**: 40px / 700 / Outfit
- **H2**: 32px / 600 / Outfit
- **H3**: 24px / 600 / Inter
- **H4**: 20px / 600 / Inter
- **Body Large**: 18px / 400 / Inter
- **Body**: 16px / 400 / Inter
- **Body Small**: 14px / 400 / Inter
- **Caption**: 12px / 500 / DM Sans
- **Button Text**: 16px / 600 / Inter

---

## 🏗️ Design Patterns & Components

### 1. **Profile Cards**

**Style**: Modern card with soft shadows and rounded corners

- Border radius: 16px
- Padding: 24px
- Shadow: `0 4px 6px -1px rgb(0 0 0 / 0.1)`
- Hover effect: Subtle lift with increased shadow
- Include: Profile photo, name, age, occupation, compatibility score badge
- Quick stats: Icons showing smoking, pets, cleanliness preferences

### 2. **Matching Algorithm Display**

**Pattern**: Percentage-based compatibility with visual indicator

- Circular progress ring showing match %
- Color-coded: 80-100% (Green), 60-79% (Amber), <60% (Gray)
- Breakdown categories: Lifestyle, Schedule, Cleanliness, Budget
- Interactive tooltip on hover showing detailed breakdown

### 3. **Filter System**

**Design**: Sidebar filters with instant search

- Collapsible accordion sections
- Multi-select checkboxes with custom styling
- Range sliders for budget/age
- Toggle switches for binary preferences
- Applied filters shown as dismissible chips

### 4. **Listing Cards (Rooms/Properties)**

**Layout**: Grid-based responsive cards

- Featured image carousel (3-5 images)
- Key details: Price, location, available date
- Quick icons: Furnished, utilities included, parking
- "Save to favorites" heart icon (top right)
- Distance indicator from user's location

### 5. **Chat/Messaging Interface**

**Pattern**: Real-time messaging with safety features

- Bubble-style messages
- Typing indicators with animated dots
- Read receipts (optional)
- Photo sharing capability
- Report/block options easily accessible
- Suggested conversation starters for matches

### 6. **Verification Badges**

**Style**: Trust indicators throughout the app

- ID Verified: Blue shield icon
- Background Checked: Green checkmark in circle
- Social Media Connected: Platform-specific mini icons
- Reviews/References: Star rating with count
- Responsive: 5-star system with verified tenant history

### 7. **Onboarding Flow**

**Pattern**: Multi-step progressive form

- Progress bar at top showing completion
- Step indicators (numbered circles)
- Smooth transitions between steps
- Skippable optional sections
- Preview of profile at the end
- Steps: Basic Info → Lifestyle Preferences → Budget/Location → Photos →
  Verification

### 8. **Dashboard Layout**

**Structure**: Split-view dashboard for different user types

**For Homeowners:**

- Active listings management
- Applicant queue with match scores
- Monthly revenue tracker
- Calendar view for availability
- Quick actions: Create listing, message tenants

**For Renters/Seekers:**

- Recommended matches feed
- Saved properties/roommates
- Active applications status
- Match notifications center
- Search bar with voice input option

### 9. **Navigation**

**Style**: Clean, icon-first navigation

- Bottom navigation for mobile (5 items max)
- Side navigation for desktop with expandable menu
- Icons from Lucide or Heroicons
- Active state: Colored icon + text
- Sections: Home, Search, Messages, Profile, Settings

### 10. **Call-to-Action Buttons**

**Primary Button:**

- Background: Ocean Blue `#2563EB`
- Padding: 12px 32px
- Border radius: 10px
- Hover: Darker shade with slight scale
- Font weight: 600

**Secondary Button:**

- Border: 2px solid Ocean Blue
- Background: Transparent
- Color: Ocean Blue
- Same padding and radius as primary

**Danger Button:**

- Background: Error Red `#EF4444`
- Used for destructive actions

### 11. **Form Inputs**

**Style**: Clean, accessible form fields

- Border radius: 8px
- Border: 1px solid `#E5E7EB`
- Focus state: 2px solid Ocean Blue with subtle shadow
- Padding: 12px 16px
- Placeholder color: `#9CA3AF`
- Label above input (500 weight, 14px)
- Helper text below in gray
- Error state: Red border with error icon

### 12. **Search Bar**

**Design**: Prominent, always accessible

- Large search input with icon
- Auto-complete dropdown
- Recent searches shown
- Filters quick-access button
- Voice search option
- Rounded corners (12px)

### 13. **Image Galleries**

**Pattern**: Interactive photo viewers

- Lightbox on click
- Swipeable on mobile
- Thumbnail navigation
- Zoom capability
- Full-screen mode
- Image counter (e.g., "3 / 8")

### 14. **Notification System**

**Style**: Toast notifications + in-app center

- Slide in from top-right
- Auto-dismiss after 5 seconds
- Types: Success, Error, Warning, Info
- Icon + message + optional action button
- Notification bell with badge count

### 15. **Review/Rating Component**

**Design**: Star rating with detailed breakdown

- 5-star display with half-star capability
- Written reviews with character limit
- Reviewer verification status shown
- Helpful/Report buttons
- Filter by rating
- Recent reviews prioritized

---

## 📐 Spacing System

- **4px Base Unit**
- Scale: 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96px
- Consistent padding and margins throughout

---

## 🎭 Design Principles

### 1. **Trust & Safety First**

- Prominent verification badges
- Transparent user profiles
- Easy-to-access reporting features
- Privacy controls clearly displayed

### 2. **Mobile-First Responsive**

- Touch-friendly tap targets (minimum 44x44px)
- Swipe gestures for common actions
- Optimized for one-handed use
- Progressive web app capabilities

### 3. **Accessibility**

- WCAG 2.1 AA compliant
- High contrast ratios (4.5:1 minimum)
- Keyboard navigation support
- Screen reader friendly
- Alt text for all images

### 4. **Micro-interactions**

- Smooth transitions (200-300ms)
- Hover states on all interactive elements
- Loading skeletons instead of spinners
- Success animations for key actions
- Haptic feedback on mobile

### 5. **Data Visualization**

- Clear match percentages
- Budget comparison charts
- Location maps (Google Maps/Mapbox)
- Availability calendars
- Response time indicators

---

## 🌐 Key App Features to Include

### Matching Features

1. AI-powered compatibility algorithm
2. Lifestyle questionnaire (sleep schedule, cleanliness, noise level, guests
   policy)
3. Budget alignment filters
4. Location-based search with radius
5. Move-in date flexibility matching
6. Pet compatibility
7. Smoking/drinking preferences

### Safety Features

1. ID verification with government documents
2. Social media account linking
3. Background check integration
4. Video verification calls
5. Reference checking system
6. Secure in-app messaging (no phone numbers shared initially)
7. Block/report functionality

### Listing Features

1. Multiple photo uploads (8-15 photos)
2. Virtual tour capability
3. 360° room views
4. Detailed amenities checklist
5. House rules section
6. Lease terms clarity
7. Utilities breakdown
8. Neighborhood information

### Communication Features

1. In-app video calls
2. Scheduled viewing appointments
3. Group chats for multiple roommate scenarios
4. Automated response templates
5. Translation for international users
6. Read receipts
7. Conversation archiving

### Application Process

1. One-click apply to listings
2. Application tracking dashboard
3. Document uploads (pay stubs, references)
4. Digital lease signing
5. Payment processing (deposits, first month)
6. Move-in checklist

---

## 🎨 Visual Style Guidelines

### Iconography

- Use: Lucide React icons or Heroicons
- Size: 20px (small), 24px (medium), 32px (large)
- Stroke width: 2px
- Style: Outlined for inactive, filled for active states

### Illustrations

- Style: Modern, flat, friendly 2.5D
- Color palette: Use brand colors with gradients
- Use cases: Empty states, onboarding, success screens
- Tone: Welcoming, diverse, optimistic

### Photography

- High-quality room/property photos
- Natural lighting preferred
- Diverse representation in marketing
- Authentic, not overly staged
- Profile photos: Square crop, 300x300px minimum

### Animations

- Page transitions: Fade + slight slide
- Card interactions: Scale on hover (1.02)
- Loading states: Skeleton screens
- Success actions: Confetti or checkmark animation
- Match notifications: Gentle pulse effect

---

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

---

## 🎯 Competitive Feature Analysis

Based on market research, these apps lead the space:

1. **Roomster** - 10M+ downloads, extensive filtering
2. **Roomi** - Smart matching algorithm, background checks
3. **Diggz** - 20+ filters, detailed profiles, verification
4. **SpareRoom** - Compatibility quiz, large user base
5. **BeRoomie** - Swipe-to-match interface (Tinder-like)
6. **iROOMit** - AI-powered matching, safety focus
7. **Bunky** - Trust-focused, student-oriented
8. **RoomSync** - Self-selection software, ADA compliant

### Differentiating Features to Consider:

- Virtual roommate "trial" video calls
- Credit building for on-time rent payments
- Community ratings beyond just reviews
- Smart lease agreement templates
- Move-in cost calculator
- Roommate contract generator
- Dispute resolution support
- Integration with moving services
- Furniture marketplace for roommates

---

## 🎨 Sample Component Compositions

### Homepage Hero Section

- Large hero title: "Find Your Perfect Roommate Match"
- Subtitle explaining the matching algorithm
- Prominent search bar with location input
- Three quick-start buttons: "I have a room", "I need a room", "Find a roommate"
- Background: Gradient from Ocean Blue to Sky Blue with abstract shapes
- Trust indicators: "10,000+ verified users", "98% satisfaction rate"

### Match Card Preview

```
┌─────────────────────────────────────┐
│  [Photo]    Sarah, 24               │
│             Graphic Designer    89% │
│                                     │
│  📍 Downtown • $800/mo              │
│  ☀️ Morning person 🐕 Pet friendly │
│  🎵 Music lover 🧘‍♀️ Clean         │
│                                     │
│  [View Profile]  [Message]          │
└─────────────────────────────────────┘
```

### Filter Panel

- Location (map picker + autocomplete)
- Budget Range (dual slider)
- Move-in Date (calendar)
- Lifestyle (checkboxes with icons)
- Gender Preference
- Age Range
- Verified Users Only (toggle)
- Pet Friendly (toggle)
- Furnished/Unfurnished

---

This design system provides a comprehensive foundation for building a modern,
trustworthy, and user-friendly roommate matching platform that serves
homeowners, renters, and room seekers equally well.
