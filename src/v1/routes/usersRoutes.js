const express = require("express");
const router = express.Router();

const userController = require("../../controllers/userController");

router
    .get('/', userController.getAll)

    .get("/:userId", userController.get)

    .post("/", userController.create)

    .patch("/", userController.update)

    .delete("/:userId", userController.remove);

module.exports = router;

