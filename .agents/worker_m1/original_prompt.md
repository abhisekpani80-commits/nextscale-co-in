## 2026-07-03T16:30:28Z
Implement Milestone 1: Global Setup & Light Theme.
Your working directory is c:\Users\abhis_vrzof03\Documents\New folder\.agents\worker_m1.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Tasks:
1. Edit src/app/layout.tsx:
   - Import and instantiate Google Fonts 'Plus_Jakarta_Sans' (variable: '--font-plus-jakarta-sans') and 'Instrument_Serif' (variable: '--font-instrument-serif') from 'next/font/google'. Remove the 'Inter' import and declaration.
   - Inject these font variables as className props on the <html> element, alongside the mono.variable.
   - Remove the 'dark' class from the <html> tag's className.
   - Update the viewport themeColor to '#faf9f6' and colorScheme to 'light'.
2. Edit src/app/globals.css:
   - Map --font-sans to var(--font-plus-jakarta-sans) and --font-heading to var(--font-instrument-serif) in @theme inline.
   - Configure a clean, bright, premium light neutral color palette in both :root and .dark (so there is no dark override if the class is forced, as they will follow the light palette where the background is white/off-white, foreground is near-black, and primary/secondary colors support the light theme).
   - The OKLCH color variables under :root and .dark should be:
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
   - In .bg-grid, replace the white grid lines color oklch(1 0 0 / 4%) with oklch(0.15 0.01 80 / 4%).
3. Run npm run build and npm run lint. Make sure they compile and lint successfully.
4. Write your changes and run/build/lint results to 'changes.md' in your working directory and notify me.
