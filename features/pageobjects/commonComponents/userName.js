class UserName {
  get inputField() {
    return $("#user-name");
  }

  async setValue(value) {
    await this.inputField.setValue(value);
  }

  async getValue() {
    return await this.inputField.getValue();
  }
}

module.exports = new UserName();
