'use strict';
const attestationAgencySdk = require("attestation-agency-sdk");
const axios = require('axios');
var dateFormat = require('dateformat');
var AWS = require('aws-sdk');

module.exports.hello = async (event) => {

     await sdk.init();
     console.log('SDK initialized and can be used');

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }, null, 2),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
