const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    ///baseUrl: 'http://localhost:8080',
    baseUrl: 'http://pjesup.intra.tjmg.gov.br',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
