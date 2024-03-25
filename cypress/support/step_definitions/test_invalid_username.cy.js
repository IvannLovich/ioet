import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../page_objects/pages/LoginPage";

When("The user enters invalid username {string}", (username) => {
  LoginPage.open();
  LoginPage.typeUsername(username);
});

When("The user writes valid password {string}", (password) => {
  LoginPage.typePassword(password);
});

Then("The user submits form login", () => {
  LoginPage.submitLoginWithInvalidUsername();
});
