const bcrypt = require("bcrypt");
const models = require("../../db/models");
const { notData, accessDenied } = require("../../lib/newError");
const saltRounds = parseInt(process.env.SALT_ROUNDS);

async function actualizarContrasena(req, res, next) {
  const { password, currentPassword } = req.body;

  if (!password || !currentPassword) {
    return next(notData(["password", "currentPassword"]));
  }

  try {
    const match = await bcrypt.compare(currentPassword, req.user.password);
    if (!match) {
      return next(accessDenied());
    }
    const hash = await bcrypt.hash(password, saltRounds);
    const [updated] = await models.Users.update(
      {
        password: hash,
      },
      {
        where: { id: req.user.id },
      }
    );

    return res.status(200).json({
      status: 200,
      mensaje: updated
        ? "Contraseña actualizada correctamente"
        : "No se ha actualizado la Contraseña",
    });
  } catch (err) {
    return next(err);
  }
}

module.exports = actualizarContrasena;
