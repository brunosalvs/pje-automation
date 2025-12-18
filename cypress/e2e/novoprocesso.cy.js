describe('Novo Processo - Advogado', () => {

  // Hook executado uma vez antes de todos os testes
  before(() => {
    cy.log('Iniciando suite de testes')
  })

  // Hook executado antes de cada teste
  beforeEach(() => {
    // Login será feito em cada teste com o perfil necessário
  })

  context('Novo processo civel - Como Advogado', () => {
    beforeEach(() => {
      cy.loginComPerfil('advogado')
    })

    it('Deve verificar perfil de advogado logado', () => {
      cy.verificarPerfilLogado('advogado')

      // Verifica o perfil no dropdown
      cy.get('.dropdown-toggle').click()
      cy.get('.text-muted.btn-block').should('contain', 'Advogado(a)')
    })
  })

  // Teste desabilitado - necessário configurar credenciais corretas do servidor
  // context('Funcionalidade C - Fluxo Completo', () => {
  //   it('Deve completar fluxo completo como servidor', () => {
  //     cy.loginComPerfil('servidor')
  //
  //     // Passo 1
  //     cy.log('Executando passo 1')
  //     cy.get('#passo1').click()
  //     cy.get('#resultado-passo1').should('be.visible')
  //
  //     // Passo 2
  //     cy.log('Executando passo 2')
  //     cy.get('#passo2').click()
  //     cy.get('#resultado-passo2').should('be.visible')
  //
  //     // Passo 3
  //     cy.log('Executando passo 3')
  //     cy.get('#passo3').click()
  //     cy.get('#resultado-passo3').should('be.visible')
  //
  //     // Validação final
  //     cy.get('#confirmacao-final').should('contain', 'Sucesso')
  //   })
  // })

  after(() => {
    cy.log('Finalizando suite de testes')
  })
})