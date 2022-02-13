const nodemailer = require("nodemailer");
const stmpTransport = require("./transport");

module.exports = (emailContent) => {
  nodemailer
    .createTransport(stmpTransport)
    .sendMail(emailContent, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log("sended", info);
      }
    });
};
