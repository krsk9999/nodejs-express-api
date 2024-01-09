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

const obtenerTodosPacientes = async () => {
  try {
    let pool = await sql.connect(sqlConfig);

    sql.valueHandler.set(sql.TYPES.Bit, (value) => value == 0 ? 'No' : 'Si')

    // Stored procedure
    let result = await pool.request().execute("uspPacienteSelectAll");

    console.dir({ pacientes: result.recordset });
    return { pacientes: result.recordset };
  } catch (err) {
    console.error(err);
  }
};

// const obtenerTodosPacientes = async () => {
//   try {
//     const pacientes = await Paciente.findAll();
//     // console.dir({ pacientes: pacientes });
//     return { pacientes: pacientes };
//   } catch (err) {
//     console.error(err);
//   }
// };

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

// const obtenerPaciente = async pacienteId => {
//   try {
//     let pool = await sql.connect(sqlConfig);

//     // Stored procedure
//     let result = await pool
//       .request()
//       .input("Identificacion", sql.NVarChar(15), pacienteId)
//       .execute("uspPacienteSelect");
//     console.dir({ paciente: result.recordset });
//     return { paciente: result.recordset };
//   } catch (err) {
//     console.error(err);
//   }
// };

const obtenerPaciente = async pacienteId => {
  try {
    const paciente = await Paciente.findByPk(pacienteId);
    // console.dir({ pacientes: pacientes });
    return { paciente: paciente };
  } catch (err) {
    console.error(err);
  }
};

// const crearPaciente = async paciente => {
//   try {
//     let pool = await sql.connect(sqlConfig);

//     // Stored procedure
//     let result = await pool
//       .request()
//       .input("Identificacion", sql.NVarChar(15), paciente.identificacion)
//       .input("Nombre", sql.NVarChar(150), paciente.nombre)
//       .input("FechaRegistro", sql.SmallDateTime, paciente.fechaRegistro)
//       .input("Correo", sql.NVarChar(50), paciente.correo)
//       .input("Usuario", sql.NVarChar(20), paciente.usuario)
//       .execute("uspPacienteInsert");

//       console.dir({ paciente: result.recordset.length > 0 ? "created" : "failed" });
//       return { paciente: result.recordset.length > 0 ? "created" : "failed" };
//   } catch (err) {
//     console.error(err);
//   }
// };

const crearPaciente = async pacienteNuevo => {
  try {
    const paciente = await Paciente.create(pacienteNuevo);
    // console.dir({ pacientes: pacientes });
    return { paciente: paciente };
  } catch (err) {
    console.error(err.errors);
    return { paciente: null, error: err.errors };
  }
};

// const actualizarPaciente = async paciente => {
//   try {
//     let pool = await sql.connect(sqlConfig);

//     // Stored procedure
//     let result = await pool
//       .request()
//       .input("Identificacion", sql.NVarChar(15), paciente.identificacion)
//       .input("Nombre", sql.NVarChar(150), paciente.nombre)
//       .input("Genero", sql.NVarChar(10), paciente.genero)
//       .input("FechaNacimiento", sql.SmallDateTime(), paciente.fechaNacimiento)
//       .input("Domicilio", sql.NVarChar(1024), paciente.domicilio)
//       .input("Provincia", sql.NVarChar(15), paciente.provincia)
//       .input("Telefono", sql.Int(), paciente.telefono)
//       .input("Celular", sql.Int(), paciente.celular)
//       .input("APP", sql.NVarChar(2048), paciente.app)
//       .input("ANPP", sql.NVarChar(2048), paciente.anpp)
//       .input("AQT", sql.NVarChar(2048), paciente.aqt)
//       .input(
//         "AlergiaMedicamento",
//         sql.NVarChar(2048),
//         paciente.alergiaMedicamento
//       )
//       .input("RiesgoEmbarazo", sql.Bit, paciente.riesgoEmbarazo == "No" ? 0 : 1)
//       .input("Vacunas", sql.NVarChar(2048), paciente.vacunas)
//       .input(
//         "AntecedentesPerinatales",
//         sql.NVarChar(2048),
//         paciente.antecedentesPerinatales
//       )
//       .input("FechaRegistro", sql.SmallDateTime, paciente.fechaRegistro)
//       .input("Correo", sql.NVarChar(50), paciente.correo)
//       .input("Usuario", sql.NVarChar(20), paciente.usuario)
//       .execute("uspPacienteUpdate");

//       console.dir({ paciente: result.recordset.length > 0 ? "updated" : "failed" });
//       return { paciente: result.recordset.length > 0 ? "updated" : "failed" };
//   } catch (err) {
//     console.error(err);
//   }
// };

const actualizarPaciente = async pacienteActualizado => {
  try {
    const paciente = await Paciente.update(pacienteActualizado, {
      where: {
        Identificacion: pacienteActualizado.Identificacion
      }
    });
    // console.dir({ pacientes: pacientes });
    return { paciente: paciente };
  } catch (err) {
    console.error(err.errors);
    return { paciente: null, error: err.errors };
  }
};

const eliminarPaciente = async (pacienteId) => {
  try {
    const pacienteEliminado = await Paciente.destroy({
      where: {
        Identificacion: pacienteId
      }
    });
    // console.dir({ pacientes: pacientes });
    return { paciente: pacienteEliminado };
  } catch (err) {
    console.error(err.errors);
    return { paciente: null, error: err.errors };
  }
};

export default {
  obtenerTodosPacientes,
  obtenerPaciente,
  crearPaciente,
  actualizarPaciente,
  eliminarPaciente
};
