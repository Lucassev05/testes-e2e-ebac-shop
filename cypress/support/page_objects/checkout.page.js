class checkoutPage {
  CheckoutComProdutoNoCarrinho(usuario, senha) {
    //ações do método
    cy.get("#cart > .dropdown-toggle").click();
    cy.get(
      "#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout"
    ).click();
    cy.get(".showlogin").click();

    cy.login(usuario, senha);
  }

  DetalhesFaturamento(dados) {
    cy.get("#billing_first_name").clear().type(`text`);
    cy.get("#billing_last_name").clear().type(`${dados.sobrenome}`);
    cy.get("#billing_address_1").clear().type(`${dados.endereco}`);
    cy.get("#billing_city").clear().type(`${dados.cidade}`);
    cy.get("#billing_postcode").clear().type(`${dados.codigopostal}`);
    cy.get("#billing_phone").clear().type(`${dados.telefone}`);
    cy.get("#terms").click();
    cy.get("#place_order").click();
  }
}

export default new checkoutPage();
