// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Configuração global para todos os testes
beforeEach(() => {
  // Limpar cookies e storage antes de cada teste
  cy.clearCookies()
  cy.clearLocalStorage()
})

// Tratamento de exceções não capturadas
Cypress.on('uncaught:exception', (err, runnable) => {
  // retorne false para prevenir que o Cypress falhe o teste
  // em exceções não capturadas da aplicação
  return false
})
