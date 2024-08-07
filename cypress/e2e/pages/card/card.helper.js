import { CardElements } from "./card.elements";

export class CardHelper {
    static clickAddCardButton() {
        CardElements.elements.addCardButton.first().click();
    }

    static insertCard(card_name) {
        CardElements.elements.cardTextarea
            .should('be.visible')
            .invoke('val', card_name);
    }

    static clickCardSubmitButton() {
        CardElements.elements.addCardSubmitButton.should('be.visible').first().click();
    }

    static createCard(card_name) {
        this.clickAddCardButton();
        this.insertCard(card_name);
        this.clickCardSubmitButton();
    }
}