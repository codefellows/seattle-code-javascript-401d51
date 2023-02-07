'use strict';

let statusHandler = require('../status.js');

process.env.PORT = 3000;

const request = {
  hostname: 'foo.com',
};

describe('status', () => {

  it('reports properly', () => {
    const expected = {
      status: 'running',
      domain: 'foo.com',
      port: 3000,
    };
    expect(statusHandler(request)).toEqual(expected);
  });

});
