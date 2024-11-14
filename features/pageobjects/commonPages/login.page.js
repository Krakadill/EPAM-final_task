const userName = require("../commonComponents/userName");
const password = require("../commonComponents/password");
const loginButton = require("../commonComponents/loginButton");
const errorBox = require("../commonComponents/errorBox");

class LoginPage {
  async open() {
    await browser.url("https://www.saucedemo.com/");
  }

  async login(user, pass) {
    await userName.setValue(user);
    await password.setValue(pass);
    await loginButton.click();
  }

  async getErrorMessage() {
    return await errorBox.getErrorMessageText();
  }

  async isErrorDisplayed() {
    return await errorBox.isErrorDisplayed();
  }
}

module.exports = new LoginPage();
