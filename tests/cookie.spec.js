const { test, expect } = require('@playwright/test');

test('my test', async ({ page }) => {
    await page.goto('https://www.acceptcookies.uk/1biscuits/chocolateChipCookies.html');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Chocolate Chip Cookies/);

    // Expect an attribute "to be strictly equal" to the value.
    await expect(page.locator('text=Home').first()).toHaveAttribute('href', '../index.html');

    await page.click('text=Home');
    // Expect some text to be visible on the page.
    await expect(page.locator('text=All my recipes in one place').first()).toBeVisible();
});