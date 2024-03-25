import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../page_objects/pages/LoginPage";

When("The user enters empty username in the Username input", () => {
  LoginPage.open();
  LoginPage.typeUsername(" ");
});

When("The user writes empty password in the Password input", () => {
  LoginPage.typePassword(" ");
});

Then("The user should see a message about empty username and password", () => {
  LoginPage.submitLoginWithEmptyInputs();
});
