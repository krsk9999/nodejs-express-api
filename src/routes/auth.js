import { Router } from "express"
import { loginCtrl, registerCtrl } from "../controllers/auth"
const router = Router()

router
    .post('/register', registerCtrl)
    .post('/login', loginCtrl)

export { router }