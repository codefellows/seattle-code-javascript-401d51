'use strict';

const { app } = require('../src/server');
const supertest = require('supertest');
const { sequelizeDatabase } = require('../src/models');
const request = supertest(app);

beforeAll(async () => {
  await sequelizeDatabase.sync();
});

afterAll(async () => {
  await sequelizeDatabase.drop();
});

describe('REST API', () => {
  it('creates a customer', async () => {
    let response = await request.post('/customer').send({
      name: 'Tester',
      age: 42,
      pronouns: 'they/them',
    });
    let responseTwo = await request.post('/customer').send({
      name: 'Testy McTest',
      age: 42,
      pronouns: 'they/them',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Tester');
    expect(response.body.age).toEqual(42);
    expect(response.body.pronouns).toEqual('they/them');
    expect(response.body.id).toBeTruthy();
    expect(responseTwo.body.name).toEqual('Testy McTest');

  });

  it('gets customers', async () => {
    let response = await request.get('/customer');

    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('Tester');
    expect(response.body[0].age).toEqual(42);
    expect(response.body[0].pronouns).toEqual('they/them');
    expect(response.body[0].id).toBeTruthy();
    expect(response.body[1].name).toEqual('Testy McTest');

  });
  it('gets a single customer by id', async () => {
    let response = await request.get('/customer/1');

    expect(response.status).toEqual(200);
    expect(response.body.id).toBeTruthy();
    expect(response.body.name).toEqual('Tester');
    expect(response.body.age).toEqual(42);
  });

  it('updates as expected', async () => {
    let response = await request.put('/customer/1').send({
      id: 1,
      name: 'Tester',
      age: 43,
    });

    expect(response.status).toEqual(200);
    expect(response.body).toEqual([1]);
  });

  it('deletes as expected', async () => {
    let response = await request.delete('/customer/1');
    console.log('delete response', response.body);
    // if we use the base postgres functionality, this works!
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('record deleted');

    let responseTwo = await request.get('/customer');
    expect(responseTwo.body[0].name).toEqual('Testy McTest');

  });
});
