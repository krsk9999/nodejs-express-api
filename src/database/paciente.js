const sql = require("mssql");
const sqlConfig = {
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  server: process.env.DB_SERVER,
  options: {
    encrypt: false, // for azure
  },
};

class Paciente {

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

  obtenerTodosPacientes = async () => {
    try {
      let pool = await sql.connect(sqlConfig)

      // Stored procedure        
      let result = await pool.request()
        .execute('uspPacienteSelectAll')

      console.dir(result)
      return result;
    } catch (err) {
      console.error(err);
    }
  };

  // obtenerPaciente = async (pacienteId) => {
  //   try {
  //     // make sure that any items are correctly URL encoded in the connection string
  //     await sql.connect(sqlConfig);
  //     const result = await sql.query`select * from paciente where Identificacion = ${pacienteId}`;
  //     return { paciente: result.recordset };
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  obtenerPaciente = async (pacienteId) => {
    try {
      let pool = await sql.connect(sqlConfig)

      // Stored procedure        
      let result = await pool.request()
        .input('Identificacion', sql.NVarChar(15), pacienteId)
        .execute('uspPacienteSelect')
      console.dir(result)
      return result;
    } catch (err) {
      console.error(err);
    }
  };

  crearPaciente = async (paciente) => {
    try {
      let pool = await sql.connect(sqlConfig)

      // Stored procedure        
      let result = await pool.request()
        .input('Identificacion', sql.NVarChar(15), paciente.identificacion)
        .input('Nombre', sql.NVarChar(150), paciente.nombre)
        .input('FechaRegistro', sql.SmallDateTime, paciente.fechaRegistro)
        .input('Correo', sql.NVarChar(50), paciente.correo)
        .input('Usuario', sql.NVarChar(20), paciente.usuario)
        .execute('uspPacienteInsert')

      console.dir(result)
      return result;
    } catch (err) {
      console.error(err);
    }
  };

  actualizarPaciente = () => {
    return "";
  };

  eliminarPaciente = () => {
    return "";
  };
}

module.exports = new Paciente();