# 🚀 Automação de Testes - PJE (Processo Judicial Eletrônico)

[![Cypress](https://img.shields.io/badge/Cypress-13.x-17202C?style=for-the-badge&logo=cypress)](https://www.cypress.io/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

## 📋 Sobre o Projeto

Projeto de automação de testes End-to-End (E2E) desenvolvido para o sistema **PJE (Processo Judicial Eletrônico)** do TJMG. O objetivo é garantir a qualidade e confiabilidade das principais funcionalidades do sistema através de testes automatizados.

## 🎯 Objetivo

Automatizar os testes de regressão e validação das funcionalidades críticas do sistema PJE, reduzindo o tempo de execução de testes manuais e aumentando a cobertura de testes.

## 🛠️ Tecnologias Utilizadas

- **Cypress** - Framework de testes E2E
- **JavaScript (ES6+)** - Linguagem de programação
- **Node.js** - Ambiente de execução
- **Git** - Controle de versão

## ✨ Funcionalidades Testadas

- ✅ **Login e Autenticação**
  - Login com perfil de Administrador
  - Validação de campos obrigatórios
  - Tratamento de credenciais inválidas
  - Logout do sistema

- ✅ **Gestão de Processos**
  - Criação de novos processos
  - Validações de formulários
  - Fluxos completos de tramitação

- ✅ **Múltiplos Perfis de Usuário**
  - Advogado
  - Magistrado
  - Servidor
  - Administrador

## 📁 Estrutura do Projeto

```
pje/
├── cypress/
│   ├── e2e/                      # Arquivos de teste
│   │   ├── login.cy.js           # Testes de login
│   │   ├── novoprocesso.cy.js    # Testes de criação de processo
│   │   └── exemplo-cenario-extenso.cy.js
│   ├── fixtures/                 # Dados de teste (JSON)
│   │   └── perfis.json           # Perfis de usuários
│   ├── support/                  # Comandos e configurações
│   │   ├── commands.js           # Comandos customizados
│   │   └── e2e.js                # Configurações globais
│   ├── screenshots/              # Capturas de tela de falhas
│   └── videos/                   # Vídeos das execuções
├── cypress.config.js             # Configurações do Cypress
├── package.json                  # Dependências do projeto
└── README.md                     # Documentação
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 18.x ou superior)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/pje-automation.git

# Entre na pasta do projeto
cd pje

# Instale as dependências
npm install
```

### Executando os Testes

```bash
# Abrir o Cypress em modo interativo
npx cypress open

# Executar todos os testes em modo headless
npx cypress run

# Executar um teste específico
npx cypress run --spec "cypress/e2e/login.cy.js"

# Executar em um navegador específico
npx cypress run --browser chrome
```

## 📚 Comandos Customizados

O projeto possui comandos customizados para facilitar a escrita dos testes:

```javascript
// Realizar login com perfil específico
cy.loginComPerfil('administrador')

// Realizar logout
cy.logout()

// Verificar se está logado com perfil específico
cy.verificarPerfilLogado('administrador')
```

## 🔧 Configuração

### Configuração de Perfis

**IMPORTANTE:** Antes de executar os testes, você precisa configurar o arquivo de perfis:

1. Copie o arquivo de exemplo:
```bash
cp cypress/fixtures/perfis.example.json cypress/fixtures/perfis.json
```

2. Edite o arquivo `cypress/fixtures/perfis.json` e adicione suas credenciais reais:

```json
{
  "administrador": {
    "cpf": "SEU_CPF_AQUI",
    "senha": "SUA_SENHA_AQUI",
    "descricao": "Perfil de Administrador"
  }
}
```

**⚠️ ATENÇÃO:**
- O arquivo `perfis.json` está no `.gitignore` e NÃO será commitado
- NUNCA commite senhas ou credenciais reais
- Use apenas credenciais de ambiente de testes/homologação

### Configuração do Cypress

As configurações principais estão em `cypress.config.js`:

```javascript
module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://pjesup.intra.tjmg.gov.br',
    // outras configurações...
  },
});
```

## 📊 Relatórios e Evidências

O Cypress gera automaticamente:

- **Screenshots** de falhas em `cypress/screenshots/`
- **Vídeos** das execuções em `cypress/videos/`
- **Logs detalhados** no console

## 🧪 Boas Práticas Implementadas

- ✅ **Organização por contextos** - Testes agrupados logicamente
- ✅ **Reutilização de código** - Comandos customizados
- ✅ **Dados centralizados** - Uso de fixtures
- ✅ **Hooks para setup** - beforeEach, before, after
- ✅ **Seletores confiáveis** - Uso de IDs e classes específicas
- ✅ **Waits inteligentes** - Cypress aguarda automaticamente
- ✅ **Tratamento de exceções** - Configurado globalmente

## 📈 Cobertura de Testes

| Módulo | Cobertura | Status |
|--------|-----------|--------|
| Login | 90% | ✅ Completo |
| Processos | 70% | 🔄 Em progresso |
| Usuários | 60% | 🔄 Em progresso |

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

## 📝 Padrão de Commits

Este projeto segue o padrão de [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Alterações na documentação
- `test:` Adição ou modificação de testes
- `refactor:` Refatoração de código
- `style:` Formatação de código

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

**Seu Nome**

- LinkedIn: [linkedin.com/in/seu-perfil](https://www.linkedin.com/in/bruno-salviano-gomes/)
- GitHub: [@seu-usuario](git@github.com:brunosalvs)
- Email: brunosalvianog@gmail.com

## 🙏 Agradecimentos

- Equipe TJMG
- Comunidade Cypress
- Contribuidores do projeto

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!

**Desenvolvido com ❤️ e ☕ por [Bruno Salviano]**
