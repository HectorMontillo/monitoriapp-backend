const bcrypt = require("bcrypt");
const saltRounds = 12;
async function getUsers() {
  let users = [
    {
      email: "hector.montillo@utp.edu.co",
      password: await bcrypt.hash("123", saltRounds),
      PersonaId: "a9256960-d21c-11ea-ba3d-4dc15ef15a2b",
      RoleId: 1,
    },
    {
      email: "julian.cardona@utp.edu.co",
      password: await bcrypt.hash("123", saltRounds),
      PersonaId: "a9256960-d21c-11ea-ba3d-4dc15ef15a2c",
      RoleId: 1,
    },
  ];

  return users;
}

module.exports = getUsers();
