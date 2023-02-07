'use strict';


const status = function(request) {
  return {
    status: 'running',
    port: parseInt(process.env.PORT),
    domain: request.hostname,
  };
};

module.exports = status;
