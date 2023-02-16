'use strict';

const { sequelizeDatabase } = require('./src/models');
const { start } = require('./src/server');

sequelizeDatabase.sync()
  .then(() => {
    console.log('Successful connection!');
    start();
  })
  .catch(e => console.error(e));
