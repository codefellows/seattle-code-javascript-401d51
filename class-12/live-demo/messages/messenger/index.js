'use strict';

const { io } = require('socket.io-client');

// if this were deployed, we'd need the URL saved in an env variable
const socket = io('http://localhost:3001');
const Chance = require('chance');
const chance = new Chance();

setInterval(() => {
  const text = `Hi ${chance.first()}`;
  console.log('Sending message:', text);
  socket.emit('MESSAGE', { text });
}, 3000);
