import { veryfyToken } from "../utils/token.handle"

const checkJwt = (req, res, next) => {
    try {
        const jwtByUser = `${req.headers?.authorization}`
        const jwt = jwtByUser.split(' ').pop
        const isOk = veryfyToken(`${jwt}`)
        if (isOk) {
            res.status(401).send("INVALID_SESSION_TOKEN")
        }else{
            next()
        }
    } catch (error) {
        res.status(400).send('SESSION_NOT_VALID')
    }
}

export {
    checkJwt
}