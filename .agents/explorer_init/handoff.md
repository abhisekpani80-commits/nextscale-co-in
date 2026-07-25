# Handoff Report — Initial Codebase Exploration

This is a **Hard Handoff** report documenting the findings and integration guidelines for the NextScale codebase.

## 1. Observation
We observed the following exact paths, configuration structures, and properties in the NextScale repository:

1. **Project Routing & Layout**:
   - The project is a Next.js App Router project using a `src/` directory.
   - Root Layout path: `src/app/layout.tsx`
     - Imports `Inter` and `JetBrains_Mono` from `next/font/google`:
       ```typescript
       import { Inter, JetBrains_Mono } from "next/font/google";
       ```
     - Defines CSS variables `variable: "--font-inter"` and `variable: "--font-mono-code"`.
     - Wraps layout with `className={`dark ${inter.variable} ${mono.variable} h-full antialiased`}` (line 97).
   - Root Page path: `src/app/page.tsx`
     - Renders `<BrandLanding />` from `@/components/home/brand-landing`.
   - Layout Components: `src/components/layout/` contains `navbar.tsx`, `PillNav.tsx`, and `footer.tsx`.

2. **Design System & Tailwind Config**:
   - `package.json` specifies Next.js version `16.2.9`, React version `19.2.4`, and Tailwind CSS version `^4` (lines 21, 23, 39).
   - There is no `tailwind.config.js` or `tailwind.config.ts`.
   - PostCSS is configured in `postcss.config.mjs` with `@tailwindcss/postcss` (line 3).
   - Tailwind theme configurations are defined in `src/app/globals.css` inside the `@theme inline` block:
     ```css
     @theme inline {
       --color-background: var(--background);
       --color-foreground: var(--foreground);
       --font-sans: var(--font-inter);
       --font-mono: var(--font-mono-code);
       --font-heading: var(--font-inter);
       ...
     }
     ```
   - Color variables are stored in `:root` and `.dark` blocks in `globals.css` with OKLCH syntax, e.g., `--background: oklch(0.135 0.012 258);` and `--primary: oklch(0.79 0.132 213);`.

3. **Visual Assets**:
   - Nextscale logo vector path: `src/components/ui/logo.tsx` contains the `<NextscaleLogo>` component (lines 3-38) defining an overlapping geometric upward-trend shape with a cyan/purple/magenta linear gradient.
   - Root public assets: `/public/` contains `icon.svg` (SVG icon matching the Logo vector layout), `nextscale_logo.png` (high-res raster logo), and `og-image-v2.png` (social share banner).

---

## 2. Logic Chain
1. **Font Replacement Routing**: 
   - Modifying the fonts loaded in the project requires updating `src/app/layout.tsx` because that is where `next/font/google` imports are configured and where the class variable helpers are injected into the DOM.
   - To make the new fonts available in Tailwind utility classes, we must map them in `src/app/globals.css` inside the `@theme inline` block since Tailwind v4 uses that CSS bloc instead of `tailwind.config.js`.
2. **Global Font Application**:
   - In `globals.css`, `--font-sans` maps to the default sans-serif font family used by Tailwind. Changing it to the CSS variable for `Plus Jakarta Sans` will seamlessly apply it to the whole body.
   - The utility class `.font-heading` uses `var(--font-heading)`. By remapping `--font-heading` to `var(--font-instrument-serif)`, all headlines with `.font-heading` will automatically render with `Instrument Serif`.
3. **No New Assets Required**:
   - Because the SVG vector component (`src/components/ui/logo.tsx`), SVG asset (`/public/icon.svg`), and PNG exports already exist and match the brand's aesthetic, no new logo creation or edits are needed.

---

## 3. Caveats
- No changes to the codebase were made since this was a read-only investigation.
- No build command was run, but layout compliance checks were satisfied (the agent only wrote metadata files to `.agents/explorer_init`).

---

## 4. Conclusion
- The project structure is clean and uses modern Next.js 16 and Tailwind v4.
- Typography updates to **Plus Jakarta Sans** (sans/body) and **Instrument Serif** (headings) are straightforward, requiring modifications to:
  1. `src/app/layout.tsx` to load `Plus_Jakarta_Sans` and `Instrument_Serif` via Google Fonts.
  2. `src/app/globals.css` to assign these new variables to `--font-sans` and `--font-heading` in the Tailwind `@theme` configuration.
- Visual assets are already completely set up under `public/` and `src/components/ui/logo.tsx`.

---

## 5. Verification Method
The following steps can verify the implementation of the proposed font changes:
1. Run `npm run build` or `next build` to verify the Next.js build succeeds with the new Google font loaders.
2. Load the site in the browser and inspect the computed CSS on the `<html>` and `<body>` elements:
   - Confirm `font-family` resolves to `var(--font-plus-jakarta-sans)` for body text.
   - Confirm heading elements with `.font-heading` resolve their `font-family` to `var(--font-instrument-serif)`.
