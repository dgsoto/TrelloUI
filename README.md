mkdir trello-tests
cd trello-tests
npm init -y
npm install cypress --save-dev
npm install --save-dev cypress-mochawesome-reporter
npm install dotenv --save-dev


npx cypress open


trello-tests/
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   ├── board.cy.js
│   │   ├── list.cy.js
│   │   ├── card.cy.js
│   ├── fixtures/
│   │   ├── user.json
│   ├── support/
│   │   ├── commands.js
│   │   ├── index.js
├── cypress.config.js
├── package.json



npx cypress open  # To open the Test Runner
npx cypress run   # To run tests headlessly


git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_REPOSITORIO>


npm install


npx cypress run --spec "cypress/e2e/board.cy.js"


comando ejecutar prueba
cypress run --headed
