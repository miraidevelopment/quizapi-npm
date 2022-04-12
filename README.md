<br>
<div align="center">
    <a href="https://www.npmjs.com/package/quiz-api"><img src="https://user-images.githubusercontent.com/61317250/159102864-01bed8cb-3d0d-4cee-b78a-efb8a9309d79.png" alt="quizapi icon" /></a>
    <h1>QuizAPI</h1>
    <p>💡 Uma API de Questões e Respostas para seu bot do Discord e WebSite, 100% em português e fácil de usar ⚡</p>
    <a href="https://discord.gg/gNFEMrHshn"><img src="https://img.shields.io/discord/786392360475951154?style=for-the-badge&label=Chat&color=2490f8&logo=discord&logoColor=white" alt="discord server" /></a>
    <a href="https://www.npmjs.com/package/quiz-api"><img src="https://img.shields.io/npm/v/quiz-api.svg?style=for-the-badge&maxAge=3600&color=ec842c&logo=npm" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/quiz-api"><img src="https://img.shields.io/npm/dt/quiz-api.svg?style=for-the-badge&maxAge=3600&color=ec842c&logo=npm" alt="npm downlods" /></a>
</div>
<br>

## Suporte - Tem perguntas ou quer conversar e entrar em contato com os desenvolvedores?
### Entre no servidor de suporte agora para obter respostas às suas perguntas ou para receber ajuda com erros:
<div align="center">
  <h3><a href="https://discord.gg/gNFEMrHshn"alt="server support">Servidor Oficial</a></h3>
</div>

## Índice de Conteúdos

- [Sobre](#sobre)
- [Instalação](#instalação)
  - [Setup](#setup)
- [Categorias](#categorias)
- [Exemplo de Uso](#exemplo-de-uso)
  - [COMUM](#comum)
  - [RANDOM](#random)
- [QuizAPI](#quizapi)
- [Open Source](#open-source)

|                 |                                                       Documentação e pequenas informações        |                                                        |
|:---------------:|:------------------------------------------------------------------------------------------------:|:------------------------------------------------------:|
|  Exemplo de Uso |                                             Descrição                                            |                           Uso                          |
|       COMUM     |                                Retorna um Quiz setado manualmente                                |          quiz('categoria', 'numero')        |
|      RANDOM     |                        Retorna um Quiz aleatório como categoria ou questão                       |               quiz('random', 'random')                 |
## Sobre
💡 Uma API de Questões e Respostas para seu bot do Discord e WebSite, 100% em português e fácil de usar ⚡
## Instalação

**Node.JS 16.6.0 ou maior é necessária.**  

```sh-session
npm install quiz-api
```


### Setup
```js
let quiz = require("quiz-api")

let categoria = "CATEGORIA"
let numero = "NÚMERO DA QUESTÃO"

var res = quiz(`${categoria}`, `${numero}`)
```

## Categorias
### Em todas as categorias atualmente temos [10] Quizes
```fix
[ 'esportes', 'hitoria', 'entretenimento' ]
```

## Exemplo de Uso
### Comum
#### Example - 
```js
quiz('esportes', '1')

// retorna
/*
{
  alternativas: "1) Usain Bolt\n2) Pelé\n3) Oscar Schmidt\n4) Yan Gomes\n5) Sérgio Dutra",
  questao: "Qual foi o maior corredor do mundo?",
  resposta: "1"
}
*/
```
### Random
#### Example - 
```js
quiz('random', 'random') // retorna um quiz aleatório de uma categoria aleatória
quiz('esporte', 'random') // retorna um quiz aleatório de uma categoria de esporte

// retorna
/*
{
  alternativas: "Alternativas aleatórias.",
  questao: "Questões aleatórias.",
  resposta: "Respostas aleatórias."
}
*/
```
<br>

<div align="center">
<h1>Mirai Development</h1>
<h2>QuizAPI</h2>

<p>QuizAPI - 💡 Uma API de Questões e Respostas para seu bot do Discord e WebSite, 100% em português e fácil de usar⚡</p>

Dirigida por <a href="https://github.com/guihrib/">GR</a> e a Equipe <a href="https://github.com/MiraiDevelopment">Mirai Development</a></p>
    <a href="https://discord.gg/gNFEMrHshn"><img src="https://user-images.githubusercontent.com/61317250/159178246-128e53fb-9b23-4fd4-b61f-94fe1784a48c.png" alt="Mirai Development" /></a>
</div>

## Open Source

A QuizAPI é uma api aberta feita para desenvolvedores web e de automação. Também feito por você! Se você quiser contribuir, basta fazer um [pull-request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)

<p>Copyright © 2022 @Mirai Development</p>
