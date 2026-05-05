import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.w3schools.com/');
});

test.afterEach(async () => {
  console.log("Test completed");
});

test('Check title', async ({ page }) => {
  await expect(page).toHaveTitle(/W3Schools Online Web Tutorials/);
});

test('Check heading visible', async ({ page }) => {
  await expect(page.locator('h1').nth(0)).toBeVisible();
});

test('Check URL', async ({ page }) => {
  await expect(page).toHaveURL('https://www.w3schools.com/');
});