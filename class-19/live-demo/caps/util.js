const clientSqs = require('@aws-sdk/client-sqs');
const { SQSClient } = clientSqs;

const REGION = 'us-west-2';
const sqsClient = new SQSClient({region: REGION});

const QUEUES = {
  pickup: 'https://sqs.us-west-2.amazonaws.com/703956006727/pckup.fifo',
};

module.exports = { sqsClient, QUEUES }
