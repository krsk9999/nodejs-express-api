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
    !body.identificacion ||
    !body.nombre ||
    !body.fechaRegistro ||
    !body.correo ||
    !body.usuario
  ) {
    return;
  }

  const newPaciente = {
    identificacion : body.identificacion,
    nombre: body.nombre,
    fechaRegistro: body.fechaRegistro,
    correo: body.correo,
    usuario: body.usuario
  }
  const pacienteCreado = await pacienteService.crearPaciente(newPaciente);
  res.status(201).send({ status: "OK", data: pacienteCreado });
};

const actualizarPaciente = async (req, res) => {

  const { body } = req;
  if (
    !body.identificacion ||
    !body.nombre ||
    !body.fechaRegistro ||
    !body.correo ||
    !body.usuario
  ) {
    return;
  }

  const updatedpaciente = {
    identificacion: body.identificacion,
    nombre: body.nombre,
    genero: body.genero,
    fechaNacimiento: body.fechaNacimiento,
    domicilio: body.domicilio,
    provincia: body.provincia,
    telefono: body.telefono,
    celular: body.celular,
    app: body.app,
    anpp: body.anpp,
    aqt: body.aqt,
    alergiaMedicamento: body.alergiaMedicamento,
    riesgoEmbarazo: body.riesgoEmbarazo,
    vacunas: body.vacunas,
    antecedentesPerinatales: body.antecedentesPerinatales,
    fechaRegistro: body.fechaRegistro,
    correo: body.correo,
    usuario: body.usuario
  }

  const pacienteActualizado = await pacienteService.actualizarPaciente(updatedpaciente);  
  res.status(201).send({ status: "OK", data: pacienteActualizado });
};

const eliminarPaciente = (req, res) => {
  pacienteService.eliminarPaciente(req.params.pacienteId);
  res.send(`Eliminando paciente ${req.params.pacienteId}`);
};

module.exports = {
  obtenerTodosPacientes,
  obtenerPaciente,
  crearPaciente,
  actualizarPaciente,
  eliminarPaciente,
};
