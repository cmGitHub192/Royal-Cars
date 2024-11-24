
async function getAllLocationsF() {
    const res = await fetch("http://localhost:3000/api/"+"location")
    const resJson = await res.json();
    console.log(resJson)
    return resJson;
}

async function getLocationById(id) {
  try {
    const response = await fetch(`http://localhost:3000/api/location/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error al obtener la informacion de la ubicacion: ${response.status}`);
    }

    const locationData = await response.json();
    console.log("Ubicacion encontrada:", locationData);
    return locationData;
  } catch (error) {
    console.error("Error en la solicitud GET:", error.message);
    throw error;
  }
}

async function createLocation(newLocationData) {
  try {
    const response = await fetch("http://localhost:3000/api/location", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLocationData), // Convertir los datos a formato JSON
    });

    if (!response.ok) {
      throw new Error(`Error al crear la ubicación: ${response.status}`);
    }

    const responseData = await response.json();
    console.log("Ubicación creada:", responseData);
    return responseData; // Devuelve los datos de la ubicación creada
  } catch (error) {
    console.error("Error en la solicitud POST:", error.message);
    throw error; // Lanza el error para que pueda manejarse en otro lugar
  }
}

async function updateLocation(id, updatedData) {
    try {
      const res = await fetch(`http://localhost:3000/api/location/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData), // Convierte el objeto a JSON
      });
  
      if (!res.ok) {
        throw new Error(`Error al actualizar la ubicación: ${res.status}`);
      }
  
      const resJson = await res.json();
      console.log("Ubicación actualizada:", resJson);
      return resJson;
    } catch (error) {
      console.error("Error en la solicitud PUT:", error.message);
      throw error;
    }
  }

  async function deleteLocation(id) {
  try {
    const response = await fetch(`http://localhost:3000/api/location/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error al eliminar la ubicación: ${response.status}`);
    }

    console.log(`Ubicación con ID ${id} eliminada exitosamente`);
    return { message: `Ubicación con ID ${id} eliminada exitosamente` };
  } catch (error) {
    console.error("Error en la solicitud DELETE:", error.message);
    throw error;
  }
}