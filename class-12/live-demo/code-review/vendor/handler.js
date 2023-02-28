'use strict';
//vendor

const eventPool = require('../eventPool.js');
let Chance = require('chance');
let chance = new Chance();

function createPackage(payload=null) {
  if(!payload){
    payload = {
      store: '1-206-flowers',
      orderId: chance.guid(),
      customer: chance.name(),
      address: chance.address(),
    };
  }
  
  // not required, but maybe useful for debugging
  console.log('VENDOR: we have an order ready');
  eventPool.emit('PICKUP', payload);
}

function thankDriver(){
  console.log('Thank you for ordering!');
}

module.exports = {
  createPackage,
  thankDriver,
};
