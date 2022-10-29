<h1>Desafio Bemol - Cadastro de Clientes</h1>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=angular&message=framework&color=red&style=for-the-badge&logo=Angular"/>
  <img src="https://img.shields.io/static/v1?label=Node&message=deploy&color=blue&style=for-the-badge&logo=Node"/>
  <img src="https://img.shields.io/static/v1?label=Heroku&message=server&color=lylas&style=for-the-badge&logo=Heroku"/>
  <img src="http://img.shields.io/static/v1?label=License&message=MIT&color=green&style=for-the-badge"/>
  <img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge"/>
</p>

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

## Demo

Para visualização do projeto rodando, o mesmo está disponibilizado no servidor Heroku, no link:

https://dbemol-hudson.herokuapp.com/

## Requisitos para uso do Código Fonte

É necessário ter instalado:
- Node e NPM : https://nodejs.org/en/
- Angular: Instalar através do comando [npm install -g @angular/cli] (maiores informações em https://angular.io/guide/setup-local)

## Instalação Código Fonte em Angular

* Para instalar e ter acesso ao código fonte em angular, é necessário clonar o repositorio no link: https://github.com/hudsonhorta/desafiobemol.git 

* Fazer instalação das dependencias com o comando [NPM INSTALL --force]

## Servidor Local de Desenvolvimento

Execute [ng serve] para rodar um servidor dev. Navegue até http://localhost:4200/. O aplicativo será recarregado automaticamente se você alterar qualquer um dos arquivos de origem.

## Caso de Uso

Esta pequena aplicação é apenas uma demonstração de front-end em Angular usando Bootstrap, e validação do formulário.

Ao informar o CEP o sistema utiliza uma API REST da ViaCEP para retornar os dados do endereço e preencher de forma automática os respectivos campos.

Ao clicar no botão [SALVAR] o sistema realizar a validação do formulário e emite mensagem visual de erro ou sucesso do cadastro.

A mensagem de envio de e-mail confirmando o cadastro é apenas visual, o aplicativo não envia efetualmente um e-mail.


