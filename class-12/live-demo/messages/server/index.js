'use strict';

require('dotenv').config();
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3001;

// socket server singleton:  
const server = new Server();

//listening for events at http://localhost:3001
server.listen(PORT);


// create a namespace example
// listening for events at http://localhost:3001/brightness
const brightness = server.of('/brightness');

brightness.on('connection', (socket) => {
  console.log('Socket connected to brightness namespace!', socket.id);
  // checkout the socket.onAny();

  // how to join a room
  socket.on('JOIN', (room) => {
    // console.log('these are the rooms', socket.adapter.rooms);
    // console.log('---payload is the room name in this example--', room);
    socket.join(room);
    console.log(`You've joined the ${room} room`);
    // console.log('these are All the current rooms', socket.adapter.rooms);
    // how to emit to a room:
    // socket.to(room).emit('some-event', some-payload);
  });

  socket.on('SUNLIGHT', (payload) => {
    // proof that we can hear events in our namespace:
    console.log('sunlight: ', payload);
  });

});

server.on('connection', (socket) => {
  // proof that our messenger and recipient clients connect: 
  console.log('Socket connected to Event Server!', socket.id);

  // server subscribes to MESSAGE event. "hears" and "relays" the client emit
  socket.on('MESSAGE', (payload) => {
    console.log('SERVER: Message event', payload);

    // 3 ways to can emit. also see:  https://socket.io/docs/v4/emit-cheatsheet/
    // socket.emit('MESSAGE', payload); // basic emit back to sender
    // server.emit('MESSAGE', payload); // send to all clients connected to the server
    socket.broadcast.emit('MESSAGE', payload); // sends to all parties in socket except for sender
  });

  // server subscribes to RECEIVED event. "hears" and "relays" the client emit
  socket.on('RECEIVED', (payload) => {
    console.log('Server RECEIVED event', payload);
    socket.broadcast.emit('RECEIVED', payload);
  });
});

