const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const { connectDB, sequelize } = require("./config/dbConfig");

// Cargar variables de entorno
dotenv.config();

// Conectar a la base de datos
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Middleware para servir archivos estáticos desde la carpeta "public"
const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));

// Importar rutas
const locationRoutes = require("./routes/locationRoutes");
const carRoutes = require("./routes/carRoutes");
const personRoutes = require("./routes/personRoutes");
const availabilityRoutes = require("./routes/availabilityRoutes");
const reservationRoutes = require("./routes/reservationRoutes");

// Registrar rutas
app.use("/api/location", locationRoutes);
app.use("/api/car", carRoutes);
app.use("/api/person", personRoutes);
app.use("/api/availability", availabilityRoutes);
app.use("/api/reservation", reservationRoutes);

// Sincronizar modelos y iniciar el servidor
sequelize.sync({ alter: true })
  .then(() => {
    console.log("Modelos sincronizados con la base de datos");
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error al sincronizar modelos:", error);
  });

