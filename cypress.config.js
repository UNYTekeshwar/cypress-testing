import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    setupNodeEvents(on, config) {

      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    // Where your component specs live
    specPattern: "cypress/component/**/*.cy.{js,jsx,ts,tsx}",
    // Support file for component tests
    supportFile: "cypress/support/component.js",
    // Optional: video/screenshot settings can be set here
  },
});
