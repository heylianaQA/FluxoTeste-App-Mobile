# Teste Automatizado Android - EBAC Store

Projeto de automação para testes de cadastro de usuários no aplicativo EBAC Store, desenvolvido usando WebDriverIO e Appium, com execução na device farm Sauce Labs.

## 💡 Sobre o Projeto

Este projeto automatiza o fluxo de cadastro de novos usuários no aplicativo EBAC Store. O teste navega automaticamente até a tela de perfil, acessa o formulário de cadastro e preenche todos os campos necessários usando dados gerados dinamicamente.

## 🛠️ Tecnologias Utilizadas

- WebDriverIO (v3.2.1) - Framework de automação
- Appium (v3.9.8) - Ferramenta de automação mobile
- Faker (v9.3.0) - Geração de dados para teste
- Sauce Labs - Device farm para execução dos testes
- TypeScript (v5.7.3) - Linguagem de programação
- Mocha Framework (v9.5.0) - Framework de testes
- Bundletool - Ferramenta para instalação do aplicativo

## 📁 Estrutura do Projeto

```
└── project
    ├── spec/
    │   └── (arquivos de teste)
    ├── screenvideo/
    │   └── (gravações dos testes)
    ├── package.json
    └── wdio.conf.js
```

## 📱 Configuração do Aplicativo

### Obtenção do Aplicativo
1. O aplicativo EBAC Store pode ser encontrado no repositório:
   ```
   https://github.com/EBAC-QE/mobile-apps/tree/main/ebacshop/android
   ```

### Instalação do Aplicativo
1. Instale o bundletool em sua máquina
2. Use o bundletool para gerar o APK a partir do arquivo .aab
3. Instale o APK gerado no dispositivo ou emulador que será utilizado para testes

## 🚀 Como Executar

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```
3. Execute os testes:
```bash
npm test
```

## ⚙️ Configuração de Ambiente

### Sauce Labs (Padrão)
O projeto está configurado por padrão para executar os testes no Sauce Labs.

### Execução Local
Para executar os testes localmente:
1. No arquivo `wdio.conf.js`, localize a seção de capabilities comentada para execução local
2. Descomente esta seção e comente as capabilities do Sauce Labs
3. Configure o Appium no seu ambiente local
4. Certifique-se de que o aplicativo está instalado corretamente usando o bundletool
5. Execute os testes normalmente com `npm test`

## 📝 Notas Importantes

- Os testes são executados na device farm Sauce Labs
- O projeto inclui gravações dos testes na pasta `screenvideo`
- O tempo de resposta após o cadastro pode ser longo devido à renderização da página inicial
- Os testes são executados através do comando configurado no package.json: `wdio run ./wdio.conf.js`
- É necessário ter o bundletool configurado para instalação local do aplicativo

## 📈 Funcionalidades Testadas

- Navegação até a tela de perfil
- Acesso ao formulário de cadastro
- Preenchimento automático dos campos obrigatórios
- Submissão do formulário de cadastro

## 🤝 Contribuição

Sinta-se à vontade para contribuir com o projeto. Toda contribuição é bem-vinda!

