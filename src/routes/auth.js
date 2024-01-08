const { Router } = require("express")
const { loginCtrl, registerCtrl } = require("../controllers/auth")
const router = Router()

router
    .post('/register', registerCtrl)
    .post('/login', loginCtrl)

module.exports = { router }