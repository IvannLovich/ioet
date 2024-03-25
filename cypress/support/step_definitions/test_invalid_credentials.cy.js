import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../page_objects/pages/LoginPage";

When("The user types invalid username {string}", (username) => {
  LoginPage.open();
  LoginPage.typeUsername(username);
});

When("The user writes invalid pass {string}", (password) => {
  LoginPage.typePassword(password);
});

Then("The user submits the login form", () => {
  LoginPage.submitLoginWithInvalidCredentials();
});
