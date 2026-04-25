#  Projeto de Automação - Cypress + Cucumber

##  Descrição

Este projeto foi desenvolvido como parte de um teste técnico com o objetivo de validar conhecimentos em automação de testes utilizando:

* Cypress
* Cucumber (BDD)
* JavaScript

---

##  Tecnologias utilizadas

* Cypress
* Cucumber (BDD)
* JavaScript
* Node.js

---

##  Instalação do projeto

### Pré-requisitos:

* Node.js instalado
* Git instalado

### Passos:

```bash
npm install
```

---

##  Como executar os testes

### Abrir interface do Cypress:

```bash
npx cypress open
```

### Executar testes em modo headless:

```bash
npx cypress run
```

---

##  Cenários automatizados (WEB)

Os testes foram realizados no site:
https://www.automationexercise.com/

### ✔ Login

* Realiza login com usuário válido
* Valida acesso à conta

### ✔ Busca de produto

* Pesquisa por produto
* Valida resultados exibidos

### ✔ Carrinho

* Adiciona produto ao carrinho
* Acessa carrinho
* Valida produto adicionado

---

##  Cenários automatizados (API)

### ✔ GET Trello

Endpoint utilizado:
https://api.trello.com/1/actions/592f11060f95a3d3d46a987a

Validações realizadas:

* Status code 200
* Retorno do campo `name` da estrutura `list`

---

##  Estrutura do projeto

```
cypress/
  e2e/
    web/
    api/
  support/
    step_definitions/
```

---

##  Observações

* Foi utilizado Cucumber para escrita dos cenários em BDD
* Aplicado escopo de elementos para evitar conflitos entre componentes da página
* Estrutura organizada para facilitar manutenção e escalabilidade

---

## 🔗 Repositório

Projeto disponível em: https://github.com/SilvaAline/Automacao-Cypress

---

##  Autor

Desenvolvido por Aline Silva
