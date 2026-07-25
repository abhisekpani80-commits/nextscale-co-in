# Scope: Milestone 1: Global Setup & Light Theme

## Architecture
- Global fonts and layout are managed inside `src/app/layout.tsx`.
- Global styles, variables, and themes are configured in `src/app/globals.css`.

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | Font Loading & Layout Adjustments | Load "Plus_Jakarta_Sans" and "Instrument_Serif" inside layout.tsx, map to CSS variables, remove Inter. Remove "dark" class from <html>. Adjust themeColor and colorScheme. | None | PLANNED |
| 2 | Global Styles and CSS Variables | Configure light neutral palette in :root in globals.css. Map --font-sans and --font-heading in `@theme inline`. Remove/override .dark theme. | M1.1 | PLANNED |

## Interface Contracts
### Font CSS Variables
- `--font-plus-jakarta-sans` / `--font-instrument-serif` must be injected into the `<html>` or `<body>` element.
- CSS properties `--font-sans` and `--font-heading` must be mapped to these CSS variables in `src/app/globals.css`.
