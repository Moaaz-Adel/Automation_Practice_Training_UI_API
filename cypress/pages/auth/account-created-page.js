/// <reference types = "cypress" />

export class AccountCreatedPage {
  selectors = {
    accountCreatedHeader: "Account Created!",
    continueBtn: "[data-qa='continue-button']",
  };

  checkAccountCreated() {
    cy.contains("b", this.selectors.accountCreatedHeader).should("be.visible");
    cy.get(this.selectors.continueBtn).click();
  }
}

export const accountCreatedPage = new AccountCreatedPage();
