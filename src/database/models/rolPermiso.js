const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Rol_Permiso', {
    IDRol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Rol',
        key: 'ID'
      }
    },
    IDPermiso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Permiso',
        key: 'ID'
      }
    }
  }, {
    sequelize,
    tableName: 'Rol_Permiso',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Rol_Permiso",
        unique: true,
        fields: [
          { name: "IDRol" },
          { name: "IDPermiso" },
        ]
      },
    ]
  });
};
