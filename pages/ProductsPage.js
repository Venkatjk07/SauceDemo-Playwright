const productsLocators = require('../locators/products.locators');

class ProductsPage {

  constructor(page) {
    this.page = page;

    this.productsHeading = page.locator(
      productsLocators.productsHeading
    );

    this.productItems = page.locator(
      productsLocators.productItems
    );

    this.backpackAddButton = page.locator(
      productsLocators.backpackAddButton
    );

    this.bikeLightAddButton = page.locator(
      productsLocators.bikeLightAddButton
    );
  }

  async verifyProductsPage() {
    await this.page.waitForURL(/inventory.html/);
  }

  async addBackpack() {
    await this.backpackAddButton.click();
  }

  async addBikeLight() {
    await this.bikeLightAddButton.click();
  }

}

module.exports = ProductsPage;