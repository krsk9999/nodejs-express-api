import { Router } from "express"
import * as patientsController from '../controllers/patients'
import { checkJwt } from "../middleware/session"

const router = Router()

router
    // .get("/", checkJwt, usersController.getAll)
    .get("/", patientsController.getAll)
    .get("/:id", patientsController.get)
    .post("/", patientsController.create)
    .patch("/:id", patientsController.update)
    .delete("/:id", patientsController.remove)

export { router }