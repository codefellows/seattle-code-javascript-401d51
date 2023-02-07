'use strict';

const uuid = require('uuid').v4;
const publisher = require('./sqs-publish.js');

jest.mock('sqs-producer', () => ({
  // what does the sqs-producer module export?
  Producer: {
    create: jest.fn(({ queueUrl, region }) => ({
      send: jest.fn(async ({ id, body }) => ({
        // AWS attaches our id to the response object
        MessageId: id
      })),
    })),
  },
}));

describe('testing our producer functionality', () => {

  test('Should be able to send a message and receive a Message Id', async () => {

    let id = uuid();

    const message = {
      id,
      body: 'Test Message',
    };

    const response = await publisher.send(message);
    expect(response).toHaveProperty('MessageId', id);
  });
});
