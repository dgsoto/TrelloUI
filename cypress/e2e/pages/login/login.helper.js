
import { Logger } from "../../../support/logger";
import { BoardElements } from "../board/board.elements";
import { LoginConstants } from "./login.constants";
import { LoginElements } from "./login.elements";

export class LoginHelper {

    static navigate_to_login() {
        Logger.logInfo(`Navigate to ${LoginConstants.trello_login_url}`);
        cy.visit(LoginConstants.trello_login_url);
    }

    static insertUsername(username) {
        Logger.logInfo(`Typing username: ${username}`);
        LoginElements.elements.username.type(username);
    }

    static insertPassword(password) {
        Logger.logInfo(`Typing password: ${password}`);
        LoginElements.elements.password.type(password);
    }

    static clickLogin() {
        Logger.logInfo('Click on Login button.');
        LoginElements.elements.loginButton.click();
    }

    static validateLoginErrorMessage() {        
        LoginElements.elements.errorMessage.should('contain', 'Incorrect email address and / or password');
        Logger.logInfo('Validate error message: Incorrect email address and / or password');
    }
    
    static validateUserLoginSuccessfully() {
        Logger.logInfo('Validate the "/boards" exists in the URL.');
        cy.url().should('include', '/boards');
        Logger.logInfo('Validate "YOUR WORKSPACES" exists in the page.')
        BoardElements.elements.boardWorkSpace.should('contain.text', 'YOUR WORKSPACES');
    }

    static login(username, password) {
        Logger.logInfo('*** Start Login Trello. ***');
        this.navigate_to_login();
        this.insertUsername(username);
        this.clickLogin();
        this.insertPassword(password);
        this.clickLogin();
        Logger.logInfo('*** End Login Trello. ***');
    }
}
