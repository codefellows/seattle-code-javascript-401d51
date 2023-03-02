'use strict';

const socket = require('../socket.js');
const { generateOrder, thankDriver } = require('./handlers');

jest.mock('../socket.js', () => {
  return {
    on: jest.fn(),
    emit: jest.fn(),
  };
});
console.log = jest.fn();

describe('Vendor', () => {
  let payload = {
    store: '1-206-flowers',
    orderId: 'test123',
    customer: 'Ryan',
    address: 'home',
  };
  it('emits an order as expected', () => {
    generateOrder(socket, payload);
    expect(console.log).toHaveBeenCalledWith('VENDOR: order ready for pickup.');
    expect(socket.emit).toHaveBeenCalledWith('PICKUP', payload);
  });

  it('thanks driver', () => {
    thankDriver(payload);
    expect(console.log).toHaveBeenCalledWith('Thanks for delivery the package to', payload.customer);

  });
});
