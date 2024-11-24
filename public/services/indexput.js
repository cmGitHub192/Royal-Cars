
const locationId = 1; // ID de la ubicación a actualizar
const updatedLocationData = {
  name: "Sucursal Centro Actualizada",
  address: "Avenida Central 456",
  city: "Nueva Ciudad",
  country: "Nuevo País",
};

// Llamar a la función para actualizar una ubicación
updateLocation(locationId, updatedLocationData)
  .then((response) => {
    console.log("Respuesta del servidor:", response);
  })
  .catch((error) => {
    console.error("Error al actualizar la ubicación:", error.message);
  });