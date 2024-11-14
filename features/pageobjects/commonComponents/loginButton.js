class LoginButton {
  get button() {
    return $("#login-button");
  }

  async click() {
    await this.button.click();
  }

  async getText() {
    return await this.button.getText();
  }
}

module.exports = new LoginButton();
