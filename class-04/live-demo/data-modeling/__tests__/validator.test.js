'use strict';

const validator = require('../src/middleware/validator.js');

describe('validator middleware', () => {
  let req = {query: {name: 'Fred'}};
  let res = {};
  let next = jest.fn();

  //happy path
  it('validates query as expected', () => {
    validator(req, res, next);

    expect(next).toHaveBeenCalledWith();
  });
  it('fails appropriately if no query name', () => {
    req = {query: {notName: 'Ryan'}};
    validator(req, res, next);

    expect(next).toHaveBeenCalledWith('Query Name Required');
  });
});
