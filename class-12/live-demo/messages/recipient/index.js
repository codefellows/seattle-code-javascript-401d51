'use strict';

const { io } = require('socket.io-client');
const handleReceived = require('./handler');
const socket  = io('http://localhost:3001');

socket.on('MESSAGE', messageHandler);

// Phase One
// function messageHandler(payload){
//   setTimeout(() => {
//     //---handler begins, this code is testable---
//     console.log('Message Received: ', payload);
//     socket.emit('RECEIVED', payload);
//     //-------handler ends------------
//   }, 1000);
// }

// Phase Two
  // note syntax, and how clean this can be
// alternatively, we could use a single handler and curry the socket to the testable code
function messageHandler(payload){
  // socket and payload must be passed as args
  setTimeout(() => handleReceived(socket, payload), 1000);
}
