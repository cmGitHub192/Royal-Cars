
// NOTA: Para probar se puede usar el mismo formato para los servicios de cada tabla, 
// solo cambian los nombres de funciones y los datos en los Json (tomar en cuenta los nombres de las 
//columnas de las tablas) o variables a usar de ejemplo

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