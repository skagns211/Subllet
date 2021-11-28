"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Reply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Reply.belongsTo(models.Asking, {
        foreignKey: "asking_id",
        sourceKey: "id",
      });
      models.Reply.belongsTo(models.User, {
        foreignKey: "user_id",
        sourceKey: "id",
      });
    }
  }
  Reply.init(
    {
      user_id: DataTypes.INTEGER,
      asking_id: DataTypes.INTEGER,
      message: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Reply",
    }
  );
  return Reply;
};
