const socket = require('../lib/socket.js');
const sendMessage = require('./handler');

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

describe('Messenger Handler', () => {
  it('logs and emits message', () => {
    let text = 'Tester';
    sendMessage(socket, text);
    expect(consoleSpy).toHaveBeenCalledWith('Sending message:', text);
    expect(socket.emit).toHaveBeenCalledWith('MESSAGE', { text });
  })
})
