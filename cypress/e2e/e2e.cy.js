/// <reference types="cypress" />
import produtoPage from "../support/page_objects/produto.page";
import checkoutPage from "../support/page_objects/checkout.page";
// import { faker } from "@faker-js/faker";
const faker = require("faker-br");

context("Exercicio - Testes End-to-end - Fluxo de pedido", () => {
  /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

  beforeEach(() => {
    cy.visit("/");
  });

  it("Deve fazer um pedido na loja Ebac Shop de ponta a ponta", () => {
    //TODO
    produtoPage.AdicionarProduto("L", "Green", "4");
    cy.fixture("login").then((dados) => {
      checkoutPage.CheckoutComProdutoNoCarrinho(dados.usuario, dados.senha);
    });

    const dados = {
      nome: faker.name.firstName(),
      sobrenome: faker.name.lastName(),
      endereco: faker.address.streetName(),
      cidade: faker.address.city(),
      codigopostal: faker.address.zipCodeValid(),
      telefone: faker.phone.phoneNumber("719#########"),
    };
    checkoutPage.DetalhesFaturamento(dados);
    cy.get(".woocommerce-notice").should(
      "contain",
      "Obrigado. Seu pedido foi recebido."
    );
  });
});
