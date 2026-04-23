import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que acesso a página de login", () => {
  cy.visit("https://www.automationexercise.com/login");
});

When("preencho email e senha válidos", () => {
  cy.get('form[action="/login"]').within(() => {
    cy.get('input[data-qa="login-email"]').type("test-597355@test.mailgenius.com");
    cy.get('input[data-qa="login-password"]').type("teste123");
  });
});

When("clico no botão login", () => {
  cy.get('form[action="/login"]').within(() => {
    cy.get('button[data-qa="login-button"]').click();
    });
});

Then("devo estar logado com sucesso", () => {
  cy.contains("Logged in as").should("be.visible");
});