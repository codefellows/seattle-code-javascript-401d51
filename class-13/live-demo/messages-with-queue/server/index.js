'use strict';

require('dotenv').config();
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;
const Queue = require('./lib/queue');
const messageQueue = new Queue();

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

  socket.on('JOIN', (room) => {
    socket.join(room);
    console.log(`You've joined the ${room} room`);
    console.log('these are the rooms', socket.adapter.rooms);
  });

  socket.on('MESSAGE', (payload) => {
    console.log('SERVER: Message event', payload);

    // manage queue
    // messageQueue is the single queue for the entire system
    // current queue will be nested within and the specific queue for our room (flowers or widgets)
    let currentQueue = messageQueue.read(payload.queueId);
    if(!currentQueue){
      let queueKey = messageQueue.store(payload.queueId, new Queue());
      currentQueue = messageQueue.read(queueKey);
      // first time currentQueue = {};
    }
    currentQueue.store(payload.messageId, payload);
  
    socket.broadcast.emit('MESSAGE', payload); 
  });
  socket.on('RECEIVED', (payload) => {
    console.log('Server RECEIVED event', payload);
    // maybe I just want to send queue data to a single room:  
    // ie. flowers or widgets
    // socket.to(payload.queueId).emit('RECEIVED', payload);
    //this might be useful?  maybe?
    let currentQueue = messageQueue.read(payload.queueId);
    if(!currentQueue){
      throw new Error('we have messages but no queue');
    }

    let message = currentQueue.remove(payload.messageId);
    
    socket.broadcast.emit('RECEIVED', message);
  });
  socket.on('GET-MESSAGES', (payload) => {
    console.log('attempting to get messages');
    let currentQueue = messageQueue.read(payload.queueId);
    if(currentQueue &&  currentQueue.data){
      Object.keys(currentQueue.data).forEach(messageId => {
        socket.emit('MESSAGE', currentQueue.read(messageId));
      });

    }
  });

});

server.listen(PORT);
