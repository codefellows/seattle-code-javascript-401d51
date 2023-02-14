'use strict';

const stamper = (req, res, next) => {
  const time = Date.now();
  req.time = time;

  next();
}

module.exports = stamper;
