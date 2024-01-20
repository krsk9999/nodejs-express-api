import { connection, sql } from "./connection";

const getAllUsers = async () => {
  try {
    let pool = await connection();

    let result = await pool.request().execute("usp_getusers");
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
      .input("id", sql.Int, id)
      .execute("usp_getuserbyid");
    console.dir({ user: result.recordset });
    const userResult = result.recordset[0];
    delete userResult.password;
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
      .input("username", sql.NVarChar(20), user)
      .execute("usp_getuserbyusername");
    console.dir({ user: result.recordset });
    const userResult = result.recordset;
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
      .input("username", sql.NVarChar(50), newUser.username)
      .input("name", sql.NVarChar(4000), newUser.name)
      .input("password", sql.NVarChar(4000), newUser.password)
      .input("roleid", sql.Int, newUser.roleid)
      .execute("usp_insertuser");
    console.dir({ user: result });
    const userResult = result.recordset[0];
    delete userResult.password;

    return { user: userResult };
  } catch (err) {
    console.error(err);
  }
};

const update = async pacienteActualizado => {
  try {
    let pool = await connection();

    // Stored procedure
    let result = await pool
      .request()
      .input("id", sql.Int, pacienteActualizado.id)
      .input("username", sql.NVarChar(50), pacienteActualizado.username)
      .input("name", sql.NVarChar(4000), pacienteActualizado.name)
      .input("password", sql.NVarChar(4000), pacienteActualizado.password)
      .input("roleid", sql.Int, pacienteActualizado.roleid)
      .input("status", sql.Bit, pacienteActualizado.status)
      .execute("usp_updateuser");
    console.dir({ user: result });
    const userResult = result.recordset[0];
    delete userResult.password;

    return { user: userResult };
  } catch (err) {
    console.error(err);
  }
};

const remove = async (pacienteId) => {
  try {
    let pool = await connection();

    // Stored procedure
    let result = await pool
      .request()
      .input("id", sql.Int, pacienteId)
      .execute("usp_deleteuser");
    console.dir({ user: result });
    const userResult = result.recordset[0];

    return { user: userResult };
  } catch (err) {
    console.error(err);
  }
};

export default {
  getAllUsers,
  getUserById,
  getUserByUsername,
  create,
  update,
  remove
};
