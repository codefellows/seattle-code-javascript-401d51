'use strict';

// 3rd Party Resources
const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const UserSchema = require('./usersSchema.js');
const basicAuth = require('./basic-auth-middleware.js');
const bearerAuth = require('./bearer-auth-middleware.js');
const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/auth';

// Prepare the express app
const app = express();

const sequelize = new Sequelize(DATABASE_URL);
const Users = UserSchema(sequelize, DataTypes);

// App Level MW
app.use(express.static('./public'));
app.use(express.json());

// echo '{"username":"john","password":"foo"}' | http post :3000/signup
app.post('/signup', (req, res) => {
  Users.create(req.body)
    .then(user => {
      res.status(200).send(user);
    })
    .catch(e => { res.status(403).send("Error Creating User"); });
});

// http post :3000/signin -a john:foo
app.post('/signin', basicAuth(Users), (req, res) => {
  res.status(200).send(req.user);
});

app.get('/user', bearerAuth(Users), (req, res) => {
  res.status(200).json(req.user);
});

sequelize.sync()
  .then(() => {
    app.listen(3000, () => console.log('server up'));
  })
  .catch(e => console.error('Could not start server', e.message));
