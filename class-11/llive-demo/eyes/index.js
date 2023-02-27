'use strict';

const eventPool = require('../eventPool');
const handler = require('./handler');

// const eyesHandler = (payload) => {
//   setTimeout(() => {
//     // do the thing
//     console.log(`Eyes:  we see brightness of ${payload.brightness}`);
//     eventPool.emit('BRIGHTNESS', payload);
//   }, 1000);
// };

eventPool.on('SUNLIGHT', (payload) => {
  setTimeout(() => {
    // do the thing
    handler(payload);
  }, 1000);
});

// module.exports = eyesHandler;
