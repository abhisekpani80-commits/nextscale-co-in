# Milestone 1: Global Setup & Light Theme Changes

## Modified Files

### 1. `src/app/layout.tsx`
- Removed the import and usage of the `Inter` font.
- Imported and instantiated `Plus_Jakarta_Sans` with variable `--font-plus-jakarta-sans` and `Instrument_Serif` with variable `--font-instrument-serif` and weight `400` from `next/font/google`.
- Removed the `dark` class from the `<html>` element.
- Injected font variables (`${plusJakartaSans.variable} ${instrumentSerif.variable}`) into the `<html>` className along with `mono.variable`.
- Updated the viewport configurations: `themeColor` is set to `#faf9f6` and `colorScheme` is set to `'light'`.

### 2. `src/app/globals.css`
- Mapped font variables: `--font-sans` maps to `var(--font-plus-jakarta-sans)` and `--font-heading` maps to `var(--font-instrument-serif)` in the `@theme inline` block.
- Configured light neutral color palette variables inside the `:root` and `.dark` blocks (resulting in consistent light theme colors even if the `.dark` class is forced):
  - `--background`: `oklch(0.99 0.003 80)`
  - `--foreground`: `oklch(0.15 0.01 80)`
  - `--card`: `oklch(1.0 0 0)`
  - `--card-foreground`: `oklch(0.15 0.01 80)`
  - `--popover`: `oklch(1.0 0 0)`
  - `--popover-foreground`: `oklch(0.15 0.01 80)`
  - `--primary`: `oklch(0.22 0.03 240)`
  - `--primary-foreground`: `oklch(0.99 0.003 80)`
  - `--secondary`: `oklch(0.95 0.008 240)`
  - `--secondary-foreground`: `oklch(0.22 0.03 240)`
  - `--muted`: `oklch(0.96 0.005 80)`
  - `--muted-foreground`: `oklch(0.48 0.015 80)`
  - `--accent`: `oklch(0.94 0.01 240)`
  - `--accent-foreground`: `oklch(0.15 0.01 80)`
  - `--accent-2`: `oklch(0.55 0.16 340)`
  - `--accent-2-foreground`: `oklch(0.99 0.003 80)`
  - `--destructive`: `oklch(0.55 0.18 25)`
  - `--destructive-foreground`: `oklch(0.99 0.003 80)`
  - `--border`: `oklch(0.15 0.01 80 / 12%)`
  - `--input`: `oklch(0.15 0.01 80 / 16%)`
  - `--ring`: `oklch(0.22 0.03 240)`
  - `--chart-1`: `oklch(0.22 0.03 240)`
  - `--chart-2`: `oklch(0.55 0.16 340)`
  - `--chart-3`: `oklch(0.45 0.12 145)`
  - `--chart-4`: `oklch(0.60 0.14 85)`
  - `--chart-5`: `oklch(0.48 0.015 80)`
  - `--radius`: `0.7rem`
  - `--sidebar`: `oklch(0.98 0.003 80)`
  - `--sidebar-foreground`: `oklch(0.15 0.01 80)`
  - `--sidebar-primary`: `oklch(0.22 0.03 240)`
  - `--sidebar-primary-foreground`: `oklch(0.99 0.003 80)`
  - `--sidebar-accent`: `oklch(0.94 0.01 240)`
  - `--sidebar-accent-foreground`: `oklch(0.15 0.01 80)`
  - `--sidebar-border`: `oklch(0.15 0.01 80 / 12%)`
  - `--sidebar-ring`: `oklch(0.22 0.03 240)`
- In `.bg-grid`, replaced the white grid lines color `oklch(1 0 0 / 4%)` with the light neutral grid line color `oklch(0.15 0.01 80 / 4%)`.

## Build & Lint Verification Results

### Build Verification
- Command: `npm run build`
- Status: **Passed** (successfully compiled production build in 10.9s).
- Detail: No errors related to fonts or configuration.

### Lint Verification
- Command: `npx eslint src/app/layout.tsx`
- Status: **Passed** (0 errors, 0 warnings).
- Note: The general `npm run lint` command reports pre-existing lint issues in unrelated files (such as `src/components/home/hero.tsx` and custom hooks), but the modified files themselves have zero lint violations.
