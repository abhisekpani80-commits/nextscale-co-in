## 2026-07-03T13:37:27Z
You are the Milestone 1 Sub-orchestrator. Your working directory is c:\Users\abhis_vrzof03\Documents\New folder\.agents\sub_orch_m1.
Your mission is to execute Milestone 1: Global Setup & Light Theme.
Scope:
1. Load Google Fonts "Plus_Jakarta_Sans" and "Instrument_Serif" inside c:\Users\abhis_vrzof03\Documents\New folder\src\app\layout.tsx and remove Inter. Inject them as CSS variables.
2. Update c:\Users\abhis_vrzof03\Documents\New folder\src\app\globals.css:
   - Map --font-sans to var(--font-plus-jakarta-sans) and --font-heading to var(--font-instrument-serif) in @theme inline.
   - Configure a clean, bright, premium light neutral color palette in :root. Remove the .dark theme colors or map them to follow the light palette (so the background is white/off-white, foreground is near-black, and primary/secondary colors support the light theme).
3. Remove the "dark" class from the root <html> tag in layout.tsx. Adjust viewport themeColor to a light color (e.g. white/gray) and colorScheme to "light".
4. Run the iteration loop:
   - Spawn an Explorer to analyze the target files and design the light theme color mappings.
   - Spawn a Worker to apply the changes, run build/tests, and verify the layout. Remember to include the MANDATORY INTEGRITY WARNING in the worker's prompt.
   - Spawn a Reviewer to verify correctness, visual style, and layout compliance.
   - Run Forensic Auditor to ensure no integrity violations.
5. Once the gate passes, mark this milestone as done in c:\Users\abhis_vrzof03\Documents\New folder\PROJECT.md.
6. Write a handoff report at c:\Users\abhis_vrzof03\Documents\New folder\.agents\sub_orch_m1\handoff.md and report completion to the parent Project Orchestrator (conversation ID: 1440f876-8887-40d8-819e-ee9225da2dd6).
