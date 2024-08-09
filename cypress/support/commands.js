/*Cypress.Commands.add('logInfo', (message) => {
    cy.task('log', { level: 'info', message: message });
});
  
Cypress.Commands.add('logWarn', (message) => {
    cy.task('log', { level: 'warn', message: message });
});
  
Cypress.Commands.add('logError', (message) => {
    cy.task('log', { level: 'error', message: message });
});*/


Cypress.Commands.add('createCard', (card_name) => {
    cy.origin('https://trello.com', { args: { card_name } }, ({ card_name }) => {
        cy.get('button[data-testid="list-add-card-button"]').click();
        cy.get('textarea[placeholder="Enter a name for this card…"]').type(card_name).type('{enter}');
        cy.contains('button', 'Add card').click();
        cy.contains(card_name, { timeout: 15000 }).should('be.visible');
    });
});