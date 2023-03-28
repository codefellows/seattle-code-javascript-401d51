'use strict';

const { io } = require('socket.io-client');
const sendMessage = require('./handler');

// if this were deployed, we'd need the URL saved in an env variable
const socket = io('http://localhost:3001');

// move to handler.js after refactor for Phase Two 
// const Chance = require('chance');
// const chance = new Chance();

// Phase One 
// setInterval(() => {
// //---handler begins, this code is testable---
// const text = `Hi ${chance.first()}`;
//   console.log('Sending message:', text);
//   socket.emit('MESSAGE', { text });
// //-------handler ends------------
// }, 3000);

//Phase Two
// note syntax, and how clean this can be
setInterval(() => sendMessage(socket), 3000);
