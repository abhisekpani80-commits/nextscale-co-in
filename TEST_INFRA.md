# Nextscale E2E Test Infrastructure

This document describes the design, setup, configuration, and execution of the Playwright-based End-to-End (E2E) testing suite for the Nextscale website.

---

## 1. Playwright Configuration & WebServer

Playwright is configured via the root-level `playwright.config.ts` file to ensure tests run reliably and autonomously. 

### WebServer Config
A crucial part of the setup is the `webServer` block, which enables Playwright to spin up and tear down the Nextscale development server automatically prior to test execution:

```typescript
webServer: {
  command: 'npm run dev',
  url: 'http://localhost:3000',
  reuseExistingServer: !process.env.CI,
  stdout: 'ignore',
  stderr: 'pipe',
  timeout: 120000,
}
```

* **Command**: Starts the development server (`npm run dev`).
* **Url**: Monitors `http://localhost:3000` until it responds before commencing tests.
* **Reuse Existing Server**: Avoids launching a new instance if one is already running locally, saving developer time.
* **Timeout**: Built-in 2-minute safety grace period for the Next.js compilation.

---

## 2. Test Suite Directory Structure

All End-to-End tests are located under the root `tests/` directory:

```
nextscale/
├── tests/
│   ├── navbar-footer.spec.ts         # Verifies layout stability, responsive menus, blurred sticky bar, and logo
│   ├── hero.spec.ts                  # Verifies headline/subheadline typography, CTA buttons, and light styling
│   ├── services-work-process.spec.ts # Verifies layout dimensions, grid counts, asymmetrical project layout, and responsive collapse
│   ├── visual-theme.spec.ts          # Checks typography loads, contrast ratios, and lack of visual/neon styling violations
│   └── user-journeys.spec.ts         # Orchestrates complex interactive scenarios simulating real users
├── playwright.config.ts              # Root Playwright configuration
├── package.json                      # Dependency manifest
└── ...
```

---

## 3. Running Tests & Interpreting Results

### Commands

* **Run all tests**:
  ```bash
  npx playwright test
  ```
  This command will launch the development server, compile the application, execute all specs in headless browsers (Chromium, Firefox, WebKit), and report the results.

* **Run a specific spec**:
  ```bash
  npx playwright test tests/navbar-footer.spec.ts
  ```

* **Run in UI Mode** (Visual debugger):
  ```bash
  npx playwright test --ui
  ```

* **View Test Report**:
  ```bash
  npx playwright show-report
  ```

### Interpreting Output

Upon completion, Playwright outputs a summary to the console:

```
  5 passed (10s)
```

If a test fails, Playwright prints:
1. The failing spec file, name, and line number.
2. The exact assertion that failed (e.g. `expect(received).toBe(expected)`).
3. A visual trace or terminal snippet showing the mismatch.
4. The HTML report is automatically compiled into the `playwright-report/` directory and can be opened in any browser to inspect screenshots or step-by-step DOM traces.
