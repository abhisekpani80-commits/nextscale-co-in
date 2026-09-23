# CLAUDE.md — NextScale Engineering & Architecture Reference

This document provides a comprehensive operational summary of the codebase, recent site-wide redesign, architecture standards, and development guidelines for **NextScale** ([nextscale.co.in](https://nextscale.co.in)).

---

## 1. Project Overview & Tech Stack

NextScale is a high-performance **Revenue Architecture & Operational Growth Studio** website.

- **Framework**: Next.js 16.2.9 (App Router, Turbopack, React Server Components)
- **UI Library**: React 19.2.4
- **Styling**: Tailwind CSS v4 with custom CSS design tokens (`src/app/globals.css`)
- **Animations**: Framer Motion 12 / Motion, GSAP, React Bits interactive components
- **Icons**: Lucide React (`lucide-react`)
- **Fonts**: Plus Jakarta Sans (`--font-heading`), Inter (`--font-body`)
- **Deployment**: Vercel Production ([nextscale.co.in](https://nextscale.co.in)), synced via GitHub (`main` branch)

---

## 2. Summary of Recent Work Across All 58+ Pages

A complete, systematic transformation was executed across all **58+ routes** without deleting existing data structures, breaking route paths, or compromising SEO rankings.

### A. Executive Blue & White Design System
Eliminated the legacy dark/amber brutalist styling (`#141414`, `#FAF3E5`, `#FFC72E`, `#FF4D00`) in favor of a modern, enterprise-grade Linear/Stripe aesthetic:
- **Base Background**: Pure White (`#FFFFFF`) and subtle Slate-50/60 (`#F8FAFC`).
- **Typography**: Deep Obsidian Slate-900 (`#0B0F19`) for high contrast and readability.
- **Brand Accents**: Royal Blue (`#2563EB`, `--primary`) and Sky Blue (`#38BDF8`, `--accent`).
- **Hairline Borders**: Clean, crisp Slate-200 (`#E2E8F0`).
- **Shadows**: Soft blue-tinted elevation (`shadow-md shadow-blue-500/10`).

### B. Global Navigation & Layout Architecture
- **Global Sticky Navbar (`src/components/layout/navbar.tsx`)**:
  - Rendered universally in `src/app/layout.tsx`.
  - Frosted glass backdrop blur (`backdrop-blur-md bg-white/90 border-b border-slate-200/90`).
  - Active page tracking via `usePathname()`.
  - Links: **Services** (`/services`), **Work** (`/portfolio`), **Pricing** (`/pricing`, badge `USD $`), **Tools** (`/tools`, badge `Free`), **About** (`/about`), **Contact** (`/contact`).
  - Live availability badge: `2 Slots Open` with pulsing blue beacon.
  - Action button: `Start a project` with direct WhatsApp launcher.
  - Mobile drawer: 44px+ touch targets, direct WhatsApp founder callout, and secondary navigation (`Careers`, `Compare Agency`, `Resources`).
- **Global 3-Column Footer (`src/components/landing/responsive-footer.tsx` & `src/components/layout/footer.tsx`)**:
  - Full link matrix preserved across all pages:
    - **EXPLORE**: Services (`/services`), Work & Portfolio (`/portfolio`), Products & SaaS (`/products`), Pricing Plans (`/pricing`), India Pricing Studio (`/pricing-studio`), Free Tools (`/tools`), Compare Agency (`/compare`).
    - **COMPANY**: About Next Scale (`/about`), Careers (`/careers`), Contact Us (`/contact`), Resources & Playbooks (`/resources`), Case Studies (`/portfolio`).
    - **LEGAL**: Privacy Policy (`/legal/privacy`), Terms of Service (`/legal/terms`), Refund Policy (`/legal/refund`), Cookie Policy (`/legal/cookies`), Disclaimer (`/legal/disclaimer`).
  - Direct communication: WhatsApp Direct (`+91 95564 36685`), Email (`biz.abhisek@gmail.com`), Sub-15m response badge, and social links (LinkedIn, GitHub, Twitter/X, Instagram).

### C. Homepage Upgrades (`src/app/page.tsx`)
1. **Scrollcraft Layered Hero (`src/components/landing/layered-hero.tsx`)**:
   - Dynamic presentation slides rotating automatically every 3 seconds (pauses on hover).
   - Side arrow controls on desktop for manual carousel navigation.
   - Clear business-focused messaging (avoiding dense developer jargon).
2. **Infinite Metric Running Tape (`src/components/landing/metric-tape.tsx`)**:
   - Sub-second performance benchmarks and live conversion statistics.
3. **Dual-Engine Systems Architecture (`src/components/landing/systems-architecture.tsx`)**:
   - Contrast between the High-Yield Digital Storefront and the Autonomous 24/7 WhatsApp Concierge.
4. **Interactive Revenue Leak Diagnostic (`src/components/landing/leak-diagnostic.tsx`)**:
   - Tactile range sliders (Monthly Visitors & Average Deal Value).
   - Real-time lost revenue calculation with 1-tap WhatsApp consultation handover.
5. **Proof Bento & Case Story (`src/components/landing/proof-bento.tsx`)**:
   - Verifiable metrics: `99/100 PageSpeed`, `< 30s Latency`, `+184% Bookings Lift`, `7-Day Sprint`.
6. **React Bits AccordionGallery (`src/components/landing/testimonial-showcase.tsx`)**:
   - Interactive expanding card showcase with 6 verified operator testimonials.
7. **Interactive 7-Day Sprint Process (`src/components/landing/sprint-timeline.tsx`)**:
   - **Connected Progression Track**: Desktop horizontal timeline connecting `01 → 02 → 03 → 04` with dynamic blue progress highlight.
   - **Sprint Velocity Tracker**: `DAY 01 → DAY 03 → DAY 05 → DAY 07` with active stage markers.
   - **Sequential Scroll Reveal**: Staggered card entrance with smooth cubic-bezier easing (`[0.22, 1, 0.36, 1]`).
   - **Interactive Hover & Active Card**: Card lifts by 6–8px, border highlights in blue, icon container scales to 1.05 with subtle radial glow.
   - **Icon Micro-Animations**: Search scanning (01), Compass rotation (02), MessageSquare pulsing (03), Rocket upward launch (04).
   - **Expandable "WHAT HAPPENS" Deliverables Area**: Reveals concise deliverable checklists on hover/click.
   - **Desktop Cursor Spotlight**: Subtle mouse-following radial glow inside the section only.
   - **Final Completion State**: Rocket launch movement and `"Complete"` badge on Card 04.
   - **Mobile Vertical Spine**: Left connected track with 44px+ touch targets and 0 overflow.
8. **Conversion Terminal & Quick Bar (`src/components/landing/conversion-terminal.tsx`, `mobile-quick-bar.tsx`)**:
   - Mobile sticky 1-tap action bar and executive closing CTA.

### D. Dynamic Route Templates (~40+ Pages Cascaded Automatically)
- **Industry Playbooks (`src/app/industries/[slug]/page.tsx`)**: Healthcare, Clinics, Real Estate, Salons, B2B SaaS, and local retail playbooks all styled with modern white cards, blue badge chips, and ROI metrics.
- **Location Landing Pages (`src/app/locations/[slug]/page.tsx`)**: Geo-targeted hubs for Bangalore, Mumbai, Delhi, Chennai, Pune, Ahmedabad, Bhubaneswar, etc.
- **Client Case Studies (`src/app/case-studies/[slug]/page.tsx`)**: Detailed breakdowns for Lumiere Skin Clinic, Vantage Realty, Studio Aperture, etc.
- **Resource Guides & Playbooks (`src/app/resources/[category]/[slug]/page.tsx`)**: Full E-E-A-T author sidebars, research tables, and implementation checklists.

### E. Dedicated Flagship Pages & Free Interactive Tools
- **Pricing & India Studio (`src/app/pricing/page.tsx` & `PricingStudio.tsx`)**: USD ($) / INR (₹) switcher, annual billing toggle, Full Growth Suite spotlight, website tiers, AI agent tiers, and modular add-on pricing.
- **Services Catalog & Finder (`src/app/services/page.tsx` & `ServiceFinder.tsx`)**: Interactive diagnostic questionnaire with instant system recommendations.
- **Free Calculators (`src/app/tools/*`)**:
  - `ai-roi-calculator`: Interactive headcount and chat volume sliders.
  - `website-cost-calculator`: Dynamic feature checklists and upfront cost estimation.
  - `local-seo-checker`: Form analysis and opportunity scoring.
  - `seo-audit`: Real-time diagnostic audit tool with score badges.
- **Company & Foundation Pages**:
  - `/about`: Redesigned `AboutView` with Lead Architect dossier, studio manifesto, draggable stickers, technical arsenal, and origin timeline.
  - `/about/abhisek-pani` & `/about/next-scale`: Dedicated entity profiles.
  - `/contact`: Direct WhatsApp booking, email, office details, and inquiry form.
  - `/careers` & `/careers/apply`: Open roles and structured application flow.
  - `/compare`: Side-by-side comparison (NextScale vs Traditional Agencies vs Freelancers).
  - `/products`, `/products/aura`, `/products/examos`: In-house SaaS product showcases.
  - `/press`: Press kit with downloadable vector logos, official founder bios, and fast facts.
  - `/legal/*`: Privacy Policy, Terms of Service, Refund Policy, Cookie Policy, Disclaimer.

---

## 3. Key Files & Directory Structure

```
nextscale-website/
├── src/
│   ├── app/                          # Next.js App Router routes (67 static/SSG/dynamic routes)
│   │   ├── layout.tsx                # Universal RootLayout (Navbar + {children} + ResponsiveFooter)
│   │   ├── page.tsx                  # Home page (ModernLanding)
│   │   ├── globals.css               # Global CSS tokens, custom scrollbars, marquee keyframes
│   │   ├── pricing/                  # Pricing page
│   │   ├── services/                 # Services directory & sub-services
│   │   ├── tools/                    # Free tools & calculators
│   │   ├── industries/[slug]/        # Dynamic industry playbooks
│   │   ├── locations/[slug]/         # Dynamic city hubs
│   │   ├── case-studies/[slug]/      # Case study deep dives
│   │   ├── resources/[category]/[slug]/ # Knowledge base guides
│   │   └── legal/                    # Legal & compliance policies
│   ├── components/
│   │   ├── landing/                  # Homepage sections (LayeredHero, SprintTimeline, etc.)
│   │   ├── layout/                   # Universal Navbar & Layout Footer
│   │   ├── shared/                   # Reusable PageHero, SectionHeading, etc.
│   │   ├── services/                 # ServiceFinder, ServicesCatalog
│   │   ├── pricing/                  # PricingStudio component
│   │   ├── about/                    # AboutView, entity profile components
│   │   └── ui/                       # Design system primitives (AccordionGallery, Buttons, etc.)
│   └── lib/
│       ├── site.ts                   # Core data source (INDUSTRIES_DATA, PORTFOLIO, STATS, waLink)
│       ├── seo.ts                    # Metadata generators & JSON-LD schema builders
│       └── utils.ts                  # Class merging utility (clsx + twMerge)
└── public/                           # Static assets, logos, fonts
```

---

## 4. Development Workflow & Commands

### Running Locally
```bash
npm run dev
# Starts local development server at http://localhost:3000
```

### Type Checking
```bash
npx tsc --noEmit
# Runs TypeScript compiler check without emitting files (Must pass with 0 errors)
```

### Production Build
```bash
npm run build
# Creates optimized production build with Turbopack across all 67 routes
```

### Production Deployment
```bash
git push origin main
# Pushes to GitHub repo; Vercel automatically deploys to https://nextscale.co.in
```

Or deploy directly via Vercel CLI:
```bash
npx vercel --prod --yes
```

---

## 5. Architectural & Design Rules

1. **Brand Identity**: Maintain the executive **Blue & White** color language. Never reintroduce harsh high-contrast black/yellow/orange brutalist accents.
2. **Typography**: Use `--font-heading` (Plus Jakarta Sans) for headings/buttons and `--font-body` (Inter) for body copy.
3. **Copywriting Tone**: Frame everything from a business ROI perspective (revenue lift, booking velocity, customer acquisition) rather than technical jargon.
4. **Footer Integrity**: Always preserve the 3-column link matrix (`EXPLORE`, `COMPANY`, `LEGAL`) in both footer components.
5. **Responsive Standard**: All pages and interactive components must support viewports from 375px (mobile) to 1440px+ (desktop) with zero horizontal overflow (`scrollWidth <= window.innerWidth`).
6. **Motion & Accessibility**: Always wrap animated components with `useReducedMotion()` from Framer Motion to honor accessibility preferences. Avoid continuous heavy animations.
