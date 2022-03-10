const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('https://www.acceptcookies.uk/');
  const title = page.locator('.container .newRecipe h1');
  await expect(title).toHaveText('Newest recipe');
});