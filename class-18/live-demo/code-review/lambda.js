const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
    
    let name = event.Records[0].s3.object.key;
    let size = event.Records[0].s3.object.size;
    let type = 'jpg';
    let newImageObj = { name, size, type };
    console.log('newImageObj', newImageObj);
    
    let images = [];
    
    let params = {
        Bucket: 'ryan-gallaway-images',
        Key: 'images.json',
    }
    
    try {
        let data = await s3.getObject(params).promise();
        console.log('data', data);
        images = JSON.parse(data.Body.toString());
        console.log('images', images);
    }catch(e){
        console.log(e.message);
    }
    
    images.push(newImageObj);
    params.Body = JSON.stringify(images);
    
    try {
        await s3.putObject(params).promise();
    }catch(e){
        console.log(e.message);
    }
    
    // DONE implement
    const response = {
        statusCode: 200,
        body: JSON.stringify(images),
    };
    return response;
};
