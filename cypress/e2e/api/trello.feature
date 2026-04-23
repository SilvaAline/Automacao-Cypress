Feature: API Trello

Scenario: Validar retorno da API
  Given que envio um GET para API do Trello
  Then o status code deve ser 200
  And deve exibir o campo name da lista