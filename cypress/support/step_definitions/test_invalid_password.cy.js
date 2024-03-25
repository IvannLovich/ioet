import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../page_objects/pages/LoginPage";

When("The user enters valid username {string}", (username) => {
  LoginPage.open();
  LoginPage.typeUsername(username);
});

When("The user writes invalid password {string}", (password) => {
  LoginPage.typePassword(password);
});

Then("The user submits the login button", () => {
  LoginPage.submitWithInvalidPassword();
});
