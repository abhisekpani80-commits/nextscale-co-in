# Project: NextScale Landing Page Redesign

## Architecture
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 + Tailwind PostCSS
- **State Management**: React 19 Client components + Hooks
- **Typography**: Google Fonts via `next/font/google` (Instrument Serif + Plus Jakarta Sans)
- **Animations**: Framer Motion + CSS Transitions
- **Design Aesthetic**: Light, bright, premium, Apple-like minimal experience. Sophisticated use of whitespace, negative space, subtle drop shadows, and blurred headers.

## Code Layout
- `src/app/` — Routing and layouts
  - `layout.tsx` — Root layout loading global CSS, fonts, SEO context, and general wrappers
  - `page.tsx` — Main landing page route rendering the `<BrandLanding />` component
  - `globals.css` — Core design system styling, Tailwind v4 configurations, utility classes
- `src/components/home/` — Feature sections for the landing page
  - `brand-landing.tsx` — Main orchestrator of landing page sections
  - `hero.tsx` — Hero section (headline, sub-headline, CTA)
  - `navbar.tsx` / `PillNav.tsx` — Floating / sticky navigation UI components
  - `footer.tsx` — Minimal, single-line footer UI component
- `src/components/ui/` — Low-level reusable components
- `src/lib/` — Shared libraries, SEO configuration, and static site constants

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | Global Setup & Light Theme | Configure light background system, neutral light palette in `globals.css`, and import Google Fonts in `layout.tsx`. | None | IN_PROGRESS |
| 2 | Brand Logo & Nav/Footer | Replace current upward-trend logo with clean wordmark/minimal mark. Redesign sticky Nav and footer to premium, minimal style. | M1 | PLANNED |
| 3 | Hero & Trust Bar | Revamp Hero to use commanding Instrument Serif headline, 8-12 word sub-headline, and 1 CTA. Add minimal Trust Bar. | M2 | PLANNED |
| 4 | Core Sections | Services grid (1-2 sentences), Selected Work (asymmetrical editorial grid), Process steps, About/Founder. | M3 | PLANNED |
| 5 | Motion & Animation | Entrance animations (fade/slide on scroll), micro-interactions (hover shifts), and full-width closing CTA. | M4 | PLANNED |
| 6 | Integration & Verification | Responsiveness checks, mobile hamburger integration, and E2E test compliance. | M5 | PLANNED |
| 7 | Adversarial Hardening | Phase 2 Adversarial coverage hardening using white-box analysis. | M6 | PLANNED |

## Interface Contracts
### `src/components/ui/logo.tsx`
- Must export `<NextscaleLogo>` component which renders a vector-based, single-color-capable brand mark/wordmark.
- Must accept a `className?: string` prop for custom sizing and color handling.
- Must scale cleanly down to 20px height.

### `src/app/globals.css`
- Must provide `--font-sans` representing Plus Jakarta Sans.
- Must provide `--font-heading` representing Instrument Serif.
- Must configure a light, crisp neutral theme (white/off-white background, dark grey/black typography, clean border shadows).

### `src/components/layout/navbar.tsx`
- Sticky minimal layout with a frosted glass backdrop activated on scroll.
- Responsive collapsing menu for mobile screens (under 768px).
