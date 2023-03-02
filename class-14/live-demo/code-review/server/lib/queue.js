'use strict';

class Queue {
  constructor(){
    this.data ={};
    // this is what capsQueue will look like
    // this.data = {
    //   'driver': {
    // 'sadjhfblsdj': payload,
    // 'sadjhfblsdj': payload,
    // },
    //   '1-800-flowers': {},
    //   'acme-widgets': {}
    // };
  }

  store(key, value){
    this.data[key] = value;
    console.log('something was added to the queue');
    return key;
  }

  read(key){
    return this.data[key];
  }

  remove(key){
    console.log('something was removed from queue');
    let value = this.data[key];
    delete this.data[key];
    return value;
  }
}

module.exports = Queue;
