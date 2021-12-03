"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Comment.belongsTo(models.User, {
        foreignKey: "user_id",
        sourceKey: "id",
      });
      models.Comment.belongsTo(models.Service, {
        foreignKey: "service_id",
        sourceKey: "id",
      });
    }
  }
  Comment.init(
    {
      user_id: DataTypes.INTEGER,
      service_id: DataTypes.INTEGER,
      commenter: DataTypes.STRING,
      message: DataTypes.TEXT,
      likes: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  return Comment;
};
