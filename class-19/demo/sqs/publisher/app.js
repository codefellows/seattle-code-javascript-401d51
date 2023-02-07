'use strict';

const uuid = require('uuid').v4;
const publisher = require('./sqs-publish.js');
let counter = 0;

setInterval(async () => {

  try {
    const message = {
      id: uuid(),
      body: `This is message #${counter++}`,
    };

    const response = await publisher.send(message);
    console.log(response);
  } catch (e) {
    console.error(e);
  }
}, Math.floor(Math.random() * 1000));
