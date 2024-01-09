import patientsService  from '../services/pacienteService'


const get = async (req, res) =>{
}

const getAll = async (req, res) =>{
    const pacientes = await patientsService.obtenerPacientes()
    res.status(200).send(pacientes)
}

const create = (req, res) =>{
    
}

const update = (req, res) =>{
    
}

const remove = (req, res) =>{
    
}

export { 
    get,
    getAll,
    create,
    update,
    remove
} 
