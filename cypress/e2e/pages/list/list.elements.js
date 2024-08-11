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
            },
            get anotherListName() {
                return cy.get('.vVqwaYKVgTygrk > [data-testid="list-name-textarea"]');
            },
            get anotherListButton() {
                return cy.get('div[data-testid="list-composer-button-container"] button');
            },
            getListByName(listName) {
                return cy.get(`div[aria-label="${listName}"]`);
            }
        }
    }
}