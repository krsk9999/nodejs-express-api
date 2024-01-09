import { Router } from "express"
import authController from "../controllers/auth"
const router = Router()

router
    .post('/register', authController.registerCtrl)
    .post('/login', authController.loginCtrl)

export { router }