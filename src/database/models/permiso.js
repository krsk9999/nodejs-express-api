const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Permiso', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Permiso: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Descripcion: {
      type: DataTypes.STRING(254),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Permiso',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Permiso",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
