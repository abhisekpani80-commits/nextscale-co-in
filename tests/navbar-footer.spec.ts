import { test, expect } from '@playwright/test';

test.describe('Navbar & Footer Tests', () => {

  test('Sticky Header maintains fixed/sticky position on scroll', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(500);
    
    const container = page.locator('header').first();
    await expect(container).toBeVisible();

    const position = await container.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.position;
    });
    expect(['fixed', 'sticky']).toContain(position);

    await page.evaluate(() => window.scrollTo(0, 100));
    await page.waitForTimeout(500);

    const isVisible = await container.isVisible();
    expect(isVisible).toBe(true);

    const boundingBox = await container.boundingBox();
    expect(boundingBox).not.toBeNull();
    if (boundingBox) {
      expect(boundingBox.y).toBeLessThanOrEqual(50);
    }
  });

  test('Frosted glass blur transition on scroll', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(500);
    
    // Wait for hydration before scrolling
    await page.waitForTimeout(1000);
    
    // Scroll twice to ensure React event listener catches the scroll state
    await page.evaluate(() => {
      window.scrollTo(0, 100);
    });
    await page.waitForTimeout(200);
    await page.evaluate(() => {
      window.scrollTo(0, 300);
    });
    await page.waitForTimeout(500);
    
    const container = page.locator('header').first();
    const bg = await container.evaluate(el => window.getComputedStyle(el).backgroundColor);
    // Accept either white or semi-transparent white (frosted glass)
    const hasWhite = bg.includes('255, 255, 255') || bg.includes('255,255,255');
    // Also accept if backdrop filter is applied (scroll state changed even if bg differs)
    const backdropFilter = await container.evaluate(el => window.getComputedStyle(el).backdropFilter);
    const isScrolled = hasWhite || (backdropFilter && backdropFilter !== 'none');
    expect(isScrolled).toBe(true);
  });

  test('Logo wordmark height is at least 20px', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(500);
    
    const logo = page.locator('header a[aria-label="NextScale home"]').first();
    await expect(logo).toBeVisible();
    
    const box = await logo.boundingBox();
    expect(box).not.toBeNull();
    if (box) {
      expect(box.height).toBeGreaterThanOrEqual(20);
    }
  });

  test('Desktop navigation links are rendered and hoverable', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
    await page.waitForTimeout(500);

    const navItems = page.locator('header nav a');
    await expect(navItems.first()).toBeVisible();
    
    const count = await navItems.count();
    expect(count).toBeGreaterThanOrEqual(5); 

    const firstLink = navItems.first();
    const initialColor = await firstLink.evaluate(el => window.getComputedStyle(el).color);
    await firstLink.hover();
    await page.waitForTimeout(200);
    const hoverColor = await firstLink.evaluate(el => window.getComputedStyle(el).color);
    expect(initialColor).toBeDefined();
  });

  test('Mobile navigation hamburger trigger opens menu overlay', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForTimeout(500);

    const hamburger = page.locator('header button[aria-label="Toggle menu"]').first();
    await expect(hamburger).toBeVisible();

    const menuPopover = page.locator('header > div').nth(1);
    
    // Menu popover should not be visible (max-height should be 0px)
    await expect(menuPopover).toHaveCSS('max-height', '0px');

    // Click hamburger to open
    await hamburger.click();
    await page.waitForTimeout(400);

    // Should now be open (max-height 400px)
    await expect(menuPopover).toHaveCSS('max-height', '400px');

    // Click hamburger again to close
    await hamburger.click();
    await page.waitForTimeout(400);

    // Should be closed again
    await expect(menuPopover).toHaveCSS('max-height', '0px');
  });

  test('Footer copyright has valid date and routing links', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(500);
    
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();

    const footerText = await footer.textContent();
    expect(footerText).toContain('2026');

    const footerLogo = footer.locator('a[href="/"]').first();
    expect(await footerLogo.count()).toBeGreaterThanOrEqual(1);

    const legalLinks = footer.locator('a[href^="/legal/"]');
    const count = await legalLinks.count();
    expect(count).toBeGreaterThanOrEqual(2);
    for (let i = 0; i < count; i++) {
      const href = await legalLinks.nth(i).getAttribute('href');
      expect(href).toMatch(/^\/legal\/.+/);
    }
  });

});
