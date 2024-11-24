// NOTA: Para probar se puede usar el mismo formato para los servicios de cada tabla, 
// solo cambian los nombres de funciones y los datos en los Json (tomar en cuenta los nombres de las 
//columnas de las tablas) o variables a usar de ejemplo

const locationIdToDelete = 1; // Cambia este ID por uno válido en tu base de datos

// Llamar a la función para probar la eliminación
deleteLocation(locationIdToDelete)
  .then((response) => {
    console.log("Respuesta del servidor:", response);
  })
  .catch((error) => {
    console.error("Error al eliminar la ubicación:", error.message);
  });