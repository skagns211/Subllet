const bcrypt = require("bcrypt");
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
  generateEmailKey: async () => {
    return Math.random().toString(36).slice(2);
  },
};
