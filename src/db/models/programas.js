"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Programas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Programas.hasMany(models.Personas);
    }
  }
  Programas.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV1,
      },
      nombre: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Programas",
    }
  );
  return Programas;
};
