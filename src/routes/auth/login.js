const jwt = require("jsonwebtoken");

function login(req, res, next) {
  req.login(req.user, { session: false }, async (err) => {
    if (err) {
      return next(err);
    }
    const token = jwt.sign({ userId: req.user.id }, process.env.JWTSECRET);

    const response = {
      token,
      rol: req.user.RoleId,
    };

    if (req.user.DependenciaId) {
      response.nombre_dependencia = req.user.Dependencia.nombre;
    }

    if (!req.user.PersonaId) {
      response.profile = true;
    }

    return res.status(200).json(response);
  });
}

module.exports = login;
