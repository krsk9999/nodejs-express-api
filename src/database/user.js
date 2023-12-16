// const sql = require("mssql");
// const sqlConfig = {
//   user: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
//   server: process.env.DB_SERVER,
//   options: {
//     encrypt: false // for azure
//   }
// };

const { Usuario } = require('./models/init-models')

const getAll = async () => {
  try {
    const users = await Usuario.findAll({
      attributes: { exclude: ['PASSWORD','rol','CREATEDDATE','UsuarioModificacion','FechaModificacion'] },
  });
    // console.dir({ pacientes: pacientes });
    return { users: users };
  } catch (err) {
    console.error(err);
  }
};

const get = async userId => {
  try {
    const user = await Usuario.findByPk(userId, {
      attributes: { exclude: ['PASSWORD','rol','CREATEDDATE','UsuarioModificacion','FechaModificacion'] },
  });
    // console.dir({ pacientes: pacientes });
    return { user: user };
  } catch (err) {
    console.error(err);
  }
};

const create = async newUser => {
  try {
    const user = await Usuario.create(newUser);
    // console.dir({ pacientes: pacientes });
    return { user: user };
  } catch (err) {
    console.error(err);
  }
};

const update = async pacienteActualizado => {
  return "";
};

const remove = async (pacienteId) => {
  return "";
};

module.exports = {
  getAll,
  get,
  create,
  update,
  remove
};
