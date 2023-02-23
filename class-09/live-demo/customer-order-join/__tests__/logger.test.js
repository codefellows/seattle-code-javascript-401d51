'use strict';

const logger = require('../src/middleware/logger');

describe('Logger middleware', () => {
  let req = { method: 'GET', path: '/' };
  let res = {};
  let next = jest.fn();
  console.log = jest.fn();
  it('logs method and path', () => {
    logger(req, res, next);
    let reqMethod = req.method;
    let path = req.path;

    expect(console.log).toHaveBeenCalledWith({ reqMethod, path });
    expect(next).toHaveBeenCalledWith();
  });
});
