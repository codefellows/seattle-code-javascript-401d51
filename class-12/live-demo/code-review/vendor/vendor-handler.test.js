'use strict';

const eventPool = require('../eventPool');
const { createPackage, thankDriver } = require('./handler');

jest.mock('../eventPool.js', () => {
  return {
    on: jest.fn(),
    emit: jest.fn(),
  };
});
console.log = jest.fn();

describe('Vendor', () => {
  it('emits an order as expected', () => {
    let payload = {
      store: '1-206-flowers',
      orderId: 'test123',
      customer: 'Ryan',
      address: 'home',
    };
    createPackage(payload);
    expect(console.log).toHaveBeenCalledWith('VENDOR: we have an order ready');
    expect(eventPool.emit).toHaveBeenCalledWith('PICKUP', payload);
  });

  it('thanks driver', () => {
    thankDriver();
    expect(console.log).toHaveBeenCalledWith('Thank you for ordering!');

  });
});
