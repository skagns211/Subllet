const nodemailer = require("nodemailer");
const smtpTransport = require("./transport");

module.exports = (emailContent) => {
  nodemailer
    .createTransport(smtpTransport)
    .sendMail(emailContent, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log("sended", info);
      }
    });
};
