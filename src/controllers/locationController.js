const { Location, Car } = require("../models"); // Importar modelos desde index.js

// Crear una nueva ubicación (Create)
exports.createLocation = async (req, res) => {
  try {
    const { name, address, city, country } = req.body;

    // Crear la ubicación
    const location = await Location.create({
      name,
      address,
      city,
      country,
    });

    res.status(201).json(location);
  } catch (error) {
    console.error("Error al crear la ubicación:", error.message);
    res.status(500).json({ error: "Error al crear la ubicación" });
  }
};

// Obtener todas las ubicaciones (Read)
exports.getAllLocations = async (req, res) => {
  try {
    const locations = await Location.findAll({
      include: [{ model: Car, as: "Cars", attributes: ["brand", "model"] }],
    });
    res.status(200).json(locations);
  } catch (error) {
    console.error("Error al obtener las ubicaciones:", error.message);
    res.status(500).json({ error: "Error al obtener las ubicaciones" });
  }
};

// Obtener una ubicación por ID (Read)
exports.getLocationById = async (req, res) => {
  try {
    const location = await Location.findByPk(req.params.id, {
      include: [{ model: Car, as: "Cars", attributes: ["brand", "model"] }],
    });
    if (!location) {
      return res.status(404).json({ error: "Ubicación no encontrada" });
    }
    res.status(200).json(location);
  } catch (error) {
    console.error("Error al obtener la ubicación:", error.message);
    res.status(500).json({ error: "Error al obtener la ubicación" });
  }
};

// Actualizar una ubicación por ID (Update)
exports.updateLocation = async (req, res) => {
  try {
    const location = await Location.findByPk(req.params.id);
    if (!location) {
      return res.status(404).json({ error: "Ubicación no encontrada" });
    }

    // Actualizar la ubicación con los datos proporcionados
    await location.update(req.body);
    res.status(200).json(location);
  } catch (error) {
    console.error("Error al actualizar la ubicación:", error.message);
    res.status(500).json({ error: "Error al actualizar la ubicación" });
  }
};

// Eliminar una ubicación por ID (Delete)
exports.deleteLocation = async (req, res) => {
  try {
    const location = await Location.findByPk(req.params.id);
    if (!location) {
      return res.status(404).json({ error: "Ubicación no encontrada" });
    }

    await location.destroy();

    res.status(200).json({ message: "Ubicación eliminada correctamente" });
  } catch (error) {
    console.error("Error al eliminar la ubicación:", error.message);
    res.status(500).json({ error: "Error al eliminar la ubicación" });
  }
};


