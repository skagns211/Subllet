"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.comment.belongsTo(models.user, {
        foreignKey: "user_id",
        sourceKey: "id",
      });
      models.comment.belongsTo(models.service, {
        foreignKey: "service_id",
        sourceKey: "id",
      });
    }
  }
  comment.init(
    {
      user_id: DataTypes.INTEGER,
      service_id: DataTypes.INTEGER,
      message: DataTypes.TEXT,
      likes: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "comment",
    }
  );
  return comment;
};
