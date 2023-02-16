'use strict';

module.exports = (req, res, next) => {
  if (req.query.name) {
    // Sends the request through when valid, 
    next();
  } else {
    // forces an error when not
    next('Query Name Required');
  }
};
