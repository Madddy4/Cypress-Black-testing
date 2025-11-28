describe('Basic Accessibility Test', () => {

  beforeEach(() => {
    cy.visit('/')
    cy.injectAxe()
  })

  it('Should detect accessibility violations', () => {
    cy.checkA11y()
  })
})