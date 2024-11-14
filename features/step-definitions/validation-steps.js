const { Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const LoginPage = require("../pageobjects/commonPages/login.page");

Then(
  "I should see an username error message to equal {string}",
  async function (expectedError) {
    const errorMessage = await LoginPage.getErrorMessage();
    expect(errorMessage).to.equal(expectedError);
  }
);

Then(
  "I should see a password error message to equal {string}",
  async function (expectedError) {
    const errorMessage = await LoginPage.getErrorMessage();
    expect(errorMessage).to.equal(expectedError);
  }
);

Then("I should see page Title {string}", async function (title) {
  await browser.waitUntil(
    async () => {
      return (
        (await browser.getUrl()) === "https://www.saucedemo.com/inventory.html"
      );
    },
    {
      timeout: 5000,
      timeoutMsg:
        "Expected URL to be https://www.saucedemo.com/inventory.html after login",
    }
  );

  const pageTitle = await browser.getTitle();
  expect(pageTitle).to.equal(title);
});

Then(
  "I should see incorrect Username and Password error message to equal {string}",
  async function (expectedError) {
    const errorMessage = await LoginPage.getErrorMessage();
    expect(errorMessage).to.equal(expectedError);
  }
);
