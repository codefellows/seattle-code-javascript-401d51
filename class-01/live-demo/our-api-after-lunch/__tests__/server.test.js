const { app } = require('../server');
const supertest = require('supertest');
const mockRequest = supertest(app);

describe('API Server', () => {
  test('handles the root path', async () => {
    const response = await mockRequest.get('/');

    expect(response.status).toBe(200);
    expect(response.text).toBeTruthy();
    expect(response.text).toEqual('this is a log!');
  });

  test('handles invalid requests', async () => {
    const response = await mockRequest.get('/foo');

    expect(response.status).toEqual(404);
  });

  test('handles error', async () => {
    const response = await mockRequest.get('/bad');
    console.log(response);
    expect(response.status).toEqual(500);
    expect(response.body.route).toEqual('/bad');
  });
});
