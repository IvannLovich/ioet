import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../page_objects/pages/LoginPage";

When("The user enters empty password in the Password input", () => {
  LoginPage.open();
  LoginPage.typePassword(" ");
});

Then("The user should see a message about empty password", () => {
  LoginPage.submitLoginWithEmptyPassword();
});
