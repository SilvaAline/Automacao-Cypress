import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

let response;

Given("que envio um GET para API do Trello", () => {
  cy.request("GET", "https://api.trello.com/1/actions/592f11060f95a3d3d46a987a")
    .then((res) => {
      response = res;
    });
});

Then("o status code deve ser 200", () => {
  expect(response.status).to.eq(200);
});

Then("deve exibir o campo name da lista", () => {
  expect(response.body.data.list.name).to.exist;
  cy.log(response.body.data.list.name);
});