import { BoardConstants } from "../pages/board/board.constants";
import { BoardHelper } from "../pages/board/board.helper";
import { ListConstants } from "../pages/list/list.constants";
import { ListHelper } from "../pages/list/list.helper";
import { LoginHelper } from "../pages/login/login.helper";
import { CardHelper } from "../pages/card/card.helper";
import { CardConstants } from "../pages/card/card.constants";


describe('Trello List Tests', () => {

    let board_name;
    let list_data;
    let card_name;
    
    beforeEach(() => {
        const username = Cypress.env('CYPRESS_USERNAME');
        const password = Cypress.env('CYPRESS_PASSWORD');
        
        LoginHelper.login(username, password);

        board_name = BoardConstants.boardTestData.board_name;
        list_data = ListConstants.listTestData;
        card_name = CardConstants.cardTestData.name;
        
        BoardHelper.createBoard(board_name);
        ListHelper.createList(list_data.name);
        CardHelper.cmdCrateCard(card_name);
    });

    it('Verify that it is possible to create a new list.', () => {        
        ListHelper.validateListCreatedSuccessfully(list_data.name);
    });

    it('Verify that it is possible to move a card another list.', () => {
        const targetListName = "In Progress"
        ListHelper.createAnotherList(targetListName);
        CardHelper.moveCardToAnotherList(targetListName);
    });

    afterEach(() => {
        BoardHelper.deleteBoard(board_name);
    });
});
