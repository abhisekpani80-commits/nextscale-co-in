# Codebase Exploration & Analysis Report — NextScale Website

## Executive Summary
This report provides a comprehensive, read-only analysis of the NextScale codebase. The project is a modern, high-performance web application built with **Next.js 16 (App Router)**, **React 19**, and **Tailwind CSS v4**. It features an elegant "Engineered nightfall" dark aesthetic with interactive animations.

---

## 1. Project Structure

### Routing & Key Pages
The codebase uses the **Next.js App Router** with the root sources located in the `src/` directory.

- **Main Entry / Landing Page**: `src/app/page.tsx`
  - Renders the `<BrandLanding />` component from `src/components/home/brand-landing.tsx` along with SEO JSON-LD FAQ schemas.
- **Main Layout**: `src/app/layout.tsx`
  - Establishes the core HTML/body framework, initializes global CSS, loads fonts, handles site metadata (SEO, OG image), and wraps pages in layout components (`Navbar`, `Footer`, `WhatsAppFloat`, `CookieConsent`, `ScrollProgress`, `LoadingScreen`, and `ClientWrapper`).
- **Main Sub-Routes**:
  - `/about` — Company history, values, and timeline.
  - `/careers` — Role listings and recruitment processes.
  - `/contact` — Contact forms and scheduling.
  - `/legal` — Policies (privacy, terms, refund, cookie, disclaimer).
  - `/portfolio` — Featured works and templates.
  - `/pricing` — Service packages (agents, websites) and addons.
  - `/products` — Product details (specifically `ExamOS` and `Aura`).
  - `/services` — Custom software services (AI agents, websites, digital growth).

### Components Layout
Components are categorized under `src/components/` in the following structure:
- `src/components/home/` — Landing page sections: hero, services split, how-it-works, tech-stack, testimonials, portfolio highlight, and CTAs.
- `src/components/layout/` — Layout UI components including `PillNav.tsx`, `footer.tsx`, and `whatsapp-float.tsx`.
- `src/components/ui/` — Low-level reusable components (e.g. `scroll-progress.tsx`, `logo.tsx`, `cookie-consent.tsx`).
- `src/components/` (Root level) — Contains **50+ custom animated visual component files** derived from the ReactBits.dev library (e.g., `DecryptedText.tsx`, `Aurora.tsx`, `ClickSpark.tsx`, `LogoLoop.tsx`, `StarBorder.tsx`, `FuzzyText.tsx`).

---

## 2. Design System, Tailwind, & Dependencies

### Package Dependencies
Selected dependencies from `package.json`:
- **Core Frameworks**:
  - `next`: `16.2.9`
  - `react`: `19.2.4`
  - `react-dom`: `19.2.4`
- **Tailwind Version**:
  - `tailwindcss`: `^4`
  - `@tailwindcss/postcss`: `^4` (using PostCSS plugin workflow in `postcss.config.mjs`)
- **Animation & Physics Libraries**:
  - `framer-motion`: `^12.40.0`
  - `motion`: `^12.42.0`
  - `gsap` & `@gsap/react`: `^3.15.0` / `^2.1.2`
  - `lenis` (smooth scrolling): `^1.3.25`
  - `three` (WebGL context): `^0.180.0`
  - `ogl` (WebGL library): `^1.0.11`
- **Component & Icon Sets**:
  - `@base-ui/react`: `^1.6.0`
  - `lucide-react`: `^1.21.0`
  - `react-icons`: `^5.6.0`
  - `shadcn`: `^4.11.0`

### Design System & Theme Styling
Because **Tailwind CSS v4** is used, there is **no `tailwind.config.js` or `tailwind.config.ts` file**. Tailwind custom parameters are set inline in the CSS file:

- **Theme Configuration File**: `src/app/globals.css`
  - Declared using the Tailwind v4 `@theme inline` block.
- **Brand Theme - "Engineered Nightfall"**:
  - Both `:root` and `.dark` selectors share identical dark values (preventing client-side theme-flashing and making shadcn's `dark:` utility styles look correct).
  - **Colors**:
    - `--background`: Near-black cool canvas (`oklch(0.135 0.012 258)`)
    - `--foreground`: Off-white text (`oklch(0.97 0.004 250)`)
    - `--primary` (Electric-Cyan): `oklch(0.79 0.132 213)`
    - `--accent-2` (Magenta): `oklch(0.7 0.17 332)`
    - `--border`: Translucent white (`oklch(1 0 0 / 9%)`)
- **Custom Utilities**:
  - `.text-glow` — Cyan drop shadows on text headers.
  - `.bg-grid` — Fine mesh background pattern.
  - `.bg-radial-fade` — Center-top primary gradient spotlight.
  - `.noise::after` — Subtly overlaying organic SVG noise texture.
  - `.glow-card` — Hover-active microgradient outline mask on cards.

---

## 3. Font Integration

### Current Fonts Setup
Fonts are loaded in `src/app/layout.tsx` using `next/font/google` and mapped as CSS variables passed to the `html` element:
1. **Sans-serif**: `Inter` (mapped to CSS variable `--font-inter` and applied via `--font-sans: var(--font-inter);` in `@theme inline`).
2. **Monospace**: `JetBrains_Mono` (mapped to CSS variable `--font-mono-code` and applied via `--font-mono: var(--font-mono-code);` in `@theme inline`).

### Proposed Google Fonts Integration Plan
To integrate **Instrument Serif** (for headings) and **Plus Jakarta Sans** (for body/sans), the implementer should follow these steps:

#### Step A: Modify `src/app/layout.tsx`
Replace the `Inter` import with `Plus_Jakarta_Sans` and `Instrument_Serif`:
```typescript
// before
import { Inter, JetBrains_Mono } from "next/font/google";

// after
import { Plus_Jakarta_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
```

Initialize the font functions with appropriate configurations:
```typescript
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});
```

Inject the variables on the root `<html>` element inside `RootLayout`:
```typescript
// before
<html
  lang="en"
  className={`dark ${inter.variable} ${mono.variable} h-full antialiased`}
>

// after
<html
  lang="en"
  className={`dark ${plusJakartaSans.variable} ${instrumentSerif.variable} ${mono.variable} h-full antialiased`}
>
```

#### Step B: Update `src/app/globals.css`
Update the `@theme inline` block in `src/app/globals.css` to map Tailwind's font-family values to these new CSS custom variables:
```css
/* before */
@theme inline {
  --font-sans: var(--font-inter);
  --font-heading: var(--font-inter);
  ...
}

/* after */
@theme inline {
  --font-sans: var(--font-plus-jakarta-sans);
  --font-heading: var(--font-instrument-serif);
  ...
}
```

Since the custom font helper `.font-heading` references `var(--font-heading)`, this single change will update all heading typography throughout the website.

---

## 4. Visual Assets & Logos

The application references the following branding and graphic files:

### Vectors & SVG Elements
- **Nextscale logo SVG**: `src/components/ui/logo.tsx`
  - Combines two custom geometric shapes representing an upward-trend graph that overlaps to create a negative-space "S" inside an "N".
  - Utilizes a gradient (`id="ns-logo-grad"`) flowing from Cyan (`#27d0ed`) through Purple (`#a78bfa`) to Magenta (`#e040fb`).
- **Public SVG icon**: `/public/icon.svg`
  - Holds the identical logo path in a `64x64px` canvas format with background `#0d1016` (used as high-resolution app shortcut icon).
- **Other SVGs**: `/public/` containing `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, and `window.svg` (default template elements).

### Image Assets (Rasterized PNGs)
All logos and banners are in the `/public/` directory:
- `/public/nextscale_logo.png` — High-definition logo export (Size: ~656 KB).
- `/public/og-image.png` — Original search preview image (Size: ~404 KB).
- `/public/og-image-v2.png` — Redesigned modern metadata preview banner (Size: ~792 KB, dimensions `1024x536px`).
- `/public/favicon.ico` — Multi-resolution favicon resource.
