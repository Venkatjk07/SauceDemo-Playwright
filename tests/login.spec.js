const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const testData = require('../test-data/testData');

test('Valid Login', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.open();

  await loginPage.login(
    testData.validUser,
    testData.validPassword
  );

  await expect(page).toHaveURL(/inventory.html/);

  await expect(
    page.getByText('Products', { exact: true })
  ).toBeVisible();

});

//invalid login test
test('Verify invalid login', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.open();

  await loginPage.login(
    testData.invalidUser,
    testData.invalidPassword
  );

  await expect(
    loginPage.errorMessage
  ).toContainText(
    'Username and password do not match any user in this service'
  );

});