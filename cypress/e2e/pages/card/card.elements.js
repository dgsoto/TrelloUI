export class CardElements {
    static get elements() {
        return {
            get addCardButton() {
                return cy.get('button[data-testid="list-add-card-button"]');
            },
            get cardTextarea() {
                return cy.get('textarea[placeholder="Enter a name for this card…"]');
            },
            get addCardSubmitButton() {
                //return cy.get('[data-testid="list-card-composer-add-card-button"]');
                return cy.contains('button', 'Add card');
            },
            get cardNameLocator() {
                return cy.get('a[data-testid="card-name"]');
            },
            get moveCard() {
                return cy.get('[data-testid="card-back-move-card-button"]');
            },
            get selectListToMove() {
                return cy.get('div[data-testid="move-card-popover-select-list-destination"] span');
            },
            get clickMoveButton() {
                return cy.get('button[data-testid="move-card-popover-move-button"]');
            },
            get clickCloseCardModalButton() {
                return cy.get('span[data-testid="CloseIcon"]').eq(0);
            },
        }
    }
}