const { io } = require('socket.io-client');
const socket  = io('http://localhost:3001');

// only using this for testing and mocking a socket instance
module.exports = socket;
