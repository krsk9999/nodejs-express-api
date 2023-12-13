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

const actualizarPaciente = (req, res) => {
  const pacienteActualizado = pacienteService.actualizarPaciente(
    req.params.pacienteId
  );
  res.send(`Actualizando paciente ${req.params.pacienteId}`);


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
