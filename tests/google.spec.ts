import { test, expect } from '@playwright/test';

test('Open demoBlaze website', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await expect(page).toHaveTitle(/STORE/);

});