// imports for stretch goal success // still need permissions
import { S3Client, GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';

// we get this for free from AWS lambda
export const handler = async(event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
