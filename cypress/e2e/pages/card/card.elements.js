export class CardElements {
    static get elements() {
        return {
            get addCardButton() {
                return cy.get('button[data-testid="list-add-card-button"]');
                //return cy.get('button[data-testid="list-add-card-button"]');
            },
            get cardTextarea() {
                //return cy.get('textarea[data-testid="list-card-composer-textarea"]');
                return cy.get('textarea[placeholder="Enter a name for this card…"]');
            },
            get addCardSubmitButton() {
                //return cy.get('[data-testid="list-card-composer-add-card-button"]');
                return cy.contains('button', 'Add card');
            },
        }
    }
}