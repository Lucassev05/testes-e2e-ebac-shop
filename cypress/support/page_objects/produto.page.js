class ProdutoClasse {
  AdicionarProduto(tam, cor, qtd) {
    //ações do método
    cy.get("#primary-menu > .menu-item-629 > a").click();
    cy.get(".product-block").first().click();
    cy.get(`.button-variable-item-` + tam).click();
    cy.get(`.button-variable-item-` + tam).click();
    cy.get(`.button-variable-item-${cor}`).click();
    cy.get(".input-text").clear().type(qtd);
    cy.get(".single_add_to_cart_button").click();
    cy.get(".dropdown-toggle > .mini-cart-items").contains(qtd);
    cy.get(".woocommerce-message").should(
      "contain",
      `${qtd} × “Abominable Hoodie” foram adicionados no seu carrinho.`
    );
  }
}

export default new ProdutoClasse();
