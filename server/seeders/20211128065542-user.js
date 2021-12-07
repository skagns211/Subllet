"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      {
        email: "skagns211@gmail.com",
        password: "930211",
        nickname: "huni",
        profile: "",
        signup_method: "Normal",
        total_scraps: 0,
        total_subscribes: 0,
        total_price: "0원",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "ionc635@gmail.com",
        password: "941021",
        nickname: "jong",
        profile: "image.jpg",
        signup_method: "Normal",
        total_scraps: 0,
        total_subscribes: 0,
        total_price: "0원",
        createdAt: new Date(),
        updatedAt: new Date(),
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
