const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const ProductsPage = require('../pages/ProductsPage');
const testData = require('../test-data/testData');

test('Verify Products Page', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  // Login
  await loginPage.open();

  await loginPage.login(
    testData.validUser,
    testData.validPassword
  );

  // Verify Products page
  await productsPage.verifyProductsPage();

  // Verify Products heading
  await expect(
    productsPage.productsHeading
  ).toBeVisible();

  // Verify product list
  await expect(
    productsPage.productItems
  ).toHaveCount(6);

});