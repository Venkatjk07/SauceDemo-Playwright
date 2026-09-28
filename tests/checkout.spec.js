const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const ProductsPage = require('../pages/ProductsPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');

const testData = require('../test-data/testData');

test('Complete Checkout', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Login
  await loginPage.open();

  await loginPage.login(
    testData.validUser,
    testData.validPassword
  );

  // Verify Products page
  await productsPage.verifyProductsPage();

  // Add product
await productsPage.addBackpack();

// Open cart
await cartPage.openCart();

  // Start checkout
  await checkoutPage.startCheckout();

  // Enter customer information
  await checkoutPage.enterCustomerInformation(
    testData.firstName,
    testData.lastName,
    testData.postalCode
  );

  // Continue to overview
  await checkoutPage.continueToOverview();

  // Verify checkout overview
  await expect(
    page.getByText('Checkout: Overview', { exact: true })
  ).toBeVisible();

  // Finish checkout
  await checkoutPage.finishCheckout();

  // Verify checkout is complete
  await expect(
    page.getByText('Checkout: Complete!', { exact: true })
  ).toBeVisible();

});


test('Verify Order Confirmation', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Login
  await loginPage.open();

  await loginPage.login(
    testData.validUser,
    testData.validPassword
  );

  // Verify Products page
  await productsPage.verifyProductsPage();

  // Add product
  await page.locator('#add-to-cart-sauce-labs-backpack').click();

  // Open cart
  await cartPage.openCart();

  // Start checkout
  await checkoutPage.startCheckout();

  // Enter customer information
  await checkoutPage.enterCustomerInformation(
    testData.firstName,
    testData.lastName,
    testData.postalCode
  );

  // Continue to overview
  await checkoutPage.continueToOverview();

  // Finish order
  await checkoutPage.finishCheckout();

  // Verify order confirmation
  await expect(
    page.getByText('Thank you for your order!')
  ).toBeVisible();

});