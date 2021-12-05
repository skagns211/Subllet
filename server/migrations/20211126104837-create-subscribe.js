"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Subscribes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        // references: { model: "Users", key: "id" },
        type: Sequelize.INTEGER,
      },
      service_id: {
        // references: { model: "Services", key: "id" },
        type: Sequelize.INTEGER,
      },
      paydate: {
        type: Sequelize.INTEGER,
      },
      planname: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      planprice: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Subscribes");
  },
};
