"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("askings", {
      fields: ["user_id"],
      type: "foreign key",
      references: {
        table: "users",
        field: "id",
      },
    });
    await queryInterface.addConstraint("replys", {
      fields: ["asking_id"],
      type: "foreign key",
      references: {
        table: "askings",
        field: "id",
      },
    });
    await queryInterface.addConstraint("replys", {
      fields: ["user_id"],
      type: "foreign key",
      references: {
        table: "users",
        field: "id",
      },
    });
    await queryInterface.addConstraint("comments", {
      fields: ["user_id"],
      type: "foreign key",
      references: {
        table: "users",
        field: "id",
      },
    });
    await queryInterface.addConstraint("comments", {
      fields: ["service_id"],
      type: "foreign key",
      references: {
        table: "services",
        field: "id",
      },
    });
    await queryInterface.addConstraint("scraps", {
      fields: ["user_id"],
      type: "foreign key",
      references: {
        table: "users",
        field: "id",
      },
    });
    await queryInterface.addConstraint("scraps", {
      fields: ["service_id"],
      type: "foreign key",
      references: {
        table: "services",
        field: "id",
      },
    });
    await queryInterface.addConstraint("subscribes", {
      fields: ["user_id"],
      type: "foreign key",
      references: {
        table: "users",
        field: "id",
      },
    });
    await queryInterface.addConstraint("subscribes", {
      fields: ["service_id"],
      type: "foreign key",
      references: {
        table: "services",
        field: "id",
      },
    });
    await queryInterface.addConstraint("prices", {
      fields: ["service_id"],
      type: "foreign key",
      references: {
        table: "services",
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
