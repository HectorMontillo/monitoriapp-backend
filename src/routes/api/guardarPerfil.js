const models = require("../../db/models");
const { notData } = require("../../lib/newError");

async function guardarPerfil(req, res, next) {
  const { programaId, nombres } = req.body;

  if (!programaId || !nombres) {
    return next(notData(["programaId", "nombres"]));
  }

  try {
    const newPersona = await models.Personas.create({
      nombres,
      ProgramaId: programaId,
    });

    const [updated] = await models.Users.update(
      {
        PersonaId: newPersona.id,
      },
      {
        where: {
          id: req.user.id,
        },
      }
    );

    console.log(updated);

    return res
      .status(201)
      .json({ status: 201, mensaje: "Perfil actualizado correctamente" });
  } catch (err) {
    return next(err);
  }
}

module.exports = guardarPerfil;
