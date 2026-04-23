Feature: Carrinho

Scenario: Buscar e adicionar produto ao carrinho
  Given que estou na home
  When busco por um produto
  And adiciono o produto ao carrinho
  And acesso o carrinho
  Then o produto deve estar no carrinho