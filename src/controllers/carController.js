const { Car, Location, Availability } = require("../models"); // Importar modelos desde index.js

// Crear un nuevo auto (Create)
exports.createCar = async (req, res) => {
  try {
    const { brand, model, year, pricePerDay, locationId } = req.body;

    // Validar existencia de ubicación
    const location = await Location.findByPk(locationId);
    if (!location) {
      return res.status(404).json({ error: "Ubicación no encontrada" });
    }

    // Crear el auto
    const car = await Car.create({
      brand,
      model,
      year,
      pricePerDay,
      locationId,
    });

    res.status(201).json(car);
  } catch (error) {
    console.error("Error al crear el auto:", error.message);
    res.status(500).json({ error: "Error al crear el auto" });
  }
};

// Obtener todos los autos (Read)
exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.findAll({
      include: [{ model: Location, as: "Location", attributes: ["name"] }],
    });
    res.status(200).json(cars);
  } catch (error) {
    console.error("Error al obtener los autos:", error.message);
    res.status(500).json({ error: "Error al obtener los autos" });
  }
};

// Obtener un auto por ID (Read)
exports.getCarById = async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id, {
      include: [{ model: Location, as: "Location", attributes: ["name"] }],
    });
    if (!car) {
      return res.status(404).json({ error: "Auto no encontrado" });
    }
    res.status(200).json(car);
  } catch (error) {
    console.error("Error al obtener el auto:", error.message);
    res.status(500).json({ error: "Error al obtener el auto" });
  }
};

// Actualizar un auto por ID (Update)
exports.updateCar = async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);
    if (!car) {
      return res.status(404).json({ error: "Auto no encontrado" });
    }

    // Actualizar el auto con los datos proporcionados
    await car.update(req.body);
    res.status(200).json(car);
  } catch (error) {
    console.error("Error al actualizar el auto:", error.message);
    res.status(500).json({ error: "Error al actualizar el auto" });
  }
};

// Eliminar un auto por ID (Delete)
exports.deleteCar = async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);
    if (!car) {
      return res.status(404).json({ error: "Auto no encontrado" });
    }

    await car.destroy();

    res.status(200).json({ message: "Auto eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar el auto:", error.message);
    res.status(500).json({ error: "Error al eliminar el auto" });
  }
};

//Buscar por criterios
exports.searchCars = async (req, res) => {
  try {
    const { locationId } = req.params;

    if (!locationId) {
      return res.status(400).json({ error: "Falta el parámetro locationId" });
    }

    const cars = await Car.findAll({ where: { locationId } });

    if (cars.length === 0) {
      return res.status(404).json({ error: "No se encontraron coches para esta ubicación" });
    }

    res.status(200).json(cars);
  } catch (error) {
    console.error("Error en searchCars:", error.message);
    res.status(500).json({ error: "Error al buscar coches" });
  }
};
