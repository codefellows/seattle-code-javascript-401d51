'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/caps');

// As a driver, I want to be notified when there is a package to be delivered.
socket.on('PICKUP', (payload) => {
  setTimeout(() => {
    // As a driver, I want to alert the system when I have picked up a package and it is in transit.
    console.log('DRIVER: picked up package.');
    socket.emit('IN-TRANSIT', payload);
  }, 1000);
  setTimeout(() => {
    // As a driver, I want to alert the system when a package has been delivered.
    console.log('DRIVER: package has been delivered');
    socket.emit('DELIVERY', payload);
  }, 2000);
});


