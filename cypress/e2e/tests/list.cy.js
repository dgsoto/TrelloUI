import { BoardConstants } from "../pages/board/board.constants";
import { BoardHelper } from "../pages/board/board.helper";
import { ListConstants } from "../pages/list/list.constants";
import { ListHelper } from "../pages/list/list.helper";
import { LoginHelper } from "../pages/login/login.helper";


describe('Trello List Tests', () => {

    let board_name;
    let list_data;
    
    beforeEach(() => {
        const username = Cypress.env('CYPRESS_USERNAME');
        const password = Cypress.env('CYPRESS_PASSWORD');
        
        LoginHelper.login(username, password);

        board_name = BoardConstants.boardTestData.board_name;
        list_data = ListConstants.listTestData;
        
        BoardHelper.createBoard(board_name);
        ListHelper.createList(list_data.name);
    });

    it('Verify that it is possible to create a new list.', () => {        
        ListHelper.validateListCreatedSuccessfully(list_data.name);
    });

    /*it('Verify that it is possible to update the list name.', () => {
        ListHelper.clickListName(list_data.name);
        ListHelper.updateListName(list_data.name_updated);
        ListHelper.validateListNameUpdatedSuccessfully(list_data.name_updated);
        //cy.contains(listName).click();
        // Buscar el textarea con data-testid y actualizar el nombre de la lista
        //cy.get('textarea[data-testid="list-name-textarea"]').should('be.visible').clear().type('To Do Updated{enter}');
        // Verificar que el nombre de la lista se ha actualizado
        //cy.contains('To Do Updated').should('be.visible');
    });*/

    afterEach(() => {
        BoardHelper.deleteBoard(board_name);
    });
});
