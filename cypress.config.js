const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
            require('cypress-mochawesome-reporter/plugin')(on);
        },
        baseUrl: 'https://trello.com',
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
