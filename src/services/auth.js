import { encrypt, verify } from "../utils/bcrypt.handle"
import { generateToken } from "../utils/token.handle"
import users from "../database/user"
import auth from "../database/auth"

const registerNewUser = async (user) => {
    const { USER, NAME, PASSWORD } = user
    const existingUser = await Usuario.findOne({ where: { USER: USER } })
    if (existingUser) return { user: user, message: "USER_ALREADY_EXISTS", error: true }
    const passwordHash = await encrypt(PASSWORD)
    const registeredNewUser = await Usuario.create({ USER, NAME, PASSWORD: passwordHash })
    return registeredNewUser
}

const loginUser = async (user) => {
    const { User, Password } = user
    const existingUser = await users.getUserByUsername(User)
    if (!existingUser) {        
        return { user: user, message: "USER_NOT_FOUND", error: true }
    }
    const passwordHash = existingUser.user.PASSWORD
    const isCorrect = await verify(Password, passwordHash)
    if (!isCorrect) {
        return { user: user, message: "INVALID_PASSWORD", error: true }
    }

    const token = generateToken(user)

    return { user: existingUser, token, message: "LOGIN_SUCCESSFULL" }
}

export {
    registerNewUser,
    loginUser
}