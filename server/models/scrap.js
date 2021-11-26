"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class scrap extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.scrap.belongsTo(models.user, {
        foreignKey: "user_id",
        sourceKey: "id",
      });
      models.scrap.belongsTo(models.service, {
        foreignKey: "service_id",
        sourceKey: "id",
      });
    }
  }
  scrap.init(
    {
      user_id: DataTypes.INTEGER,
      service_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "scrap",
    }
  );
  return scrap;
};
