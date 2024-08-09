import { LoginHelper } from "../pages/login/login.helper";
import { BoardConstants } from "../pages/board/board.constants";
import { ListConstants } from "../pages/list/list.constants";
import { CardConstants } from "../pages/card/card.constants";
import { BoardHelper } from "../pages/board/board.helper";
import { ListHelper } from "../pages/list/list.helper";
import { CardHelper } from "../pages/card/card.helper";


describe('Trello Card Tests', () => {

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
        ListHelper.createList(list_name);
    });

    it('Verify that it is possible to create a new card.', () => {
        CardHelper.cmdCrateCard(card_name);
    });

    afterEach(() => {
        BoardHelper.deleteBoard(board_name);
    });
});
