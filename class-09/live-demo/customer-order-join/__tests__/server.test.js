const { app } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(app);

describe('API Server', () => {
  test('handles the root path', async () => {
    const response = await mockRequest.get('/');

    expect(response.status).toBe(200);
    expect(response.text).toBeTruthy();
    expect(response.text).toEqual('Hello World!');
  });

  test('handles invalid request route', async () => {
    const response = await mockRequest.get('/foo');

    expect(response.status).toEqual(404);
  });

  test('handles invalid request method', async () => {
    const response = await mockRequest.post('/person');

    expect(response.status).toEqual(404);
  });

  test('handles error', async () => {
    const response = await mockRequest.get('/bad');
    // console.log(response);
    expect(response.status).toEqual(500);
    expect(response.body.route).toEqual('/bad');
  });

  test('handles the person post route', async () => {
    const response = await mockRequest.get(`/person?name=Fred`);
    // console.log('this is the supertest response', response);
    let nameJson = JSON.stringify({name: 'Fred'});
    expect(response.text).toEqual(nameJson);
    expect(response.status).toEqual(200);
  });

  test('fails the person post route with no query name', async () => {
    const response = await mockRequest.get(`/person`);
    console.log('this is response.text', response.text);
    expect(response.status).toEqual(500);
  });
});
