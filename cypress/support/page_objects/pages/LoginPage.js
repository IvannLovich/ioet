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
}
