const AWS = require('aws-sdk');
const S3 = new AWS.S3();

exports.handler = async (event) => {
    
    // goal:  proof tthat i can interact with a test event
    console.log(event);
    
    //basic proof of life:
    // let { numberOne, numberTwo } = event;
    // let result = numberOne + numberTwo;
    // console.warn("result", result);
    
    // non dynamic way of getting from bucket
    // let Bucket = 'd51-demo';
    // let Key = 'numbers.json';
    
    // dynamic way of getting from bucket
    let Bucket = event.Records[0].s3.bucket.name;
    let Key = event.Records[0].s3.object.key;
    
    console.log(Bucket, Key);
    
    // returns a promise that needs to be handled in an AWS sort of way
    let numbersJson = await S3.getObject({ Bucket, Key }).promise();
    console.log('numberJson', numbersJson);
    
    // turn buffer string into json
    let stringifiedNumbers = numbersJson.Body.toString();
    console.log('stringifiedNumbers', stringifiedNumbers);
    
    // parse the json
    let parsedNumbers = JSON.parse(stringifiedNumbers);
    // destructure numbers form the correct js object
    let { numberOne, numberTwo } = parsedNumbers.numbers;
    let result = numberOne + numberTwo;
    console.warn("result", result);

    
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify(result),
    };
    return response;
};
