const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const ProductsPage = require('../pages/ProductsPage');
const CartPage = require('../pages/CartPage');

const testData = require('../test-data/testData');

test('Add Two Products to Cart', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  // Login
  await loginPage.open();

  await loginPage.login(
    testData.validUser,
    testData.validPassword
  );

  // Verify Products page
  await productsPage.verifyProductsPage();

  // Add first product
await productsPage.addBackpack();

// Add second product
await productsPage.addBikeLight();

  // Verify cart badge shows 2
  await expect(
    cartPage.cartBadge
  ).toHaveText('2');

  // Open cart
  await cartPage.openCart();

  // Verify both products are in cart
  await expect(
    cartPage.backpack
  ).toBeVisible();

  await expect(
    cartPage.bikeLight
  ).toBeVisible();

});

//Remove One Product from Cart

test('Remove One Product from Cart', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  // Login
  await loginPage.open();

  await loginPage.login(
    testData.validUser,
    testData.validPassword
  );

  // Add two products
  await page.locator('#add-to-cart-sauce-labs-backpack').click();
  await page.locator('#add-to-cart-sauce-labs-bike-light').click();

  // Verify cart badge shows 2
  await expect(
    cartPage.cartBadge
  ).toHaveText('2');

  // Open cart
  await cartPage.openCart();

  // Verify both products are present
  await expect(
    cartPage.backpack
  ).toBeVisible();

  await expect(
    cartPage.bikeLight
  ).toBeVisible();

  // Remove Backpack
  await cartPage.removeBackpackFromCart();

  // Verify Backpack is removed
  await expect(
    cartPage.backpack
  ).not.toBeVisible();

  // Verify Bike Light remains
  await expect(
    cartPage.bikeLight
  ).toBeVisible();

  // Verify cart badge shows 1
  await expect(
    cartPage.cartBadge
  ).toHaveText('1');

});