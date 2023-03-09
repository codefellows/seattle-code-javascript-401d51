'use strict';

const AWS = require('aws-sdk');
AWS.config.update({region: 'us-west-2'});

// type node index.js 'some string'  in terminal
const message = process.argv[2];

// console.log(message);

const sns = new AWS.SNS();
const topic = 'arn:aws:sns:us-west-2:703956006727:messages'

const payload = {
  Message: message,
  TopicArn: topic,
}

sns.publish(payload).promise()
  .then(data => console.log(data))
  .catch(err => console.log(err));
