# E2E Test Strategy and Design: NextScale Landing Page Redesign

This document outlines the End-to-End (E2E) testing strategy, designed test cases across four distinct tiers, and verification methods for visual properties on the redesigned NextScale landing page.

---

## 1. Test Strategy Overview

We recommend **Playwright** as the E2E testing framework. Playwright is uniquely suited for NextScale's requirements for several reasons:
- **Multi-Browser Capability**: Out-of-the-box support for Chromium (Chrome/Edge), Firefox, and WebKit (Safari).
- **Responsive Viewport Testing**: Native device emulation (e.g., iPhone, Pixel, Desktop viewports from 320px to 1920px+).
- **Visual & Style Assertions**: Easily retrieves computed styles (fonts, colors, line heights) and supports screenshot visual comparisons.
- **Web Server Integration**: Automatically launches the local Next.js development or production server before running tests.

### Project Setup Instructions

1. **Install Playwright Dependency**:
   ```bash
   npm install -D @playwright/test
   ```
2. **Install Browsers and Dependencies**:
   ```bash
   npx playwright install --with-deps
   ```
3. **Configure Playwright (`playwright.config.ts`)**:
   Create a configuration file at the root of the project:
   ```typescript
   import { defineConfig, devices } from '@playwright/test';

   export default defineConfig({
     testDir: './tests',
     fullyParallel: true,
     forbidOnly: !!process.env.CI,
     retries: process.env.CI ? 2 : 0,
     workers: process.env.CI ? 1 : undefined,
     reporter: 'html',
     use: {
       baseURL: 'http://localhost:3000',
       trace: 'on-first-retry',
     },
     projects: [
       {
         name: 'chromium',
         use: { ...devices['Desktop Chrome'] },
       },
       {
         name: 'firefox',
         use: { ...devices['Desktop Firefox'] },
       },
       {
         name: 'webkit',
         use: { ...devices['Desktop Safari'] },
       },
       {
         name: 'Mobile Chrome',
         use: { ...devices['Pixel 5'] },
       },
       {
         name: 'Mobile Safari',
         use: { ...devices['iPhone 12'] },
       },
     ],
     webServer: {
       command: 'npm run dev',
       url: 'http://localhost:3000',
       reuseExistingServer: !process.env.CI,
     },
   });
   ```
4. **Create Directory for Tests**:
   Create a `tests/` directory at the project root:
   ```bash
   mkdir tests
   ```

---

## 2. Test Case Specifications (Tiers 1–4)

### Tier 1: Feature Coverage
Verify that each individual section of the redesigned page complies with functional and style requirements. (At least 5 cases per feature).

#### A. Navbar / Navigation
1. **Sticky Header Behavior**: Verify that the navbar maintains a fixed/sticky position (`position: fixed` or `sticky`) at the top of the viewport when the page is scrolled down.
2. **Frosted Glass Blur Transition**: Verify that scrolling the page past 20px activates the scrolled state (adds the `is-scrolled` class or equivalent tailwind styling) and applies a frosted glass backdrop filter (`backdrop-filter` containing `blur`).
3. **Logo Wordmark & Sizing**: Verify that the wordmark logo is visible and scales correctly, ensuring its render height is at least 20px.
4. **Desktop Navigation Links**: Verify that all primary navigation links listed in site config (`/products`, `/services`, `/contact`, etc.) are rendered in the desktop view, display hover interactions (underline, opacity, or sliding pill background), and resolve to the correct URLs when clicked.
5. **Mobile Navigation Trigger**: Verify that the hamburger button is visible on mobile viewports (<= 768px) and hidden on desktop viewports. Confirm clicking it opens the mobile menu overlay.

#### B. Hero Section
1. **Commanding Headline Rendering**: Verify the primary headline exists, utilizes the **Instrument Serif** font family, and is visually readable.
2. **Mobile Headline Minimum Sizing**: Verify that on viewports under 768px, the primary headline has a minimum font size of `32px`.
3. **Sub-headline Word Count & Typography**: Verify that the sub-headline uses the **Plus Jakarta Sans** font family, contains exactly 8 to 12 words, and does not contain long paragraph copy.
4. **Primary CTA Button**: Verify that there is exactly one prominent, styling-compliant CTA button with micro-interactions (e.g., arrow shift or translate on hover).
5. **Background Integrity**: Verify that the background is either a premium textural/geometric layout or subtle CSS graphic, and is free of dark-dominant sections or glowing neon colors.

#### C. Services Grid
1. **Grid Count & Content**: Verify that there are 3 to 4 offerings in the services section and each card contains a brief description limited to 1 or 2 sentences.
2. **Responsive Column Collapse**: Verify that the services grid displays in 3 or 4 columns on desktop viewports (>= 1280px) and collapses into a single column layout on mobile viewports (<= 768px).
3. **Micro-interactions (Card Lifts)**: Verify that hovering over a service card triggers a vertical lift (e.g., translation upwards by a few pixels) or border fade transition.
4. **Typography & Styling**: Verify that card headers use Instrument Serif and card description body text uses Plus Jakarta Sans.
5. **Icon Consistency**: Verify that each card features a clean, single-color minimal vector icon that matches the premium visual identity.

#### D. Selected Work Layout
1. **Editorial Asymmetrical Grid**: Verify that the selected work section displays 2 to 3 projects styled in an asymmetrical layout with cards of different sizes on desktop.
2. **Responsive Single Column**: Verify that the selected work section collapses into a single column layout on viewports under 768px.
3. **Client Metric Highlighting**: Verify that each project features clean typographic callouts highlighting specific business results (e.g., "500+ active users", "responded in 42 sec").
4. **Navigation Links**: Verify that each project card links to its corresponding portfolio page or live preview and functions correctly.
5. **Image Load & Layout Stability**: Verify that project card images have predefined dimensions to prevent Layout Shifts (CLS) on load.

#### E. Process Steps
1. **Horizontal Spatial Flow**: Verify that the 3 to 4 process steps are rendered horizontally on desktop viewports (>= 1024px) to represent spatial design.
2. **Responsive Column Collapse**: Verify that the steps collapse to a vertical, single-column layout on mobile viewports (<= 768px).
3. **Step Labels & Spacing**: Verify that step cards include clear typographic numbering (e.g., "01", "02", "03") and have consistent spacing between blocks.
4. **Layout Connectors**: Verify that horizontal visual connections between steps are displayed on desktop viewports and hidden/repositioned on mobile viewports.
5. **Process Content Veracity**: Verify that each step has a clean title using Instrument Serif and body details in Plus Jakarta Sans.

#### F. About / Founder
1. **Solo-run Positioning Copy**: Verify the presence of the brief about section containing copy highlighting NextScale's agile, solo-run engineering positioning.
2. **Typography Application**: Verify that body texts use Plus Jakarta Sans and heading tags use Instrument Serif.
3. **Visual Aesthetics (Light Theme)**: Verify that the background and contrast ratios match the light neutral theme.
4. **Call-to-Action Link**: Verify the presence of an active link/button pointing to the founder's profiles or contacts.
5. **Touch Targets**: Verify that all interactive links or buttons in this section meet the minimum touch target requirement of 44x44px.

#### G. Footer
1. **Single Line Layout**: Verify that on desktop viewports, the footer elements (minimal wordmark, copyright notice, legal links) are displayed in a clean single line.
2. **Responsive Column stacking**: Verify that on mobile viewports (<= 768px), the footer elements wrap or stack cleanly without overlapping text.
3. **Minimal Brand Mark**: Verify that the minimal NextScale logo wordmark is present, matches the light theme style, and does not exceed 20px in rendering height.
4. **Legal & Social Links Routing**: Verify that footer links (e.g., Terms, Privacy, contact) have valid `href` attributes and route correctly.
5. **Copyright Date Validity**: Verify that the footer copyright notice renders the current calendar year.

#### H. Color / Typography Theme
1. **Google Fonts Dynamic Import**: Verify that the fonts are correctly resolved as `Instrument Serif` (headings) and `Plus Jakarta Sans` (body/sans) by inspecting the DOM stylesheet nodes or checking CSS variable values.
2. **Light neutral background**: Verify that all main sections utilize light backgrounds (e.g., off-white, light gray, or pure white) with a lightness value `L > 0.9` in OKLCH or `RGB` equivalents.
3. **Premium Typography Tracking**: Verify that heading tags have tight tracking (`letter-spacing` set to negative values, e.g., `-0.02em` or `tracking-tight`).
4. **High Contrast Ratios**: Verify that the text contrast between foreground text (dark gray/black) and background (light neutral) is >= 4.5:1 to meet accessibility standards.
5. **No Glow/Accents Violation**: Verify that the styles are free of neon glows, electric blue shadows, purple glows, or dark-dominant sections.

---

### Tier 2: Boundary & Corner Cases
Verify that the design handles extreme conditions, responsive boundaries, and edge states without breaking.

#### A. Viewports & Breakpoints
1. **Extreme Narrow Viewport (320px)**: Navigate the site at a width of 320px (e.g., iPhone SE/older phones). Assert that no text wraps into illegible vertical lines, and no horizontal scrollbar is present.
2. **Breakpoint Transition Boundaries (767px vs 768px)**: Assert that navigation, grids, and layouts transition cleanly between desktop and mobile formats at exactly 768px.
3. **Breakpoint Transition Boundaries (1023px vs 1024px)**: Assert that process steps transition smoothly from horizontal to vertical format.
4. **Ultra-Wide Viewport (1920px+)**: Set viewport to 1920x1080 and 2560x1440. Verify that the max-width container wraps content properly and maintains central alignment without breaking grids.
5. **Fluid Scale Constraints**: Zoom browser content up to 200%. Verify that navigation controls remain selectable and sections do not overlap.

#### B. Scroll & Positioning Boundaries
1. **Instant Top Scroll (Y = 0)**: Verify that when the user scrolls back to the exact top of the page, the scrolled class/styling on the navbar is immediately removed, returning to transparent/unblurred.
2. **Extreme Scroll Speed Layouts**: Simulate fast vertical scrolling using Playwright's mouse actions. Verify that elements dynamically animating in the viewport do not cause lagging, frame rate drops, or layout shifting.
3. **Absolute Bottom Scroll Boundary**: Scroll to the absolute bottom of the page. Verify that the footer doesn't clip, float incorrectly, or overlap with the sticky WhatsApp link or cookies consent banners.
4. **Anchor Jump Precision**: Click on an anchor navigation link (e.g., #services). Verify that the page scrolls and aligns the target section at the appropriate offset, compensating for the sticky navbar height.
5. **Scroll lock on Mobile Menu open**: Open the mobile menu. Assert that scrolling the body text behind the overlay is disabled to prevent user disorientation.

#### C. Touch Targets & Interaction Boundaries
1. **Minimum Touch Area (44x44px)**: Loop through all interactive buttons and link tags on the page and assert that their bounding box has a height and width of at least `44px`.
2. **Adjoining Target Spacing**: For closely grouped interactive elements (like social links in the footer or nav items), assert that they are separated by at least `8px` of space to prevent accidental taps.
3. **Double Tapping / Fast Clicks**: Repeatedly click a button or navigation link in quick succession. Verify that it doesn't fire redundant navigation requests or trigger layout state glitches.
4. **Keyboard Accessibility Focus Borders**: Tab through the landing page. Assert that every interactive element shows a clear, high-contrast focus ring for accessibility.
5. **No Hover Emulation on Mobile**: Verify that hover-only elements (like lifts and slide transitions) are safely bypassed on mobile viewports (e.g., using `@media (hover: hover)`) to avoid stuck hover styles.

#### D. Content Limits & Typographic Wrapping
1. **Dynamic Year Verification**: Mock the client system time to future years (e.g., 2027, 2030) and verify that the footer copyright automatically updates.
2. **Service Copy Overflow**: Inject a mock description that is longer than the 1-2 sentence guideline. Verify that the grid box wraps text cleanly without clipping or breaking alignment with adjacent grids.
3. **Headline Truncation**: Verify that the main headline does not truncate or overflow on extremely narrow viewports (320px).
4. **Image Load Failures**: Mock a failed response for project images. Verify that the layout remains stable, utilizes fallback background colors, and keeps text readable.
5. **Empty State / No Proof Items**: Mock the portfolio list to return 0 featured projects. Verify that the selected work section handles this state gracefully (e.g., collapses or displays a elegant empty placeholder).

---

### Tier 3: Cross-Feature Combinations
Verify that features interacting simultaneously behave correctly.

1. **Sticky Navbar Scroll + Mobile Nav Menu Open**: Scroll down the page by 100px (navbar goes into `is-scrolled` state with backdrop blur), then open the mobile menu. Verify that the mobile overlay blends seamlessly with the backdrop filter without double blurs or layout glitches.
2. **Mobile Menu Expansion + Screen Size Change**: Open the mobile menu on a mobile screen size, then resize the browser window to desktop size. Verify that the mobile menu automatically closes, standard navigation returns, and background scroll locks are disabled.
3. **Framer Motion Viewport Animations + User Fast Scroll**: Trigger scroll-based fade-in/slide-up animations on viewport entry while scrolling fast. Verify that elements animate smoothly and reach their final opacity/position without getting stuck in a semi-transparent state.
4. **Hover Micro-Interactions + Concurrent CTA Clicking**: Hover over a service grid card (triggering scale/lift transition) and immediately click the primary CTA. Verify that the hover state doesn't intercept or delay the navigation event.
5. **Cookie Consent Banner + Sticky Contact Floats**: Expand the Cookie Consent Banner on mobile viewports. Verify that it does not overlap or obscure critical actions like the sticky WhatsApp button, nor does it push footer elements out of bounds.
6. **Main Hero CTA Click + Immediate Scroll Anchor Navigation**: Click a navigation item that jumps to a section on the page (e.g., Services) and check that the page scrolls smoothly while the sticky navbar updates its visual scrolled class without visual stutter.

---

### Tier 4: Real-World Application Scenarios
End-to-End user flows that replicate actual visitor journeys.

#### Scenario 1: Desktop Discovery and Build Review Request
- **User Actions**:
  1. User lands on page (`/`) on a 1440x900 viewport.
  2. Waits for entrance animations to complete.
  3. Hovers over navbar links (verifies active indicator and hover circles).
  4. Scrolls down past hero (verifies navbar transitions to sticky blurred glass state).
  5. Reviews the Stats Bar / Trust Bar.
  6. Scrolls through Services grid, hovering over cards to trigger lift animations.
  7. Scrolls through Selected Work, reviewing metric results.
  8. Follows the Process Steps (01, 02, 03) horizontally.
  9. Reads About / Founder details.
  10. Clicks the closing CTA button ("Start a build review").
- **Assertions**:
  - URL redirects to `/contact`.
  - No visual page layout shifts occurred during the journey.
  - Light theme typography and colors persisted.

#### Scenario 2: Mobile Navigation and WhatsApp Initiation
- **User Actions**:
  1. User accesses the site on a mobile device (375px width).
  2. Verifies primary headline size is >= 32px and wraps cleanly.
  3. Clicks the navbar hamburger icon (verifies mobile menu pops open).
  4. Click "Services" link in menu (mobile menu closes, page scrolls down to services).
  5. User scrolls down and clicks "WhatsApp the workflow" CTA.
- **Assertions**:
  - The WhatsApp link resolves to a valid URL containing the correct phone number and pre-filled text.
  - Page scroll behavior is smooth, and touch target sizes are all >= 44px.

#### Scenario 3: Legal Compliance and Page Layout Validation
- **User Actions**:
  1. User lands on page.
  2. The Cookie Consent popup appears at the bottom.
  3. User reviews the legal links in the footer (clicks "Privacy Policy").
  4. Returns to home page and clicks "Accept" on cookie consent banner.
- **Assertions**:
  - Cookie consent banner disappears.
  - Page does not exhibit horizontal scrolling.
  - Fonts and colors adhere to constraints throughout the entire flow.

---

## 3. Visual Properties Verification Guidelines (Playwright Code)

The following Playwright assertions can be used by the implementer to programmatically verify visual constraints.

### A. Verifying Light Theme Colors
To assert that the theme uses a premium light palette and does not have dark-dominant sections:
```typescript
import { test, expect } from '@playwright/test';

test('Verify page has a light theme background', async ({ page }) => {
  await page.goto('/');
  
  // Verify HTML does not contain 'dark' class if light theme is enforced
  const htmlClassList = await page.locator('html').getAttribute('class');
  expect(htmlClassList).not.toContain('dark');

  // Verify computed background color of body is light (high lightness)
  const bgColor = await page.evaluate(() => {
    const style = window.getComputedStyle(document.body);
    return style.backgroundColor; // returns rgb(r, g, b)
  });

  // Helper to parse rgb/rgba and check lightness
  const isLightColor = (rgbStr: string) => {
    const match = rgbStr.match(/\d+/g);
    if (!match) return false;
    const [r, g, b] = match.map(Number);
    // Simple relative luminance formula
    const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    return luminance > 0.85; // Light backgrounds have high luminance
  };

  expect(isLightColor(bgColor)).toBe(true);
});
```

### B. Verifying Custom Typography Pairing
To assert that headings use `Instrument Serif` and body text uses `Plus Jakarta Sans`:
```typescript
test('Verify Typography Pairing is Applied', async ({ page }) => {
  await page.goto('/');
  
  // Verify heading font (Instrument Serif)
  const headingFont = await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    return h1 ? window.getComputedStyle(h1).fontFamily : '';
  });
  expect(headingFont).toContain('Instrument Serif');

  // Verify body/sans font (Plus Jakarta Sans)
  const bodyFont = await page.evaluate(() => {
    return window.getComputedStyle(document.body).fontFamily;
  });
  expect(bodyFont).toContain('Plus Jakarta Sans');
});
```

### C. Verifying Touch Target Sizes (>= 44px)
To verify that all mobile buttons and links are easy to tap:
```typescript
test('Verify interactive touch target sizes on mobile', async ({ page }) => {
  // Emulate mobile viewport
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/');

  // Query all visible buttons, links, and text inputs
  const interactiveElements = await page.locator('button:visible, a:visible, input:visible').all();

  for (const element of interactiveElements) {
    const box = await element.boundingBox();
    if (box) {
      // Allow minor exception for inline links if needed, but primary controls must be >= 44px
      const isInline = await element.evaluate(el => {
        const style = window.getComputedStyle(el);
        return style.display === 'inline';
      });

      if (!isInline) {
        expect(box.width).toBeGreaterThanOrEqual(44);
        expect(box.height).toBeGreaterThanOrEqual(44);
      }
    }
  }
});
```

### D. Verifying Lack of Horizontal Overflow (No Horizontal Scroll)
To verify that the layout does not break horizontally at any viewport width (tested down to 320px):
```typescript
test('Verify no horizontal overflow/scroll across viewports', async ({ page }) => {
  const widths = [320, 375, 768, 1024, 1280, 1440];

  for (const width of widths) {
    await page.setViewportSize({ width, height: 800 });
    await page.goto('/');
    
    // Evaluate if document scrollWidth is greater than clientWidth
    const hasHorizontalOverflow = await page.evaluate(() => {
      const docEl = document.documentElement;
      return docEl.scrollWidth > docEl.clientWidth;
    });

    expect(hasHorizontalOverflow).toBe(false);
  }
});
```

---

## 4. Instructions for the Implementer

1. **Prerequisites**: Ensure the Next.js server is capable of compiling and launching before running tests. Make sure you run `npm run build` once to guarantee type safety.
2. **Implementation Folder**: Place all Playwright tests under the root `/tests` directory. For clarity, group them into descriptive files:
   - `/tests/navbar-footer.spec.ts`
   - `/tests/hero.spec.ts`
   - `/tests/services-work-process.spec.ts`
   - `/tests/visual-theme.spec.ts`
   - `/tests/user-journeys.spec.ts`
3. **Execution**:
   - Run tests headless: `npx playwright test`
   - Run in interactive UI mode: `npx playwright test --ui`
   - Check HTML reports: `npx playwright show-report`
