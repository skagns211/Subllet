"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Scrap extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Scrap.belongsTo(models.User, {
        foreignKey: "user_id",
        sourceKey: "id",
      });
      models.Scrap.belongsTo(models.Service, {
        foreignKey: "service_id",
        sourceKey: "id",
      });
    }
  }
  Scrap.init(
    {
      user_id: DataTypes.INTEGER,
      service_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Scrap",
    }
  );
  return Scrap;
};
