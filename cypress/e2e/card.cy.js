import { generateRandomString } from "../support/utils";

describe('Trello Card Tests', () => {

    let boardName;
    let listName;

    beforeEach(() => {
        const username = Cypress.env('CYPRESS_USERNAME');
        const password = Cypress.env('CYPRESS_PASSWORD');
        cy.login(username, password);
        boardName = generateRandomString('board');
        listName = 'To Do';
        cy.createBoard(boardName);
        cy.createList(listName);
    });

    it('Verify that it is possible to create a new card.', () => {
        //code here
        cy.get('button[data-testid="list-add-card-button"]').should('be.visible').click();
        cy.wait(1000);
        //cy.get('button[type="submit"]').click();
        //cy.get('textarea[data-testid="list-card-composer-textarea"]').should('be.visible').type('card');
        cy.contains('button', 'Add card');
        //cy.get('button[data-testid="list-card-composer-add-card-button"]').click();
        // Verificar que la nueva tarjeta es visible en la lista
        cy.contains('card').should('be.visible');
    });

    /*it('Verify that it is possible to move a card to another list.', () => {
        //code here
    });*/

    afterEach(() => {
        cy.deleteBoard(boardName);
    });
});
