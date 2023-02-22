'use strict';

require('dotenv').config();
const express = require('express');
const authRouter = require('./auth/router');
const bearerAuth = require('./auth/middleware/bearer');
const acl = require('./auth/middleware/acl');
const { userModel } = require('./auth/models');

const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));
app.use(authRouter);

app.get('/users', bearerAuth, async (req, res, next) => {
  let users = await userModel.findAll();
  let payload = {
    results:  users,
  };
  res.status(200).send(payload);
});

app.get('/read', bearerAuth, acl('read'), (req, res, next) => {
  res.status(200).send('You have read permission');
});

app.post('/create', bearerAuth, acl('create'), (req, res, next) => {
  res.status(200).send('You have create permission');
});

app.put('/update', bearerAuth, acl('update'), (req, res, next) => {
  res.status(200).send('You have update permission');
});

app.delete('/delete', bearerAuth, acl('delete'), (req, res, next) => {
  res.status(200).send('You have delete permission');
});

const start = () => {
  app.listen(PORT, () => console.log('listening on port: ', PORT));
};

module.exports = {
  start,
  app,
};
