'use strict';

const Event = require('events');

const eventPool = new Event();

function ryansPhone(){
  console.log('Ryan sent a message');

  let payload = {text: 'You\'ve got this!'};
  // first param:  event name
  // second param: payload
  eventPool.emit('SEND_MESSAGE', payload);
}

function ashsPhone(payload){
  setTimeout(() => {
    console.log('Message received by Ash: ', payload.text);
  }, 2000);
}

function marcosPhone(payload){
  setTimeout(() => {
    console.log('Message received by Marco: ', payload.text);
  }, 2000);

}

eventPool.on('SEND_MESSAGE', ashsPhone);
eventPool.on('SEND_MESSAGE', marcosPhone);

setInterval(() => {
  ryansPhone();
}, 5000);

