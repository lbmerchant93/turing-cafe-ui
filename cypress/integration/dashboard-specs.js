describe('Dashboard UI', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should be able to visit the page and render the title', () => {
    cy.get('.app-title').contains('Turing Cafe Reservations').should('be.visible')
  });

  it('Should have inputs for name, date, time, number of guests', () => {
    cy.get('.name-input')
      .type('Lucas')
      .should('have.value', 'Lucas')
    cy.get('.date-input')
      .type('02/17')
      .should('have.value', '02/17')
    cy.get('.time-input')
      .type('5:00')
      .should('have.value', '5:00')
    cy.get('.number-input')
      .type('2')
      .should('have.value', '2')
  })

  it.only('Should add reservation to the list when inputs are filled and the Make Reservation button is clicked', () => {
    cy.get('.name-input').type('Lucas')
    cy.get('.date-input').type('02/17')
    cy.get('.time-input').type('5:00')
    cy.get('.number-input').type('2')
    cy.get('.submit').click()
    cy.get('.resy-container')
      .children().should('have.length', '10')
  })

  it('Should have a section containing the reservations from the API', () => {
    cy.get('.resy-container')
      .children().should('have.length', '9')
  })

  it('Should have a name, date, time, number of guest, and cancel button for each card. Only testing on one but all others will be the same being ResyCard components too.', () => {
    cy.get('.resy-card1  .resy-name').contains('Christie')
    cy.get('.resy-card1  .resy-date').contains('12/29')
    cy.get('.resy-card1  .resy-time').contains('7:00')
    cy.get('.resy-card1  .resy-num-guests').contains('Number of guests: 12')
    cy.get('.resy-card1  .cancel-btn').contains('Cancel')
  })
});
