const { Given, When, Then } = require("@wdio/cucumber-framework");

const LoginPage = require("../pageobjects/commonPages/login.page");

Given("I am on the login page", async function () {
  await LoginPage.open();
});

When("I login with empty credentials", async function () {
  await LoginPage.login("", "");
  console.log("DEBUG: Attempting login with empty fields");
});

When("I login with only username", async function () {
  await LoginPage.login("standard_user", "");
  console.log("DEBUG: Attempting login with empty password field");
});

When("I login with correct username and password", async function () {
  await LoginPage.login("standard_user", "secret_sauce");
  console.log("DEBUG: Attempting login with correct credentials");
});

When("I login with wrong username", async function () {
  console.log("DEBUG: Attempting login with wrong username");
  await LoginPage.login("wrong_user", "secret_sauce");
});

When("I login with wrong password", async function () {
  console.log("DEBUG: Attempting login with wrong password");
  await LoginPage.login("standard_user", "wrong_password");
});
