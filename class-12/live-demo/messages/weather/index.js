'use strict';

const { io } = require('socket.io-client');
const socket  = io('http://localhost:3001/brightness');

socket.emit('JOIN', 'sun');

setInterval(() => {
  const brightness = Math.floor(Math.random() * 100);
  socket.emit('SUNLIGHT', { brightness });
}, 2000);
