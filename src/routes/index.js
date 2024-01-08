const {Router} = require("express")
const {readdirSync} = require("fs")

const PATH_ROUTER = `${__dirname}`

const router = Router()

const cleanFileName = (filename) =>{
    const file = filename.split('.').shift()
    return file;
}

readdirSync(PATH_ROUTER).filter((filename) =>{
    const cleanName = cleanFileName(filename)
    if (cleanName !== 'index' ) {
        require(`./${cleanName}`).then((moduleRouter)=>{
            console.log(`Se está cargando la ruta.....${cleanName}`)
            router.use(`/${cleanName}`, moduleRouter.router)
        })
        
    }
    
})

module.exports = router