describe('template spec', () => {
  // goes to page before anything happens
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  // makes a new booking
  it('Create Booking', () => {
    cy.get('[data-cy="input-name"]').type("Dominos");
    cy.get('[data-cy="input-address"]').type('your moms house, Auburn, WA');
    cy.get('[data-cy="input-phone"]').type('123-456-7890');
    cy.get('[data-cy="input-cuisine"]').type('Italian');
    cy.get('[data-cy="input-rating"]').type('5');

    // submit the form
    cy.get('[data-cy="form-submit"]').submit();

    // asserts if what was put in previously is what renders now
    cy.contains('h2', 'Dominos').parent().within(() => {
      cy.contains('li', 'your moms house, Auburn, WA').should('be.visible');
      cy.contains('li', '123-456-7890').should('be.visible');
      cy.contains('li', 'Italian').should('be.visible');
      cy.contains('li', '5').should('be.visible');
    });
  })
})