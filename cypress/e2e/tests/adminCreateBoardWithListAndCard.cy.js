import { BoardConstants } from "../pages/board/board.constants";
import { BoardHelper } from "../pages/board/board.helper";
import { CardConstants } from "../pages/card/card.constants";
import { CardHelper } from "../pages/card/card.helper";
import { ListConstants } from "../pages/list/list.constants";
import { ListHelper } from "../pages/list/list.helper";
import { LoginHelper } from "../pages/login/login.helper";


describe('Admin creates a board with a list and a card', () => {
    let board_name;
    let list_name;
    let card_name;

    before(() => {
        board_name = BoardConstants.boardTestData.board_name;
        list_name = ListConstants.listTestData.name;
        card_name = CardConstants.cardTestData.name;
    });

    beforeEach(() => {
        const username = Cypress.env('CYPRESS_USERNAME');
        const password = Cypress.env('CYPRESS_PASSWORD');
        LoginHelper.login(username, password);
        BoardHelper.createBoard(board_name);
    });

    it('should create a board with a list and a card', () => {
        BoardHelper.validateBoardCreatedSuccessfully(board_name);        
        ListHelper.createList(list_name);
        ListHelper.validateListCreatedSuccessfully(list_name);
        CardHelper.cmdCrateCard(card_name);
    });

    afterEach(() => {
        BoardHelper.deleteBoard(board_name);
    });
});