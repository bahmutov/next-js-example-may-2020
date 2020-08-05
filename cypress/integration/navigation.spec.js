/// <reference types="cypress" />

context('Navigation', () => {
  it('can navigate around the website', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-cy="header-link-about"]').click(
      // Use force: true to avoid "detached from DOM" error
      // https://github.com/cypress-io/cypress/issues/5743#issuecomment-622596999
      // { force: true },
    );
    cy.get('main:contains("About")');

  });
});
