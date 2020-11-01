const bcrypt = require("bcrypt");
const models = require("../../db/models");
const validator = require("validator");
const { notData, badPassword, badFormat } = require("../../lib/newError");

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
    const hash = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS));
    const newUser = await models.Users.create({
      email,
      password: hash,
      RoleId: 4,
    });

    return res.status(201).json({ newUser });
  } catch (err) {
    return next(err);
  }
}

module.exports = signup;
