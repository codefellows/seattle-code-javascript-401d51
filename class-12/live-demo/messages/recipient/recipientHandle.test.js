const socket = require('../lib/socket.js');
const handleReceived = require('./handler');

jest.mock('../lib/socket.js', () => {
  return {
    on: jest.fn(),
    emit: jest.fn(),
  };
});

beforeEach(() => {
  // Attach to the console (take it over)
  consoleSpy = jest.spyOn(console, 'log').mockImplementation();
});

afterEach(() => {
  // Put the console back
  consoleSpy.mockRestore();
});

describe('Recipient Handler', () => {
  it('logs and emits message received', () => {
    let payload = {key: 'value'};
    handleReceived(socket, payload);
    expect(consoleSpy).toHaveBeenCalledWith('Message Received: ', payload);
    expect(socket.emit).toHaveBeenCalledWith('RECEIVED', payload);
  })
})
