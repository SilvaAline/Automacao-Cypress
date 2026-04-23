Feature: Login

Scenario: Login válido
  Given que acesso a página de login
  When preencho email e senha válidos
  And clico no botão login
  Then devo estar logado com sucesso