const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const MenuPage = require('../pages/MenuPage');
const testData = require('../test-data/testData');

test('Logout', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const menuPage = new MenuPage(page);

  // Login
  await loginPage.open();

  await loginPage.login(
    testData.validUser,
    testData.validPassword
  );

  // Open menu
  await menuPage.openMenu();

  // Logout
  await menuPage.logout();

  // Verify user is back on login page
  await expect(page).toHaveURL(/saucedemo.com/);

  // Verify Login button is visible
  await expect(
    page.getByRole('button', { name: 'Login' })
  ).toBeVisible();

});