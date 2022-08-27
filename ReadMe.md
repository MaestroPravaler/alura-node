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
## Etapa 02 (commit 01)

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
