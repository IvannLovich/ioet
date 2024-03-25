import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../page_objects/pages/LoginPage";
import InventoryPage from "../page_objects/pages/InventoryPage";

Given("The user is in Login Page", () => {
  LoginPage.open();
});

When("The user is on logged correctly", () => {
  LoginPage.typeUsername("standard_user");
  LoginPage.typePassword("secret_sauce");
  LoginPage.submitLogin();
});

Then(
  "The user enters to inventory items page and can see them with their respective info",
  () => {
    InventoryPage.inventoryItem();
  }
);
