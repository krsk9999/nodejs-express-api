import { Router } from "express"
import * as usersController from '../controllers/users'
import { checkJwt } from "../middleware/session"

const router = Router()

router
    // .get("/", checkJwt, usersController.getAll)
    .get("/", usersController.getAll)
    .get("/:id", usersController.get)
    .post("/", usersController.create)
    // .patch("/:id", usersController.update)
    // .delete("/:id", usersController.remove)

export { router }