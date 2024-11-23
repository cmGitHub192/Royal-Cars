const { Availability, Car } = require("../models"); // Importar modelos desde index.js
const { Op } = require("sequelize"); // Importar Op

// Crear disponibilidad (Create)
exports.createAvailability = async (req, res) => {
  try {
    const { availableDate, isAvailable, carId } = req.body;

    // Validar existencia de auto
    const car = await Car.findByPk(carId);
    if (!car) {
      return res.status(404).json({ error: "Auto no encontrado" });
    }

    // Crear la disponibilidad
    const availability = await Availability.create({
      availableDate,
      isAvailable,
      carId,
    });

    res.status(201).json(availability);
  } catch (error) {
    console.error("Error al crear la disponibilidad:", error.message);
    res.status(500).json({ error: "Error al crear la disponibilidad" });
  }
};

// Obtener todas las disponibilidades (Read)
exports.getAllAvailabilities = async (req, res) => {
  try {
    const availabilities = await Availability.findAll({
      include: [{ model: Car, as: "Car", attributes: ["brand", "model"] }],
    });
    res.status(200).json(availabilities);
  } catch (error) {
    console.error("Error al obtener las disponibilidades:", error.message);
    res.status(500).json({ error: "Error al obtener las disponibilidades" });
  }
};

// Obtener disponibilidad por ID (Read)
exports.getAvailabilityById = async (req, res) => {
  try {
    const availability = await Availability.findByPk(req.params.id, {
      include: [{ model: Car, as: "Car", attributes: ["brand", "model"] }],
    });
    if (!availability) {
      return res.status(404).json({ error: "Disponibilidad no encontrada" });
    }
    res.status(200).json(availability);
  } catch (error) {
    console.error("Error al obtener la disponibilidad:", error.message);
    res.status(500).json({ error: "Error al obtener la disponibilidad" });
  }
};


exports.updateAvailability = async (carId, startDate, endDate) => {
  try {
    await Availability.update(
      { isAvailable: false },
      {
        where: {
          carId,
          availableDate: { [Op.between]: [startDate, endDate] },
        },
      }
    );
  } catch (error) {
    console.error("Error al actualizar disponibilidad:", error.message);
    throw error;
  }
};

