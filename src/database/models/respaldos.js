const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Respaldos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ruta: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    usuario: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    fecha: {
      type: "SMALLDATETIME",
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    fechaEliminacion: {
      type: "SMALLDATETIME",
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Respaldos',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Respaldo__3213E83F108B795B",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
