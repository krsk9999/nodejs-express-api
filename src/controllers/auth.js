import { loginUser, registerNewUser } from '../services/auth'

const registerCtrl = async (req, res) => {
    const { body: user } = req
    const registeredUser = await registerNewUser(user)
    if (!registeredUser) res.status(500).send({ status: "FAIL", data: registeredUser })
    res.status(201).send({ status: "OK", data: registeredUser })
}

const loginCtrl = async (req, res) => {
    const { body: user } = req
    const loggedUser = await loginUser(user)
    if (loggedUser.error) {
        res.status(400).send({ status: "FAIL", data: loggedUser, })
    }
    else {
        res.status(200).send({ status: "OK", data: loggedUser})
    }
}

export default{
    registerCtrl,
    loginCtrl
}