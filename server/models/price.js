"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Price extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Price.belongsTo(models.Service, {
        foreignKey: "service_id",
        sourceKey: "id",
      });
    }
  }
  Price.init(
    {
      service_id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      message: DataTypes.TEXT,
      price: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Price",
    }
  );
  return Price;
};
