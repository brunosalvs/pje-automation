// Comando para realizar login com perfil espec�fico
Cypress.Commands.add('loginComPerfil', (nomePerfil) => {
  cy.fixture('perfis').then((perfis) => {
    const perfil = perfis[nomePerfil]

    if (!perfil) {
      throw new Error(`Perfil "${nomePerfil}" nao encontrado em perfis.json`)
    }

    cy.log(`Realizando login com perfil: ${perfil.descricao}`)

    cy.visit('/')

    // Ajuste os seletores conforme a pigina de login do PJe
    cy.get('#username').type(perfil.usuario)
    cy.get('#password').type(perfil.senha)

    // Se houver campo de CPF
    if (cy.get('#cpf').should('exist')) {
      cy.get('#cpf').type(perfil.cpf)
    }

    cy.get('button[type="submit"]').click()

    // Aguarda confirmao de login bem-sucedido
    cy.url().should('not.include', '/login')
    cy.contains('Bem-vindo').should('be.visible')
  })
})

// Comando para logout
Cypress.Commands.add('logout', () => {
  cy.get('#btnLogout').click()
  cy.url().should('include', '/login')
})

// Comando para verificar se est� logado com perfil espec�fico
Cypress.Commands.add('verificarPerfilLogado', (nomePerfil) => {
  cy.fixture('perfis').then((perfis) => {
    const perfil = perfis[nomePerfil]
    cy.get('.user-profile').should('contain', perfil.usuario)
  })
})
