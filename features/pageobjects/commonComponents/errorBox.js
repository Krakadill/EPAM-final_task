class ErrorBox {
  // Define the error message container
  get errorMessage() {
    return $(".error-message-container h3");
  }

  // Get the error message text
  async getErrorMessageText() {
    return await this.errorMessage.getText();
  }

  // Check if the error message is displayed
  async isErrorDisplayed() {
    return await this.errorMessage.isDisplayed();
  }
}

module.exports = new ErrorBox();
