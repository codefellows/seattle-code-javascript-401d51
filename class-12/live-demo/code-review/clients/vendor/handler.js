'use strict';
//vendor

const eventPool = require('../../lib/events');
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
  
  // log not required, but maybe useful for auditing functionality
  console.log('VENDOR: we have an order ready');
  eventPool.emit('PICKUP', payload);
}

function thankDriver(payload){
  console.log(`Thank you for ordering ${payload.customer}!`);
}

module.exports = {
  createPackage,
  thankDriver,
};
