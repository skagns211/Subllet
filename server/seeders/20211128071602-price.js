"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Prices", [{
      service_id: 1,
      title: '2인용 요금제',
      price: "3000원",
      message: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      service_id: 1,
      title: '3인용 요금제',
      price: "5000원",
      message: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      service_id: 1,
      title: '4인용 요금제',
      price: "6000원",
      message: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      service_id: 2,
      title: '기본 요금제',
      price: "5000원",
      message: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
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
