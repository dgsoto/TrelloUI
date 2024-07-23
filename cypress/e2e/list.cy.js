describe('Trello List Tests', () => {
    beforeEach(() => {
        cy.fixture('user').as('userData');
        cy.login(this.userData.email, this.userData.password);
        
        // Create a new board for list tests
        cy.get('.board-tile.mod-add').click();
        cy.get('input[data-test-id="create-board-title-input"]').type('List Test Board');
        cy.get('button[data-test-id="create-board-submit-button"]').click();
        cy.url().should('include', '/b/');
    });

    it('should create a new list', () => {
        cy.get('input[name="name"]').type('To Do');
        cy.get('input[value="Add list"]').click();
        cy.contains('To Do').should('be.visible');
    });

    it('should rename a list', () => {
        cy.get('input[name="name"]').type('To Do');
        cy.get('input[value="Add list"]').click();
        cy.get('.list-header-name').click().clear().type('Updated To Do{enter}');
        cy.contains('Updated To Do').should('be.visible');
    });
});
