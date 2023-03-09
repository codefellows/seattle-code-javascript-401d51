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
  let parsedBody = JSON.parse(event.body);
  console.log(parsedBody);
  
  const response = {statusCode: null, body: null};
  
  try{
    let newFriend = await friendModel.create(parsedBody);
    response.body = JSON.stringify(newFriend);
    response.statusCode = 200;
  }catch(e){
    response.body = JSON.stringify(e.message);
    response.statusCode = 500;
  }

  return response;
};
