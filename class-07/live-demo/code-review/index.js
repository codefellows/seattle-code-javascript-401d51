'use strict';

const { sequelizeDatabase } = require('./src/auth/models');
const { start } = require('./src/server.js');

sequelizeDatabase.sync()
  .then(() => {
    console.log('successful connection');
    start();
  })
  .catch(e => console.error(e));
