'use strict';

const express = require('express');
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator');
const notFound = require('./handlers/404');
const errorHandler = require('./handlers/500');
const customerRouter = require('./routes/customer');
const PORT = process.env.PORT || 3001;

// creates an express singleton
const app = express();

app.use(express.json());
app.use(customerRouter);
app.use(logger);

app.get('/', (req, res, next) => {

  res.status(200).send('Hello World!');
});

app.get('/bad', (req, res, next) => {
  next('we have an error');
});

app.get('/person', validator, (req, res, next) => {
  console.log('this is the query from server.js', req.query);
  res.status(200).json(req.query);
});

app.use('*', notFound);
app.use(errorHandler);

const start = () => {
  app.listen(PORT, () => console.log('server running on port', PORT));
};

module.exports = { start, app };
