const { Sequelize, DataTypes } = require('sequelize');
var _Usuario = require("./USUARIO");
var _AgendaElectronica = require("./Product");



function initModels(sequelize) {
    const Usuario = _Usuario(sequelize, DataTypes);
    const Product = _Product(sequelize, DataTypes);
  
    return {
      Usuario,
      Product,
    };
  }
  module.exports = new initModels(sequelize);