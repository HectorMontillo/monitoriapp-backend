const jwt = require("jsonwebtoken");

function login(req, res, next) {
  req.login(req.user, { session: false }, async (err) => {
    if (err) {
      return next(err);
    }
    const token = jwt.sign({ userId: req.user.id }, process.env.JWTSECRET);

    if (!req.user.DependenciaId) {
      return res.status(200).json({ token, rol: req.user.RoleId });
    }

    return res.status(200).json({
      token,
      rol: req.user.RoleId,
      nombre: req.user.Dependencia.nombre,
    });
  });
}

module.exports = login;
