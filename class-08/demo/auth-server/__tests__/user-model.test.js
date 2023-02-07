'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../user-model.js');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('sqlite:memory:');
const Users = UserModel(sequelize, DataTypes);

beforeAll(async () => {
  await sequelize.sync();
});
afterAll(async () => {
  await sequelize.drop();
});

describe('User schema', () => {

  let userInfo = {
    username: 'User',
    password: 'test',
  }

  test('Should create a user with a hashed password and a default role', async (done) => {
    let user = await Users.create(userInfo);
    expect(user.id).toBeTruthy();
    expect(user.username).toBeTruthy();
    expect(user.password).toBeTruthy();
    expect(user.password).not.toEqual('test');
    expect(user.role).toBeTruthy();
    expect(user.role).toEqual('user');

    let match = await bcrypt.compare('test', user.password);
    expect(match).toBeTruthy();
    done();
  });

  test('Should attach a token on find', async (done) => {

    let user = await Users.findOne({ where: { username: userInfo.username } });
    expect(user.username).toEqual(userInfo.username);
    expect(user.token).toBeTruthy();
    expect(jwt.decode(user.token).username).toEqual(userInfo.username);

    let users = await Users.findAll({ where: { username: userInfo.username } });
    expect(users[0].username).toEqual(userInfo.username);
    expect(users[0].token).toBeTruthy();
    done();
  });
});
