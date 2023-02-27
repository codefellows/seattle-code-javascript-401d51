'use strict';

let eventPool = require('./eventPool');

require('./sun');

// handlers
const brainHandler = require('./brain');
require('./eyes');
const handHandler = require('./hand');
const pupilsHandler = require('./pupils');

//listen to all events
// eventPool.on('SUNLIGHT', eyesHandler);
eventPool.on('BRIGHTNESS', brainHandler);
eventPool.on('DILATION', pupilsHandler);
eventPool.on('SHIELD_EYES', handHandler);
