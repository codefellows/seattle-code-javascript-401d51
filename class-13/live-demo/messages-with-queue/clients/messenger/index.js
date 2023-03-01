'use strict';

const { io } = require('socket.io-client');

// if this were deployed, we'd need the URL saved in an env variable
const socket = io('http://localhost:3001');
const Chance = require('chance');
const chance = new Chance();

socket.emit('JOIN', 'messages');

socket.on('RECEIVED', (payload) => {
  console.log('Messenger:  receipt confirmed', payload);
});

setInterval(() => {
  const payload = {
    text: `Hi ${chance.first()}`,
    messageId: chance.guid(),
    queueId: 'messages',
  };

  console.log('Sending message:', payload.text);
  socket.emit('MESSAGE', payload);
}, 3000);
