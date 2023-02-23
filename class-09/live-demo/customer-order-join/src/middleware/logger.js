'use strict';

const logger = (req, res, next) => {
  let reqMethod = req.method;
  let path = req.path;
  // Performs a console.log with the request method and path
  console.log({reqMethod, path});
  next();
};

module.exports = logger;
