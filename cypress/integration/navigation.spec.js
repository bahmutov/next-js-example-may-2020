/// <reference types="cypress" />

context('Navigation', () => {
  // it('can navigate around the website', () => {
  //   cy.visit('http://localhost:3000');

  //   cy.get('[data-cy="header-link-about"]').click();
  //   cy.get('main:contains("About")');

  //   cy.get('[data-cy="header-link-users"]').click();
  //   cy.get('main h1:contains("Users")');
  // });

  // it('can navigate around the website (better)', () => {
  //   cy.visit('http://localhost:3000');

  //   cy.get('[data-cy="header-link-about"]').click();
  //   cy.location('pathname').should('match', /\/about$/);
  //   cy.contains('main h1', 'About').should('be.visible');

  //   cy.get('[data-cy="header-link-users"]').click();
  //   cy.location('pathname').should('match', /\/users$/);
  //   cy.contains('main h1', 'Users').should('be.visible');
  // });

  it('can navigate around the website (final)', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-cy="header-link-about"]').should('be.visible')
      .click();
    cy.location('pathname').should('match', /\/about$/)
    cy.contains('main h1', 'About').should('be.visible');

    cy.get('[data-cy="header-link-users"]').click();
    cy.location('pathname').should('match', /\/users$/)
    cy.contains('main h1', 'Users').should('be.visible');
  });
});
