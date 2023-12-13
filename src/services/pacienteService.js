const paciente = require('../database/paciente');

const obtenerPacientes = async () => {
  return await paciente.obtenerTodosPacientes();

};
const obtenerPaciente = async (pacienteId) => {
  return await paciente.obtenerPaciente(pacienteId);
};
const crearPaciente = async (pacienteNuevo) => {
  return await paciente.crearPaciente(pacienteNuevo);
};
const actualizarPaciente = async (pacienteActualizado) => {
  return await paciente.actualizarPaciente(pacienteActualizado);
};
const eliminarPaciente = () => {
  return "";
};

module.exports = {
  obtenerPacientes,
  obtenerPaciente,
  crearPaciente,
  actualizarPaciente,
  eliminarPaciente,
};
