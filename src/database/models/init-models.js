const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_SERVER,
  dialect: 'mssql'
});

var _AgendaElectronica = require("./agendaElectronica");
var _Archivos_Adjuntos = require("./archivosAdjuntos");
var _Bitacora = require("./bitacora");
var _Expediente = require("./expediente");
var _Notas = require("./notas");
var _Paciente = require("./paciente");
var _Permiso = require("./permiso");
var _Respaldos = require("./respaldos");
var _Rol = require("./rol");
var _Rol_Permiso = require("./rolPermiso");
var _TestUser = require("./testUser");
var _TipoNotas = require("./tipoNotas");
var _Usuario = require("./USUARIO");

function initModels(sequelize) {
  var AgendaElectronica = _AgendaElectronica(sequelize, DataTypes);
  var Archivos_Adjuntos = _Archivos_Adjuntos(sequelize, DataTypes);
  var Bitacora = _Bitacora(sequelize, DataTypes);
  var Expediente = _Expediente(sequelize, DataTypes);
  var Notas = _Notas(sequelize, DataTypes);
  var Paciente = _Paciente(sequelize, DataTypes);
  var Permiso = _Permiso(sequelize, DataTypes);
  var Respaldos = _Respaldos(sequelize, DataTypes);
  var Rol = _Rol(sequelize, DataTypes);
  var Rol_Permiso = _Rol_Permiso(sequelize, DataTypes);
  var TestUser = _TestUser(sequelize, DataTypes);
  var TipoNotas = _TipoNotas(sequelize, DataTypes);
  var Usuario = _Usuario(sequelize, DataTypes);

  Permiso.belongsToMany(Rol, { as: 'IDRol_Rols', through: Rol_Permiso, foreignKey: "IDPermiso", otherKey: "IDRol" });
  Rol.belongsToMany(Permiso, { as: 'IDPermiso_Permisos', through: Rol_Permiso, foreignKey: "IDRol", otherKey: "IDPermiso" });
  Archivos_Adjuntos.belongsTo(Expediente, { as: "FechaVisita_Expediente", foreignKey: "FechaVisita"});
  Expediente.hasMany(Archivos_Adjuntos, { as: "Archivos_Adjuntos", foreignKey: "FechaVisita"});
  Archivos_Adjuntos.belongsTo(Expediente, { as: "Identificacion_Expediente", foreignKey: "Identificacion"});
  Expediente.hasMany(Archivos_Adjuntos, { as: "Identificacion_Archivos_Adjuntos", foreignKey: "Identificacion"});
  Expediente.belongsTo(Paciente, { as: "Identificacion_Paciente", foreignKey: "Identificacion"});
  Paciente.hasMany(Expediente, { as: "Expedientes", foreignKey: "Identificacion"});
  Rol_Permiso.belongsTo(Permiso, { as: "IDPermiso_Permiso", foreignKey: "IDPermiso"});
  Permiso.hasMany(Rol_Permiso, { as: "Rol_Permisos", foreignKey: "IDPermiso"});
  Rol_Permiso.belongsTo(Rol, { as: "IDRol_Rol", foreignKey: "IDRol"});
  Rol.hasMany(Rol_Permiso, { as: "Rol_Permisos", foreignKey: "IDRol"});
  Usuario.belongsTo(Rol, { as: "rol_Rol", foreignKey: "rol"});
  Rol.hasMany(Usuario, { as: "Usuarios", foreignKey: "rol"});
  Notas.belongsTo(TipoNotas, { as: "TipoNotum", foreignKey: "TipoNotaId"});
  TipoNotas.hasMany(Notas, { as: "Nota", foreignKey: "TipoNotaId"});
  AgendaElectronica.belongsTo(Usuario, { as: "usuario_Usuario", foreignKey: "usuario"});
  Usuario.hasMany(AgendaElectronica, { as: "AgendaElectronicas", foreignKey: "usuario"});
  Bitacora.belongsTo(Usuario, { as: "Usuario_Usuario", foreignKey: "Usuario"});
  Usuario.hasMany(Bitacora, { as: "Bitacoras", foreignKey: "Usuario"});
  Paciente.belongsTo(Usuario, { as: "UsuarioModificacion_Usuario", foreignKey: "UsuarioModificacion"});
  Usuario.hasMany(Paciente, { as: "Pacientes", foreignKey: "UsuarioModificacion"});
  Usuario.belongsTo(Usuario, { as: "UsuarioModificacion_Usuario", foreignKey: "UsuarioModificacion"});
  Usuario.hasMany(Usuario, { as: "Usuarios", foreignKey: "UsuarioModificacion"});

  return {
    AgendaElectronica,
    Archivos_Adjuntos,
    Bitacora,
    Expediente,
    Notas,
    Paciente,
    Permiso,
    Respaldos,
    Rol,
    Rol_Permiso,
    TestUser,
    TipoNotas,
    Usuario,
  };
}
module.exports = new initModels(sequelize);
module.exports.initModels = new initModels(sequelize);
module.exports.default = new initModels(sequelize);
