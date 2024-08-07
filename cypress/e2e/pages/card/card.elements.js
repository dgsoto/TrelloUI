export class CardElements {
    static get elements() {
        return {
            get addCardButton() {
                return cy.get('button[data-testid="list-add-card-button"]');
            },
            get cardTextarea() {
                return cy.get('textarea[data-testid="list-card-composer-textarea"]');
            },
            get addCardSubmitButton() {
                return cy.get('[data-testid="list-card-composer-add-card-button"]');
            },
        }
    }
}