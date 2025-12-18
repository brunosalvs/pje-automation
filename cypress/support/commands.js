// Comando para realizar login com perfil específico
Cypress.Commands.add('loginComPerfil', (nomePerfil) => {
  cy.fixture('perfis').then((perfis) => {
    const perfil = perfis[nomePerfil]

    if (!perfil) {
      throw new Error(`Perfil "${nomePerfil}" não encontrado em perfis.json`)
    }

    cy.log(`Realizando login com perfil: ${perfil.descricao}`)

    cy.visit('pje/loginOld.seam?')

    // Preenche CPF e senha conforme a página de login do PJe
    cy.get('#username').type(perfil.cpf)
    cy.get('#password').type(perfil.senha)
    cy.get('#btnEntrar').click()

    // Aguarda confirmação de login bem-sucedido
    cy.get('.titulo').should('contain', 'Quadro de avisos')
  })
})

// Comando para logout
Cypress.Commands.add('logout', () => {
  cy.get('#btnLogout').click()
  cy.url().should('include', '/login')
})

// Comando para verificar se está logado com perfil específico
Cypress.Commands.add('verificarPerfilLogado', (nomePerfil) => {
  cy.fixture('perfis').then((perfis) => {
    const perfil = perfis[nomePerfil]
    // Verifica se o usuário está logado através do título da página
    cy.get('.titulo').should('contain', 'Quadro de avisos')
    cy.log(`Verificado login com perfil: ${perfil.descricao}`)
  })
})
