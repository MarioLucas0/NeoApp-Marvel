describe('Adicionar item ao carrinho', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173'); // Visita a página inicial antes de cada teste
  })

  it('Deve adicionar um item ao carrinho', () => {
    cy.get('.image').first().click(); // Clica na primeira imagem de quadrinho
    cy.get('.carrinho').click(); // Clica no botão do carrinho
    cy.contains('Quadrinho Adicionado ao Carrinho com Sucesso!'); // Verifica se a mensagem de sucesso é exibida
    cy.get('.cart-icon').should('have.text', '1'); // Verifica se o ícone do carrinho mostra a quantidade de itens correta
  })

  it('Deve adicionar vários itens ao carrinho', () => {
    cy.get('.image').each(($el, index) => {
      if (index < 3) {
        cy.wrap($el).click(); // Clica na imagem do quadrinho
        cy.get('.carrinho').click(); // Clica no botão do carrinho
        cy.contains('Quadrinho Adicionado ao Carrinho com Sucesso!'); // Verifica se a mensagem de sucesso é exibida
      }
    })
    cy.get('.cart-icon').should('have.text', '3'); // Verifica se o ícone do carrinho mostra a quantidade de itens correta
  })
})