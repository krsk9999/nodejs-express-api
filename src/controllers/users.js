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

    const userExists = await userService.getByUsername(body.username)

    if (userExists.user.length > 0) {
        return res.status(400).send({ message: 'User already exists' })
    } else {
        body.password = await encrypt(body.password)
    }

    body.password = await encrypt(body.password)
    const user = await userService.create(body)
    res.status(200).send(user)
}

const update = async (req, res) => {
    const { body } = req
    body.id = req.params.id

    const userExists = await userService.getById(body.id)

    if (!userExists.user) {
        return res.status(400).send({ message: 'User does not exist' })
    }

    const user = await userService.update(body)
    res.status(200).send(user)
}

const remove = async (req, res) => {
    const { id } = req.params

    const userExists = await userService.getById(id)

    if (!userExists.user) {
        return res.status(400).send({ message: 'User does not exist' })
    }

    const user = await userService.remove(id)
    res.status(200).send(user)
}

export {
    get,
    getAll,
    create,
    update,
    remove
} 
