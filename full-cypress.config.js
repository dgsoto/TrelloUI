const { defineConfig } = require('cypress');
const logToOutput = require('cypress-log-to-output');
const winston = require('winston');
require('dotenv').config(); // Cargar variables de entorno


// Configurar Winston
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
    transports: [
        new winston.transports.File({ filename: 'logs/trello.log' }),
        new winston.transports.Console()
    ],
});

module.exports = defineConfig({
  projectId: 'tmqhzg',
    e2e: {
        setupNodeEvents(on, config) {

            // implement node event listeners here
            require('cypress-mochawesome-reporter/plugin')(on);

            // Configurar logging
            logToOutput.install(on, (type, event) => {
                return event.level === 'log' || event.level === 'warn' || event.level === 'error';
            });

            // Registrar el evento 'task' para logging
            on('task', {
                log({ level, message }) {
                    logger.log({ level, message });
                    return null;
                },
            });

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
        chromeWebSecurity: false,
        defaultCommandTimeout: 10000,
        //retries: 1,
    },
});
