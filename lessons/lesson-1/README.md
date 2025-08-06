# Aula 1

Nessa aula vamos aprender a configurar um projeto Node.js com Typescript. Para isso precisamos estar com uma pasta aberta no Visual Studio Code.

## Configurar o projeto

### Criar um projeto Node.js

- `npm init -y`

Esse comando cria um projeto Node.js gerando o arquivo package.json. Todo projeto Node.js, obrigatoriamente, tem esse arquivo.

### Instalar o Typescript

- `npm i -D typescript @types/node`

Esse comando instala o Typescript no projeto como uma dependência de desenvolvimento, porque a principal vantagem do Typescript é o fato de que o compilador funciona em tempo de desenvolvimento, enquanto escrevemos o código.

### Configurar o Typescript

- `npm tsc init`

Esse comando vai inicializar o Typescript no projeto gerando o arquivo tsconfig.json. Todo projeto que utilize o Typescript, obrigatoriamente, tem esse arquivo.

O conteúdo desse arquivo é que define como o compilador vai funcionar. Nós não devemos nos preocupar com isso, o que vamos fazer é buscar pela configuração adequada com base na nossa versão do Node.js.

Verifique versão do Node.js que você está utilizando com o comando abaixo.

`node -v`

E acesse o link abaixo para pegar as configurações do compilador para a sua versão:

https://github.com/tsconfig/bases

### Criar o primeiro arquivo

Crie uma pasta chamada `src` e dentro dela crie um arquivo com o nome `app.ts`.

No arquivo `app.ts` adicione o seguinte conteúdo:

`console.log('Batatinha')`

## Rodar o projeto

Temos dois scripts configurados no package.json que são responsáveis por rodar o projeto.

### Build (compilação)

O script de build vai fazer a conversão do código Typescript para Javascript. Todo o código Javascript gerado fica salvo no diretório `dist/`, isso é definido no arquivo de configuração do Typescript, o tsconfig.json.

Para rodar o script de build utilize o comando abaixo:

`npm run build`

Observe que rodar esse comando cria e/ou atualiza o conteúdo do diretório `dist/`.

### Executar o projeto

O script que executa o projeto é o `dev`. Ele vai pegar o arquivo Javascript gerado através do build e executar.

Para rodar o script de dev utilize o comando abaixo:

`npm run dev`

## Aprendendo Typescript

Aqui estão descritos os principais conceitos necessários para aprender a programar com Typescript.

### Tipos Básicos

Tipos básicos são os tipos primitivos do Typescript, como `number`, `string`, `boolean`, `any`, além de arrays desses tipos. Eles ajudam a garantir que variáveis e funções sejam usadas corretamente, prevenindo muitos erros comuns.

### Tuplas

Tuplas permitem declarar um array com um número fixo de elementos, onde cada elemento pode ter um tipo diferente. São úteis para representar estruturas de dados simples e ordenadas.

### Intersections

O operador de união (`|`) permite que uma variável tenha mais de um tipo possível.

### Enums

Enums são uma forma de nomear conjuntos de valores numéricos ou strings, facilitando a leitura e manutenção do código. Eles são usados para representar um grupo fixo de opções.

### Type Assertions

Type assertions permitem informar ao compilador que você sabe mais sobre o tipo de uma variável do que o próprio Typescript. É útil quando você tem certeza do tipo, mas o compilador não consegue inferir.

### Funções

Em Typescript, funções podem ter tipos explícitos para seus parâmetros e retorno. Isso garante que as funções sejam usadas corretamente e facilita a leitura do código.

### Types

O `type` permite criar tipos personalizados, facilitando a reutilização e organização do código. Você pode definir tipos para objetos, funções, uniões, etc.

### Propriedades possivelmente nulas

No Typescript, propriedades podem ser opcionais usando o caractere `?`. Para acessar propriedades que podem ser nulas ou indefinidas, pode-se usar o operador `!` para informar ao compilador que você tem certeza que o valor existe.

### Unions

Union types (`|`) permitem que uma variável aceite mais de um tipo. Isso é útil quando um valor pode assumir diferentes formas, como string ou número.

### Interfaces

Interfaces são usadas para definir a estrutura de objetos, especificando quais propriedades e métodos eles devem ter. São fundamentais para garantir contratos em grandes aplicações.

### Interfaces com funções

Interfaces também podem ser usadas para tipar funções, garantindo que elas sigam uma assinatura específica de parâmetros e retorno.
