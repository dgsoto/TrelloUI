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
        cy.createBoard(boardName);
    });

    it('Verify that it is possible to delete a board by its name.', () => {
        cy.deleteBoard(boardName);
    });
});
