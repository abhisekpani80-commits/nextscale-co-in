# Milestone 1: Global Setup & Light Theme Analysis & Implementation Plan

This document outlines the design decisions, code modifications, and color tokens for transition from the "Engineered Nightfall" dark theme to a premium, clean, bright light neutral theme.

---

## 1. Codebase Examination

### `src/app/layout.tsx`
- **Typography**: Currently loads `Inter` and `JetBrains_Mono` from `next/font/google`. `Inter` is declared as the `--font-inter` CSS variable and injected into the HTML root element.
- **Theme Root Class**: The `html` tag currently hardcodes the `dark` class: `<html lang="en" className="dark ${inter.variable} ...">`.
- **Viewport Config**: The viewport configuration is exported as a separate constant:
  ```tsx
  export const viewport: Viewport = {
    themeColor: "#0a0c10",
    colorScheme: "dark",
  };
  ```
  This forces browsers and system-level styles to treat the application as a dark-theme page.

### `src/app/globals.css`
- **Tailwind Setup**: Tailwind CSS v4 is used via `@import "tailwindcss";`. Configured properties are stored in `@theme inline { ... }` instead of a separate `tailwind.config.js`.
- **Dark Mode Variant**: `@custom-variant dark (&:is(.dark *));` maps dark-mode classes.
- **Theme Variables**: Both `:root` and `.dark` are mapped to the same dark OKLCH values in a single block (`:root, .dark { ... }`), forcing a dark theme.
- **Utility Adjustments Needed for Light Mode**:
  - `.bg-grid` uses `oklch(1 0 0 / 4%)` (white grid with 4% opacity). On a light background, this is completely invisible.
  - `.text-glow` uses `--primary` shadows. If `--primary` becomes a dark slate, this text glow will look like a muddy smudge.

---

## 2. Premium Light Neutral OKLCH Color Palette

A premium light neutral palette should feel airy, warm, and highly readable. We utilize a **soft warm alabaster/sand** base hue (Hue: 80) paired with a **sophisticated slate-navy** primary (Hue: 240) and a **rich berry-rose** accent-2 (Hue: 340).

| CSS Token | OKLCH Value | HEX equivalent (approx) | Description & Purpose |
| :--- | :--- | :--- | :--- |
| `--background` | `oklch(0.99 0.003 80)` | `#faf9f6` | Soft alabaster off-white. Extremely easy on the eyes. |
| `--foreground` | `oklch(0.15 0.010 80)` | `#1a1a19` | Near-black charcoal/slate, matching the warmth angle of the background. |
| `--card` | `oklch(1.0 0 0)` | `#ffffff` | Pure white. Elevates card components off the off-white canvas. |
| `--card-foreground` | `oklch(0.15 0.010 80)` | `#1a1a19` | Near-black charcoal for readability inside cards. |
| `--popover` | `oklch(1.0 0 0)` | `#ffffff` | Pure white for menus, dropdowns, and popovers. |
| `--popover-foreground` | `oklch(0.15 0.010 80)` | `#1a1a19` | Near-black charcoal text. |
| `--primary` | `oklch(0.22 0.030 240)` | `#1c2438` | Deep slate-navy. High-contrast anchor for brand identity. |
| `--primary-foreground` | `oklch(0.99 0.003 80)` | `#faf9f6` | Off-white text for buttons using primary background. |
| `--secondary` | `oklch(0.95 0.008 240)` | `#f0f2f5` | Gentle light-gray slate for secondary buttons/elements. |
| `--secondary-foreground` | `oklch(0.22 0.030 240)` | `#1c2438` | Deep slate-navy text. |
| `--muted` | `oklch(0.96 0.005 80)` | `#f5f4f2` | Soft neutral warm gray. |
| `--muted-foreground` | `oklch(0.48 0.015 80)` | `#757470` | Medium gray for helper text, labels, and secondary body text. |
| `--accent` | `oklch(0.94 0.010 240)` | `#eceef1` | Soft cool-gray highlight. |
| `--accent-foreground` | `oklch(0.15 0.010 80)` | `#1a1a19` | Near-black text. |
| `--accent-2` | `oklch(0.55 0.160 340)` | `#aa2e5e` | Sophisticated rich rose/berry (good contrast on light background). |
| `--accent-2-foreground` | `oklch(0.99 0.003 80)` | `#faf9f6` | Off-white text on accent-2 background. |
| `--destructive` | `oklch(0.55 0.180 25)` | `#bd232b` | Crimson red for destructive actions. |
| `--destructive-foreground`| `oklch(0.99 0.003 80)` | `#faf9f6` | Off-white text. |
| `--border` | `oklch(0.15 0.010 80 / 12%)` | `#1a1a191f` | Elegant 12% translucent charcoal border. Adapts to overlapping overlays. |
| `--input` | `oklch(0.15 0.010 80 / 16%)` | `#1a1a1929` | 16% translucent charcoal border for inputs. |
| `--ring` | `oklch(0.22 0.030 240)` | `#1c2438` | Deep navy focus ring. |

---

## 3. Typography Configuration

We will replace the Google Font `Inter` with `Plus_Jakarta_Sans` for body text (`sans`) and `Instrument_Serif` for headings (`heading`).

### Google Font Setup in `src/app/layout.tsx`
Add imports and instantiate the Google Fonts using their corresponding CSS variable keys:

```tsx
import { Plus_Jakarta_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-code",
  subsets: ["latin"],
  display: "swap",
});
```

Inject the variables into the `html` root tag:
```tsx
<html
  lang="en"
  className={`${plusJakartaSans.variable} ${instrumentSerif.variable} ${mono.variable} h-full antialiased`}
>
```

---

## 4. CSS Variable Setup in `src/app/globals.css`

### `@theme inline` Configuration
Map the Tailwind typography config directly to the font variables injected from `layout.tsx`:

```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono-code);
  --font-heading: var(--font-heading);
  /* other tokens ... */
}
```

### Neutralizing Dark-Theme Overrides
To avoid accidental dark-mode activation or overrides, we must:
1. Remove `className="dark"` from `layout.tsx`.
2. Define the new light variables under the `:root` selector.
3. For bulletproof fail-safes (e.g. if some packages or third-party blocks force `.dark`), we map `.dark` to the **exact same** light-theme variables.

```css
:root,
.dark {
  --background: oklch(0.99 0.003 80);
  --foreground: oklch(0.15 0.01 80);
  --card: oklch(1.0 0 0);
  --card-foreground: oklch(0.15 0.01 80);
  --popover: oklch(1.0 0 0);
  --popover-foreground: oklch(0.15 0.01 80);
  --primary: oklch(0.22 0.03 240);
  --primary-foreground: oklch(0.99 0.003 80);
  --secondary: oklch(0.95 0.008 240);
  --secondary-foreground: oklch(0.22 0.03 240);
  --muted: oklch(0.96 0.005 80);
  --muted-foreground: oklch(0.48 0.015 80);
  --accent: oklch(0.94 0.01 240);
  --accent-foreground: oklch(0.15 0.01 80);
  --accent-2: oklch(0.55 0.16 340);
  --accent-2-foreground: oklch(0.99 0.003 80);
  --destructive: oklch(0.55 0.18 25);
  --destructive-foreground: oklch(0.99 0.003 80);
  --border: oklch(0.15 0.01 80 / 12%);
  --input: oklch(0.15 0.01 80 / 16%);
  --ring: oklch(0.22 0.03 240);
  --chart-1: oklch(0.22 0.03 240);
  --chart-2: oklch(0.55 0.16 340);
  --chart-3: oklch(0.45 0.12 145);
  --chart-4: oklch(0.60 0.14 85);
  --chart-5: oklch(0.48 0.015 80);
  --radius: 0.7rem;
  --sidebar: oklch(0.98 0.003 80);
  --sidebar-foreground: oklch(0.15 0.01 80);
  --sidebar-primary: oklch(0.22 0.03 240);
  --sidebar-primary-foreground: oklch(0.99 0.003 80);
  --sidebar-accent: oklch(0.94 0.01 240);
  --sidebar-accent-foreground: oklch(0.15 0.01 80);
  --sidebar-border: oklch(0.15 0.01 80 / 12%);
  --sidebar-ring: oklch(0.22 0.03 240);
}
```

### Technical Utility Corrections
1. **Grid Background**: To make the grid visible, modify `.bg-grid` to use a 4% opacity dark color instead of a white one:
   ```css
   .bg-grid {
     background-image:
       linear-gradient(to right, oklch(0.15 0.01 80 / 4%) 1px, transparent 1px),
       linear-gradient(to bottom, oklch(0.15 0.01 80 / 4%) 1px, transparent 1px);
     background-size: 56px 56px;
   }
   ```
2. **Text Glow**: Recommend replacing text glows (`.text-glow`) with high-contrast text styling or disabling text shadow overlays in light mode.

---

## 5. Detailed Change Proposals

### Proposed Diff for `src/app/layout.tsx`

```markdown
<<<<
import { Inter, JetBrains_Mono } from "next/font/google";
...
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});
...
export const viewport: Viewport = {
  themeColor: "#0a0c10",
  colorScheme: "dark",
};
...
    <html
      lang="en"
      className={`dark ${inter.variable} ${mono.variable} h-full antialiased`}
    >
====
import { Plus_Jakarta_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
...
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});
...
export const viewport: Viewport = {
  themeColor: "#faf9f6",
  colorScheme: "light",
};
...
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${instrumentSerif.variable} ${mono.variable} h-full antialiased`}
    >
>>>>
```

### Proposed Diff for `src/app/globals.css`

```markdown
<<<<
  --font-sans: var(--font-inter);
  --font-mono: var(--font-mono-code);
  --font-heading: var(--font-inter);
...
:root,
.dark {
  --background: oklch(0.135 0.012 258);
  --foreground: oklch(0.97 0.004 250);
  --card: oklch(0.171 0.014 258);
  --card-foreground: oklch(0.97 0.004 250);
  --popover: oklch(0.155 0.014 258);
  --popover-foreground: oklch(0.97 0.004 250);
  --primary: oklch(0.79 0.132 213);
  --primary-foreground: oklch(0.16 0.03 244);
  --secondary: oklch(0.24 0.016 258);
  --secondary-foreground: oklch(0.97 0.004 250);
  --muted: oklch(0.22 0.014 258);
  --muted-foreground: oklch(0.66 0.018 256);
  --accent: oklch(0.26 0.02 250);
  --accent-foreground: oklch(0.97 0.004 250);
  --accent-2: oklch(0.7 0.17 332);
  --accent-2-foreground: oklch(0.98 0.01 320);
  --destructive: oklch(0.62 0.21 22);
  --border: oklch(1 0 0 / 9%);
  --input: oklch(1 0 0 / 14%);
  --ring: oklch(0.79 0.132 213);
  --chart-1: oklch(0.79 0.132 213);
  --chart-2: oklch(0.7 0.17 332);
  --chart-3: oklch(0.75 0.16 145);
  --chart-4: oklch(0.8 0.14 85);
  --chart-5: oklch(0.66 0.018 256);
  --radius: 0.7rem;
  --sidebar: oklch(0.155 0.014 258);
  --sidebar-foreground: oklch(0.97 0.004 250);
  --sidebar-primary: oklch(0.79 0.132 213);
  --sidebar-primary-foreground: oklch(0.16 0.03 244);
  --sidebar-accent: oklch(0.24 0.016 258);
  --sidebar-accent-foreground: oklch(0.97 0.004 250);
  --sidebar-border: oklch(1 0 0 / 9%);
  --sidebar-ring: oklch(0.79 0.132 213);
}
...
  /* Subtle technical grid background. */
  .bg-grid {
    background-image:
      linear-gradient(to right, oklch(1 0 0 / 4%) 1px, transparent 1px),
      linear-gradient(to bottom, oklch(1 0 0 / 4%) 1px, transparent 1px);
    background-size: 56px 56px;
  }
====
  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono-code);
  --font-heading: var(--font-heading);
...
:root,
.dark {
  --background: oklch(0.99 0.003 80);
  --foreground: oklch(0.15 0.01 80);
  --card: oklch(1.0 0 0);
  --card-foreground: oklch(0.15 0.01 80);
  --popover: oklch(1.0 0 0);
  --popover-foreground: oklch(0.15 0.01 80);
  --primary: oklch(0.22 0.03 240);
  --primary-foreground: oklch(0.99 0.003 80);
  --secondary: oklch(0.95 0.008 240);
  --secondary-foreground: oklch(0.22 0.03 240);
  --muted: oklch(0.96 0.005 80);
  --muted-foreground: oklch(0.48 0.015 80);
  --accent: oklch(0.94 0.01 240);
  --accent-foreground: oklch(0.15 0.01 80);
  --accent-2: oklch(0.55 0.16 340);
  --accent-2-foreground: oklch(0.99 0.003 80);
  --destructive: oklch(0.55 0.18 25);
  --destructive-foreground: oklch(0.99 0.003 80);
  --border: oklch(0.15 0.01 80 / 12%);
  --input: oklch(0.15 0.01 80 / 16%);
  --ring: oklch(0.22 0.03 240);
  --chart-1: oklch(0.22 0.03 240);
  --chart-2: oklch(0.55 0.16 340);
  --chart-3: oklch(0.45 0.12 145);
  --chart-4: oklch(0.60 0.14 85);
  --chart-5: oklch(0.48 0.015 80);
  --radius: 0.7rem;
  --sidebar: oklch(0.98 0.003 80);
  --sidebar-foreground: oklch(0.15 0.01 80);
  --sidebar-primary: oklch(0.22 0.03 240);
  --sidebar-primary-foreground: oklch(0.99 0.003 80);
  --sidebar-accent: oklch(0.94 0.01 240);
  --sidebar-accent-foreground: oklch(0.15 0.01 80);
  --sidebar-border: oklch(0.15 0.01 80 / 12%);
  --sidebar-ring: oklch(0.22 0.03 240);
}
...
  /* Subtle technical grid background. */
  .bg-grid {
    background-image:
      linear-gradient(to right, oklch(0.15 0.01 80 / 4%) 1px, transparent 1px),
      linear-gradient(to bottom, oklch(0.15 0.01 80 / 4%) 1px, transparent 1px);
    background-size: 56px 56px;
  }
>>>>
```
