// NOTA: Para probar se puede usar el mismo formato para los servicios de cada tabla, 
// solo cambian los nombres de funciones y los datos en los Json (tomar en cuenta los nombres de las 
//columnas de las tablas) o variables a usar de ejemplo

const newLocation = {
    name: "Sucursal Centro",
    address: "Avenida Central 678",
    city: "Cuenca",
    country: "Ecuador",
  };
  
  // Llamar a la función para crear una ubicación
  createLocation(newLocation)
    .then((response) => {
      console.log("Respuesta del servidor:", response);
    })
    .catch((error) => {
      console.error("Error al crear la ubicación:", error.message);
    });