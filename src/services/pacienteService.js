import patients from '../database/patient';

const obtenerPacientes = async () => {
  return await patients.obtenerTodosPacientes();
};
const obtenerPaciente = async (pacienteId) => {
  return await patients.obtenerPaciente(pacienteId);
};
const crearPaciente = async (pacienteNuevo) => {
  return await patients.crearPaciente(pacienteNuevo);
};
const actualizarPaciente = async (pacienteActualizado) => {
  return await patients.actualizarPaciente(pacienteActualizado);
};
const eliminarPaciente = async (pacienteId) => {
  return await patients.eliminarPaciente(pacienteId);
};

export default {
  obtenerPacientes,
  obtenerPaciente,
  crearPaciente,
  actualizarPaciente,
  eliminarPaciente,
};
