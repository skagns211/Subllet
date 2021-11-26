"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class subscribe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.subscribe.belongsTo(models.user, {
        foreignKey: "user_id",
        sourceKey: "id",
      });
      models.subscribe.belongsTo(models.service, {
        foreignKey: "service_id",
        sourceKey: "id",
      });
    }
  }
  subscribe.init(
    {
      user_id: DataTypes.INTEGER,
      service_id: DataTypes.INTEGER,
      paydate: DataTypes.INTEGER,
      planname: DataTypes.STRING,
      planprice: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "subscribe",
    }
  );
  return subscribe;
};
