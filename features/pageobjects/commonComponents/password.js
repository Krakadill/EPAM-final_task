class Password {
  get inputField() {
    console.log("INFO: selecting password input field container");
    return $("#password");
  }

  async setValue(value) {
    console.log("DEBUG: Setting password value:" + value);
    await this.inputField.setValue(value);
  }
}

module.exports = new Password();
