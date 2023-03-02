'uses strict';

const Chance = require('chance');
const chance = new Chance();
const store = 'acme-widgets';

const generateOrder = (socket, order = null) => {
  if(!order){
    order = {
      store,
      id: chance.guid(),
      customer: chance.name(),
      address: chance.address(),
    };
  }
  let payload = {
    event: 'PICKUP',
    messageId: order.id,
    queueId: store,
    order,
  };

  console.log('VENDOR: order ready for pickup.');
  socket.emit('PICKUP', payload);
};

const thankDriver = (payload) => {
  console.log('Thanks for delivery the package to', payload.order.customer);
};

module.exports = { generateOrder, thankDriver };
