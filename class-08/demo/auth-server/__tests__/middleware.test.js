'use strict';

const acl = require('../acl-middleware.js');
const basic = require('../basic-auth-middleware.js');
const bearer = require('../bearer-auth-middleware.js');
const jwt = require('jsonwebtoken');
const base64 = require('base-64');

const { Sequelize, DataTypes } = require("sequelize");
const UserModel = require('../user-model.js'); 

const sequelize = new Sequelize('sqlite:memory:');
const User = UserModel(sequelize, DataTypes);

const SECRET = 'secretstuff'; // these needs to match the secret in UserModel so that Jwt can verify properly.

beforeAll(async () => {
  await sequelize.sync();
  await User.create({ username: 'username', password: 'correct'});
});
afterAll(async () => {
  await sequelize.drop();
});

describe('testing the authentication and authorization middleware', () => {

  let username = 'username';
  let password = 'correct';
  let req = {
    headers: {},
    body: {}
  };
  let res = {};
  let next = jest.fn();
  res.status = jest.fn();
  res.send = jest.fn();
  it ('basic should validate headers with a username and password', async () => {
    let basicToken = base64.encode(`${username}:${password}`);

    req.headers.authorization = `Basic ${basicToken}`;

    await basic(User)(req, res, next);

    expect(req.user).toBeTruthy();
    expect(next).toHaveBeenCalledWith();
  });

  it('bearer should validate headers with jwt', async () => {
    let token = jwt.sign({ username }, SECRET);

    req.headers.authorization = `bearer ${token}`;

    await bearer(User)(req, res, next);

    expect(req.user).toBeTruthy();
    expect(next).toHaveBeenCalledWith();
  });

  it('should be able to authorize a user using Access Control List', () => {

    acl('read')(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });
});
