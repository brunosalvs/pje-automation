# 🔒 Segurança e Boas Práticas

## ⚠️ Dados Sensíveis

Este projeto utiliza credenciais reais para testes automatizados. É **EXTREMAMENTE IMPORTANTE** seguir as práticas de segurança abaixo.

## 🛡️ Arquivos Protegidos

Os seguintes arquivos **NUNCA** devem ser commitados:

### 1. `cypress/fixtures/perfis.json`
- Contém CPF e senhas reais
- Está no `.gitignore`
- Use o arquivo `perfis.example.json` como template

### 2. `cypress.env.json`
- Variáveis de ambiente sensíveis
- Está no `.gitignore`

### 3. `.env` e variações
- Configurações de ambiente
- Está no `.gitignore`

## ✅ Como Configurar Corretamente

### Para Novos Colaboradores:

1. Clone o repositório
2. Copie o arquivo de exemplo:
   ```bash
   cp cypress/fixtures/perfis.example.json cypress/fixtures/perfis.json
   ```
3. Edite `perfis.json` com suas credenciais de **TESTE/HOMOLOGAÇÃO**
4. NUNCA use credenciais de produção

### Verificando o .gitignore:

Antes de fazer commit, sempre verifique:
```bash
# Ver o que será commitado
git status

# Verificar se perfis.json aparece
git ls-files | grep perfis.json
```

Se `perfis.json` aparecer, **NÃO FAÇA COMMIT** e execute:
```bash
git rm --cached cypress/fixtures/perfis.json
```

## 🚨 O Que Fazer Se Credenciais Foram Expostas

Se você acidentalmente commitou credenciais:

1. **IMEDIATAMENTE** mude todas as senhas expostas
2. Remova o arquivo do histórico do Git:
   ```bash
   git filter-branch --force --index-filter \
   'git rm --cached --ignore-unmatch cypress/fixtures/perfis.json' \
   --prune-empty --tag-name-filter cat -- --all
   ```
3. Force push (cuidado!):
   ```bash
   git push origin --force --all
   ```
4. Notifique a equipe de segurança

## ✅ Checklist Antes de Commitar

- [ ] `git status` não mostra `perfis.json`
- [ ] `.env` ou `cypress.env.json` não aparecem
- [ ] Verifiquei o diff: `git diff`
- [ ] Nenhuma senha ou CPF aparece no código
- [ ] Apenas `perfis.example.json` está sendo commitado

## 📚 Referências

- [OWASP - Gestão de Credenciais](https://owasp.org/www-project-top-ten/)
- [GitHub - Removing Sensitive Data](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)

---

**Lembre-se: Segurança é responsabilidade de todos!** 🔐
