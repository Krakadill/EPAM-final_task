const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");

const LoginPage = require("../pageobjects/commonPages/login.page");

Given("I am on the login page", async function () {
  await LoginPage.open();
});

When("I login with empty credentials", async function () {
  await LoginPage.login("", "");
});

When("I login with only username", async function () {
  await LoginPage.login("standard_user", "");
});

When("I login with correct username and password", async function () {
  await LoginPage.login("standard_user", "secret_sauce");
});

When("I login with wrong username", async function () {
  await LoginPage.login("wrong_user", "secret_sauce");
});

When("I login with wrong password", async function () {
  await LoginPage.login("standard_user", "wrong_password");
});
