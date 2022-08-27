## Curso de Node

O Objetivo deste trabalho e desenvolver um api simples como um reconhecimento inicial de nodeJs. O trabalho é baseado no curso de 
node da NodeJs: Api REST com Express e MongoDB.

![https://cursos.alura.com.br/course/nodejs-api-rest-express-mongodb](assets/images/titulo.png)

## Etapa 01 (commit 01)

1. Inicialização do Projeto
    - Crie uma pasta em um diretorio local
    - Inicialize o projeto em node
    ```
    npm init -y
    ```

2. Criar servidor local
    - Código no arquivo server.js

3. Inicializar o Projeto
    ```
    node server.js
    ```
## Etapa 02 (Rotas módulo nativo http e Instalação do nodemon)

1. Criando as primeiras rotas
    - const rotas no arquivo server.js

2. Instalando a biblioteca nodemon
    - Esta biblioteca realiza o reload automático quando salvamos um arquivo. é uma dependencia de desenvolvimento
    não é necessária enviar para produção. (-D)
    ```
    npm install nodemon@2.0.15 -D
    ```
    - Arquivo package.json criar um novo script ( linha 7 )
    ```
    "dev": "nodemon server.js"
    ```
    - rodar o projeto referenciando o script que criamos
    ```
    npm run dev
    ```

3. Criando o arquivo .gitignore

O objetivo da criação do arquivo é para não subir para o git os diretórios/arquivos desnecessários (node_modules).

## Etapa 03 (Instalando o Express / Preparando o Projeto)

1. Instalando o express
    ```
    npm install express@4.17.3
    ```
2. Criando as pastas/arquivos adotando boas práticas de programação
    - Criar pasta src (source)
    - Criar dentro de src o arquivo app.js

3. Implementando a importação do express e criando array com livros

4. Implementando o método get

5. Modificando o arquivo server.js para poder trabalhar com o express

6. Redirecionando a porta para poder trabalhar com o .env ou local 3000

7. Incluir o type no arquivo package.json necessário para trabalhar com export de modulos
    ```
    "type": "module",
    ```

## Etapa 04 (Criando o método POST, método PUT, método DELETE e o GET por Id)

1. Adicionando o método POST no arquivo app.src
2. Criando a visualização das entradas pelo postman
    ```
    body:
    
    {
        "id": 3,
        "titulo": "Clean Code",
        "preco": 69.99
    }
    ```

3. Utilizando o express.json() para reconhecer o body enviado no formato declarado.
4. Adicionando o método PUT no arquivo app.src
5. Aproveitando a lógica do método PUT e fazendo a consulta de livros por Id.
6. Adicionando o método DELETE no arquivo app.src
7. Introduzindo o conceito de "atribuição via desestruturação" => atribuição para uma variável valores retirados de um array ou objeto (linha 37)
