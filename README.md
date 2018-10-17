# Quero mais `seu-nome`s nos próximos quatro anos

Essa é uma aplicação web para facilitar que pessoas compartilhem histórias de sua educação nos anos em que Haddad foi ministro, e porque querem histórias como essas para mais gente. Nossa esperança é que isso sirva para um debate positivo nas eleições de 2018.

## Tecnicamente

Essa é uma aplicação MEAN com angular 6. Ela roda no Heroku.

## Pré-requisitos

- Node 10.9
- Angular CLI 6 (https://cli.angular.io)
- Firebase

## Rodando local

Você precisará de um projeto Firebase e ng-cli.

Crie um arquivo firebase.js em `src/environments` no seguinte formato:

```
export const firebase = {
  apiKey: "API_KEY",
  authDomain: "AUTH_DOMAIN",
  databaseURL: "DATABASE_URL",
  projectId: "PROJECT_ID",
  storageBucket: "STORAGE_BUCKET",
  messagingSenderId: "MESSAGING_SENDER_ID"
};
```

Fale com algum responsável para conseguir as credenciais do projeto.

Depois execute:

```
npm install
```

### Rodando servidor

```
npm start
```

### Rodando cliente

```
ng serve
```
