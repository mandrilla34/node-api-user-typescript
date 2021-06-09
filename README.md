<h3 align="center">Node Server Typescript Demo</h3>

<h4 align="center">API REST para gerenciamento de usuários, desenvolvida em Node com typescript, transpilada com typescript.</h4>

:o: **Problema:**<br> Criar uma API REST em Node desenvolvida com typescript.

:heavy_check_mark: **Solução:**<br> Documentação e pesquisas na comunidade.

:dart: **Impacto:**<br> Ter conhecimento e flexibilidade em tecnologia.

:bicyclist: **Corra:**

-   Clone este repositório
-   Instale as dependências:

```
npm install
```

-   Corra:

```
npm start
```

:clipboard: **Especificações:**<br>

O banco de dados recebeu o nome `http_app` no MongoDB e na porta `27017` 
para se conectar ao banco, faça alterações de acordo com o ambiente. <br>

<h5>Schema:</h5>

```
name: String,

nickname: String,

whatsapp: String,

createdAt: Date
```

<h5>Endpoints:</h5>

| Método  |      Rota        | Resultado                     |
| ------- | :--------------: | ------------------------------|
| get     |       '/'        | Hello World                   |
| get     |   '/api/users'   | Resgata todos os usuários     |
| get     | '/api/users/:id' | Resgata um usuário específico |
| post    |   '/api/users'   | Cria um usuário               |
| delete  | '/api/users/:id' | Deleta um usuário específico  |
| put     | '/api/users/:id' | Altera um usuário específico  |
