'use strict';

const eventPool = require('../eventPool');

module.exports = (payload) => {
  console.log(`Eyes:  we see brightness of ${payload.brightness}`);
  eventPool.emit('BRIGHTNESS', payload);
};
