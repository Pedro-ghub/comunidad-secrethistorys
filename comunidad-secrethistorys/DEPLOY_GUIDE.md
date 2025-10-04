# Guia de Deploy na Vercel - Comunidad Secret Historys

## ✅ Status do Projeto
- ✅ Build funcionando corretamente
- ✅ Dependências instaladas
- ✅ Configuração Vercel criada
- ✅ Projeto pronto para deploy

## 🚀 Opções de Deploy

### Opção 1: Deploy via Interface Web (Recomendado)

1. **Acesse [vercel.com](https://vercel.com)**
2. **Faça login** com sua conta GitHub
3. **Clique em "New Project"**
4. **Importe seu repositório** `comunidad-secrethistorys`
5. **Configure automaticamente:**
   - Framework: Vite (detectado automaticamente)
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Opção 2: Deploy via Vercel CLI

```bash
# Instalar Vercel CLI globalmente
npm i -g vercel

# No diretório do projeto
vercel

# Siga as instruções no terminal
```

### Opção 3: Deploy via GitHub Actions (Automático)

1. **Crie um arquivo `.github/workflows/deploy.yml`:**
```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          working-directory: ./
```

## 📁 Arquivos de Configuração

### vercel.json (Já criado)
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

## 🔧 Configurações Importantes

### Variáveis de Ambiente
Se seu projeto usar variáveis de ambiente:
1. Vá em **Settings > Environment Variables** na Vercel
2. Adicione suas variáveis (ex: `VITE_API_URL`)

### Domínio Personalizado
1. Vá em **Settings > Domains** na Vercel
2. Adicione seu domínio personalizado
3. Configure os DNS conforme instruído

## 🚨 Troubleshooting

### Problema: Build falha
```bash
# Limpe o cache e reinstale
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Problema: Roteamento não funciona
- O arquivo `vercel.json` já está configurado com rewrites para SPA
- Certifique-se de que está usando React Router corretamente

### Problema: Assets não carregam
- Verifique se os caminhos dos assets estão corretos
- O arquivo `vercel.json` já configura cache para assets

## 📊 Monitoramento

Após o deploy:
1. **Acesse o dashboard da Vercel**
2. **Monitore performance** na aba Analytics
3. **Configure alertas** se necessário
4. **Use Vercel Speed Insights** para otimização

## 🔄 Deploy Contínuo

Com GitHub conectado:
- **Push para `main`** = Deploy automático
- **Pull Requests** = Preview deployments
- **Branches** = Deploy automático com URL única

## 📱 Teste Local do Build

```bash
# Build para produção
npm run build

# Preview do build
npm run preview

# Acesse http://localhost:4173
```

## ✅ Checklist Final

- [ ] Repositório no GitHub
- [ ] Build local funcionando
- [ ] Conta Vercel criada
- [ ] Projeto importado na Vercel
- [ ] Deploy executado com sucesso
- [ ] Domínio configurado (opcional)
- [ ] Variáveis de ambiente configuradas (se necessário)

---

**🎉 Seu projeto está pronto para o deploy!**
