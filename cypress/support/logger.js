export class Logger {
    static logInfo(message) {
        cy.log(message);
        //cy.logInfo(message);
    }

    static logWarn(message) {
        cy.log(message);
        //cy.logWarn(message);
    }

    static logError(message) {
        cy.log(message);
        //cy.logError(message);
    }
}