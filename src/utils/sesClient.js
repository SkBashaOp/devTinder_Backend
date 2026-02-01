const { SESClient } = require("@aws-sdk/client-ses");
// Set the AWS Region.
const REGION = "ap-south-1";
// Create SES service object.
const sesClient = new SESClient({
  region: REGION,
  credentials: {
    accessKeyId: "AKIA25T3GT44ZKQ52AGC",
    secretAccessKey: "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",
  },
});

module.exports = { sesClient };
// snippet-end:[ses.JavaScript.createclientv3]
