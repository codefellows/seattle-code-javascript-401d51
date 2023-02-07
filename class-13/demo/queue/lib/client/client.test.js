'use strict';

// Think or the client code as something that could be used for either client?

const Client = require('./Client.js');

describe('Testing our generic client libary', () => {

  const mockSocket = {
    on: jest.fn(),
    emit: jest.fn()
  };

  it('should be able to connect to a Socket server via a topic', () => {

    let testClient = new Client('test-topic', mockSocket);
    expect(testClient.queueID).toBe('test-topic');
  });

  it('should be able to subscribe to an event', () => {
    let testClient = new Client('test-topic', mockSocket);

    // what do can we expect to do with this information we are giving our client library? 
    testClient.subscribe('test-event');
    expect(testClient.socket.on).toHaveBeenCalled();
  });

  it('should be able to trigger events', () => {
    let testClient = new Client('test-topic', mockSocket);

    // What can we give socket.io to pass along to our socket?
    testClient.trigger('test-event', 'test payload');
    expect(testClient.socket.emit).toHaveBeenCalledWith('test-event', 'test payload');
  });
});

