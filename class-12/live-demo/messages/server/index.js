'use strict';

require('dotenv').config();
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;

// socket server singleton:  listening for events at http://localhost:3001
const server = new Server();

// create a namespace
// listening for events at http://localhost:3001/brightness
const brightness = server.of('/brightness');

brightness.on('connection', (socket) => {
  console.log('Socket connected to brightness namespace!', socket.id);
  // checkout the socket.onAny();

  // how to join a room
  socket.on('JOIN', (room) => {
    console.log('these are the rooms', socket.adapter.rooms);
    console.log('---payload is the room--', room);
    socket.join(room);
    console.log(`You've joined the ${room} room`);
    console.log('these are the rooms', socket.adapter.rooms);
    // how to send to a room, play around with it
    // socket.to(room).emit('some message');
  });

  socket.on('SUNLIGHT', (payload) => {
    console.log('sunlight: ', payload);
  });

});

server.on('connection', (socket) => {
  console.log('Socket connected to Event Server!', socket.id);

  socket.on('MESSAGE', (payload) => {
    console.log('SERVER: Message event', payload);

    // 3 ways I can emit this
    // socket.emit('MESSAGE', payload); // basic emit back to sender
    // server.emit('MESSAGE', payload); // send to all clients connected to the server
    socket.broadcast.emit('MESSAGE', payload); // sends to all parties in socket except for sender
  });
  socket.on('RECEIVED', (payload) => {
    console.log('Server RECEIVED event', payload);
    socket.broadcast.emit('RECEIVED', payload);
  });
});

server.listen(PORT);
