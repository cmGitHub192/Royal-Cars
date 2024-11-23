const fs = require("fs");
const path = require("path");
const { sequelize } = require("../config/dbConfig");

const models = {};

// Cargar todos los modelos
fs.readdirSync(__dirname)
  .filter((file) => file !== "index.js")
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize);
    models[model.name] = model;
  });

  // Después de cargar todos los modelos
console.log("Modelos cargados:", Object.keys(models));


// Establecer relaciones
Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
module.exports = models;
