'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Blague extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Blague.init({
    question: DataTypes.STRING,
    reponse: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Blague',
  });
  return Blague;
};