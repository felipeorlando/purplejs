describe('Range Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  context('when change the value', () => {
    beforeEach(() => {
      cy.get('.range__slider')
        .as('range')
        .invoke('val', 4000)
        .trigger('change')
    })

    it('should change the input with the value', () => {
      cy.get('.input__field').should('have.value', '4000')
    })

    it('should change the label with the total subtracted text', () => {
      cy.get('.label strong').should('contain', '1000')
    })
  })
})
