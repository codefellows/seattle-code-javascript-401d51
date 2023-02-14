'use strict';

const supertest = require('supertest');
const { app } = require('../server');
const request = supertest(app);

describe('API Server', () => {

  it('handles invalid requests', async () => {
    const response = await request.get('/foo');

    expect(response.status).toEqual(404);
  });

  it('handles root path', async () => {
    const response = await request.get('/');

    expect(response.status).toBe(200);
    expect(response.text).toBeTruthy();
    expect(response.text).toEqual('What a fine day for development');
  });

  it('handles \'/pet\' route without query param correctly', async () => {
    const response = await request.get('/pet');

    expect(response.status).toEqual(500);
  });

  it('handles \'/pet\' route with query param correctly', async () => {
    const response = await request.get('/pet').query({petName: 'Marv'});

    // console.log(response.body);

    expect(response.body.message).toEqual('What a cutie, that Marv!');
  });
});
