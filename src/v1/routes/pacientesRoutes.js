const express = require("express");
const router = express.Router();

const pacienteController = require("../../controllers/pacienteController");

router
    .get('/', pacienteController.obtenerTodosPacientes)

    .get("/:pacienteId", pacienteController.obtenerPaciente)

    .post("/", pacienteController.crearPaciente)

    .patch("/:pacienteId", pacienteController.actualizarPaciente)

    .delete("/:pacienteId", pacienteController.eliminarPaciente);

module.exports = router;

