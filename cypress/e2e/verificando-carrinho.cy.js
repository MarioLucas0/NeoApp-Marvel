describe('Carrinho de Compras', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/carrinho') // substitua "/carrinho" pela rota correta para acessar a página do carrinho
  })

 
  it('deve adicionar um item ao carrinho', () => {
    cy.get('[data-cy=card-character]').first().as('characterCard')
    cy.get('@characterCard').contains('button', '+').click()
    })
    
    it('deve remover um item do carrinho', () => {
    cy.get('[data-cy=comic-card]').first().as('comicCard')
    cy.get('@comicCard').contains('button', '-').click()
    cy.get('@comicCard').should('not.exist')
    })
    
    it('deve limpar o carrinho', () => {
    cy.get('[data-cy=clear-cart-button]').click()
    cy.contains('Carrinho Limpo')
    })
    
    it('deve aplicar um cupom de desconto', () => {
    cy.get('[data-cy=coupon-input]').type('CUPOM10')
    cy.get('[data-cy=apply-coupon-button]').click()
    cy.contains('Valor Total: R$ 27.00')
    })
    
    it('deve realizar um pedido', () => {
    cy.get('[data-cy=checkout-button]').click()
    cy.contains('Tudo Ok')
    })
    })