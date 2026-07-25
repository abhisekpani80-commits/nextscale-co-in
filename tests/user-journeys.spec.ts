import { test, expect } from '@playwright/test';

test.describe('Real-World User Journey Scenarios', () => {

  test('Scenario 1: Desktop Discovery and Build Review Request', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    await page.waitForTimeout(1000);

    const navItems = page.locator('header nav a');
    const firstLink = navItems.first();
    await expect(firstLink).toBeVisible();
    await firstLink.hover();
    await page.waitForTimeout(200);

    await page.evaluate(() => window.scrollTo(0, 400));
    await page.waitForTimeout(500);

    const navContainer = page.locator('header').first();
    const bg = await navContainer.evaluate(el => window.getComputedStyle(el).backgroundColor);
    expect(bg).toContain('255, 255, 255');

    const statsBar = page.locator('section:has-text("live"), section:has-text("reply")').first();
    if (await statsBar.count() > 0) {
      await expect(statsBar).toBeVisible();
    }

    const serviceCard = page.locator('.service-card-white').first();
    if (await serviceCard.count() > 0) {
      await serviceCard.scrollIntoViewIfNeeded();
      await serviceCard.hover();
      await page.waitForTimeout(200);
    }

    const selectedWorkSection = page.locator('section:has-text("results"), section:has-text("deliverables")').first();
    if (await selectedWorkSection.count() > 0) {
      await selectedWorkSection.scrollIntoViewIfNeeded();
      await expect(selectedWorkSection).toBeVisible();
    }

    const processSteps = page.locator('section:has-text("THE PROCESS") .grid > div');
    if (await processSteps.count() > 0) {
      await processSteps.first().scrollIntoViewIfNeeded();
      await expect(processSteps.first()).toBeVisible();
    }

    const aboutLink = page.locator('header a[href="/about"]').first();
    if (await aboutLink.count() > 0) {
      await aboutLink.scrollIntoViewIfNeeded();
      await expect(aboutLink).toBeVisible();
    }

    const closingCta = page.locator('a[href="/contact"]').last();
    await expect(closingCta).toBeVisible();
    await closingCta.click();
    await page.waitForURL('**/contact');

    expect(page.url()).toContain('/contact');
  });

  test('Scenario 2: Mobile Navigation and WhatsApp Initiation', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForTimeout(1000);

    const headline = page.locator('h1');
    await expect(headline).toBeVisible();
    await page.waitForTimeout(500); // Wait for styles to compute
    const fontSizeStr = await headline.evaluate(el => window.getComputedStyle(el).fontSize);
    expect(parseFloat(fontSizeStr)).toBeGreaterThanOrEqual(32);

    const hamburger = page.locator('header button[aria-label="Toggle menu"]').first();
    await expect(hamburger).toBeVisible();
    await hamburger.click();
    await page.waitForTimeout(400);

    const mobileMenu = page.locator('header > div').nth(1);
    await expect(mobileMenu).toHaveCSS('max-height', '400px');

    const servicesLink = mobileMenu.locator('nav a[href="/services"]').first();
    await expect(servicesLink).toBeVisible();
    await servicesLink.click();
    await page.waitForURL('**/services');

    expect(page.url()).toContain('/services');

    await page.goto('/');
    await page.waitForTimeout(1000);

    // Filter to only select the visible WhatsApp float button on mobile
    const waCTA = page.locator('a[href*="wa.me"]').filter({ visible: true }).first();
    await expect(waCTA).toBeVisible();
    
    const href = await waCTA.getAttribute('href');
    expect(href).toContain('wa.me');
    expect(href).toContain('919556436685'); 
  });

  test('Scenario 3: Legal Compliance and Page Layout Validation', async ({ page }) => {
    await page.context().clearCookies();
    await page.goto('/');
    await page.waitForTimeout(2000);

    // Use getByRole for reliable dialog match
    const consentPopup = page.getByRole('dialog', { name: 'Cookie consent' });
    await expect(consentPopup).toBeVisible();

    const privacyLink = page.locator('footer a[href="/legal/privacy"]').first();
    await expect(privacyLink).toBeVisible();
    await privacyLink.click();
    await page.waitForURL('**/legal/privacy');
    expect(page.url()).toContain('/legal/privacy');

    await page.goto('/');
    await page.waitForTimeout(2000); 
    
    const acceptBtn = consentPopup.locator('button:has-text("Accept")').first();
    await expect(acceptBtn).toBeVisible();
    await acceptBtn.click();
    await page.waitForTimeout(500);

    await expect(consentPopup).not.toBeVisible();
  });

});
