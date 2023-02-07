'use strict';

require('dotenv').config();
const { server } = require('../src/server-phase-3.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

const { db } = require('../src/models/index.js');

//  Initializing / Tearing down your database before and after your tests finish.
beforeAll(async () => {
  await db.sync();
});
afterAll(async () => {
  await db.drop();
});

describe('web server', () => {

  // These tests are wired with async/await --- so much cleaner!
  it('should respond with a 404 on an invalid method', async () => {
    const response = await mockRequest.put('/hello');
    expect(response.status).toBe(404);
  });

  // LEAD YOUR CLASS IN A STRATEGY SESSION
  // Rather than write the tests for them, have them identify how they would write these tests...

  it('can add a record', async () => {

  });

  it('can get a list of records', async () => {

  });

  it('can get a record', async () => {

  });

  it('can update a record', async () => {

  });

  it('can delete a record', async () => {

  });
});
