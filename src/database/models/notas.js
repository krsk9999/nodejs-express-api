const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Notas', {
    NotaId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nota: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    UsuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FechaVisita: {
      type: "SMALLDATETIME",
      allowNull: false
    },
    Identificacion: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    FechaCreacion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    TipoNotaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'TipoNotas',
        key: 'TipoNotaId'
      }
    }
  }, {
    sequelize,
    tableName: 'Notas',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Notas__EF36CC1A8CA8BB0D",
        unique: true,
        fields: [
          { name: "NotaId" },
        ]
      },
    ]
  });
};
