'use strict';

const eventPool = require('../../lib/events');
const { createPackage, thankDriver } = require('./handler');

//Listens for a delivered event
// can be an anonymous callback, or a named callback
// eventPool.on('DELIVERY', () => {
//   setTimeout(() => {
//     // having this function extract4d is important for testing
//     thankDriver();
//   }, 1000);
// });
eventPool.on('DELIVERY', confirmDelivery);

// responds by logging a message to the console:
function confirmDelivery(payload) {
  setTimeout(() => {
    thankDriver(payload);
  }, 1000);
}

// gets the event cycle started
setInterval(() => {
  createPackage();
}, 5000);
