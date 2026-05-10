---
name: Travel Services PNG
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#42474d'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#73777e'
  outline-variant: '#c3c7ce'
  surface-tint: '#406182'
  primary: '#001629'
  on-primary: '#ffffff'
  primary-container: '#002b49'
  on-primary-container: '#7293b6'
  inverse-primary: '#a8caef'
  secondary: '#006876'
  on-secondary: '#ffffff'
  secondary-container: '#5ee6fe'
  on-secondary-container: '#006573'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cca830'
  on-tertiary-container: '#4f3e00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cfe5ff'
  primary-fixed-dim: '#a8caef'
  on-primary-fixed: '#001d34'
  on-primary-fixed-variant: '#274969'
  secondary-fixed: '#a0efff'
  secondary-fixed-dim: '#4cd8ef'
  on-secondary-fixed: '#001f25'
  on-secondary-fixed-variant: '#004e59'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

The brand identity centers on "Tropical Luxury"—a blend of professional reliability and the aspirational beauty of Papua New Guinea’s landscapes. The design system adopts a **Corporate Modern** style with high-end editorial influences. It moves away from the dated, high-density layouts of the past toward a breathable, airy experience that evokes the feeling of a premium concierge service.

The target audience ranges from corporate travelers requiring efficiency to high-end leisure travelers seeking exclusivity. To appeal to both, the UI balances technical precision (strict grids, clear data) with emotive visual storytelling (large imagery, vibrant accent colors).

## Colors

The palette is anchored by **Deep Ocean Blue**, representing the depth of the Pacific and the company's long-standing reliability. **Vibrant Turquoise** acts as the primary action color, drawing a direct line to the tropical waters of PNG and driving conversions through high visibility.

**Subtle Gold Accents** are reserved for premium indicators, loyalty status, and "exclusive" tags, adding a layer of luxury without feeling ostentatious. The neutral scale uses cool-toned grays to maintain a crisp, clean aesthetic that feels more modern than traditional warm-toned travel sites.

- **Primary (Ocean):** Used for navigation, headings, and primary brand surfaces.
- **Secondary (Turquoise):** Used for primary CTAs, active states, and highlights.
- **Tertiary (Gold):** Used for star ratings, premium badges, and subtle dividers in luxury contexts.
- **Surface:** A mix of pure white for content cards and very light gray for page backgrounds to create soft depth.

## Typography

The typography strategy uses a high-contrast pairing to differentiate between brand storytelling and functional travel data.

**Plus Jakarta Sans** is used for headlines. Its geometric yet friendly curves provide a modern, energetic feel that works exceptionally well in large display formats. 

**Inter** is utilized for all body copy, travel itineraries, and labels. It was chosen for its extreme legibility at small sizes, which is critical for complex travel details like flight times, pricing, and terms. 

For luxury sections, increase the letter spacing on `label-sm` to create an "airy" editorial feel. Headlines should use the Primary Ocean Blue, while body copy remains a high-contrast dark gray for maximum readability.

## Layout & Spacing

This design system adheres to a strict **8px grid system**. Layouts should prioritize generous whitespace to reinforce the premium brand positioning; "breathing room" is considered a luxury feature in this system.

- **Grid Model:** A 12-column fluid grid for desktop, transitioning to 8 columns for tablet and 4 columns for mobile.
- **Vertical Rhythm:** Spacing between sections should be significant (80px–120px) to allow each travel service or package to stand out as a distinct offering.
- **Alignment:** Use a fixed-width central container (1280px) for standard content, while hero sections and "Inspiration" galleries may break out to full-bleed to immerse the user in the destination.

## Elevation & Depth

To maintain a clean "Tropical Luxury" feel, the design system avoids heavy shadows in favor of **Tonal Layers** and **Ambient Depth**.

- **Surface Tiers:** Backgrounds use the neutral off-white, while interactive cards use pure white. This subtle contrast defines content areas without the need for harsh borders.
- **Shadows:** When used (primarily for hover states on travel cards), shadows should be extremely diffused: `0 12px 32px rgba(0, 43, 73, 0.08)`. The slight blue tint in the shadow connects it back to the primary brand color.
- **Glassmorphism:** Navigation bars and image overlays should use a subtle backdrop blur (12px) with 80% opacity white or 40% opacity Ocean Blue. This creates a sophisticated, layered look that keeps the focus on the beautiful destination imagery.

## Shapes

The shape language is defined by **Softened Precision**. While the brand is professional, sharp 90-degree corners feel too clinical for a travel agency.

- **Standard Elements:** Buttons, input fields, and small chips use a 0.5rem (8px) radius.
- **Large Components:** Travel package cards and hero imagery use a more pronounced 1rem (16px) radius to feel welcoming.
- **Visual Continuity:** All image containers should match the radius of their parent card to maintain a cohesive, high-end look.

## Components

### Buttons & Interaction
- **Primary CTA:** Solid Turquoise background with white text. On hover, darken to a slightly deeper cyan with a soft lift shadow.
- **Secondary CTA:** Outlined Deep Ocean Blue. Used for "Learn More" or secondary actions.
- **Premium CTA:** Gold background with Primary Blue text, reserved exclusively for "Book Now" or "VIP Inquiries."

### Travel Cards
The "hero" component of the system. Cards feature a large aspect-ratio image (3:2 or 16:9) at the top, a 16px corner radius, and a subtle 1px border (`#E9ECEF`). Content inside the card should use `title-lg` for destination names and `label-sm` for pricing.

### Search & Filters
Inputs use a clean, 1px border that turns Turquoise on focus. For travel searches (dates, destinations), use icons from a consistent, thin-line set (2px stroke) to maintain the minimalist aesthetic.

### Tags & Badges
Chips are used for travel categories (e.g., "Honeymoon," "Corporate," "Adventure"). These should have a light turquoise background with 10% opacity and turquoise text for a modern, "app-like" feel.

### Lists
Itineraries should use custom "Timeline" list styles with thin Ocean Blue vertical lines and Turquoise dot markers to guide the eye through the travel plan.