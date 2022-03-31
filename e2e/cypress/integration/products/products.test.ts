/// <reference types="Cypress" />

import { NavigationMenu } from "../../pages/Navigation";

context("Products page should", () => {
  beforeEach(() => {
    cy.visit(Cypress.env().baseUrl);
  });

  it("Display product list template", () => {
    cy.clearSession();
    cy.location().should((loc) => {
      expect(loc.href).to.eq(NavigationMenu.homeLink);
    });
    cy.get('[data-testid="cy-product-list"]').should("exist");
  });

  it(
    "Search->Check if searched term exists->Click on modal button->" +
      "Check if modal exists->Close modal->Empty Searchbar",
    () => {
      cy.get('[data-testid="cy-input-search"').type("Incredible Plastic Pizza");
      cy.contains(
        `[data-testid="cy-single-product-name"]`,
        "Incredible Plastic Pizza"
      );
      cy.get(`[data-testid="cy-single-product-button"]`).eq(0).click();
      cy.get(`[data-testid="cy-single-product-modal"]`).should("exist");
      cy.get(`[data-testid="cy-modal-close-icon"]`).click();
      cy.get(`[data-testid="cy-modal-close-icon"]`).should("not.exist");
      cy.get('[data-testid="cy-input-search"').type("{selectall}{backspace}");
    }
  );

  it("Click active checkkbox", () => {
    cy.get(`[data-testid="cy-input-checkbox-Active"]`).click({ force: true });
  });

  it("Click promo checkbox", () => {
    cy.get(`[data-testid="cy-input-checkbox-Promo"]`).click({ force: true });
  });

  it("Check if empty product list appears", () => {
    cy.get('[data-testid="cy-input-search"]').type("Empty products list");
    cy.get('[data-testid="cy-empty-product-list"]').should("exist");
  });

  it("Check if pagination works properly", () => {
    cy.get('[data-testid="cy-pagination"]').should("exist");
    cy.get('[data-testid="cy-pagination"] > button:last-child').click();
    cy.get('[data-testid="cy-pagination"] > div > button:nth-child(2)').click();
  });
});
