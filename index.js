const { S3Client, ListBucketsCommand } = require("@aws-sdk/client-s3");

const client = new S3Client({
  profile: 'josh',
  region: "us-east-1",
});

const command = new ListBucketsCommand({});

client.send(command).then(r => console.log(r));
