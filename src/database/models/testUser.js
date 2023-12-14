const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TestUser', {
    ID: {
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
      allowNull: false
    },
    CREATEDDATE: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TestUser',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__TestUser__3214EC27588B7DDA",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
