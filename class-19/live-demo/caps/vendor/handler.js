const { SendMessageCommand } = require('@aws-sdk/client-sqs');
const { sqsClient, QUEUES } = require('../util');
const Chance = require('chance');
const chance = new Chance;

const store = '1-206-flowers';

async function sendPickup(){
  const payload = {
    store,
    orderId: chance.guid(),
    customer: chance.name(),
    address: chance.address(),
  };
  console.log('Vendor asking for pickup', payload);

  try{
    const message = await sqsClient.send(
      new SendMessageCommand({
        MessageBody: JSON.stringify(payload),
        MessageGroupId: store,
        QueueUrl: QUEUES.pickup,
      })
    );
    console.log('vendor sent pickup request', message.MessageId);
    return message;
  } catch (e){
    console.error('failed to send the pickup message', e)
  }
}

function startVendor(){
  setInterval(() => {
    sendPickup();
  }, 5000);
}

module.exports = startVendor;
