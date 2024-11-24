const newLocation = {
    name: "Sucursal Centro",
    address: "Avenida Central 123",
    city: "Ciudad de Prueba",
    country: "País de Ejemplo",
  };
  
  // Llamar a la función para crear una ubicación
  createLocation(newLocation)
    .then((response) => {
      console.log("Respuesta del servidor:", response);
    })
    .catch((error) => {
      console.error("Error al crear la ubicación:", error.message);
    });