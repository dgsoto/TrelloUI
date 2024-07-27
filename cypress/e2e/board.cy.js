import { generateRandomString } from "../support/utils";

describe('Trello Board Tests', () => {
    let boardName;

    before(() => {        
        boardName = generateRandomString('board');
    });

    beforeEach(() => {
        const username = Cypress.env('CYPRESS_USERNAME');
        const password = Cypress.env('CYPRESS_PASSWORD');
        cy.login(username, password);
    });

    it('Verify that it is possible to create a new board.', () => {
        cy.origin('https://trello.com', { args: { boardName } }, ({ boardName }) => {
            cy.get('div.board-tile.mod-add').click();
            cy.get('[data-testid="create-board-title-input"]').type(boardName);
            cy.get('[data-testid="create-board-submit-button"]').click();
            cy.wait(6000);
            cy.get('[data-testid="board-name-display"]').should('be.visible');
            cy.url().should('include', `/${boardName}`);
            cy.get('[data-testid="board-name-display"]').should('contain.text', boardName);
        });
    });

    it('Verify that it is possible to delete a board by its name.', () => {
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
});
