'use strict';

// bring in the object to be mocked
const eventPool = require('../eventPool');
const handler= require('./handler');

// actually set up the mock with an object to replace the imported object above
// jest.mock('../eventPool.js', () => {
//   return {
//     on: jest.fn(),
//     emit: jest.fn(),
//   };
// });
console.log = jest.fn();
eventPool.emit = jest.fn();


describe('Handle Eyes', () => {
  it('logs and emits brightness payload', () => {
    const payload = {brightness: 42};
    handler(payload);
    expect(console.log).toHaveBeenCalledWith(`Eyes:  we see brightness of ${payload.brightness}`);
    expect(eventPool.emit).toHaveBeenCalledWith('BRIGHTNESS', payload);
  });
});
