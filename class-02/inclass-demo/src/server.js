'use strict';

const express = require('express');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const stamper = require('./middleware/stamper');

const PORT = process.env.PORT || 3002;

const app = express();

app.get('/', (req, res) => {

  const message = `What a fine day for development`;

  res.status(200).send(message);
});

app.get('/pet', stamper, (req, res) => {

  console.log('time is:', req.time);
  if (!req.query.petName) {
    next();
    return;
  }

  const message = `What a cutie, that ${req.query.petName}!`;
  const output = { message }

  res.status(200).json(output);
});

function start() {
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

app.use('*', notFound);
app.use(errorHandler);

module.exports = { start, app }
