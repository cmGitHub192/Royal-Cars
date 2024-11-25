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

// Configurar proxy inverso
app.set("trust proxy", true);

// Configurar CORS
const cors = require("cors");
const corsOptions = {
   origin: '*', // Permitir cualquier origen
   credentials: true, // access-control-allow-credentials
   optionSuccessStatus: 200, // Responder con este código para solicitudes OPTIONS exitosas
};
app.use(cors(corsOptions));

// Middleware para manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Algo salió mal.");
});

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

// Sincronizar modelos y arrancar el servidor
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
