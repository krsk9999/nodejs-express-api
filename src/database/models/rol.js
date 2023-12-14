const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Rol', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Rol: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Descripcion: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    Estado: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'Rol',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Rol",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
