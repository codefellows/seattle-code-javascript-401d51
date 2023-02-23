'use strict';

const { server } = require('../src/server');
const { db } = require('../src/models');
const supertest = require('supertest');
const request = supertest(server);

beforeAll(async () => {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});

describe('Auth', () => {
  it('allows a user to signup', async () => {
    let response = await request.post('/signup').send({
      username: 'testyAdmin',
      password: 'pass123',
      role: 'admin',
    });

    expect(response.status).toEqual(201);
    expect(response.body.user.username).toEqual('testyAdmin');
  });

  it('allows a user to signin', async () => {
    
    // we use the supertest .auth() method to create the basic auth string AND send that in the authorization header

    /**  for Basic Auth
     * headers: {
     *  Authorization: Basic <some-encoded-string>
     * }
     */
    let response = await request.post('/signin').auth('testyAdmin', 'pass123');
    
    expect(response.status).toEqual(200);
    expect(response.body.user.username).toEqual('testyAdmin');
  });
});

/**  for Bearer Auth
* headers: {
*  Authorization: Bearer <some-token>
* }
*/
