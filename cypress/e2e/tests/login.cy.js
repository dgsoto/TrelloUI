import { BoardHelper } from "../pages/board/board.helper";
import { LoginConstants } from "../pages/login/login.constants";
import { LoginHelper } from "../pages/login/login.helper";

describe('Trello Login Tests', () => {
    const username = Cypress.env('CYPRESS_USERNAME');
    const password = Cypress.env('CYPRESS_PASSWORD');
    const testData = LoginConstants.testData;

    it('Verify that it is possible to login successfully with valid credentials.', () => {
        LoginHelper.login(username, password);
        LoginHelper.validateUserLoginSuccessfully();
    });

    it('Verify that it is not possible to login with invalid credentials.', function() {
        LoginHelper.login(testData.user_email, testData.user_invalid_password);
        LoginHelper.validateLoginErrorMessage();
    });

    it('Verify that it is possible to logout successfully.', () => {
        LoginHelper.login(username, password);
        BoardHelper.logout();
        BoardHelper.validateLogoutUserSuccessfully();
    });
});
