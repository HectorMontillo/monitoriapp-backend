const models = require("../../db/models");

async function getUser(req, res, next) {
  try {
    const data = await models.Users.findOne({
      attributes: ["id", "email", "profilePicture", "gravatar", "RoleId"],
      where: {
        id: req.user.id,
      },
      include: [
        {
          model: models.Personas,
          attributes: ["nombres"],
          include: {
            model: models.Programas,
            attributes: ["nombre", "id"],
          },
        },
        {
          model: models.Roles,
          attributes: ["nombre"],
        },
      ],
    });
    const response = {
      id: data.id,
      email: data.email,
      profilePicture: data.profilePicture,
      gravatar: data.gravatar,
      nombres: data.Persona.nombres,
      programa: data.Persona.Programa.nombre,
      programaId: data.Persona.Programa.id,
      rol: data.Role.nombre,
      rolId: data.RoleId,
    };
    return res.status(200).json(response);
  } catch (err) {
    return next(err);
  }
}

module.exports = getUser;
