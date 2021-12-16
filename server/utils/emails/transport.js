require("dotenv").config;
let aws = require("@aws-sdk/client-ses");

// aws.ses.credentials.access-key: "AKIAQAL3PHLKFXBCR6FX"
// aws.ses.credentials.secret-key: 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
const ses = new aws.SES({
  apiVersion: "2012-10-17",
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
