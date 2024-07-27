describe('Trello Login Tests', () => {
    beforeEach(() => {
        cy.fixture('user').as('userData');
    });

    it('Verify that it is possible to login successfully with valid credentials.', () => {
        const username = Cypress.env('CYPRESS_USERNAME');
        const password = Cypress.env('CYPRESS_PASSWORD');

        cy.login(username, password);
        cy.wait(3000)
        cy.origin('https://trello.com', () => {
            // Esperar a que se cargue la página de tableros
            cy.url().should('include', '/boards');
            cy.wait(1000);
            // Validar el texto del encabezado del workspace
            cy.get('h3.boards-page-section-header-name').should('contain.text', 'YOUR WORKSPACES');
        });
    });

    it('Verify that it is not possible to login with invalid credentials.', function() {
        cy.login(this.userData.email, this.userData.password);
        cy.wait(1000)
        cy.get('.css-b0hel9').should('be.visible').should('contain', 'Incorrect email address and / or password');
    });
});
