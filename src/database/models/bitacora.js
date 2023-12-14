const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Bitacora', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'USUARIO',
        key: 'ID'
      }
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Accion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Detalle: {
      type: DataTypes.STRING(1025),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Bitacora',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Bitacora",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
