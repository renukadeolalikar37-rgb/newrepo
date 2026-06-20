import { test, expect } from '@playwright/test';

test('search on w3schools', async ({ page }) => {
  await page.goto('https://www.w3schools.com/');

  await page.locator('#search2').fill('Ramayan');
  await page.keyboard.press('Enter');

  await expect(page).toHaveURL(/w3schools/);
});