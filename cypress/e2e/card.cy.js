describe('Trello Card Tests', () => {
    beforeEach(() => {
        cy.fixture('user').as('userData');
        cy.login(this.userData.email, this.userData.password);

        // Create a new board and a list for card tests
        cy.get('.board-tile.mod-add').click();
        cy.get('input[data-test-id="create-board-title-input"]').type('Card Test Board');
        cy.get('button[data-test-id="create-board-submit-button"]').click();
        cy.url().should('include', '/b/');
        cy.get('input[name="name"]').type('To Do');
        cy.get('input[value="Add list"]').click();
    });

    it('should create a new card', () => {
        cy.get('.open-card-composer').click();
        cy.get('textarea[placeholder="Enter a title for this card…"]').type('New Card');
        cy.get('input[value="Add card"]').click();
        cy.contains('New Card').should('be.visible');
    });

    it('should move a card to another list', () => {
        // Create another list
        cy.get('.open-add-list').click();
        cy.get('input[name="name"]').type('Done');
        cy.get('input[value="Add list"]').click();

        // Create a card
        cy.get('.open-card-composer').click();
        cy.get('textarea[placeholder="Enter a title for this card…"]').type('Move Card');
        cy.get('input[value="Add card"]').click();

        // Move card to 'Done' list
        cy.get('.list-card').contains('Move Card').trigger('dragstart');
        cy.get('.list').contains('Done').trigger('drop');
        cy.contains('Done').parent().contains('Move Card').should('be.visible');
    });
});
