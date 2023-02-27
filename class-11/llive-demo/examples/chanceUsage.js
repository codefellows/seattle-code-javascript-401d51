'use strict';

// Load Chance
var Chance = require('chance');

// Instantiate Chance so it can be used
var chance = new Chance();

// Use Chance here.
var user = {
  id: chance.guid(),
  name: chance.name(),
  address: chance.address(),
};
chance.string();

console.log('user', user);
