'use strict';

const { io } = require('socket.io-client');
const { generateOrder, thankDriver } = require('./handlers');

const socket = io('http://localhost:3001/caps');
const store = '1-800-flowers';

socket.emit('JOIN', store);
socket.emit('GET-ALL', { queueId: store});

socket.on('DELIVERED', (payload) => {
  thankDriver(payload);
  socket.emit('RECEIVED', payload);
});

// As a vendor, I want to alert the system when I have a package to be picked up.



setInterval(() => {
  generateOrder(socket);
}, 5000);




// As a vendor, I want to be notified when my package has been delivered.
