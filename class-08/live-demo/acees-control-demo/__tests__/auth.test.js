'use strict';

const { app } = require('../src/server');
const supertest = require('supertest');
const { sequelizeDatabase } = require('../src/auth/models');
const request = supertest(app);

beforeAll(async () => {
  await sequelizeDatabase.sync();
});

afterAll(async () => {
  await sequelizeDatabase.drop();
});

describe('Auth router', () => {
  it('creates a user', async () => {
    let response = await request.post('/signup').send({
      username: 'Tester',
      password: 'pass123',
    });

    expect(response.status).toEqual(200);
    expect(response.body.username).toEqual('Tester');
  });
  it('allows existing user to signin', async () => {

    let response = await request.post('/signin').auth('Tester', 'pass123');

    expect(response.status).toEqual(200);
    expect(response.body.username).toEqual('Tester');
    expect(response.body.password).toBeTruthy();
  });
}); 
