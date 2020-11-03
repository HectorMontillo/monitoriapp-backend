const models = require("../../db/models");

async function getProgramasAcademicos(req, res, next) {
  try {
    const programas = await models.Programas.findAll({
      attributes: ["nombre", "id"],
    });
    return res.status(200).json(programas);
  } catch (err) {
    return next(err);
  }
}

module.exports = getProgramasAcademicos;
