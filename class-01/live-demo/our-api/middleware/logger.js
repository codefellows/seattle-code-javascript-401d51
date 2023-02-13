'use strict';

const logger = (req, res, next) => {
  req.log = 'this is a log!';
  // console.log('this is a log!');
  next();
};

module.exports = logger;
