"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Asking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Asking.hasMany(models.Reply, {
        foreignKey: "asking_id",
        sourceKey: "id",
      });
      models.Asking.belongsTo(models.User, {
        foreignKey: "user_id",
        sourceKey: "id",
      });
    }
  }
  Asking.init(
    {
      user_id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      message: DataTypes.TEXT,
      total_replys: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Asking",
    }
  );
  return Asking;
};
