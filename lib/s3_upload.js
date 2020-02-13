require('dotenv').config()

const AWS = require("aws-sdk")
const fs = require('fs')
const path = require('path')
const mime = require('mime-types')

AWS.config.update({
  region: 'us-east-1'
})

// Create S3 service object
const s3 = new AWS.S3();

// file passed in as argument for script
const s3Upload = function(file){
  console.log(mime.lookup(file))
  // call S3 to retrieve upload file to specified bucket
  const uploadParams = {
    Bucket: process.env.BUCKET,
    Key: '',
    Body: '',
    ACL: 'public-read',
    ContentType: mime.lookup(file)
  };
  // Configure the file stream and obtain the upload parameters
  const fileStream = fs.createReadStream(file);
  fileStream.on('error', function(err) {
    console.log('File Error', err);
  });
  uploadParams.Body = fileStream;
  uploadParams.Key = path.basename(file);

  return new Promise((resolve, reject) => {
    // call S3 to retrieve upload file to specified bucket
    s3.upload(uploadParams, function(err, data) {
      if (err) {
        reject(err)
      }
      if (data) {
        resolve(data)
      }
    });
  })
}

module.exports = s3Upload

// AWS.config.getCredentials(function(err) {
//   if (err) console.log(err.stack);
//   // credentials not loaded
//   else {
//     console.log("Access key:", AWS.config.credentials.accessKeyId);
//     console.log("Secret access key:", AWS.config.credentials.secretAccessKey);
//   }
// });
