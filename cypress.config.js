const { defineConfig } = require('cypress');
require('dotenv').config(); // Cargar variables de entorno

console.log('Base URL:', process.env.CYPRESS_BASE_URL); // Verificar si la variable está cargada

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
            require('cypress-mochawesome-reporter/plugin')(on);
            config.env = {
                ...config.env,
                CYPRESS_USERNAME: process.env.CYPRESS_USERNAME,
                CYPRESS_PASSWORD: process.env.CYPRESS_PASSWORD,
            };
            return config;
        },
        baseUrl: process.env.CYPRESS_BASE_URL || 'https://trello.com', // Usar la variable de entorno
        supportFile: 'cypress/support/index.js',
        fixturesFolder: 'cypress/fixtures',
        video: false,
        reporter: 'cypress-mochawesome-reporter',
        reporterOptions: {
            reportDir: 'cypress/reports',
            overwrite: false,
            html: true,
            json: true,
        },
    },
});
