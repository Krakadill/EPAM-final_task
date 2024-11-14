class Password {
  get inputField() {
    return $("#password");
  }

  async setValue(value) {
    await this.inputField.setValue(value);
  }

  async getValue() {
    return await this.inputField.getValue();
  }
}

module.exports = new Password();
