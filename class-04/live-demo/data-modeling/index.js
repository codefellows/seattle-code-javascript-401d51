'use strict';

const { start } = require('./src/server');

// both imports for models are equivalent aka "work the same "
// const { sequelizeDatabase } = require('./src/models/index');
const { sequelizeDatabase } = require('./src/models');

sequelizeDatabase.sync()
  .then(() => {
    console.log('Successful Connection!');
    start();
  })
  .catch(e => console.error(e));
