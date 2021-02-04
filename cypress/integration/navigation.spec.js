/// <reference types="cypress" />

context('Navigation', () => {
  it.skip('can navigate around the website', () => {
    cy.visit('/');

    cy.get('[data-cy="header-link-about"]').click();
    cy.get('main:contains("About")');

    cy.get('[data-cy="header-link-users"]').click();
    cy.get('main h1:contains("Users")');
  });

  it('click without an explicit visible assertion', () => {
    cy.visit('/');

    cy.get('[data-cy="header-link-about"]').click();
    cy.location('pathname').should('match', /\/about$/);
  })

  it('click without an explicit visible assertion (with reload)', () => {
    cy.visit('/');

    cy.get('[data-cy="header-link-about"]').click();
    cy.location('pathname').should('match', /\/about$/);

    cy.visit('/');

    cy.get('[data-cy="header-link-about"]').click();
    cy.location('pathname').should('match', /\/about$/);
  })

  it('click with an explicit visible assertion', () => {
    cy.visit('/');

    cy.get('[data-cy="header-link-about"]').should('be.visible').click();
    cy.location('pathname').should('match', /\/about$/);
  })

  it('can navigate around the website (better)', () => {
    cy.visit('/');

    cy.get('[data-cy="header-link-about"]').click();
    cy.location('pathname').should('match', /\/about$/);
    cy.contains('main h1', 'About').should('be.visible');

    cy.get('[data-cy="header-link-users"]').click();
    cy.location('pathname').should('match', /\/users$/);
    cy.contains('main h1', 'Users').should('be.visible');
  });

  it('can navigate around the website (final)', () => {
    cy.visit('/');

    cy.get('[data-cy="header-link-about"]').should('be.visible')
      .click();
    cy.location('pathname').should('match', /\/about$/)
    cy.contains('main h1', 'About').should('be.visible');

    cy.get('[data-cy="header-link-users"]').click();
    cy.location('pathname').should('match', /\/users$/)
    cy.contains('main h1', 'Users').should('be.visible');
  });
});
