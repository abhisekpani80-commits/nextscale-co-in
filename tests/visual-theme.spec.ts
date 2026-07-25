import { test, expect } from '@playwright/test';

test.describe('Visual Theme & Aesthetics Tests', () => {

  test('Dynamic Google Fonts are loaded', async ({ page }) => {
    await page.goto('/');
    // Wait for fonts to fully load using the browser Font Loading API
    await page.evaluate(() => document.fonts.ready);
    await page.waitForSelector('h1', { state: 'attached', timeout: 5000 });
    await page.waitForTimeout(500);

    const fontApplied = await page.evaluate(() => {
      const h1 = document.querySelector('h1');
      const body = document.body;
      const h1Font = h1 ? window.getComputedStyle(h1).fontFamily : '';
      const bodyFont = window.getComputedStyle(body).fontFamily;
      return { h1Font, bodyFont };
    });

    expect(fontApplied.h1Font.toLowerCase()).toContain('plus jakarta sans');
    expect(fontApplied.bodyFont.toLowerCase()).toContain('inter');
  });

  test('Light neutral background (evaluating relative luminance)', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(500);

    const bgLuminances = await page.evaluate(() => {
      const sections = Array.from(document.querySelectorAll('section')).filter(s => {
        const bg = window.getComputedStyle(s).backgroundColor;
        // Exclude the blue stats bar section and the dark CTA section
        return !bg.includes('rgb(26, 86, 219)') && !bg.includes('rgb(15, 14, 13)');
      });
      
      const isLightColor = (rgbStr: string) => {
        const normalized = rgbStr.replace(/\s+/g, '').toLowerCase();
        if (normalized === 'rgba(0,0,0,0)' || normalized === 'transparent') return true; 
        const match = rgbStr.match(/\d+/g);
        if (!match) return false;
        const [r, g, b] = match.map(Number);
        const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
        return luminance > 0.8; 
      };

      return sections.map(s => {
        const bg = window.getComputedStyle(s).backgroundColor;
        return {
          selector: s.tagName + (s.className ? '.' + s.className.split(' ').join('.') : ''),
          bgColor: bg,
          isLight: isLightColor(bg)
        };
      });
    });

    for (const sec of bgLuminances) {
      expect(sec.isLight).toBe(true);
    }
  });

  test('Text contrast ratio check (>= 4.5:1)', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(500);

    const textContrastPassed = await page.evaluate(() => {
      // Only check elements that are actually visible to the user
      const elements = Array.from(document.querySelectorAll('h1, h2, h3, p')).filter(el => {
        const style = window.getComputedStyle(el);
        return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
      });

      const getLuminance = (r: number, g: number, b: number) => {
        const a = [r, g, b].map(v => {
          v /= 255;
          return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
        });
        return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
      };

      const getContrastRatio = (color1: string, color2: string) => {
        const match1 = color1.match(/\d+/g);
        const match2 = color2.match(/\d+/g);
        if (!match1 || !match2) return 1;

        const lum1 = getLuminance(Number(match1[0]), Number(match1[1]), Number(match1[2]));
        const lum2 = getLuminance(Number(match2[0]), Number(match2[1]), Number(match2[2]));

        const brightest = Math.max(lum1, lum2);
        const darkest = Math.min(lum1, lum2);
        return (brightest + 0.05) / (darkest + 0.05);
      };

      return elements.map(el => {
        const textColor = window.getComputedStyle(el).color;
        let currentEl: HTMLElement | null = el as HTMLElement;
        let bgColor = 'rgb(248, 247, 244)'; 
        while (currentEl) {
          const bg = window.getComputedStyle(currentEl).backgroundColor;
          if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
            bgColor = bg;
            break;
          }
          currentEl = currentEl.parentElement;
        }

        const ratio = getContrastRatio(textColor, bgColor);
        return {
          tag: el.tagName,
          text: el.textContent?.substring(0, 20),
          textColor,
          bgColor,
          ratio,
          contrastOk: ratio >= 4.5
        };
      });
    });

    for (const item of textContrastPassed) {
      if (!item.contrastOk) {
        console.log(`Contrast fail: ${item.tag} - "${item.text}" - Text: ${item.textColor}, Bg: ${item.bgColor}, Ratio: ${item.ratio}`);
      }
      expect(item.contrastOk).toBe(true);
    }
  });

  test('Lack of neon glows or dark-dominant sections', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(500);

    const stylingViolations = await page.evaluate(() => {
      const allElements = Array.from(document.querySelectorAll('*'));
      
      const isNeonColor = (colorStr: string) => {
        const match = colorStr.match(/\d+/g);
        if (!match) return false;
        const [r, g, b] = match.map(Number);
        const maxVal = Math.max(r, g, b);
        const minVal = Math.min(r, g, b);
        const saturation = maxVal > 0 ? (maxVal - minVal) / maxVal : 0;
        return maxVal > 220 && saturation > 0.85 && !(r === 255 && g === 255 && b === 255);
      };

      let violationsCount = 0;
      for (const el of allElements) {
        const style = window.getComputedStyle(el);
        const boxShadow = style.boxShadow;
        const textShadow = style.textShadow;
        if (boxShadow.includes('rgba(0, 0, 0') || boxShadow === 'none') {
          // Ok
        } else if (isNeonColor(boxShadow)) {
          violationsCount++;
        }

        if (textShadow !== 'none' && isNeonColor(textShadow)) {
          violationsCount++;
        }
      }
      return violationsCount;
    });

    expect(stylingViolations).toBe(0);
  });

  test('Lack of horizontal overflow scroll at widths 320px to 1440px', async ({ page }) => {
    const viewports = [320, 375, 768, 1024, 1280, 1440];
    
    for (const width of viewports) {
      await page.setViewportSize({ width, height: 800 });
      await page.goto('/');
      await page.waitForTimeout(300);

      const hasHorizontalScroll = await page.evaluate(() => {
        const docEl = document.documentElement;
        return docEl.scrollWidth > docEl.clientWidth;
      });

      expect(hasHorizontalScroll).toBe(false);
    }
  });

});
