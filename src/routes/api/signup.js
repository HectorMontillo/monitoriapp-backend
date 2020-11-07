const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const models = require("../../db/models");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const {
  notData,
  badPassword,
  badFormat,
  newError,
} = require("../../lib/newError");

async function signup(req, res, next) {
  const { email, password } = req.body;

  //Validadtion
  if (!email || !password) {
    return next(notData(["email", "password"]));
  }
  if (!validator.isEmail(email)) {
    return next(badFormat("email"));
  }
  if (!validator.isLength(password, { min: 8 })) {
    return next(badPassword());
  }

  //Create person and user
  try {
    const checkUser = await models.Users.findOne({
      where: {
        email,
      },
    });

    if (checkUser) {
      return next(newError("El usuario ya se encuentra resgistrado!"));
    }

    const hash = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS));
    const avatar = gravatar.url(
      email,
      { s: "100", r: "g", d: "identicon" },
      true
    );

    const newUser = await models.Users.create({
      email,
      password: hash,
      gravatar: avatar,
      RoleId: 4,
    });
    const token = jwt.sign({ userId: newUser.id }, process.env.JWTSECRET);
    return res.status(201).json({ token, gravatar: newUser.gravatar });
  } catch (err) {
    return next(err);
  }
}

module.exports = signup;
