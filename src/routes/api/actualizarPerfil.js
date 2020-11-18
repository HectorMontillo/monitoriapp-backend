const models = require("../../db/models");
const { notData } = require("../../lib/newError");

async function actualizarPerfil(req, res, next) {
  const { programaId, nombres } = req.body;

  if (!programaId || !nombres) {
    return next(notData(["programaId", "nombres"]));
  }

  try {
    const [updated] = await models.Personas.update(
      {
        ProgramaId: programaId,
        nombres,
      },
      {
        where: {
          id: req.user.PersonaId,
        },
      }
    );

    return res.status(200).json({
      status: 200,
      mensaje: updated
        ? "Perfil actualizado correctamente"
        : "No se ha actualizado el perfil",
    });
  } catch (err) {
    return next(err);
  }
}

module.exports = actualizarPerfil;
