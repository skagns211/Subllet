"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class price extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.price.belongsTo(models.service, {
        foreignKey: "service_id",
        sourceKey: "id",
      });
    }
  }
  price.init(
    {
      service_id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      price: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "price",
    }
  );
  return price;
};
