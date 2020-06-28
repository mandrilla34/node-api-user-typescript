<h3 align="center">Node API User</h3>

<h4 align="center">REST API to manage users, developed in Node with typescript, transpiled with typescript.</h4>

:o: **Problem:**<br> Create a Node API developed with typescript.

:heavy_check_mark: **Solution:**<br> Documentation and community searches.

:dart: **Impact:**<br> Have knowledge and flexibility in technology.

:bicyclist: **Run:**

-   Clone this repository
-   Install the dependences:

```
npm install
```

-   To run:

```
npm start
```

⚙️ **Requirements:**

-   Node
-   Typescript
-   NPM
-   MongoDB

📄 **Specifications:**<br>

The database was assigned the name `http_app` on MongoDB and the port `27017` to connect to the bank, make changes according to your environment. <br><br> **Schema:**<br>

```
name: String,

nickname: String,

whatsapp: String,

createdAt: Date
```

**Endpoints:**<br>

| Methods |      Routes      | Result                  |
| ------- | :--------------: | ----------------------- |
| get     |       '/'        | Hello World             |
| get     |   '/api/users'   | Redeem all users        |
| get     | '/api/users/:id' | Redeem a specific user  |
| post    |   '/api/users'   | Create a user           |
| delete  | '/api/users/:id' | Delete a specific user  |
| put     | '/api/users/:id' | Changes a specific user |
