export default class LoginPage {
  static open() {
    cy.visit("https://www.saucedemo.com/");
  }

  static typeUsername(username) {
    cy.get("#user-name").type(username, { force: true });
  }

  static typePassword(password) {
    cy.get("#password").type(password, { force: true });
  }

  static submitLoginSuccessfully() {
    cy.get("#login-button").click();
  }
  static submitLoginWithEmptyInputs() {
    cy.get("#login-button").click();
    cy.get('h3[data-test="error"]').should("be.visible");
  }

  static submitLoginWithEmptyPassword() {
    cy.get("#login-button").click();
    cy.get('h3[data-test="error"]').should("be.visible");
  }

  static submitLoginWithEmptyUsername() {
    cy.get("#login-button").click();
    cy.get('h3[data-test="error"]').should("be.visible");
  }

  static submitLoginWithInvalidCredentials() {
    cy.get("#login-button").click();
    cy.get('h3[data-test="error"]').should("be.visible");
  }

  static submitLoginWithInvalidPassword() {
    cy.get("#login-button").click();
    cy.get('h3[data-test="error"]').should("be.visible");
  }

  static submitLoginWithInvalidUsername() {
    cy.get("#login-button").click();
    cy.get('h3[data-test="error"]').should("be.visible");
  }
}
