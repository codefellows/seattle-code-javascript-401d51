'use strict';

require('dotenv').config();
const express = require('express');
const authRouter = require('./auth/router');
const bearerAuth = require('./auth/middleware/bearer');
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

const start = () => {
  app.listen(PORT, () => console.log('listening on port: ', PORT));
};

module.exports = {
  start,
  app,
};
