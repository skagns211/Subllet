require("dotenv").config();
const path = require("path");
const pug = require("pug");

module.exports = {
  emailVerify: (email, nickname, url) => {
    const title = "회원가입 이메일 인증을 진행해주세요.";
    const fileURL = path.join(__dirname, "../../template/emails.pug");

    const options = {
      title,
      nickname,
      url,
    };
    const compiledFunction = pug.compileFile(fileURL);

    const emailContent = {
      from: '"Subllet" <contact.subllet@gmail.com>',
      to: email,
      subject: `${nickname}님! 회원가입 이메일 인증을 진행해주세요.`,
      html: compiledFunction(options),
    };

    return emailContent;
  },
};
