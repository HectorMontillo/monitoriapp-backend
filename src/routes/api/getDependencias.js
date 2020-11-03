const models = require("../../db/models");

async function getDependencias(req, res, next) {
  try {
    const dependencias = await models.Dependencias.findAll({
      attributes: ["nombre", "id"],
    });
    return res.status(200).json(dependencias);
  } catch (err) {
    return next(err);
  }
}

module.exports = getDependencias;
