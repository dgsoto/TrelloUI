import { ListElements } from "../list/list.elements";
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

    static clickOnCardName() {
        CardElements.elements.cardNameLocator.click();
    }

    static clickOnMoveCardOption() {
        CardElements.elements.moveCard.click();
    }

    static selectTargetList(list_name) {
        CardElements.elements.selectListToMove.click().type(`${list_name}{enter}`);
    }

    static clickOnMoveButton() {
        CardElements.elements.clickMoveButton.click();
    }

    static clickOnCloseCardModal() {
        CardElements.elements.clickCloseCardModalButton.click();
    }

    static moveCardToAnotherList(target_list_name) {
        this.clickOnCardName();
        this.clickOnMoveCardOption();
        this.selectTargetList(target_list_name);
        this.clickOnMoveButton();
        this.clickOnCloseCardModal();
    }

    static xmoveCardToAnotherList(card_name, sourceListName, targetListName) {
        ListElements.elements.getListByName(sourceListName)
            .contains(CardElements.elements.cardNameLocator, card_name)
            .trigger('dragstart');

        ListElements.elements.getListByName(targetListName)
            .trigger('drop')
            .trigger('dragend');
    }
}