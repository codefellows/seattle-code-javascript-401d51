'use strict';

const { server } = require('../src/server');
const { db, users } = require('../src/models');
const supertest = require('supertest');
const request = supertest(server);

let testAdmin;

beforeAll(async () => {
  await db.sync();
  testAdmin = await users.create({
    username: 'testyAdmin',
    password: 'pass123',
    role: 'admin',
  });
});

afterAll(async () => {
  await db.drop();
});

/**  for Bearer Auth we must create the following headers, we'll do so in supertest with the .set() method
* headers: {
*  Authorization: Bearer <some-token>
* }
*/

describe('v1 Routes', () => {
  it('creates a record', async() => {
    let response = await request.post('/api/v2/food').send({
      name: 'tacos',
      calories: 100,
      type: 'protein',
    }).set('Authorization', `Bearer ${testAdmin.token}`);

    expect(response.status).toEqual(201);
    expect(response.body.name).toEqual('tacos');
  });

  it('gets all records', async() => {
    let response = await request.get('/api/v2/food').set('Authorization', `Bearer ${testAdmin.token}`);

    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('tacos');
  });

  it('gets a single records', async() => {
    let response = await request.get('/api/v2/food/1').set('Authorization', `Bearer ${testAdmin.token}`);

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('tacos');
  });

  it('updates a record', async() => {
    let response = await request.put('/api/v2/food/1').send({
      name: 'tacos',
      calories: 1000,
      type: 'protein',
    }).set('Authorization', `Bearer ${testAdmin.token}`);

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('tacos');
    expect(response.body.calories).toEqual(1000);
  });

  it('deletes a record', async() => {
    let response = await request.delete('/api/v2/food/1').set('Authorization', `Bearer ${testAdmin.token}`);

    expect(response.status).toEqual(200);
    expect(response.body).toEqual(1);
  });

}); 
