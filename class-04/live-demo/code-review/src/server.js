'use strict';

require('dotenv').config();
const express = require('express');

const foodRouter = require('./routes/food');
const clothesRouter = require('./routes/clothes');
const PORT = process.env.PORT || 3002;

const app = express();
app.use(express.json());
app.use(foodRouter);
// app.use(clothesRouter);

app.get('/', (req, res, next) => {
  res.status(200).send('Hello World!');
});

const start = () => {
  app.listen(PORT, () => console.log('listening on port', PORT));
};

module.exports = {
  start, 
  app,
};

