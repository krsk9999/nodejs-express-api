import { sign, verify } from 'jsonwebtoken'

const JWT_SECRET = `${process.env.JWT}`

const generateToken = (user) => {
    const {USER} = user 
    const jwt = sign({USER}, JWT_SECRET, {expiresIn: '12h'})
    return jwt
}

const veryfyToken = (jwt) => {
    const isOk = verify(jwt, JWT_SECRET)
    return isOk
}

export {
    generateToken,
    veryfyToken
}