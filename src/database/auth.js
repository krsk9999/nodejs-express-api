import { columns } from "mssql";
import { connection, sql } from "./connection";

const login = async (userData) => {
  try {
    let pool = await connection();

    // Stored procedure
    let result = await pool
      .request()
      .input("usuario", sql.NVarChar(50), userData.Id)
      .input("password", sql.NVarChar(4000), userData.Password)
      .execute("usp_autenticarUsuario");
    console.dir({ user: result.recordset });
    const userResult = result.recordset;
    return { user: userResult[0] };
  } catch (err) {
    console.error(err);
  }
};


export default {
  login,
};
