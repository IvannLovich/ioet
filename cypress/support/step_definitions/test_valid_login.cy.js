import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../page_objects/pages/LoginPage";

Given("The user is on the Saucedemo login page", () => {});

When("The user enters username in the Username input", () => {
  LoginPage.open();
  LoginPage.typeUsername("standard_user");
});

Then("The user writes the password in the Password input", () => {
  LoginPage.typePassword("secret_sauce");
});

Then("The user is successfully logged", () => {
  LoginPage.submitSuccessfully();
});
