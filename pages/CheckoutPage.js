const checkoutLocators = require('../locators/checkout.locators');

class CheckoutPage {

  constructor(page) {
    this.page = page;

    this.checkoutButton = page.locator(
      checkoutLocators.checkoutButton
    );

    this.firstName = page.locator(
      checkoutLocators.firstName
    );

    this.lastName = page.locator(
      checkoutLocators.lastName
    );

    this.postalCode = page.locator(
      checkoutLocators.postalCode
    );

    this.continueButton = page.locator(
      checkoutLocators.continueButton
    );

    this.finishButton = page.locator(
      checkoutLocators.finishButton
    );
  }

  async startCheckout() {
    await this.checkoutButton.click();
  }

  async enterCustomerInformation(firstName, lastName, postalCode) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.postalCode.fill(postalCode);
  }

  async continueToOverview() {
    await this.continueButton.click();
  }

  async finishCheckout() {
    await this.finishButton.click();
  }

}

module.exports = CheckoutPage;