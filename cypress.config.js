const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'tur4qt',
    e2e: {
        setupNodeEvents(on, config) {
            config.env = {
                ...config.env,
                CYPRESS_USERNAME: 'josevsoft@gmail.com',
                CYPRESS_PASSWORD: 'Terry3000',
            };
            return config;
        },
        baseUrl: 'https://trello.com',
        supportFile: 'cypress/support/index.js',
        fixturesFolder: 'cypress/fixtures',
        video: true,
        chromeWebSecurity: false,
        defaultCommandTimeout: 30000,
    },
});
