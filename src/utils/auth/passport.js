const passport = require("passport");
const passportJWT = require("passport-jwt");
const ExtractJWT = passportJWT.ExtractJwt;
const debug = require("debug")("Monitoriapp-Backend:auth");
const models = require("../../db/models");
const bcryp = require("bcrypt");

const LocalStrategy = require("passport-local").Strategy;
const JWTStrategy = passportJWT.Strategy;

const { badCredentials, badToken } = require("../../lib/newError");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      //passReqToCallback: true,
    },
    async function (email, password, cb) {
      try {
        const user = await models.Users.findOne({
          attributes: [
            "id",
            "password",
            "DependenciaId",
            "RoleId",
            "PersonaId",
          ],
          where: {
            email,
          },
          include: {
            model: models.Dependencias,
            attributes: ["nombre"],
          },
        });
        if (!user) return cb(badCredentials(), false);
        const match = await bcryp.compare(password, user.password);
        if (!match) return cb(badCredentials(), false);
        return cb(null, user);
      } catch (err) {
        return cb(err, false);
      }
    }
  )
);
passport.use(
  new JWTStrategy(
    {
      secretOrKey: process.env.JWTSECRET,
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    },
    async function (jwtPayload, cb) {
      try {
        const user = await models.Users.findOne({
          where: { id: jwtPayload.userId },
          raw: true,
        });
        if (!user) {
          return cb(badToken());
        }
        return cb(null, user);
      } catch (err) {
        return cb(err);
      }
    }
  )
);
