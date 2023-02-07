'use strict';

const express = require('express');

const status = require('./status.js');

const app = express();

app.get('/status', (request, response) => {
  const currentStatus = status(request);
  response.status(200).json(currentStatus);
});

app.listen(process.env.PORT, () => console.log('server up') );

