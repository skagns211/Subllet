require("dotenv").config;
let aws = require("@aws-sdk/client-ses");
let { defaultProvider } = require("@aws-sdk/credential-provider-node");

const ses = new aws.SES({
  apiVersion: "2010-12-01",
  region: "us-east-1",
  defaultProvider,
  accessKeyId: "AKIAQAL3PHLKIPOA2ON5",
  secretAccessKey: "BDePWPGkzWTBdEYDYoQi85IEL+8LmiZKcl9D2IwhexAi",
});

// create Nodemailer SES transporter
const smtpTransport = {
  SES: { ses, aws },
};

// aws.config.update({
//   accessKeyId: "AKIAQAL3PHLKIPOA2ON5",
//   secretAccessKey: "BDePWPGkzWTBdEYDYoQi85IEL+8LmiZKcl9D2IwhexAi",
//   region: "email-smtp.us-east-1.amazonaws.com",
// });

// const smtpTransport = {
//   accessKeyId: "AKIAQAL3PHLKIPOA2ON5",
//   secretAccessKey: "BDePWPGkzWTBdEYDYoQi85IEL+8LmiZKcl9D2IwhexAi",
// };

// const ses = new aws.SES({
//   apiVersion: "2010-12-01",
//   region: "email-smtp.us-east-1.amazonaws.com",
//   defaultProvider,
//   accessKeyId: "AKIAQAL3PHLKIPOA2ON5",
//   secretAccessKey: "BDePWPGkzWTBdEYDYoQi85IEL+8LmiZKcl9D2IwhexAi",
// });

// const smtpTransport = {
//   SES: new aws.SES({
//     accessKeyId: "AKIAQAL3PHLKIPOA2ON5",
//     secretAccessKey: "BDePWPGkzWTBdEYDYoQi85IEL+8LmiZKcl9D2IwhexAi",
//   }),
// };

// const smtpTransport = {
//   host: "us-east-1",
//   port: 465,
//   secure: false,
//   auth: {
//     user: "AKIAQAL3PHLKIPOA2ON5",
//     pass: "BDePWPGkzWTBdEYDYoQi85IEL+8LmiZKcl9D2IwhexAi",
//   },
// };

// const smtpTransport = {
//   SES: { ses, aws },
// host: process.env.NODEMAILER_HOST,
// port: process.env.NODEMAILER_PORT,
// secure: false,
// auth: {
//   user: process.env.NODEMAILER_USER,
//   pass: process.env.NODEMAILER_PASSWORD,
// },
// };

module.exports = smtpTransport;
