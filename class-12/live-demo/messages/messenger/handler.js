'use strict';

const Chance = require('chance');
const chance = new Chance();

const sendMessage = (socket, text=null) => {
  // to make this testable use an option default param
  if(!text){
    text = `Hi ${chance.first()}`;
  }
  console.log('Sending message:', text);
  socket.emit('MESSAGE', { text });
}

module.exports = sendMessage;
