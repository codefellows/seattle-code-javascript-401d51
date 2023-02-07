'use strict';

// What do we want to allow all clients to do?
class Client {

  constructor(queueID, socket = {}) {
    this.queueID = queueID;
    console.log(socket);
    this.socket = socket;
  }

  trigger(event, payload) {
    this.socket.emit(event, payload);
  }

  subscribe(event, fn) {
    this.socket.on(event, fn);
  }

}

module.exports = Client;
