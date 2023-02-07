'use strict';

// 3rd Party Dependencies (modules)
const express = require('express');

// Our own custom modules
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');

const app = express();

// Express Global Middleware
app.use(express.json());

// Our own Global Middleware
app.use(logger);

// RESTful Route Declarations
app.get('/people', getPeople);
app.get('/people/:id', getOnePerson);
app.post('/people', createPerson);
app.put('/people/:id', updatePerson);
app.delete('/people/:id', deletePerson);

// RESTful Route Handlers
function getPeople(req, res) {
  res.status(200).send('getting all the people');
}

function getOnePerson(req, res) {
  res.status(200).send('getting one person');
}

function createPerson(req, res) {
  res.status(200).send('create one person');
}

function updatePerson(req, res) {
  res.status(200).send('updating one person');
}

function deletePerson(req, res) {
  res.status(200).send('delete one person');
}


// Our Error Handlers -- need to be the last things defined!
// These use the external modules we required above
app.use('*', notFoundHandler);
app.use(errorHandler);

// Export an object with the express app and separate method that can start the server
module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error('Missing Port'); }
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};
