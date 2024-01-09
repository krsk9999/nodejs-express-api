import { hash, compare } from 'bcryptjs'

const encrypt = async (password) => {    
    const passwordHash = await hash(password, 8)
    return passwordHash
}

const verify = async (password, passwordHash) =>{
    const isCorrect = await compare(password, passwordHash);
    return isCorrect
}

export {
    encrypt,
    verify
}