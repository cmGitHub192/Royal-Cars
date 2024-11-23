const express = require("express");
const availabilityController = require("../controllers/availabilityController");

const router = express.Router();

// Crear disponibilidad
router.post("/", availabilityController.createAvailability);

// Obtener todas las disponibilidades
router.get("/", availabilityController.getAllAvailabilities);

// Obtener disponibilidad por ID
router.get("/:id", availabilityController.getAvailabilityById);

module.exports = router;
