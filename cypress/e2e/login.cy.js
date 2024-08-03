describe('Trello Login Tests', () => {
    const username = Cypress.env('CYPRESS_USERNAME');
    const password = Cypress.env('CYPRESS_PASSWORD');

    beforeEach(() => {
        cy.fixture('user').as('userData');
    });

    it('Verify that it is possible to login successfully with valid credentials.', () => {
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

    it('Verify that it is possible to logout successfully.', () => {
        cy.login(username, password);
        cy.get('div[data-testid="header-member-menu-avatar"] span').should('be.visible').click();
        cy.get('[data-testid="account-menu-logout"] > .LCeoUSr_PkZrP2').should('be.visible').click();
        cy.url().should('include', 'logout');
        cy.contains('h5', 'Log out of your Atlassian account').should('be.visible');
    });
});
