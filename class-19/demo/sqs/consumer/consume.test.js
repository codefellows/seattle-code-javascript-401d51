'use strict';

const consumer = require('./sqs-consumer.js');

// creates an object that replaces the sqs module loaded from node_modules
jest.mock('sqs-consumer', () => ({

  // What does the sqs-consumer module return?
  Consumer: {
    create: jest.fn(({ queueUrl, handleMessage }) => ({
      // when we call our start function, simulate an event and use the handler
      start: jest.fn(() => {
        handleMessage({ Body: 'Here is your message' })
      }),
      stop: jest.fn(),
    })),
  },
}));

describe('Testing the Queue consumer', () => {
  test('consumer should listen for incoming messages', () => {
    jest.spyOn(console, "log");

    // this kicks off our mock functionality,  depending on what our handler is doing in sqs-consumer.js,  you may expect a different thing to happen.
    consumer.start();
    expect(console.log).toHaveBeenCalledWith('Here is your message');
  });
})
