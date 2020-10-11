# Pokemon

Projeto realizado com angular com o objetivo de listar algumas informações referentes a
dados do Pokemon disponibilizados por uma api pública (https://pokeapi.co).

## Instalação

Versões utilizadas na construção do projeto:
`NodeJs: v12.14.0`
`Angular CLI: 9.1.12`

### Instalação via Docker

Na pasta raiz do projeto execute o comando para criar a imagem docker
`docker build . -t pokemon`

Após o término do asso anterior, execute o comando abaixo para rodar a imagem
`docker run -p 3000:80 pokemon`

O projeto deve estar acessível atavés de
http://localhost:3000/

### Instalaçao LINUX

Instalar NodeJS
`sudo apt-get install nodejs`

Instalar NPM
`sudo apt install npm`

Instalar angular-cli
`npm install -g @angular/cli`

Após a instalação, no diretório principal do projeto, é ncessário instalar os pacotes executnado o seguinte comando
`npm install`

Após a instalação do pacote, para rodar em ambiente local, basta executar o seguinte passo
`ng serve`

Agora o projeto está disponível em
`http://localhost:4200/`

## Organização do projeto

Neste projeto foram utilizados componentes de UI customizáveis através da biblioteca PrimeNg (https://www.primefaces.org/primeng/).

A seguir uma lista dos principais diretórios e suas funções.

Home -> Modulo que contém o componente da tela inicial do projeto
Modules -> Diretório que apresenta todos os módulos utilizados no sistema
Interface -> Diretórios que contém as interfaces de objetos utilizados no sistema
Services -> Contém todos os serviços utilizados no projeto
Shared -> Contém módulos ou componentes que são compartilhados com outros componentes do sistemas.

## Build

O comando ng-build constrói o projeto e todos seus artefatos são colocados no diretório `dist`.
O comando `ng build --prod` realiza a build em produção,
substituindo o arquivo `environment.ts` pelo `environment.prod.ts`.

## Tests

Para realizar todos os testes criados, na pasta raiz do projeto digite o comando `ng test`;
