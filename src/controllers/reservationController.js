const { Reservation, Person, Car } = require("../models"); // Importar modelos desde index.js
const availabilityController = require("./availabilityController");

// Crear una nueva reserva (Create)
exports.createReservation = async (req, res) => {
  try {
    const { customerId, carId, startDate, endDate, totalPrice } = req.body;

    // Validar existencia de cliente y auto
    const customer = await Person.findByPk(customerId);
    if (!customer) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }

    const car = await Car.findByPk(carId);
    if (!car) {
      return res.status(404).json({ error: "Auto no encontrado" });
    }

    // Crear la reserva
    const reservation = await Reservation.create({
      customerId,
      carId,
      startDate,
      endDate,
      totalPrice,
    });

    // Actualizar disponibilidad del auto
    await availabilityController.updateAvailability(carId, startDate, endDate);

    res.status(201).json(reservation);
  } catch (error) {
    console.error("Error al crear la reserva:", error.message);
    res.status(500).json({ error: "Error al crear la reserva" });
  }
};

// Obtener todas las reservas (Read)
exports.getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.findAll({
      include: [
        { model: Person, as: "Person", attributes: ["firstName", "lastName", "email"] },
        { model: Car, as: "Car", attributes: ["brand", "model", "year", "pricePerDay"] },
      ],
    });
    res.status(200).json(reservations);
  } catch (error) {
    console.error("Error al obtener las reservas:", error.message);
    res.status(500).json({ error: "Error al obtener las reservas" });
  }
};

// Obtener una reserva por ID (Read)
exports.getReservationById = async (req, res) => {
  try {
    const reservation = await Reservation.findByPk(req.params.id, {
      include: [
        { model: Person, as: "Person", attributes: ["firstName", "lastName", "email"] },
        { model: Car, as: "Car", attributes: ["brand", "model", "year", "pricePerDay"] },
      ],
    });
    if (!reservation) {
      return res.status(404).json({ error: "Reserva no encontrada" });
    }
    res.status(200).json(reservation);
  } catch (error) {
    console.error("Error al obtener la reserva:", error.message);
    res.status(500).json({ error: "Error al obtener la reserva" });
  }
};

// Actualizar una reserva por ID (Update)
exports.updateReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findByPk(req.params.id);
    if (!reservation) {
      return res.status(404).json({ error: "Reserva no encontrada" });
    }

    // Actualizar la reserva con los datos proporcionados
    await reservation.update(req.body);
    res.status(200).json(reservation);
  } catch (error) {
    console.error("Error al actualizar la reserva:", error.message);
    res.status(500).json({ error: "Error al actualizar la reserva" });
  }
};

// Eliminar una reserva por ID (Delete)
exports.deleteReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findByPk(req.params.id);
    if (!reservation) {
      return res.status(404).json({ error: "Reserva no encontrada" });
    }

    // Nota: Revertir la disponibilidad del auto aquí si es necesario
    await reservation.destroy();

    res.status(200).json({ message: "Reserva eliminada correctamente" });
  } catch (error) {
    console.error("Error al eliminar la reserva:", error.message);
    res.status(500).json({ error: "Error al eliminar la reserva" });
  }
};
