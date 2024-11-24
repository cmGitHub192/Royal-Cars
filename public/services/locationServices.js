
async function getAllLocationsF() {
    const res = await fetch("http://localhost:3000/api/"+"location")
    const resJson = await res.json();
    console.log(resJson)
    return resJson;
}

async function getLocationByIdF(){
    const res = await fetch("http://localhost:3000/api/"+"location/:id")
    const resJson = await res.json();
    console.log(resJson)
    return resJson;
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