"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.User.hasMany(models.Comment, {
        foreignKey: "user_id",
        sourceKey: "id",
      });
      models.User.hasMany(models.Scrap, {
        foreignKey: "user_id",
        sourceKey: "id",
      });
      models.User.hasMany(models.Subscribe, {
        foreignKey: "user_id",
        sourceKey: "id",
      });
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      nickname: DataTypes.STRING,
      profile: DataTypes.STRING,
      email_verified: DataTypes.BOOLEAN,
      email_key: DataTypes.STRING,
      signup_method: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
