const cartLocators = require('../locators/cart.locators');

class CartPage {

  constructor(page) {
    this.page = page;

    this.cartLink = page.locator(cartLocators.cartLink);
    this.cartBadge = page.locator(cartLocators.cartBadge);

    this.backpack = page.getByText(
      'Sauce Labs Backpack',
      { exact: true }
    );

    this.bikeLight = page.getByText(
      'Sauce Labs Bike Light',
      { exact: true }
    );

    this.removeBackpack = page.locator(
      cartLocators.removeBackpack
    );
  }

  async openCart() {
    await this.cartLink.click();
  }

  async removeBackpackFromCart() {
    await this.removeBackpack.click();
  }

}

module.exports = CartPage;