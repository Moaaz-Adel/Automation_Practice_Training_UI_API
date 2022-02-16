/// <reference types = "cypress" />

export class LoginRegisterPage {
  selectors = {
    newUserSignUpText: "New User Signup!",
    signUpEmail: "[data-qa='signup-email']",
    signUpName: "[data-qa='signup-name']",
    signUpBtn: "[data-qa='signup-button']",
  };

  register(userName, email) {
    cy.get(this.selectors.signUpName).type(userName);
    cy.get(this.selectors.signUpEmail).type(email);
    cy.get(this.selectors.signUpBtn).click();
  }
}

export const loginRegisterPage = new LoginRegisterPage();
