class ErrorBox {
  get errorMessage() {
    console.log("INFO: selecting error container");
    return $(".error-message-container h3");
  }

  async getErrorMessageText() {
    return await this.errorMessage.getText();
  }
}

module.exports = new ErrorBox();
