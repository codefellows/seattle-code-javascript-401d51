'use strict'; 

const handleReceived = (socket, payload) => {
  //---handler begins, this code is testable---
  console.log('Message Received: ', payload);
  socket.emit('RECEIVED', payload);
  //-------handler ends------------
}

module.exports = handleReceived;
