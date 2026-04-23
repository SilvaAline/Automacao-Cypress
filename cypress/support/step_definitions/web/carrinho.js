import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na home", () => {
  cy.visit("https://www.automationexercise.com/");
});

When("busco por um produto", () => {
  // Acessa a página de Products
  cy.contains("Products").click();

  // Valida URL
  cy.url().should("include", "/products");

  // Busca pelo produto
  cy.get("#search_product")
    .should("be.visible")
    .clear()
    .type("Dress");

  cy.get("#submit_search").click();
});

When("adiciono o produto ao carrinho", () => {
  // Seleciona o primeiro produto retornado
  cy.get(".product-image-wrapper")
    .first()
    .as("produto");

  // Hover no produto
  cy.get("@produto").trigger("mouseover");

  // Clica em "Add to cart"
  cy.get("@produto").within(() => {
    cy.contains("Add to cart").click({ force: true });
  });

  // Fecha o modal
  cy.get(".modal-content")
    .should("be.visible")
    .within(() => {
      cy.contains("Continue Shopping").click();
    });
});

When("acesso o carrinho", () => {
  // Existem múltiplos /view_cart no DOM
  // Este seletor garante apenas 1 elemento
  cy.get("ul.nav.navbar-nav")
    .find('a[href="/view_cart"]')
    .should("be.visible")
    .click();
});

Then("o produto deve estar no carrinho", () => {
  // Valida URL do carrinho
  cy.url().should("include", "/view_cart");

  // Valida a tabela do carrinho (ID correto)
  cy.get("#cart_info_table")
    .should("exist")
    .and("be.visible");

  // Valida descrição do produto
  cy.get(".cart_description")
    .should("contain.text", "Dress");
});