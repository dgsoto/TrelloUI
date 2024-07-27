// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password) => {
    cy.visit('/login');
    cy.wait(3000);
    cy.get('[data-testid="username"]').should('be.visible');
    cy.get('[data-testid="username"]').should('be.visible').type(email);
    cy.get('#login-submit').should('be.visible').click();
    cy.wait(900);
    cy.get('[data-testid="password"]').should('be.visible').type(password);
    cy.wait(900);
    cy.get('#login-submit').should('be.visible').click();
});

Cypress.Commands.add('deleteBoard', (boardName) => {
    // here need an update to implement the command to delete the board by name.
});