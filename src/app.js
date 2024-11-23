const express = require("express");
const path = require("path");
const errorHandler = require("./middlewares/errorHandler");
const availabilityRoutes = require("./routes/availabilityRoutes");
const carRoutes = require("./routes/carRoutes");
const locationRoutes = require("./routes/locationRoutes");
const personRoutes = require("./routes/personRoutes");
const reservationRoutes = require("./routes/reservationRoutes");

const app = express();

app.use(express.json());

const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));

app.use("/api/availability", availabilityRoutes);
app.use("/api/car", carRoutes);
app.use("/api/location", locationRoutes);
app.use("/api/person", personRoutes);
app.use("/api/reservation", reservationRoutes);

app.use(errorHandler);

module.exports = app;
