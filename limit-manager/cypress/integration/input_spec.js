describe('Input Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  context('when change the value', () => {
    beforeEach(() => {
      cy.get('.input__field')
        .clear()
        .type(4000)
        .blur()
    })

    it('should change the label with the total subtracted text', () => {
      cy.get('.label strong').should('contain', '1000')
    })

    it('should change the range with the value', () => {
      cy.get('.range__slider').should('have.value', '4000')
    })
  })

  context('when change the value to above to the max number', () => {
    beforeEach(() => {
      cy.get('.input__field')
        .clear()
        .type(6000)
        .blur()
    })

    it('should change the input value to the max number', () => {
      cy.get('.input__field').should('have.value', '5000')
    })

    it('should change the label with the total subtracted text', () => {
      cy.get('.label strong').should('contain', '0')
    })

    it('should change the range with the value', () => {
      cy.get('.range__slider').should('have.value', '5000')
    })
  })

  context('when change the value to lower than 0', () => {
    beforeEach(() => {
      cy.get('.input__field')
        .clear()
        .type(-1)
        .blur()
    })

    it('should change the input value to 0', () => {
      cy.get('.input__field').should('have.value', '0')
    })

    it('should change the label with the total subtracted text', () => {
      cy.get('.label strong').should('contain', '5000')
    })

    it('should change the range with the value', () => {
      cy.get('.range__slider').should('have.value', '0')
    })
  })
})
