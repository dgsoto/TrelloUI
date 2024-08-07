import { BoardConstants } from "../pages/board/board.constants";
import { BoardHelper } from "../pages/board/board.helper";
import { LoginHelper } from "../pages/login/login.helper";

describe('Trello Board Tests', () => {
    let board_name;

    before(() => {
        board_name = BoardConstants.boardTestData.board_name;
    });

    beforeEach(() => {
        const username = Cypress.env('CYPRESS_USERNAME');
        const password = Cypress.env('CYPRESS_PASSWORD');
        LoginHelper.login(username, password);
    });

    it('Verify that it is possible to create a new board.', () => {
        BoardHelper.createBoard(board_name);
        BoardHelper.validateBoardCreatedSuccessfully(board_name);
    });

    it('Verify that it is possible to delete a board by its name.', () => {
        BoardHelper.deleteBoard(board_name);
        BoardHelper.validateDeleteBoardSuccessfully(board_name);
    });
});
