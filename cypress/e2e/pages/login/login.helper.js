import { BoardElements } from "../board/board.elements";
import { LoginConstants } from "./login.constants";
import { LoginElements } from "./login.elements";

export class LoginHelper {

    static navigate_to_login() {
        cy.visit(LoginConstants.trello_login_url);
    }

    static insertUsername(username) {
        LoginElements.elements.username.type(username);
    }

    static insertPassword(password) {
        LoginElements.elements.password.type(password);
    }

    static clickLogin() {
        LoginElements.elements.loginButton.click();
    }

    static validateLoginErrorMessage() {
        LoginElements.elements.errorMessage.should('contain', 'Incorrect email address and / or password');
    }
    
    static validateUserLoginSuccessfully() {
        cy.url().should('include', '/boards');
        BoardElements.elements.boardWorkSpace.should('contain.text', 'YOUR WORKSPACES');
    }

    static login(username, password) {
        this.navigate_to_login();
        this.insertUsername(username);
        this.clickLogin();
        this.insertPassword(password);
        this.clickLogin();
    }
}
