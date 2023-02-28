'use strict';

const Event = require('events');

const eventPool = new Event();

module.exports = eventPool;