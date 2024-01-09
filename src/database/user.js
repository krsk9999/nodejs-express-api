const sql = require("mssql");
const sqlConfig = {
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  server: process.env.DB_SERVER,
  options: {
    encrypt: false // for azure
  }
};

const getUsers = async () => {
  try {
    let pool = sql.connect(sqlConfig);

    let result = await pool
      .request()
      .execute("uspGetUsuarios");
    console.dir({ users: result.recordset });
    return { users: result.recordset };
  } catch (err) {
    console.error(err);
  }
};

// obtenerTodosPacientes = async () => {
//   try {
//     // make sure that any items are correctly URL encoded in the connection string
//     await sql.connect(sqlConfig);
//     const result = await sql.query`select * from paciente`;
//     return { pacientes: result.recordset };
//   } catch (err) {
//     console.error(err);
//   }
// };

// const obtenerTodosPacientes = async () => {
//   try {
//     let pool = await sql.connect(sqlConfig);

//     sql.valueHandler.set(sql.TYPES.Bit, (value) => value == 0 ? 'No' : 'Si')

//     // Stored procedure
//     let result = await pool.request().execute("uspPacienteSelectAll");

//     console.dir({ pacientes: result.recordset });
//     return { pacientes: result.recordset };
//   } catch (err) {
//     console.error(err);
//   }
// };

// const get = async userId => {
//   try {
//     const user = await Usuario.findByPk(userId, {
//       attributes: { exclude: ['PASSWORD','rol','CREATEDDATE','UsuarioModificacion','FechaModificacion'] },
//   });
//     // console.dir({ pacientes: pacientes });
//     return { user: user };
//   } catch (err) {
//     console.error(err);
//   }
// };

// const create = async newUser => {
//   try {
//     const user = await Usuario.create(newUser);
//     // console.dir({ pacientes: pacientes });
//     return { user: user };
//   } catch (err) {
//     console.error(err);
//   }
// };

// const update = async pacienteActualizado => {
//   return "";
// };

// const remove = async (pacienteId) => {
//   return "";
// };

export {
  getUsers,
  // get,
  // create,
  // update,
  // remove
};
