'use strict';

require('dotenv').config();
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;
const Queue = require('./lib/queue');
const capsQueue  = new Queue();

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

  socket.on('JOIN', (room) => {
    socket.join(room);
    console.log(`${socket.id} joined the ${room} room`);
  });

  // manage the PICKUP EVENT
  socket.on('PICKUP', (payload) => {

    let driverQueue = capsQueue.read('driver');
    if(!driverQueue){
      let driverKey = capsQueue.store('driver', new Queue());
      driverQueue = capsQueue.read(driverKey);
    }
    driverQueue.store(payload.messageId, payload);

    socket.broadcast.emit('PICKUP', payload);
  });

  socket.on('IN-TRANSIT', (payload) => {
    // fair, no one is listening.  but a relay station relays things
    socket.broadcast.emit('IN-TRANSIT', payload);
  });

  socket.on('DELIVERED', (payload) => {
    
    let vendorQueue = capsQueue.read(payload.queueId);
    if(!vendorQueue){
      let vendorKey = capsQueue.store(payload.queueId, new Queue());
      vendorQueue = capsQueue.read(vendorKey);
    }
    vendorQueue.store(payload.messageId, payload);


    socket.to(payload.queueId).emit('DELIVERED', payload);
  });

  socket.on('RECEIVED', (payload) => {
    console.log('Server: Received event registered');

    let currentQueue = capsQueue.read(payload.queueId);
    if(!currentQueue){
      throw new Error('we have payloads, but no queue');
    }

    currentQueue.remove(payload.messageId);
  });

  socket.on('GET-ALL', (payload) => {
    console.log('attempting to get all');
    let currentQueue = capsQueue.read(payload.queueId);
    if(currentQueue && currentQueue.data){
      Object.keys(currentQueue.data).forEach(messageId => {
        let payload = currentQueue.read(messageId);
        socket.emit(payload.event, payload);
      });
    }
  });

});



console.log('listening on port', PORT);
server.listen(PORT);
