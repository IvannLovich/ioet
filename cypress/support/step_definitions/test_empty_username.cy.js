import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../page_objects/pages/LoginPage";

When("The user writes nothing in the Username input", () => {
  LoginPage.open();
  LoginPage.typeUsername(" ");
});

Then("The user should see a message about empty username", () => {
  LoginPage.submitLoginWithEmptyUsername();
});
