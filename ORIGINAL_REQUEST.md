# Original User Request

## Initial Request — 2026-07-03T19:01:00+05:30

Redesign the NextScale landing page into a light, bright, premium, Apple-like experience.

Working directory: c:\Users\abhis_vrzof03\Documents\New folder
Integrity mode: demo

## Requirements

### R1. Brand-New Logo & Visual Identity
- Clean wordmark or wordmark + minimal geometric mark representing scale/growth/precision.
- No literal clichés (no upward arrows, no bar charts).
- Must work in a single color (for light and dark backgrounds) and scale cleanly down to 20px height.

### R2. Light, Bright, Premium Aesthetic
- Design language inspired by Apple, Linear, Stripe, and Vercel.
- Sophisticated use of whitespace (negative space) and subtle depth (shadows, blur, typographic contrast).
- Absolutely no dark-dominant palettes, no neon or glowing accents (no electric blue, purple glow, cyan neon).
- Clean, crisp, editorial layout.

### R3. Custom Typography Pairing
- Heading/Display: **Instrument Serif** (Elegant Display Serif)
- Body: **Plus Jakarta Sans** (Clean Sans-Serif)
- Typography must do the heavy design lifting (scale, weight contrast, tight tracking).

### R4. Content & Section Layout
- **Nav**: Sticky, minimal, blurred glass background on scroll.
- **Hero**: One commanding headline (min 32px on mobile), one sub-headline (8–12 words), one CTA button. No paragraph text. Abstract/geometric textural background or animated geometric form.
- **Trust Bar**: Minimal row showing "30+ products shipped" or clean client logos.
- **Services**: 3-4 offerings (Web Apps, Landing Pages, SaaS, AI) in a custom grid/panels. Max 1-2 sentences each.
- **Selected Work**: 2-3 projects with editorial layout (asymmetrical grid, different card sizes).
- **Process**: 3-4 horizontal steps with spatial design.
- **About/Founder**: Brief, human, and specific (solo-run positioning).
- **Closing CTA**: High-impact full-width editorial section.
- **Footer**: Single line (logo, simple links, copyright).

### R5. Interactive Motion
- Orchestrated entrance animations (fade + slide on viewport entry, 20-30px offset, 400-600ms transition).
- Micro-interactions on hover (lifts, border fades, button arrow shifts).
- Frosted glass/blur navbar activation on scroll.
- No infinite loops, no scroll-jacking, no layout shifts on image load.

### R6. Responsive Layout
- Flawless responsiveness across 375px, 390px, 768px, 1280px, and 1440px+.
- All grids collapse to a single column on mobile.
- Mobile nav collapses to a clean hamburger menu.
- Minimum 44x44px touch targets.
- Zero horizontal scroll at any breakpoint.

## Acceptance Criteria

### Aesthetic & Code Quality
- [ ] No dark mode or dark-dominant color sections are present.
- [ ] All elements are aligned to a sophisticated, negative-space grid.
- [ ] Uses Google Fonts to dynamically import Instrument Serif and Plus Jakarta Sans.
- [ ] Built entirely using custom styles / Tailwind classes without heavy pre-built templates or third-party visual layout kits.

### Responsiveness & Layout
- [ ] Build succeeds locally without any TypeScript or Next.js build errors.
- [ ] Zero horizontal scroll or page overflow exists on any viewport width (tested down to 320px).
- [ ] No layout shift occurs on initial load or during scroll animations.
- [ ] All mobile buttons expand to a minimum touch-target size (minimum 44px height).
