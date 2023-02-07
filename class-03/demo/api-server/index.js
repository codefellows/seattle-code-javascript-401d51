'use strict';

require('dotenv').config();
// const server = require('./src/server-phase-1.js');
// const server = require('./src/server-phase-2.js');
const server = require('./src/server-phase-3.js');

const { db } = require('./src/models/index.js');

db.sync()
  .then(() => {
    server.start(3000);
  })
  .catch(console.error);
