/// <reference types="cypress" />

describe('Login', () => {

    context('Login com Sucesso', () => {
        it('Deve realizar login como Administrador', () => {
            cy.visit('pje/loginOld.seam?');

            cy.fixture('perfis').then((perfis) => {
                const perfil = perfis.administrador;

                cy.get('#username').click();
                cy.get('#username').type(perfil.cpf);
                cy.get('#password').click();
                cy.get('#password').type(perfil.senha);
                cy.get('#btnEntrar').click();

                cy.get('.titulo').should('contain', 'Quadro de avisos');
            });
        });
    });

    context('Validações de Campos', () => {
        beforeEach(() => {
            cy.visit('pje/loginOld.seam?');
        });

        it('Deve exibir mensagem de erro com credenciais inválidas', () => {
            cy.get('#username').type('0000000');
            cy.get('#password').type('00000');
            cy.get('#btnEntrar').click();

            cy.get('.rich-messages-label').should(($el) => {
                const text = $el.text();
                expect(
                    text.includes('Usuário ou senha inválidos') ||
                    text.includes('A senha foi bloqueada. Solicite uma nova senha para efetuar o desbloqueio')
                ).to.be.true;
            });
        });

        it('Deve exibir erro quando CPF não é informado', () => {
            cy.get('#password').type('tjmg');
            cy.get('#btnEntrar').click();

            cy.get('.rich-messages-label').should('contain', 'Campo CPF/CNPJ é obrigatório');
        });

        it('Deve exibir erro quando senha não é informada', () => {
            cy.get('#username').type('07759182619');
            cy.get('#btnEntrar').click();

            cy.get('.rich-messages-label').should('contain', 'Campo senha é obrigatório');
        });
    });

    context('Logout', () => {
        it('Deve sair da aplicação com sucesso', () => {
            cy.visit('pje/loginOld.seam?');

            cy.fixture('perfis').then((perfis) => {
                const perfil = perfis.administrador;

                cy.get('#username').type(perfil.cpf);
                cy.get('#password').type(perfil.senha);
                cy.get('#btnEntrar').click();

                cy.get('.avatar.tip-bottom').click();
                cy.get('.btn.btn-default.botao-sair').click();

                cy.get('.titulo').should('contain', 'Processo Judicial Eletrônico');
            });
        });
    });

});