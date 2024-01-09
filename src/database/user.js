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

const getAllUsers = async () => {
  try {
    let pool = await sql.connect(sqlConfig);

    let result = await pool.request().execute("uspGetUsuarios");

    console.dir({ users: result.recordset });
    return { users: result.recordset };
  } catch (err) {
    console.error(err);
  }
};

const getUserById = async (id) => {
  try {
    let pool = await sql.connect(sqlConfig);

    // Stored procedure
    let result = await pool
      .request()
      .input("Id", sql.Int, id)
      .execute("uspGetUsuarioByID");
    console.dir({ user: result.recordset });
    const userResult = result.recordset;
    delete userResult[0].PASSWORD;
    return { user: userResult };
  } catch (err) {
    console.error(err);
  }
};

const getUserByUsername = async (username) => {
  try {
    let pool = await sql.connect(sqlConfig);

    // Stored procedure
    let result = await pool
      .request()
      .input("Identificacion", sql.NVarChar(20), username)
      .execute("uspGetUsuarioByUser");
    console.dir({ paciente: result.recordset });
    return { paciente: result.recordset };
  } catch (err) {
    console.error(err);
  }
};

const create = async newUser => {
  try {
    let pool = await sql.connect(sqlConfig);

    // Stored procedure
    let result = await pool
      .request()
      .input("User", sql.NVarChar(50), newUser.User)
      .input("Name", sql.NVarChar(50), newUser.Name)
      .input("Password", sql.NVarChar(4000), newUser.Password)
      .input("Rol", sql.Int, newUser.Rol)
      .input("Usuario", sql.NVarChar(50), newUser.Usuario)
      .execute("uspInsertUsuario");
      console.dir({ user: result.recordset });
      const userResult = result.recordset;
      delete userResult[0].PASSWORD;

      return { user: userResult };
  } catch (err) {
    console.error(err);
  }
};

// const update = async pacienteActualizado => {
//   return "";
// };

// const remove = async (pacienteId) => {
//   return "";
// };

export default {
  getAllUsers,
  getUserById,
  getUserByUsername,
  create,
  // update,
  // remove
};
