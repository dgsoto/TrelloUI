import { ListElements } from "./list.elements";

export class ListHelper {

    static inputAnotherListName(another_list_name) {
        ListElements.elements.anotherListButton.click();
        ListElements.elements.anotherListName
            .should('be.visible').type(another_list_name);
    }

    static insertListName(list_name) {
        ListElements.elements.listName.type(list_name);
    }

    static clickAddListButton() {
        ListElements.elements.addListButton.click();
    }

    static clickListName(list_name) {
        cy.contains(list_name).click();
    }

    static validateListCreatedSuccessfully(list_name) {
        this.validateTextIsVisible(list_name);
    }

    static validateListNameUpdatedSuccessfully(list_name) {
        this.validateTextIsVisible(list_name);
    }

    static validateTextIsVisible(text) {
        cy.contains(text).should('be.visible');
    }

    static updateListName(list_name) {
        ListElements.elements.textareaListName.should('be.visible').clear();
        cy.wait(3000);
        ListElements.elements.textareaListName.invoke('val','Updated-To Do{enter}');
        //ListElements.elements.textareaListName.type(`${list_name}{enter}`);
    }

    static createList(list_name) {
        this.insertListName(list_name);
        this.clickAddListButton();
    }

    static createAnotherList(list_name) {
        this.inputAnotherListName(list_name);
        this.clickAddListButton();
    }
}