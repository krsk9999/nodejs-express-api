const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Archivos_Adjuntos', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    Ruta: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    FechaVisita: {
      type: "SMALLDATETIME",
      allowNull: false,
      references: {
        model: 'Expediente',
        key: 'Identificacion'
      }
    },
    Identificacion: {
      type: DataTypes.STRING(15),
      allowNull: false,
      references: {
        model: 'Expediente',
        key: 'Identificacion'
      }
    }
  }, {
    sequelize,
    tableName: 'Archivos_Adjuntos',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_id_archivos_adjuntos",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
