import { connection, sql } from "./connection";

const getAllUsers = async () => {
  try {
    let pool = await connection();

    let result = await pool.request().execute("uspGetUsuarios");
    const usersResult = result.recordset
    console.dir({ users: usersResult });
    return { users: usersResult };
  } catch (err) {
    console.error(err);
  }
};

const getUserById = async (id) => {
  try {
    let pool = await connection();

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

const getUserByUsername = async (user) => {
  try {
    let pool = await connection();

    // Stored procedure
    let result = await pool
      .request()
      .input("user", sql.NVarChar(20), user)
      .execute("uspGetUsuarioByUser");
    console.dir({ user: result.recordset });
    const userResult = result.recordset[0];
    return { user: userResult };
  } catch (err) {
    console.error(err);
  }
};

const create = async newUser => {
  try {
    let pool = await connection();

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
