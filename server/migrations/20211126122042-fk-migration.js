"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("Askings", {
      fields: ["user_id"],
      type: "foreign key",
      references: {
        table: "Users",
        field: "id",
      },
    });
    await queryInterface.addConstraint("Replys", {
      fields: ["asking_id"],
      type: "foreign key",
      references: {
        table: "Askings",
        field: "id",
      },
    });
    await queryInterface.addConstraint("Replys", {
      fields: ["user_id"],
      type: "foreign key",
      references: {
        table: "Users",
        field: "id",
      },
    });
    await queryInterface.addConstraint("Comments", {
      fields: ["user_id"],
      type: "foreign key",
      references: {
        table: "Users",
        field: "id",
      },
    });
    await queryInterface.addConstraint("Comments", {
      fields: ["service_id"],
      type: "foreign key",
      references: {
        table: "Services",
        field: "id",
      },
    });
    await queryInterface.addConstraint("Scraps", {
      fields: ["user_id"],
      type: "foreign key",
      references: {
        table: "Users",
        field: "id",
      },
    });
    await queryInterface.addConstraint("Scraps", {
      fields: ["service_id"],
      type: "foreign key",
      references: {
        table: "Services",
        field: "id",
      },
    });
    await queryInterface.addConstraint("Subscribes", {
      fields: ["user_id"],
      type: "foreign key",
      references: {
        table: "Users",
        field: "id",
      },
    });
    await queryInterface.addConstraint("Subscribes", {
      fields: ["service_id"],
      type: "foreign key",
      references: {
        table: "Services",
        field: "id",
      },
    });
    await queryInterface.addConstraint("Prices", {
      fields: ["service_id"],
      type: "foreign key",
      references: {
        table: "Services",
        field: "id",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
