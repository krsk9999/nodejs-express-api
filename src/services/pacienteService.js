const paciente = require('../database/paciente');

const obtenerPacientes = async () => {
  return await paciente.obtenerTodosPacientes();

};
const obtenerPaciente = async (pacienteId) => {
  return await paciente.obtenerPaciente(pacienteId);
};
const crearPaciente = async (pacienteId) => {
  return await paciente.crearPaciente(pacienteId);
};
const actualizarPaciente = () => {
  return "";
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
