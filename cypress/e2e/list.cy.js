import { generateRandomString } from "../support/utils";

describe('Trello List Tests', () => {

    let boardName;
    let listName;
    
    beforeEach(() => {
        const username = Cypress.env('CYPRESS_USERNAME');
        const password = Cypress.env('CYPRESS_PASSWORD');
        cy.login(username, password);
        boardName = generateRandomString('board');
        listName = 'To Do';
        cy.createBoard(boardName);
    });

    it('Verify that it is possible to create a new list.', () => {
        cy.createList(listName);
    });

    it('Verify that it is possible to update the list name.', () => {
        cy.createList(listName);
        cy.wait(3000);
        cy.contains(listName).click();
        // Buscar el textarea con data-testid y actualizar el nombre de la lista
        cy.get('textarea[data-testid="list-name-textarea"]').should('be.visible').clear().type('To Do Updated{enter}');
        // Verificar que el nombre de la lista se ha actualizado
        cy.contains('To Do Updated').should('be.visible');
    });

    /*afterEach(() => {
        // Limpiar el tablero creado después de cada prueba
        cy.deleteBoard(boardName);
    });*/
});
