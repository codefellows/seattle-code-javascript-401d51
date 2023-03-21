'use strict';

const { io } = require('socket.io-client');
const { generateOrder, thankDriver } = require('./handlers');

const socket = io('http://localhost:3001/caps');

// As a vendor, I want to be notified when my package has been delivered.
socket.on('DELIVERY', (payload) => {
  thankDriver(payload);
});

// As a vendor, I want to alert the system when I have a package to be picked up.
setInterval(() => {
  generateOrder(socket);
}, 5000);
