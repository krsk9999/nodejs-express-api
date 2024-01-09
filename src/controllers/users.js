import { getAllUsers } from '../services/userService'

const getAll = async (req, res) => {
    const users = await getAllUsers()
    res.status(200).send(users)
}

// const get = async (req, res) => {
//     const user = await getUser(req.params.id)
//     res.status(200).send(user)
// }

// const create = async (req, res) => {
//     const {body} = req
//     const user = await createUser(body)
//     res.status(200).send(user)
// }

// const update = (req, res) => {

// }

// const remove = (req, res) => {

// }

export {
    // get,
    getAll,
    // create,
    // update,
    // remove
} 
