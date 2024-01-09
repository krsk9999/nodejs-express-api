import userService from '../services/userService'
import { encrypt } from '../utils/bcrypt.handle'

const getAll = async (req, res) => {
    const users = await userService.getAll()
    res.status(200).send(users)
}

const get = async (req, res) => {
    const user = await userService.getById(req.params.id)
    res.status(200).send(user)
}

const create = async (req, res) => {
    const { body } = req

    const userExists = await userService.getByUsername(body.Username)

    if (userExists) {
        return res.status(400).send({ message: 'User already exists' })
    } else {
        body.Password = await encrypt(body.Password)
    }
        const user = await userService.create(body)
        res.status(200).send(user)
    }

    // const update = (req, res) => {

    // }

    // const remove = (req, res) => {

    // }

    export {
        get,
        getAll,
        create,
        // update,
        // remove
    } 
