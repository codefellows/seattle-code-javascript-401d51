'use strict';

const { io } = require('socket.io-client');
const socket  = io('http://localhost:3001');

socket.on('MESSAGE', messageHandler);
socket.emit('GET-MESSAGES', {queueId: 'messages'});

function messageHandler(payload){
  setTimeout(() => {
    //----------handler begins, this code is testable--------------
    console.log('Message Received: ', payload);
    socket.emit('RECEIVED', payload);
    //-------handler ends------------
  }, 1000);
}
