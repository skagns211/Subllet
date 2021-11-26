"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.user.hasMany(models.asking, {
        foreignKey: "user_id",
        sourceKey: "id",
      });
      models.user.hasMany(models.reply, {
        foreignKey: "user_id",
        sourceKey: "id",
      });
      models.user.hasMany(models.comment, {
        foreignKey: "user_id",
        sourceKey: "id",
      });
      models.user.hasMany(models.scrap, {
        foreignKey: "user_id",
        sourceKey: "id",
      });
      models.user.hasMany(models.subscribe, {
        foreignKey: "user_id",
        sourceKey: "id",
      });
    }
  }
  user.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      nickname: DataTypes.STRING,
      profile: DataTypes.STRING,
      total_scraps: DataTypes.INTEGER,
      total_subscribes: DataTypes.INTEGER,
      total_price: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
