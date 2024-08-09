// cypress/support/index.js

import './commands'; // Importar comandos personalizados
//import 'cypress-mochawesome-reporter/register';  // Si estás usando el reporter


// reference about this code: https://docs.cypress.io/guides/references/error-messages#Uncaught-exceptions-from-your-application
Cypress.on('uncaught:exception', (err, runnable) => {
    // Prevenir que Cypress falle el test
    return false;
});
