/// <reference types = "cypress"/>

import { landingPage } from "../pages/auth/landing-page.page";
import { loginRegisterPage } from "../pages/auth/login-register.page";
import { accountInfoInfo } from "../pages/auth/account-info.page";
import { accountCreatedPage } from "../pages/auth/account-created.page";

const { faker } = require("@faker-js/faker");

before("Visit Home Page", () => {
  cy.visit("/");
});

describe("Registration Tests", () => {
  it("Should Open Landing Page Successfully", () => {
    landingPage.verifyLandingPageOpened();
    landingPage.registerAsANewUser();
    loginRegisterPage.register(faker.name.firstName(), faker.internet.email());
    accountInfoInfo.enterAccountInfo(
      "mr",
      "Test",
      faker.internet.password(),
      12,
      "March",
      "1992",
      "true",
      "true",
      "Moaz",
      "Adel",
      "IoTBlue",
      "Test",
      "Test21",
      "Canada",
      "Test",
      "Test2",
      12305,
      555555
    );
    accountCreatedPage.checkAccountCreated();
    landingPage.checkLandingScreenWithLoggedInUser("Test");
  });
});
