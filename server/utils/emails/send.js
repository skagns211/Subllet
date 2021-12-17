const nodemailer = require("nodemailer");
const stmpTransport = require("./transport");
var sesTransport = require("nodemailer-ses-transport");

// module.exports = (emailContent) => {
//   nodemailer
//     .createTransport(smtpTransport)
//     .sendMail(emailContent, (err, info) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("sended", info);
//       }
//     });
// };

module.exports = (emailContent) => {
  nodemailer
    .createTransport(
      sesTransport({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: "us-east-1",
      })
    )
    .sendMail(emailContent, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log("sended", info);
      }
    });
};
