const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    reporter: "../node_modules/mochawesome/src/mochawesome.js",
    reporterOptions: {
        overwrite: false,
        html: false,
        json: true
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
  

});

