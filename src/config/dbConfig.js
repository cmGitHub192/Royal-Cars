const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,      // Nombre de la base de datos
  process.env.DB_USER,      // Usuario
  process.env.DB_PASSWORD,  // Contraseña
  {
    host: process.env.DB_HOST,  // Dirección del host
    dialect: "mysql",           // Dialecto MySQL
    logging: false,             // Desactivar logs de SQL
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a MySQL exitosa.");
  } catch (error) {
    console.error("Error al conectar a MySQL:", error.message);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
