const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AgendaElectronica', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    titulo: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    fechaInicio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    horaInicio: {
      type: DataTypes.TIME,
      allowNull: false
    },
    fechaFinal: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    horaFinal: {
      type: DataTypes.TIME,
      allowNull: false
    },
    paciente: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'USUARIO',
        key: 'ID'
      }
    }
  }, {
    sequelize,
    tableName: 'AgendaElectronica',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_agendaelectronica_id",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
