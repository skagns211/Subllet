"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class reply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.reply.belongsTo(models.asking, {
        foreignKey: "asking_id",
        sourceKey: "id",
      });
      models.reply.belongsTo(models.user, {
        foreignKey: "user_id",
        sourceKey: "id",
      });
    }
  }
  reply.init(
    {
      user_id: DataTypes.INTEGER,
      asking_id: DataTypes.INTEGER,
      message: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "reply",
    }
  );
  return reply;
};
