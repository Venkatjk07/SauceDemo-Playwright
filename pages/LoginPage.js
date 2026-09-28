const loginLocators = require('../locators/login.locators');

class LoginPage {

  constructor(page) {
    this.page = page;

    this.username = page.locator(loginLocators.username);
    this.password = page.locator(loginLocators.password);
    this.loginButton = page.locator(loginLocators.loginButton);
    this.errorMessage = page.locator(loginLocators.errorMessage);
  }

  async open() {
  await this.page.goto('https://www.saucedemo.com/');
}

  async login(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }

}

module.exports = LoginPage;