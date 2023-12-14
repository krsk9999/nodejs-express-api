const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('USUARIO', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    USER: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    NAME: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PASSWORD: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    STATUS: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    CREATEDDATE: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    rol: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Rol',
        key: 'ID'
      }
    },
    UsuarioModificacion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'USUARIO',
        key: 'ID'
      }
    },
    FechaModificacion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    }
  }, {
    sequelize,
    tableName: 'USUARIO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ID",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
