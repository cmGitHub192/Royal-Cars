const { Person } = require("../models"); // Importar modelos desde index.js

// Crear un nuevo cliente (Create)
exports.createPerson = async (req, res) => {
  try {
    const { firstName, lastName, email, phone } = req.body;

    // Crear el cliente
    const person = await Person.create({
      firstName,
      lastName,
      email,
      phone,
    });

    res.status(201).json(person);
  } catch (error) {
    console.error("Error al crear el cliente:", error.message, error);
    res.status(500).json({ error: "Error al crear el cliente" });
  }
};


// Obtener todos los clientes (Read)
exports.getAllPersons = async (req, res) => {
  try {
    const persons = await Person.findAll();
    res.status(200).json(persons);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los clientes" });
  }
};

// Obtener un cliente por ID (Read)
exports.getPersonById = async (req, res) => {
  try {
    const person = await Person.findByPk(req.params.id);
    if (!person) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }
    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el cliente" });
  }
};

// Actualizar un cliente por ID (Update)
exports.updatePerson = async (req, res) => {
  try {
    const person = await Person.findByPk(req.params.id);
    if (!person) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }
    await person.update(req.body);
    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el cliente" });
  }
};

// Eliminar un cliente por ID (Delete)
exports.deletePerson = async (req, res) => {
  try {
    const person = await Person.findByPk(req.params.id);
    if (!person) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }
    await person.destroy();
    res.status(200).json({ message: "Cliente eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el cliente" });
  }
};
