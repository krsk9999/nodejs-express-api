import paciente from '../database/patient';

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
const eliminarPaciente = async (pacienteId) => {
  return await paciente.eliminarPaciente(pacienteId);
};

export {
  obtenerPacientes,
  obtenerPaciente,
  crearPaciente,
  actualizarPaciente,
  eliminarPaciente,
};
