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

describe('v1 Routes', () => {
  it('creates a record', async() => {
    let response = await request.post('/api/v1/food').send({
      name: 'tacos',
      calories: 100,
      type: 'protein',
    });

    expect(response.status).toEqual(201);
    expect(response.body.name).toEqual('tacos');
  });

  it('gets all records', async() => {
    let response = await request.get('/api/v1/food');

    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('tacos');
  });

  it('gets a single records', async() => {
    let response = await request.get('/api/v1/food/1');

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('tacos');
  });

  it('updates a record', async() => {
    let response = await request.put('/api/v1/food/1').send({
      name: 'tacos',
      calories: 1000,
      type: 'protein',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('tacos');
    expect(response.body.calories).toEqual(1000);
  });

  it('deletes a record', async() => {
    let response = await request.delete('/api/v1/food/1');

    expect(response.status).toEqual(200);
    expect(response.body).toEqual(1);
  });

}); 
