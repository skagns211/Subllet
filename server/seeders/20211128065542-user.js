"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      {
        email: "test@gmail.com",
        password: "$2b$10$HH4z1sNtFhDF/IvMQpokY.is5C4N0jTYvN.3WVQRa.id1riMaZcKq",
        nickname: "test",
        profile: "https://i.esdrop.com/d/z3v0lj8ztjvc/OizvMNga4W.png",
        email_verified: true,
        email_key: "12345",
        signup_method: "Normal",
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
