const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TipoNotas', {
    TipoNotaId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(128),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TipoNotas',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__TipoNota__08AE79BF60CE4C4B",
        unique: true,
        fields: [
          { name: "TipoNotaId" },
        ]
      },
    ]
  });
};
