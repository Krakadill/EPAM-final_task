const userName = require("../commonComponents/userName");
const password = require("../commonComponents/password");
const loginButton = require("../commonComponents/loginButton");
const errorBox = require("../commonComponents/errorBox");

class LoginPage {
  async open() {
    console.log("INFO: Opening Login Page");
    await browser.url("https://www.saucedemo.com/");
  }

  async login(user, pass) {
    console.log("DEBUG: Logging in with user: " + user + " and pass: " + pass);
    await userName.setValue(user);
    await password.setValue(pass);
    await loginButton.click();
  }

  async getErrorMessage() {
    console.log("ERROR: Fetching error message after failed attempt");
    return await errorBox.getErrorMessageText();
  }
}

module.exports = new LoginPage();
