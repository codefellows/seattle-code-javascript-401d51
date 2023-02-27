'use strict';

const eventPool = require('../eventPool');

setInterval(() => {
  console.log('----------new interval begins --------');
  const brightness = Math.floor(Math.random() * 100);
  
  console.log(`the sun shines with a brightness level of ${brightness}`);
  eventPool.emit('SUNLIGHT', { brightness });
}, 5000);
