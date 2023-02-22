'use strict';

const base64 = require('base-64');
const { users } = require('../models/index.js');


module.exports = async (req, res, next) => {

  if (!req.headers.authorization) { next('No Basic Auth header'); }

  let basic = req.headers.authorization.split(' ').pop();
  let [username, pass] = base64.decode(basic).split(':');

  try {
    req.user = await users.authenticateBasic(username, pass);
    next();
  } catch (e) {
    console.error(e);
    res.status(403).send('Invalid Login');
  }

};

/**
 * Function exists so that we can add two numbers
 * @param {number} valueOne 
 * @param {number} valueTwo 
 * @returns the sum of the two values
 */
// function adder(valueOne, valueTwo){
//   let result = valueOne + valueTwo;
//   return result;
// }

// let result = adder(1, 2);
