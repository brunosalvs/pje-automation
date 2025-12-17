describe('Cenário Extenso - Exemplo com Perfil', () => {

  // Hook executado uma vez antes de todos os testes
  before(() => {
    cy.log('Iniciando suite de testes')
  })

  // Hook executado antes de cada teste
  beforeEach(() => {
    // Login será feito em cada teste com o perfil necessário
  })

  context('Funcionalidade A - Como Advogado', () => {
    beforeEach(() => {
      cy.loginComPerfil('advogado')
    })

    it('Deve realizar ação 1', () => {
      cy.verificarPerfilLogado('advogado')
      // Suas ações aqui
      cy.get('#elemento1').click()
      cy.get('#resultado1').should('be.visible')
    })

    it('Deve realizar ação 2', () => {
      // Já está logado como advogado
      cy.get('#elemento2').click()
      cy.get('#resultado2').should('be.visible')
    })
  })

  context('Funcionalidade B - Como Magistrado', () => {
    beforeEach(() => {
      cy.loginComPerfil('magistrado')
    })

    it('Deve realizar ação 3', () => {
      cy.verificarPerfilLogado('magistrado')
      // Suas ações aqui
      cy.get('#elemento3').click()
      cy.get('#resultado3').should('be.visible')
    })

    it('Deve realizar ação 4', () => {
      // Já está logado como magistrado
      cy.get('#elemento4').click()
      cy.get('#resultado4').should('be.visible')
    })
  })

  context('Funcionalidade C - Fluxo Completo', () => {
    it('Deve completar fluxo completo como servidor', () => {
      cy.loginComPerfil('servidor')

      // Passo 1
      cy.log('Executando passo 1')
      cy.get('#passo1').click()
      cy.get('#resultado-passo1').should('be.visible')

      // Passo 2
      cy.log('Executando passo 2')
      cy.get('#passo2').click()
      cy.get('#resultado-passo2').should('be.visible')

      // Passo 3
      cy.log('Executando passo 3')
      cy.get('#passo3').click()
      cy.get('#resultado-passo3').should('be.visible')

      // Validação final
      cy.get('#confirmacao-final').should('contain', 'Sucesso')
    })
  })

  after(() => {
    cy.log('Finalizando suite de testes')
  })
})
