import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na home", () => {
  cy.visit("https://www.automationexercise.com/");
});

When("busco por um produto", () => {
  
  cy.contains("Products").click();

  
  cy.url().should("include", "/products");

 
  cy.get("#search_product")
    .should("be.visible")
    .clear()
    .type("Dress");

  cy.get("#submit_search").click();
});

When("adiciono o produto ao carrinho", () => {
  
  cy.get(".product-image-wrapper")
    .first()
    .as("produto");

  
  cy.get("@produto").trigger("mouseover");

  
  cy.get("@produto").within(() => {
    cy.contains("Add to cart").click({ force: true });
  });

  
  cy.get(".modal-content")
    .should("be.visible")
    .within(() => {
      cy.contains("Continue Shopping").click();
    });
});

When("acesso o carrinho", () => {
  
  cy.get("ul.nav.navbar-nav")
    .find('a[href="/view_cart"]')
    .should("be.visible")
    .click();
});

Then("o produto deve estar no carrinho", () => {
  
  cy.url().should("include", "/view_cart");

  
  cy.get("#cart_info_table")
    .should("exist")
    .and("be.visible");

  
  cy.get(".cart_description")
    .should("contain.text", "Dress");
});