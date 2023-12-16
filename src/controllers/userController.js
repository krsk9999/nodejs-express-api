const userService = require("../services/userService");

const getAll = async (req, res) => {
  const users = await userService.getAll();
  res.status(200).send({ status: "OK", data: users });
};

const get = async (req, res) => {
  const user = await userService.get(req.params.userId);
  res.send({ status: 200, data: user });
};

const create = async (req, res) => {
  const { body } = req;
  // if (
  //   !body.Identificacion ||
  //   !body.Nombre ||
  //   !body.FechaRegistro ||
  //   !body.Correo ||
  //   !body.UsuarioModificacion
  // ) {
  //   return;
  // }

  const newUser = {
    USER : body.USER,
    NAME: body.NAME,
    PASSWORD: body.PASSWORD,
    STATUS: body.STATUS,
    CREATEDDATE: body.CREATEDDATE,
    rol: body.rol,
    UsuarioModificacion: body.UsuarioModificacion,
    FechaModificacion: body.FechaModificacion
  }
  const createdUser = await userService.create(newUser);

  if (!createdUser.user) {
    res.status(400).send({
      status: "FAILED",
      data: { error: createdUser.error },
    });
    return;
  }

  res.status(201).send({ status: "OK", data: createdUser });
};

const update = async (req, res) => {

  const { body } = req;
  if (
    !body.Identificacion ||
    !body.Nombre ||
    !body.FechaRegistro ||
    !body.Correo ||
    !body.UsuarioModificacion
  ) {
    return;
  }

  const userUpdateInfo = {
    Identificacion: body.Identificacion,
    Nombre: body.Nombre,
    Genero: body.Genero,
    FechaNacimiento: body.FechaNacimiento,
    Domicilio: body.Domicilio,
    Provincia: body.Provincia,
    Telefono: body.Telefono,
    Celular: body.Celular,
    APP: body.APP,
    ANPP: body.ANPP,
    AQT: body.AQT,
    AlergiaMedicamento: body.AlergiaMedicamento,
    RiesgoEmbarazo: body.RiesgoEmbarazo,
    Vacunas: body.Vacunas,
    AntecedentesPerinatales: body.AntecedentesPerinatales,
    FechaRegistro: body.FechaRegistro,
    Correo: body.Correo,
    UsuarioModificacion: body.UsuarioModificacion
  }

  const updatedUser = await userService.update(userUpdateInfo);
  res.status(201).send({ status: "OK", data: updatedUser });
};

const remove = (req, res) => {
  const pacienteEliminado = pacienteService.eliminarPaciente(req.params.pacienteId);
  res.status(201).send({ status: "OK", data: pacienteEliminado });
};

module.exports = {
  getAll,
  get,
  create,
  update,
  remove,
};
