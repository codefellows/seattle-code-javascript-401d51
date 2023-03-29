'use strict';

let eventPool = require('./lib/events');

//-----handlers-----//
require('./clients/vendor/');
require('./clients/driver/handler');

//-----listeners-----//
// Listens to ALL events in the Event Pool.
eventPool.on('PICKUP', (payload) => logger('PICKUP', payload));
eventPool.on('IN-TRANSIT', (payload) => logger('IN-TRANSIT', payload));
eventPool.on('DELIVERY', (payload) => logger('DELIVERY', payload));


// Logs a timestamp and the payload of every event.
function logger(event, payload) {
  const timestamp = new Date();
  console.log('EVENT:', {event, timestamp, payload});
}
