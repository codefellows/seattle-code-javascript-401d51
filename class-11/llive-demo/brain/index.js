'use strict';

const eventPool = require('../eventPool');

module.exports = (payload) => {
  setTimeout(() => {
    console.log('BRAIN: Brightness changed', payload);

    if (payload.brightness > 50) {
      eventPool.emit('DILATION', 'close');
      eventPool.emit('SHIELD_EYES', 'use hand to shield eyes');
    } else {
      eventPool.emit('DILATION', 'open');

    }
  }, 1000);
};
