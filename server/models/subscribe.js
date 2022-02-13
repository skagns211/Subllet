"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Subscribe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Subscribe.belongsTo(models.User, {
        foreignKey: "user_id",
        sourceKey: "id",
      });
      models.Subscribe.belongsTo(models.Service, {
        foreignKey: "service_id",
        sourceKey: "id",
      });
    }
  }
  Subscribe.init(
    {
      user_id: DataTypes.INTEGER,
      service_id: DataTypes.INTEGER,
      paydate: DataTypes.INTEGER,
      planname: DataTypes.STRING,
      planprice: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Subscribe",
    }
  );
  return Subscribe;
};
