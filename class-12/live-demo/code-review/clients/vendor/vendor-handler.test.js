'use strict';

const eventPool = require('../../lib/events');
const { createPackage, thankDriver } = require('./handler');

jest.mock('../../lib/events', () => {
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
    customer: 'Tester',
    address: 'home',
  };
  it('emits an order as expected', () => {
    createPackage(payload);
    expect(console.log).toHaveBeenCalledWith('VENDOR: we have an order ready');
    expect(eventPool.emit).toHaveBeenCalledWith('PICKUP', payload);
  });

  it('thanks driver', () => {
    thankDriver(payload);
    expect(console.log).toHaveBeenCalledWith('Thank you for ordering Tester!');

  });
});
