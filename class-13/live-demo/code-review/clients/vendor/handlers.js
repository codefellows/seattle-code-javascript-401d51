'uses strict';

const Chance = require('chance');
const chance = new Chance();

const generateOrder = (socket, payload = null) => {
  if(!payload){
    payload = {
      store: '1-800-flowers',
      id: chance.guid(),
      customer: chance.name(),
      address: chance.address(),
    };
  }

  console.log('VENDOR: order ready for pickup.');
  socket.emit('PICKUP', payload);
};

const thankDriver = (payload) => {
  console.log('Thanks for delivery the package to', payload.customer);
};

module.exports = { generateOrder, thankDriver };
