const { 
  ReceiveMessageCommand, 
  DeleteMessageCommand 
} = require('@aws-sdk/client-sqs');
const { sqsClient, QUEUES } = require('../util');

function deliver(orderId){
  console.log('Driver delivered order: ', orderId);
  handlePickup()
}

async function handlePickup(){
  try {
    const received = await sqsClient.send(
      new ReceiveMessageCommand({
        QueueUrl: QUEUES.pickup,
      })
    );
    // console.log(received);
    if (received.Messages?.length > 0){
      await sqsClient.send(
        new DeleteMessageCommand({
          QueueUrl: QUEUES.pickup,
          ReceiptHandle: received.Messages[0].ReceiptHandle,
        })
      );
      const payload = JSON.parse(received.Messages[0].Body);
      console.log('Driver received the package', payload);
      setTimeout(() => {
        deliver(payload.orderId);
      }, 3000);
    } else {
      console.log('no pickup ready');
      setTimeout(handlePickup, 1000);
    }
  } catch(e){
    console.error('handlePickup failed', e);
  }
}

function startDriver(){
  console.log('Driver is ready');
  handlePickup();
}

module.exports = startDriver;
