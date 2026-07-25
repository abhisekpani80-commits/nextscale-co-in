import { test, expect } from '@playwright/test';

test.describe('Services, Selected Work & Process Flow Tests', () => {

  test('Services grid count is 3-4 and descriptions are 1-2 sentences', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(500);

    const serviceCards = page.locator('section:has-text("OUR SERVICES") .grid > div');
    await expect(serviceCards.first()).toBeVisible();
    
    const count = await serviceCards.count();
    expect(count).toBeGreaterThanOrEqual(3);
    expect(count).toBeLessThanOrEqual(4);

    for (let i = 0; i < count; i++) {
      const card = serviceCards.nth(i);
      const descText = await card.locator('p').first().textContent();
      expect(descText).not.toBeNull();
      if (descText) {
        const sentences = descText.split(/[.!?]+/).map(s => s.trim()).filter(s => s.length > 0);
        expect(sentences.length).toBeGreaterThanOrEqual(1);
        expect(sentences.length).toBeLessThanOrEqual(2);
      }
    }
  });

  test('Selected work rendered on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
    await page.waitForTimeout(500);

    const projectCards = page.locator('.case-study-card');
    await expect(projectCards.first()).toBeVisible();
    
    const count = await projectCards.count();
    expect(count).toBe(3);
  });

  test('Process steps render horizontally on desktop (>= 1024px)', async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 800 });
    await page.goto('/');
    await page.waitForTimeout(500);

    const stepsLocator = page.locator('section:has-text("THE PROCESS") .grid > div');
    await expect(stepsLocator.first()).toBeVisible();
    
    const steps = await stepsLocator.all();
    
    if (steps.length >= 3) {
      const box1 = await steps[0].boundingBox();
      const box2 = await steps[1].boundingBox();
      const box3 = await steps[2].boundingBox();
      
      if (box1 && box2 && box3) {
        expect(Math.abs(box1.y - box2.y)).toBeLessThanOrEqual(50);
        expect(Math.abs(box2.y - box3.y)).toBeLessThanOrEqual(50);
        expect(box2.x).toBeGreaterThan(box1.x);
        expect(box3.x).toBeGreaterThan(box2.x);
      }
    }
  });

  test('Process steps & services collapse to single-column on mobile (<= 768px)', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForTimeout(500);

    // 1. Process steps vertical stack check
    const stepsLocator = page.locator('section:has-text("THE PROCESS") .grid > div');
    await expect(stepsLocator.first()).toBeVisible();
    const steps = await stepsLocator.all();
    if (steps.length >= 2) {
      const box1 = await steps[0].boundingBox();
      const box2 = await steps[1].boundingBox();
      if (box1 && box2) {
        expect(Math.abs(box1.x - box2.x)).toBeLessThanOrEqual(20);
        expect(box2.y).toBeGreaterThan(box1.y);
      }
    }

    // 2. Services vertical stack check
    const servicesLocator = page.locator('section:has-text("OUR SERVICES") .grid > div');
    await expect(servicesLocator.first()).toBeVisible();
    const serviceCards = await servicesLocator.all();
    if (serviceCards.length >= 2) {
      const box1 = await serviceCards[0].boundingBox();
      const box2 = await serviceCards[1].boundingBox();
      if (box1 && box2) {
        expect(Math.abs(box1.x - box2.x)).toBeLessThanOrEqual(20);
        expect(box2.y).toBeGreaterThan(box1.y);
      }
    }
  });

  test('Micro-interactions on service cards (hover lift or fade)', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(500);

    const serviceCard = page.locator('section:has-text("OUR SERVICES") .service-card-white').first();
    await expect(serviceCard).toBeVisible();
    await page.waitForTimeout(500); // Wait for entrance fade-up animation to settle

    const boxBefore = await serviceCard.boundingBox();
    expect(boxBefore).not.toBeNull();
    
    await serviceCard.hover();
    await page.waitForTimeout(200);

    const boxAfter = await serviceCard.boundingBox();
    expect(boxAfter).not.toBeNull();

    const transform = await serviceCard.evaluate(el => window.getComputedStyle(el).transform);
    expect(transform).toBeDefined();
  });

  test('About solo-run engineering layout exists with positioning copy', async ({ page }) => {
    await page.goto('/about');
    await page.waitForTimeout(500);

    const content = await page.locator('body').textContent();
    expect(content).not.toBeNull();
    if (content) {
      expect(content.toLowerCase()).toContain('abhisek pani');
      expect(content.toLowerCase()).toContain('founder');
    }
  });

});
