export class ListElements {
    static get elements() {
        return {
            get listName() {
                return cy.get('[data-testid="list-name-textarea"]');
            },
            get addListButton() {
                return cy.get('[data-testid="list-composer-add-list-button"]');
            },
            get textareaListName() {
                return cy.get('textarea[data-testid="list-name-textarea"]');
            }
        }
    }
}