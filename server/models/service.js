"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.service.hasMany(models.comment, {
        foreignKey: "service_id",
        sourceKey: "id",
      });
      models.service.hasMany(models.scrap, {
        foreignKey: "service_id",
        sourceKey: "id",
      });
      models.service.hasMany(models.subscribe, {
        foreignKey: "service_id",
        sourceKey: "id",
      });
      models.service.hasMany(models.price, {
        foreignKey: "service_id",
        sourceKey: "id",
      });
    }
  }
  service.init(
    {
      title: DataTypes.STRING,
      message: DataTypes.TEXT,
      inner_image: DataTypes.STRING,
      outer_image: DataTypes.STRING,
      category: DataTypes.STRING,
      url: DataTypes.STRING,
      demo: DataTypes.BOOLEAN,
      total_comments: DataTypes.INTEGER,
      total_likes: DataTypes.INTEGER,
      total_scraps: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "service",
    }
  );
  return service;
};
