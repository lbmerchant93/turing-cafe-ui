describe('Dashboard UI', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should be able to visit the page and render the title', () => {
    cy.get('.app-title').contains('Turing Cafe Reservations').should('be.visible')
  });

  it('Should have a background image displaying', () => {
    cy.get('.App').should('have.css', 'background-image', 'url("http://localhost:3000/static/media/cafe-img.12c28102.jpeg")')
  })

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

  it('Should have a section containing the reservations from the API', () => {
    cy.get('.resy-container')
    .children().should('have.length', '9')
  })

  it('Should add reservation to the list when inputs are filled and the Make Reservation button is clicked', () => {
    cy.get('.name-input').type('Lucas')
    cy.get('.date-input').type('02/17')
    cy.get('.time-input').type('5:00')
    cy.get('.number-input').type('2')
    cy.get('.submit').click()
    cy.get('.resy-container')
      .children().should('have.length', '10')
  })

  it('Should have the new length of reservations on reload after adding a new one', () => {
    cy.get('.resy-container')
      .children().should('have.length', '10')
  })


  it('Should have a border around the ResyCard', () => {
    cy.get('.resy-card1').should('have.css', 'border', '5px solid rgb(0, 128, 128)')
  })

  it('Should have a name, date, time, number of guest, and cancel button for each card. Only testing on one but all others will be the same being ResyCard components too.', () => {
    cy.get('.resy-card1  .resy-name').contains('Christie')
    cy.get('.resy-card1  .resy-date').contains('12/29')
    cy.get('.resy-card1  .resy-time').contains('7:00')
    cy.get('.resy-card1  .resy-num-guests').contains('Number of guests: 12')
    cy.get('.resy-card1  .cancel-btn').contains('Cancel')
  })

  it('Should delete the last reservation created', () => {
    cy.get('.resy-container').children().last().children().last().click()
    cy.get('.resy-container')
    .children().should('have.length', '9')
  })

  it('Should only have the original number of reservations on reload after deleting the last created one', () => {
    cy.get('.resy-container')
    .children().should('have.length', '9')
  })
});
