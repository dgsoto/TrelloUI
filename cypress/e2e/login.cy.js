describe('Trello Login Tests', () => {
    beforeEach(() => {
        cy.fixture('user').as('userData');
    });

    it('should login successfully with valid credentials', function() {
        cy.login(this.userData.email, this.userData.password);
        cy.wait(3000)
        cy.get('h3.boards-page-section-header-name').should('contain.text', 'YOUR WORKSPACES');
        cy.url().should('include', '/boards');
    });

    /*it('should display error for invalid credentials', function() {
        cy.login(this.userData.email, 'wrong-password');
        cy.get('.css-xal9c7').should('contain', 'Incorrect email address and / or password');
    });*/
});
