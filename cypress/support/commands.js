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
    cy.wait(9000);
    cy.contains(boardName).click();
    cy.wait(9000);
    cy.get('.GDunJzzgFqQY_3 > .nch-icon > [data-testid="OverflowMenuHorizontalIcon"]').click();
    cy.get('.board-menu-navigation-item-link').contains('Close board').click();
    cy.get('input[value="Close"]').should('be.visible').click();
    cy.get('[data-testid="close-board-delete-board-button"]').should('be.visible').click();
    cy.get('[data-testid="close-board-delete-board-confirm-button"]').should('be.visible').click();
    cy.url().should('include', '/boards');
    cy.contains(boardName).should('not.exist');
});

Cypress.Commands.add('createBoard', (boardName) => {
    cy.log(boardName);
    cy.get('div.board-tile.mod-add').click();
    cy.get('[data-testid="create-board-title-input"]').type(boardName);
    cy.get('[data-testid="create-board-submit-button"]').click();
    cy.wait(6000);
    cy.get('[data-testid="board-name-display"]').should('be.visible');
    cy.url().should('include', `/${boardName}`);
    cy.get('[data-testid="board-name-display"]').should('contain.text', boardName);
});

Cypress.Commands.add('createList', (listName) => {
    cy.log(listName);
    cy.get('[data-testid="list-name-textarea"]').type(listName);
    cy.get('[data-testid="list-composer-add-list-button"]').should('be.visible').click();
    cy.contains(listName).should('be.visible');
});