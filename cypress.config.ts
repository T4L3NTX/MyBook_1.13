const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8100/', // Cambia según el puerto donde corre tu app Ionic
    supportFile: 'cypress/support/e2e.js', // Opcional: configuración adicional
    specPattern: 'cypress/e2e/*/.cy.{js,jsx,ts,tsx}', // Ruta de tus tests
    video: true, // Si quieres grabar las pruebas
  },
  env: {
    apiServer: 'http://localhost:3000/', // Dirección del JSON-Server
  },
});