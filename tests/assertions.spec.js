import { test, expect } from '@playwright/test';

test('practice all assertions on saucedemo', async ({ page }) => {

  // 🔹 1. Open website
  await page.goto('https://www.saucedemo.com/');

  // 🔹 2. Title Assertion
  await expect(page).toHaveTitle(/Swag Labs/);

  // 🔹 3. Visibility Assertion
  await expect(page.locator('#user-name')).toBeVisible();
  await expect(page.locator('#password')).toBeVisible();

  // 🔹 4. Fill form
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');

  // 🔹 5. Button Enabled Assertion
  await expect(page.locator('#login-button')).toBeEnabled();

  // 🔹 6. Click button
  await page.locator('#login-button').click();

  // 🔹 7. URL Assertion
  await expect(page).toHaveURL(/inventory/);

  // 🔹 8. Text Assertion
  await expect(page.locator('.title')).toHaveText('Products');

  // 🔹 9. Element Count Assertion
  const items = page.locator('.inventory_item');
  await expect(items).toHaveCount(6);

  
});