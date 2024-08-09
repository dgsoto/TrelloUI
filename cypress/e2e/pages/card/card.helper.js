import { CardElements } from "./card.elements";

export class CardHelper {
    static clickAddCardButton() {
        CardElements.elements.addCardButton.click();
    }

    static insertCard(card_name) {
        CardElements.elements.cardTextarea.type(card_name).type('{enter}');
    }

    static clickCardSubmitButton() {
        CardElements.elements.addCardSubmitButton.click();
    }

    static validateCardCreatedSuccessfully(card_name) {
        cy.contains(card_name, { timeout: 15000 }).should('be.visible');
    }

    static createCard(card_name) {
        this.clickAddCardButton();
        this.insertCard(card_name);
        this.clickCardSubmitButton();
    }

    static cmdCrateCard(card_name) {
        cy.createCard(card_name);
    }
}