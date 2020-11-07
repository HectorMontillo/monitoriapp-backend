const { notData, newError } = require("../../lib/newError");
const models = require("../../db/models");
const path = require("path");

async function cargarAnexos(req, res, next) {
  const { id: UserId } = req.user;

  if (!req.files) {
    return next(notData());
  }

  const permitedMimes = ["image/jpeg", "image/png"];

  if (!permitedMimes.includes(req.files.profile.mimetype)) {
    return next(
      newError("La foto de perfil debe estar en formato png o jpg", 400)
    );
  }

  try {
    let profilePicture = req.files.profile;
    const savedName = UserId + "." + profilePicture.name.split(".").pop();

    profilePicture.mv(
      path.join(process.env.PATH_UPLOADS, "profiles", savedName)
    );

    await models.Users.update(
      { profilePicture: savedName },
      {
        where: {
          id: UserId,
        },
      }
    );

    return res.status(200).json({
      status: 200,
      message: "Foto de perfil actualizada correctamente!",
      data: {
        name: profilePicture.name,
        mimetype: profilePicture.mimetype,
        size: profilePicture.size,
        savedName,
      },
    });
  } catch (err) {
    return next(err);
  }
}

module.exports = cargarAnexos;
