"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        email: "skagns211@gmail.com",
        password: "930211",
        nickname: "huni",
        profile: "",
        total_scraps: 1,
        total_subscribes: 3,
        total_price: "₩ 32,100",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
