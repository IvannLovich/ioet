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

  static submitLogin() {
    cy.get("#login-button").click();
  }

  static submitSuccessfully() {
    this.submitLogin();
  }

  static submitWithEmptyInputs() {
    this.submitLogin();
    cy.get('h3[data-test="error"]').should("be.visible");
  }

  static submitWithEmptyPassword() {
    this.submitLogin();
    cy.get('h3[data-test="error"]').should("be.visible");
  }

  static submitWithEmptyUsername() {
    this.submitLogin();
    cy.get('h3[data-test="error"]').should("be.visible");
  }

  static submitWithInvalidCredentials() {
    this.submitLogin();
    cy.get('h3[data-test="error"]').should("be.visible");
  }

  static submitWithInvalidPassword() {
    this.submitLogin();
    cy.get('h3[data-test="error"]').should("be.visible");
  }

  static submitWithInvalidUsername() {
    this.submitLogin();
    cy.get('h3[data-test="error"]').should("be.visible");
  }
}
