const models = require("../models");
//const queryInterface = sequelize.getQueryInterface();
const roles = require("./rolesIniciales");
const users = require("./usuariosIniciales");
const personas = require("./personasIniciales");
const programas = require("./programasIniciales");
const dependencias = require("./dependenciasIniciales");

(async () => {
  try {
    console.log("Roles Iniciales...");
    await models.Roles.bulkCreate(roles, {
      updateOnDuplicate: ["nombre"],
    });

    console.log("Dependencias Iniciales...");
    await models.Dependencias.bulkCreate(dependencias, {
      updateOnDuplicate: ["nombre"],
    });

    console.log("Programas Iniciales...");
    await models.Programas.bulkCreate(programas, {
      updateOnDuplicate: ["nombre"],
    });

    console.log("Personas Iniciales...");
    await models.Personas.bulkCreate(personas, {
      updateOnDuplicate: ["nombres"],
    });

    console.log("Usuarios Iniciales...");
    console.log("\t* Hashing passwords...");
    const usersGet = await users;
    await models.Users.bulkCreate(usersGet, {
      ignoreDuplicates: true,
    });
    console.log("-----------------------\nSeed exitoso");
  } catch (err) {
    console.log(err.message);
    console.log("-----------------------\nError en el seed");
  }
})();
