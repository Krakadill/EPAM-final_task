class LoginButton {
  get button() {
    console.log("INFO: selecting login button container");
    return $("#login-button");
  }

  async click() {
    console.log("INFO: clicking login button");
    await this.button.click();
  }
}

module.exports = new LoginButton();
