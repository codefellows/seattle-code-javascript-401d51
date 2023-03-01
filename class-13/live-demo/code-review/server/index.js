'use strict';

require('dotenv').config();
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;

// server singleton
const server = new Server();

// create namespace
const caps = server.of('/caps');

// create / allow for connections
caps.on('connection', (socket) => {
  console.log('connect to the caps namespace', socket.id);
  socket.onAny((event, payload) => {
    const time = new Date();
    console.log('EVENT:', {event, time, payload});
  });

  // manage the PICKUP EVENT
  socket.on('PICKUP', (payload) => {
    socket.broadcast.emit('PICKUP', payload);
  });

  socket.on('IN-TRANSIT', (payload) => {
    // fair, no one is listening.  but a relay station relays things
    socket.broadcast.emit('IN-TRANSIT', payload);
  });

  socket.on('DELIVERY', (payload) => {
    // fair, no one is listening.  but a relay station relays things
    socket.broadcast.emit('DELIVERY', payload);
  });

});



console.log('listening on port', PORT);
server.listen(PORT);
