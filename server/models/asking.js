"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class asking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.asking.hasMany(models.reply, {
        foreignKey: "asking_id",
        sourceKey: "id",
      });
      models.asking.belongsTo(models.user, {
        foreignKey: "user_id",
        sourceKey: "id",
      });
    }
  }
  asking.init(
    {
      user_id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      message: DataTypes.TEXT,
      total_replys: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "asking",
    }
  );
  return asking;
};
