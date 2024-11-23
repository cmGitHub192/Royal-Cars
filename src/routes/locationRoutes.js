const express = require("express");
const locationController = require("../controllers/locationController");

const router = express.Router();

// CRUD Rutas
router.post("/", locationController.createLocation); // Crear
router.get("/", locationController.getAllLocations); // Leer todas
router.get("/:id", locationController.getLocationById); // Leer una por ID
router.put("/:id", locationController.updateLocation); // Actualizar por ID
router.delete("/:id", locationController.deleteLocation); // Eliminar por ID

module.exports = router;
