const express = require("express");
const router = express.Router();

// const pacienteController = require("../../controllers/pacienteController");

router
    .get('/', pacienteController.obtenerTodosPacientes)

    .get("/:usuarioId", pacienteController.obtenerPaciente)

    .post("/", pacienteController.crearPaciente)

    .patch("/:usuarioId", pacienteController.actualizarPaciente)

    .delete("/:usuarioId", pacienteController.eliminarPaciente);

module.exports = router;

