"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Service.hasMany(models.Comment, {
        foreignKey: "service_id",
        sourceKey: "id",
      });
      models.Service.hasMany(models.Scrap, {
        foreignKey: "service_id",
        sourceKey: "id",
      });
      models.Service.hasMany(models.Subscribe, {
        foreignKey: "service_id",
        sourceKey: "id",
      });
      models.Service.hasMany(models.Price, {
        foreignKey: "service_id",
        sourceKey: "id",
      });
    }
  }
  Service.init(
    {
      title: DataTypes.STRING,
      message: DataTypes.TEXT,
      inner_image: DataTypes.STRING,
      outer_image: DataTypes.STRING,
      total_likes: DataTypes.INTEGER,
      category: DataTypes.STRING,
      url: DataTypes.STRING,
      demo: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Service",
    }
  );
  return Service;
};
