'use strict';

// 3rd Party Resources
const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const basicAuth = require('./basic-auth-middleware.js');
const bearerAuth = require('./bearer-auth-middleware.js');
const acl = require('./acl-middleware.js');
const userModel = require('./user-model.js');

const sequelize = new Sequelize('postgresql://localhost:5432/auth');
const User = userModel(sequelize, DataTypes);

// Prepare the express app
const app = express();

// App Level MW
app.use(express.static('./public'));
app.use(express.json());

// echo '{"username":"john","password":"foo"}' | http post :3000/signup
// or
// http post :3000/signup username=john password=foo
app.post('/signup', (req, res) => {
  console.log('this is the req.body', req.body)
  Users.create(req.body)
    .then(user => {
      res.status(200).send(user);
    })
    .catch(e => { res.status(403).send(`Error Creating User ${e.message}`); });
});

// http post :3000/signin -a john:foo
app.post('/signin', basicAuth(User), (req, res) => {
  res.status(200).send(req.user);
});

// After getting a token from the signin route ...
// http :3000/allusers "Authorization:Bearer MYTOKEN"
app.get('/allusers', bearerAuth(User), (req, res) => {
  res.status(200).send('OK - anyone can use this route!');
});

// Use bearer middleware first to make sure you're a valid user
// If you are, it'll call next() and then the acl() middleware will run
// This middleware will see if your user has the correct permissions
// If so, it'll call next() and send you to the route handler itself
// If either of those fails, the middlewares will call next("with an error"), stopping the user
app.get('/create', bearerAuth(User), acl("create"), (req, res) => {
  res.status(200).send('OK! I have create permissions');
});

app.get('/update', bearerAuth(User), acl("update"), (req, res) => {
  res.status(200).send('OK! I have update permissions');
})

app.get('/delete', bearerAuth(User), acl("delete"), (req, res) => {
  res.status(200).send('OK! I have delete permissions');
});

sequelize.sync()
  .then(() => {
    app.listen(3000, () => console.log('server up'));
  })
  .catch(e => console.error('Could not start server', e.message));
