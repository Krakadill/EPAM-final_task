class UserName {
  get inputField() {
    console.log("INFO: selecting username input field container");

    return $("#user-name");
  }
  async setValue(value) {
    console.log("DEBUG: Setting username value:" + value);
    await this.inputField.setValue(value);
  }
}

module.exports = new UserName();
