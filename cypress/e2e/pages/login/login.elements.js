export class LoginElements {
    static get elements() {
        return {
            get username() {
                return cy.get('[data-testid="username"]');
            },
            get password() {
                return cy.get('[data-testid="password"]');
            },
            get loginButton() {
                return cy.get('#login-submit');
            },
            get errorMessage() {
                return cy.get('.css-b0hel9');
            }
        }
    }
}