const pacienteService = require("../services/pacienteService");

const obtenerTodosPacientes = async (req, res) => {
  const pacientes = await pacienteService.obtenerPacientes();
  res.send({ status: 200, data: pacientes });
};

const obtenerPaciente = async (req, res) => {
  const paciente = await pacienteService.obtenerPaciente(req.params.pacienteId);
  res.send({ status: 200, data: paciente });
};

const crearPaciente = async (req, res) => {
  const { body } = req;
  if (
    !body.Identificacion ||
    !body.Nombre ||
    !body.FechaRegistro ||
    !body.Correo ||
    !body.UsuarioModificacion
  ) {
    return;
  }

  const newPaciente = {
    Identificacion : body.Identificacion,
    Nombre: body.Nombre,
    FechaRegistro: body.FechaRegistro,
    Correo: body.Correo,
    UsuarioModificacion: body.UsuarioModificacion
  }
  const pacienteCreado = await pacienteService.crearPaciente(newPaciente);

  if (!pacienteCreado.paciente) {
    res.status(400).send({
      status: "FAILED",
      data: { error: pacienteCreado.error },
    });
    return;
  }

  res.status(201).send({ status: "OK", data: pacienteCreado });
};

const actualizarPaciente = async (req, res) => {

  const { body } = req;
  if (
    !body.Identificacion ||
    !body.Nombre ||
    !body.FechaRegistro ||
    !body.Correo ||
    !body.UsuarioModificacion
  ) {
    return;
  }

  const updatedpaciente = {
    Identificacion: body.Identificacion,
    Nombre: body.Nombre,
    Genero: body.Genero,
    FechaNacimiento: body.FechaNacimiento,
    Domicilio: body.Domicilio,
    Provincia: body.Provincia,
    Telefono: body.Telefono,
    Celular: body.Celular,
    APP: body.APP,
    ANPP: body.ANPP,
    AQT: body.AQT,
    AlergiaMedicamento: body.AlergiaMedicamento,
    RiesgoEmbarazo: body.RiesgoEmbarazo,
    Vacunas: body.Vacunas,
    AntecedentesPerinatales: body.AntecedentesPerinatales,
    FechaRegistro: body.FechaRegistro,
    Correo: body.Correo,
    UsuarioModificacion: body.UsuarioModificacion
  }

  const pacienteActualizado = await pacienteService.actualizarPaciente(updatedpaciente);
  res.status(201).send({ status: "OK", data: pacienteActualizado });
};

const eliminarPaciente = (req, res) => {
  const pacienteEliminado = pacienteService.eliminarPaciente(req.params.pacienteId);
  res.status(201).send({ status: "OK", data: pacienteEliminado });
};

module.exports = {
  obtenerTodosPacientes,
  obtenerPaciente,
  crearPaciente,
  actualizarPaciente,
  eliminarPaciente,
};
