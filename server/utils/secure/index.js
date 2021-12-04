// const crypto = require("crypto");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const saltRounds = 10;

module.exports = {
  generateSalt: async () => {
    return bcrypt.genSalt(saltRounds);
  },
  hashPassword: async (plainPassword, salt) => {
    return bcrypt.hash(plainPassword, salt);
  },
  checkPassword: async (plainPassword, hashPassword) => {
    return bcrypt.compareSync(plainPassword, hashPassword);
  },
  // generateEmailKey: async () => {
    // const key_one = Math.random()
    // const key_two = Math.random()
  //   return Math.random()
  // },
  //   createSalt: () => {
  //     return crypto.randomBytes(64).toString("base64");
  //   },
  //   createHashedPassword: (password, salt) => {
  //     crypto.pbkdf2(password, salt, 5000, 64, "sha512", (err, key) => {
  //       if (err) throw err;
  //       return `${key.toString("base64")}`;
  //     });
  //   },
};
