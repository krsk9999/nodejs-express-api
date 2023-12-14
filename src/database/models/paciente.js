const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Paciente', {
    Identificacion: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    Genero: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    FechaNacimiento: {
      type: "SMALLDATETIME",
      allowNull: true
    },
    Domicilio: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    Provincia: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Telefono: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    Celular: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    APP: {
      type: DataTypes.STRING(2048),
      allowNull: true
    },
    ANPP: {
      type: DataTypes.STRING(2048),
      allowNull: true
    },
    AQT: {
      type: DataTypes.STRING(2048),
      allowNull: true
    },
    AlergiaMedicamento: {
      type: DataTypes.STRING(2048),
      allowNull: true
    },
    RiesgoEmbarazo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Vacunas: {
      type: DataTypes.STRING(2048),
      allowNull: true
    },
    AntecedentesPerinatales: {
      type: DataTypes.STRING(2048),
      allowNull: true
    },
    FechaRegistro: {
      type: "SMALLDATETIME",
      allowNull: false
    },
    CorreoInicioEnviado: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    Correo: {
      type: DataTypes.STRING(100),
      allowNull: true
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
    tableName: 'Paciente',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Paciente",
        unique: true,
        fields: [
          { name: "Identificacion" },
        ]
      },
    ]
  });
};
