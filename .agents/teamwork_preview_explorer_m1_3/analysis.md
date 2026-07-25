# Milestone 1 Analysis: Global Setup & Light Theme

This report provides the analysis and implementation strategy for migrating the Nextscale codebase to a premium, clean light theme with updated global typography.

---

## 1. Analysis of Existing Codebase

### A. Layout Structure (`src/app/layout.tsx`)
*   **Fonts Loaded**: `Inter` (variable `--font-inter`) and `JetBrains_Mono` (variable `--font-mono-code`).
*   **HTML Class**: Declares class `dark` explicitly along with `inter.variable`, `mono.variable`, `h-full`, and `antialiased`.
*   **Viewport Configuration**:
    ```typescript
    export const viewport: Viewport = {
      themeColor: "#0a0c10",
      colorScheme: "dark",
    };
    ```
    This forces browsers to use a dark theme-color interface and dark color scheme.

### B. Global Stylesheet (`src/app/globals.css`)
*   **Tailwind Version**: Tailwind CSS v4.0 is active.
*   **Theme Configuration**: Configured inline within the stylesheet using the `@theme inline` block:
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
*   **Root Selector & Variables**: Both `:root` and `.dark` are mapped to the same dark color variables (e.g., `--background: oklch(0.135 0.012 258)`), which prevents system color-scheme switches and locks the site into the "Engineered nightfall" dark aesthetic.

---

## 2. Typography Strategy

We will replace the Google Font `Inter` with **Plus Jakarta Sans** (for body/sans text) and **Instrument Serif** (for headers/display text). We will preserve **JetBrains Mono** for code text.

### A. Font Selection Details
1.  **Plus Jakarta Sans** (`Plus_Jakarta_Sans`):
    *   *Type*: Variable Sans-Serif font (weights 200 to 800).
    *   *Role*: Secondary font mapped to `--font-sans`. Provides a clean, modern, and highly readable look.
2.  **Instrument Serif** (`Instrument_Serif`):
    *   *Type*: Display Serif font.
    *   *Role*: Primary header font mapped to `--font-heading`. It has an elegant, high-contrast, classic editorial style. Since it is not weight-variable across a wide range, we load its regular `400` weight (along with italic) which is perfect for editorial headings.

### B. Font Loading in `src/app/layout.tsx`
We import the fonts from `next/font/google` and instantiate them as follows:

```typescript
import { Plus_Jakarta_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const heading = Instrument_Serif({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-code",
  subsets: ["latin"],
  display: "swap",
});
```

Injecting them as CSS variables in layout.tsx:
```tsx
<html
  lang="en"
  className={`${sans.variable} ${heading.variable} ${mono.variable} h-full antialiased`}
>
```

---

## 3. Light Theme OKLCH Color Palette

We designed a premium, clean, bright light neutral color palette in OKLCH format. The colors are harmonized around a warm stone hue (`80` degrees) to create a sophisticated, editorial atmosphere rather than a sterile white background.

### A. Design Rationale
*   **Warm Stone Base (Hue 80)**: Hue 80 introduces a subtle sand/stone tint, giving the off-white canvas a premium museum-like look.
*   **High Contrast (L 0.985 vs L 0.160)**: Provides a very comfortable reading contrast (exceeding WCAG AAA guidelines).
*   **Muted Terracotta Accent (Hue 25)**: Replaces the electric magenta with a warm terracotta accent, which feels organic and high-end on light backgrounds.
*   **Card Popping**: Background is off-white (`oklch(0.985 0.004 80)`), while cards/popovers are pure white (`oklch(1.0 0 0)`), letting content containers sit elegantly on top of the canvas.

### B. Variable Specification (globals.css `:root`)
Below are the exact OKLCH values for `:root` in `globals.css`:

| Variable Name | OKLCH Value | HEX Equivalent (approx) | Description / Role |
| :--- | :--- | :--- | :--- |
| `--background` | `oklch(0.985 0.004 80)` | `#fcfbfa` | Soft off-white warm-stone canvas |
| `--foreground` | `oklch(0.160 0.008 80)` | `#1c1c1b` | Soft near-black charcoal body text |
| `--card` | `oklch(1.0 0.0 0)` | `#ffffff` | Pure white container background |
| `--card-foreground` | `oklch(0.160 0.008 80)` | `#1c1c1b` | Charcoal text inside cards |
| `--popover` | `oklch(1.0 0.0 0)` | `#ffffff` | Pure white dialog/dropdown base |
| `--popover-foreground` | `oklch(0.160 0.008 80)` | `#1c1c1b` | Charcoal text inside popovers |
| `--primary` | `oklch(0.240 0.012 80)` | `#2d2c2b` | Deep stone primary brand color (for key buttons/actions) |
| `--primary-foreground` | `oklch(0.985 0.004 80)` | `#fcfbfa` | Off-white text on primary elements |
| `--secondary` | `oklch(0.940 0.006 80)` | `#f0efee` | Muted stone button/tab background |
| `--secondary-foreground` | `oklch(0.240 0.012 80)` | `#2d2c2b` | Deep stone text on secondary elements |
| `--muted` | `oklch(0.965 0.004 80)` | `#f7f6f5` | Subtly lighter background tint |
| `--muted-foreground` | `oklch(0.520 0.010 80)` | `#7b7976` | Medium gray for sub-headers and descriptions |
| `--accent` | `oklch(0.940 0.006 80)` | `#f0efee` | Slate hover states |
| `--accent-foreground` | `oklch(0.160 0.008 80)` | `#1c1c1b` | Text on hover state |
| `--accent-2` | `oklch(0.620 0.130 25)` | `#d56a50` | Sophisticated terracotta secondary accent |
| `--accent-2-foreground` | `oklch(0.990 0.002 70)` | `#fbfbfb` | Light text on terracotta |
| `--destructive` | `oklch(0.550 0.180 25)` | `#bf3b1e` | Premium brick red for errors/destructive items |
| `--destructive-foreground` | `oklch(0.990 0.002 70)` | `#fbfbfb` | Light text on destructive |
| `--border` | `oklch(0.900 0.005 80)` | `#e6e5e3` | Soft borders and divider lines |
| `--input` | `oklch(0.900 0.005 80)` | `#e6e5e3` | Input element border |
| `--ring` | `oklch(0.240 0.012 80)` | `#2d2c2b` | Keyboard focus ring |
| `--radius` | `0.7rem` | — | Global border radius |

#### Sidebar Specific Variables (for Shadcn Components):
*   `--sidebar`: `oklch(0.970 0.004 80)` (slightly darker stone off-white for depth)
*   `--sidebar-foreground`: `oklch(0.160 0.008 80)`
*   `--sidebar-primary`: `oklch(0.240 0.012 80)`
*   `--sidebar-primary-foreground`: `oklch(0.985 0.004 80)`
*   `--sidebar-accent`: `oklch(0.940 0.006 80)`
*   `--sidebar-accent-foreground`: `oklch(0.160 0.008 80)`
*   `--sidebar-border`: `oklch(0.900 0.005 80)`
*   `--sidebar-ring`: `oklch(0.240 0.012 80)`

#### Chart Specific Variables:
*   `--chart-1`: `oklch(0.240 0.012 80)` (Deep stone - primary)
*   `--chart-2`: `oklch(0.620 0.130 25)` (Terracotta - accent-2)
*   `--chart-3`: `oklch(0.480 0.075 145)` (Muted sage green)
*   `--chart-4`: `oklch(0.700 0.110 85)` (Muted gold)
*   `--chart-5`: `oklch(0.550 0.100 255)` (Muted slate-blue)

---

## 4. Preventing Dark-Theme Overrides

To lock the site to a light theme and avoid system color preference toggling or lingering `.dark` classes from dark-theme overrides:
1.  **Remove `.dark` Class from `RootLayout`**: In `src/app/layout.tsx`, change `<html className="dark ...">` to `<html className="...">` (removing the `dark` class completely).
2.  **Define Shared Light-Theme Values**: In `globals.css`, assign the newly designed light theme colors to both `:root` and `.dark`:
    ```css
    :root,
    .dark {
      --background: oklch(0.985 0.004 80);
      --foreground: oklch(0.160 0.008 80);
      /* ... rest of light theme variables ... */
    }
    ```
    By mapping both, we guarantee that even if JavaScript (or browser extension/system preference) injects the `.dark` class, the styling remains light.

---

## 5. Inline Tailwind CSS Theme Mapping (`globals.css`)

In Tailwind CSS v4, custom theme variables are declared directly in `@theme inline`. We will map `--font-sans` and `--font-heading` to retrieve the next/font CSS variables:

```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono-code);
  --font-heading: var(--font-heading);
  ...
}
```

---

## 6. Layout.tsx Shell Modifications

The following changes should be applied to `src/app/layout.tsx`:

1.  **Remove the `dark` class** from the `html` element.
2.  **Update `viewport`** configurations for the light theme:
    *   Change `themeColor` from `#0a0c10` to `#fcfbfa` (our new `--background` color).
    *   Change `colorScheme` from `dark` to `light`.

### Modified Layout Code Draft:
```typescript
// Replace lines 15-26 with:
const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const heading = Instrument_Serif({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-code",
  subsets: ["latin"],
  display: "swap",
});

// Update lines 88-91 to:
export const viewport: Viewport = {
  themeColor: "#fcfbfa",
  colorScheme: "light",
};

// Update lines 94-100 to:
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${heading.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground relative">
```

---

## 7. Crucial Implementation Caveats (Hardcoded Theme Colors)

During our investigation, we discovered several instances of **hardcoded dark-mode styles** that will override the system's global theme and stay dark unless addressed in subsequent milestones:

1.  **`src/components/home/brand-landing.tsx`**:
    *   Line 261: Hardcoded base background and text colors: `<div className="bg-[#080908] text-[#f4f1e8]">`.
    *   Lines 150-151: Hardcoded background gradient shades targeting `#080908` (the original dark background color).
    *   Lines 167, 271, 321, 371: Hardcoded block backgrounds using `bg-[#080908]`.
    *   Lines 236, 304, 335, 346, 446, 460, 516: Hardcoded references to `#f4f1e8` as local backgrounds.
    *   Lines 207, 217: Hardcoded block background `bg-[#11120f]`.
2.  **`src/components/MagicBento.css`**:
    *   Lines 9, 32: Hardcoded `--background-dark: #0d1016` and card background `background: var(--background-dark)`.
3.  **Grid Lines (`globals.css` line 136)**:
    *   `.bg-grid` utility uses `oklch(1 0 0 / 4%)` (which is a white grid, invisible on the new off-white background). This must be updated to `oklch(0 0 0 / 4%)` or mapped to `var(--border)`.

These components must be refactored during the theme transition to use Tailwind semantic variables (e.g. `bg-background`, `text-foreground`, `border-border`, etc.) instead of hardcoded hex values.
