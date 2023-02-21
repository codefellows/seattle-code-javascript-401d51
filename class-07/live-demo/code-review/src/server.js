'use strict';

require('dotenv').config();
const express = require('express');
const authRouter = require('./auth/router');

const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));
app.use(authRouter);

const start = () => {
  app.listen(PORT, () => console.log('listening on port: ', PORT));
};

module.exports = {
  app,
  start,
};
