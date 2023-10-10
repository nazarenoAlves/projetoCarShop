# Projeto Car Shop

Este projeto é uma API CRUD de uma concessionária de veículos, desenvolvida com Node.js, TypeScript, MongoDB e Mongoose.

## Objetivos

* Desenvolver uma API RESTful com CRUD completo para gerenciar uma concessionária de veículos.
* Aplicar os princípios de Programação Orientada a Objetos (POO) no desenvolvimento da API.
* Trabalhar com o banco de dados MongoDB.

## Tecnologias

* Node.js
* TypeScript
* MongoDB
* Mongoose

## Funcionalidades

* Cadastrar veículos (carros e motos).
* Atualizar veículos no banco de dados.
* Deletar veículos específicos.
* Listar todos os veículos.
* Pesquisar veículos por marca, modelo ou ano.

## Instruções de uso

Para usar a API, é necessário ter o MongoDB instalado e configurado. Em seguida, basta executar o seguinte comando para iniciar o servidor:

Use o código com cuidado. Saiba mais
npm start


A API estará disponível em http://localhost:3000.

## Exemplos de chamadas da API

* Para cadastrar um veículo, use o seguinte endpoint:

POST /vehicles


O corpo da requisição deve conter os seguintes dados:

{
"brand": "Volkswagen",
"model": "Gol",
"year": 2023,
"price": 100000
}


* Para atualizar um veículo, use o seguinte endpoint:

PUT /vehicles/:id


O corpo da requisição deve conter os dados que deseja atualizar.

* Para deletar um veículo, use o seguinte endpoint:

DELETE /vehicles/:id


* Para listar todos os veículos, use o seguinte endpoint:

GET /vehicles


* Para pesquisar veículos por marca, modelo ou ano, use o seguinte endpoint:

GET /vehicles?brand=Volkswagen


GET /vehicles?model=Gol


GET /vehicles?year=2023

Contribuições
Contribuições são bem-vindas. Para enviar uma contribuição, basta criar um fork do repositório e enviar um pull request com as alterações.

Projeto realizado no curso de Desenvolvimento Web FullStack na Trybe

Atualizações
20 de outubro de 2023: Adicionado suporte para pesquisa por marca, modelo ou ano.
Outras informações
Este projeto foi desenvolvido como parte do curso de Desenvolvimento Web da Trybe.

Aqui estão algumas alterações que fiz para melhorar o README:

Adicionei uma seção de Instruções de uso que explica como iniciar o servidor e usar a API.
Adicionei uma seção de Exemplos de chamadas da API que fornece exemplos de como usar os endpoints da API.
Adicionei uma seção de Contribuições que convida os usuários a contribuir com o projeto.
Adicionei uma seção de Autor que fornece informações sobre o autor do projeto.
Adicionei uma seção de Data que fornece a data em que o projeto foi criado.
Adicionei uma seção de Atualizações que lista as atualizações que foram feitas no projeto.
Adicionei uma seção de Outras informações que fornece informações adicionais sobre o projeto.
