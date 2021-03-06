const express = require("express");
const router = express.Router();
const debug = require("debug")("Monitoriapp-Backend:api");
const passport = require("passport");
const rolePermissions = require("../utils/middlewares/rolePermissions");
/**
 * Controllers
 */
const authController = require("./auth");
const apiController = require("./api");
/**
 * Index
 */
router.get("/", function (req, res, next) {
  res.status(200).json({
    mensaje: "API en linea",
  });
});

/**
 * Auth
 */
router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  authController.login
);

/**
 * API
 */
router.post("/signup", apiController.signup);
router.get("/get_dependencias", apiController.getDependencias);
router.get("/get_programas_academicos", apiController.getProgramasAcademicos);

router.post(
  "/guardar_perfil",
  passport.authenticate("jwt", { session: false }),
  apiController.guardarPerfil
);

router.put(
  "/actualizar_perfil",
  passport.authenticate("jwt", { session: false }),
  apiController.actualizarPerfil
);

router.put(
  "/actualizar_contrasena",
  passport.authenticate("jwt", { session: false }),
  apiController.actualizarContrasena
);

router.post(
  "/actualizar_foto_perfil",
  passport.authenticate("jwt", { session: false }),
  apiController.actualizarFotoPerfil
);

router.get(
  "/get_user",
  passport.authenticate("jwt", { session: false }),
  apiController.getUser
);

module.exports = router;
