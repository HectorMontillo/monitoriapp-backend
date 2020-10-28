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

module.exports = router;
