/// <reference types = "cypress" />

export class LandingPage {
  selectors = {
    sliderCarousel: "#slider-carousel",
    signUpLoginLink: "Signup / Login",
    loggedInAsUserName: ".navbar-nav > li:last-child > a > b",
  };

  verifyLandingPageOpened() {
    cy.get(this.selectors.sliderCarousel).should("be.visible");
  }
  registerAsANewUser() {
    cy.contains(this.selectors.signUpLoginLink).click();
  }

  checkLandingScreenWithLoggedInUser(userName) {
    cy.get(this.selectors.loggedInAsUserName).should("contain.text", userName);
  }
}

export const landingPage = new LandingPage();
