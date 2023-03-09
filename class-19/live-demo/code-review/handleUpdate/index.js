// third party library
const dynamoose  =require('dynamoose');

// create a schema
const schema = new dynamoose.Schema({
    "id": String,
    "name": String,
    "phone": String
});

const friendModel = dynamoose.model('friends', schema);

exports.handler = async(event) => {
  // TODO implement
  // const id = event?.pathParameters?.id;
  const parsedBody = JSON.parse(event.body);
  
  const response = {statusCode: null, body: null};
  try {
    let updatedResult = await friendModel.update(event.pathParameters, parsedBody);
    response.statusCode = 200;
    response.body = JSON.stringify(updatedResult);
    
  }catch(e){
    response.body = JSON.stringify(e.message);
    response.statusCode = 500;
  }
  
  return response;
};
