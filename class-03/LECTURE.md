# Postgres Integration

## Whiteboard

[Today's Freehand](https://projects.invisionapp.com/freehand/document/iuFGrlwZe)

## Code Review

- deployment
- tests!  query responses, checking output
- 


## Postgres / Database Usage

Does it make sense to use the SAME database for testing, for development, AND for production???

- testing:  sqlite in memory database
- development: postgres on our local machines
- production (deployed app): postgres cloud database (on render)

### install

`npm i pg sequelize sequelize-cli sqlite3`

### sequelize scripts

```
"db:config": "sequelize init:config",
"db:create": "sequelize db:create"
```

to initialize config file, run:  `npm run db:create` 

### db init settings

```
"development": {
    "username": "your-user-name",
    "password": null,
    "database": "api-app",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  ```

to create database, run:  `npm run db:create` 

confirm success by running `psql` in terminal, att prompt run `\l` to list databases.  you should see your database in list!

  ## Postgres Commands

- start postgres (if necessary)
- type `psql` to get to the postgres interface
- list databases: `\l`
- quit: `\q`
- change collection (use different DB): `\c database-name`
- show database tables: `\dt`
- show all contents of database: `\d`
- see contents of table: `SELECT * FROM "customers";`
- another see contents of table: `TABLE "customers";`

### ENV setup for postgres

Enter the env variable: `DATABASE_URL=postgres://localhost:5432/api-app`
