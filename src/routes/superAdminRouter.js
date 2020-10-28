const express = require("express");
const router = express.Router();
const debug = require("debug")("Monitoriapp-Backend:api");
const passport = require("passport");
/**
 * Controllers
 */
const superAdminController = require("./superAdmin");
/**
 * Index
 */
//passport.authenticate("jwt", { session: false })
router.get("/", function (req, res, next) {
  res.status(200).json({
    mensaje: "SuperAdmin on-line",
  });
});

/**
 * API SuperAdmin
 */

module.exports = router;
