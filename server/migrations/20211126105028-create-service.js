'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Services', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      message: {
        type: Sequelize.TEXT
      },
      inner_image: {
        type: Sequelize.STRING
      },
      outer_image: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      demo: {
        type: Sequelize.BOOLEAN
      },
      total_comments: {
        type: Sequelize.INTEGER
      },
      total_likes: {
        type: Sequelize.INTEGER
      },
      total_scraps: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Services');
  }
};