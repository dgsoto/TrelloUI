export class BoardElements {
    static get elements() {
        return {
            get createBoardButton() {
                return cy.get('div.board-tile.mod-add');
            },
            get boardTitle() {
                return cy.get('[data-testid="create-board-title-input"]');
            },
            get submitButton() {
                return cy.get('[data-testid="create-board-submit-button"]');
            },
            get boardName() {
                return cy.get('[data-testid="board-name-display"]');
            },
            get headerMenuOption() {
                return cy.get('div[data-testid="header-member-menu-avatar"] span');
            },
            get logoutButton() {
                return cy.get('[data-testid="account-menu-logout"] > .LCeoUSr_PkZrP2');
            },
            get boardWorkSpace() {
                return cy.get('h3.boards-page-section-header-name');
            },
            get boardMenu() {
                return cy.get('.GDunJzzgFqQY_3 > .nch-icon > [data-testid="OverflowMenuHorizontalIcon"]');
            },
            get closeBoardButton() {
                return cy.get('.board-menu-navigation-item-link').contains('Close board');
            },
            get closeButton() {
                return cy.get('input[value="Close"]');
            },
            get deleteBoardButton() {
                return cy.get('[data-testid="close-board-delete-board-button"]');
            },
            get deleteButton() {
                return cy.get('[data-testid="close-board-delete-board-confirm-button"]');
            },
        }
    }
}