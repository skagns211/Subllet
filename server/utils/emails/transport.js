require("dotenv").config;
let aws = require("@aws-sdk/client-ses");

const ses = new aws.SES({
  apiVersion: "2010-12-01",
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const smtpTransport = {
  SES: { ses, aws },
};

module.exports = smtpTransport;
