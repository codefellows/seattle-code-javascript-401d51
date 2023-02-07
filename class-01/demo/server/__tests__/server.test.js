'use strict';

const supertest = require('supertest');
const server = require('../server.js');
const request = supertest(server.app);

describe('API Server', () => {

  it('handles invalid requests', async () => {
    const response = await request.get('/foo');
    expect(response.status).toEqual(404);
  })

  it('handles errors', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
    expect(response.body.route).toEqual('/bad');
  })

  it('handles root path /', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Hello World');
  })

  it('handles API path /data', async () => {
    const response = await request.get('/data');
    expect(response.status).toEqual(200);
    expect(typeof response.body).toEqual('object');
  })

  it('stamps routes with middleware', async () => {
    const response = await request.get('/data');
    expect(response.status).toEqual(200);
    expect(response.body.time).toBeDefined();
  })

});
