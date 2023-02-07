'use strict';
const { Producer } = require('sqs-producer');
const QUEUE_URL = process.env.QUEUE_URL || `https://sqs.us-west-2.amazonaws.com/<AWS_SQS_QUEUE_NAME>`;
const QUEUE_REGION = process.env.QUEUE_REGION || `us-west-2`;

const producer = Producer.create({
  queueUrl: QUEUE_URL,
  region: QUEUE_REGION,
});

// use this to send messages in your application (ie: vendor function / lambda micro-server);
module.exports = producer;
